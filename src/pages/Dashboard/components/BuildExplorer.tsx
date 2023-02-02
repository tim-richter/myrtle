import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from '../../../components/Spinner/Spinner';
import { TreeView } from '../../../components/TreeView/TreeView';
import { useJenkinsRequest } from '../../../features/jenkins/api';
import useUser from '../../../stores/user';

export const BuildExplorer = () => {
  const { isLoading, data, isError } = useQuery(
    ['jenkins_base'],
    useJenkinsRequest(useUser()),
  );

  if (isLoading) return <Spinner />;

  if (isError || !data) return 'Error';

  return (
    <TreeView
      initialData={[
        {
          name: '',
          id: 0,
          children: [1, 2],
          parent: null,
        },
        ...data.jobs.map((job, index) => ({
          id: index + 1,
          name: job.name,
          parent: 0,
          children: [],
          isBranch: true,
        })),
      ]}
    />
  );
};
