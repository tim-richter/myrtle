import React from 'react';
import { WithChildren } from '../types/utils';

export const CenteredLayout: React.FC<WithChildren> = ({ children }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      {children}
    </div>
  );
};
