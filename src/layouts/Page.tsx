import React from 'react';
import { WithChildren } from '@customTypes/utils';
import Navbar from './Navbar';

const PageLayout = ({ children }: WithChildren) => {
  return (
    <div>
      <Navbar />
      <div className="w-full px-8">{children}</div>
    </div>
  );
};

export default PageLayout;
