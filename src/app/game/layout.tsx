'use client';
import Provider from '@/lib/provider';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider>
        <div className='bg-slate-300 flex items-center justify-center h-screen'>
          {children}
        </div>
      </Provider>
    </>
  );
};

export default Layout;
