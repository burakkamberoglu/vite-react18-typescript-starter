import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className='bg-gray-50 w-full min-h-screen h-full'>
      <div className='container mx-auto px-4 min-h-screen h-full py-10'>{children}</div>
    </main>
  );
};
export default Layout;
