// import styled from 'styled-components';

// export const Layout = styled.div`
//   margin: 100px auto;
//   width: 700px;
//   padding: 40px;
//   background-color: rgb(182, 212, 222);
//   border: 2px solid blue;
//   border-radius: 30px;
// `;
// export const HeadTitle = styled.h1`
//   font-size: 50px;
//   font-weight: 700;
//   text-align: center;
//   text-transform: uppercase;
// `;
// export const ContactsTitle = styled.h2`
//   margin-top: 60px;
//   margin-bottom: 30px;
//   font-size: 35px;
//   font-weight: 700;
//   text-align: center;
//   text-transform: uppercase;
// `;
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
