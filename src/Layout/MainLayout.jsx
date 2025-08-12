import React, { Fragment } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// const MainLayout = ({ children }) => {
//   return (
//     <>
//       <Navbar />
//       {children}  {/* Render the children components */}
//       <Footer />
//     </>
//   );
// };

// export default MainLayout;

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;