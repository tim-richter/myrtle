import React from 'react';
import ReactDOM from 'react-dom';
import { FiX } from 'react-icons/fi';
import { Children } from '@customTypes/utils';

export interface ModalProps {
  children: Children;
  visible: boolean;
  onCancel: () => void;
}

export const Modal = ({ children, onCancel, visible }: ModalProps) => {
  if (!visible) return null;

  return ReactDOM.createPortal(
    <div className="z-1000 absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/50">
      <div className="w-3/4 h-3/4 relative flex flex-col border rounded-md shadow-md bg-white">
        <div className="flex justify-end p-2">
          <FiX
            color="rgb(15, 23, 42)"
            onClick={onCancel}
            className="cursor-pointer"
            size="20"
          />
        </div>
        <div className="px-6 mt-4">{children}</div>
      </div>
    </div>,
    document.body,
  );
};
