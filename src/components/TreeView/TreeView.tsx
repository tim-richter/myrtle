import React, { useState } from 'react';
import ReactAccessibleTreeView, {
  INode,
  ITreeViewOnLoadDataProps,
  INodeRendererProps,
} from 'react-accessible-treeview';
import { IconBaseProps } from 'react-icons';
import {
  FaSquare,
  FaCheckSquare,
  FaMinusSquare,
  FaSpinner,
} from 'react-icons/fa';

const CheckBoxIcon = ({
  variant,
  ...rest
}: { variant: 'all' | 'some' | 'none' } & IconBaseProps) => {
  if (variant === 'all') return <FaCheckSquare {...rest} />;
  if (variant === 'some') return <FaMinusSquare {...rest} />;

  return <FaSquare {...rest} />;
};

const NodeRender: React.FC<INodeRendererProps> = ({
  element,
  isBranch,
  isExpanded,
  isSelected,
  isHalfSelected,
  getNodeProps,
  level,
  handleSelect,
  handleExpand,
}) => {
  const isLoading = isExpanded && element.children.length === 0;
  const variant = () => {
    if (isHalfSelected) return 'some';
    if (isSelected) return 'all';
    return 'none';
  };

  return (
    <div
      {...getNodeProps({ onClick: handleExpand })}
      style={{ marginLeft: 40 * (level - 1) }}
      className="flex items-center"
    >
      {isBranch && isLoading ? (
        <>
          <span role="alert" aria-live="assertive" className="hidden">
            loading {element.name}
          </span>

          <FaSpinner aria-hidden className="animate-spin" />
        </>
      ) : (
        <CheckBoxIcon
          onClick={(e) => {
            handleSelect(e);
            e.stopPropagation();
          }}
          variant={variant()}
        />
      )}

      <span className="ml-2 cursor-pointer">{element.name}</span>
    </div>
  );
};

interface TreeViewProps {
  initialData: Array<INode>;
}

export const TreeView: React.FC<TreeViewProps> = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [nodesAlreadyLoaded, setNodesAlreadyLoaded] = useState<Array<INode>>(
    [],
  );

  const updateTreeData = (
    list: Array<INode>,
    id: number,
    children: Array<INode>,
  ) => {
    const updatedData = list.map((node) => {
      if (node.id === id)
        return {
          ...node,
          children: children.map((el) => {
            return el.id;
          }),
        };

      return node;
    });

    return updatedData.concat(children);
  };

  const onLoadData = ({ element }: ITreeViewOnLoadDataProps) => {
    return new Promise<void>((resolve) => {
      if (element.children.length > 0) {
        resolve();
        return;
      }

      setTimeout(() => {
        setData((value) =>
          updateTreeData(value, element.id, [
            {
              name: `Child Node ${value.length}`,
              children: [],
              id: value.length,
              parent: element.id,
              isBranch: true,
            },
            {
              name: 'Another child Node',
              children: [],
              id: value.length + 1,
              parent: element.id,
            },
          ]),
        );
        resolve();
      }, 1000);
    });
  };

  const wrappedOnLoadData = async (props: ITreeViewOnLoadDataProps) => {
    const nodeHasNoChildData = props.element.children.length === 0;
    const nodeHasAlreadyBeenLoaded = nodesAlreadyLoaded.find(
      (e) => e.id === props.element.id,
    );

    await onLoadData(props);

    if (nodeHasNoChildData && !nodeHasAlreadyBeenLoaded) {
      setNodesAlreadyLoaded([...nodesAlreadyLoaded, props.element]);
    }
  };

  return (
    <ReactAccessibleTreeView
      data={data}
      aria-label="Checkbox tree"
      onLoadData={wrappedOnLoadData}
      multiSelect
      togglableSelect
      propagateSelectUpwards
      onSelect={(e) => console.log(e)}
      nodeRenderer={(props) => <NodeRender {...props} />}
    />
  );
};
