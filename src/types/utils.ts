import { ReactNode } from 'react';

export type Children = ReactNode;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithChildren<P = unknown> = P & {
  children?: Children | undefined;
};
