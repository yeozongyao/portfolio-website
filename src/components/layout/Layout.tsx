import React from 'react';
import Header from './Header';

type Props = { children: React.ReactNode };

const AppLayout = ({ children }: Props) => (
  <div className="w-screen flex flex-col bg-primary text-white">
    <Header />

    <main className="flex-1 px-6 py-10">{children}</main>

    <footer className="w-full py-4 px-6 text-center text-sm">
      {new Date().getFullYear()} Yeo Zong Yao{' '}
    </footer>
  </div>
);

export default AppLayout;
