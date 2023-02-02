import React from 'react';
import Navbar from './Navbar';
import { WithChildren } from '../types/utils';

const PageLayout = ({ children }: WithChildren) => {
  return (
    <div>
      <Navbar />
      <div className="w-full px-8">{children}</div>
    </div>
  );
};

export default PageLayout;
