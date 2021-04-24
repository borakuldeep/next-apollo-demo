import { ReactChild } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: {children : ReactChild}) => {
  return (
    <div className="content">
      <Navbar />
      <main className="main">
      { children }
      </main>
      
      <Footer />
    </div>
  );
}
 
export default Layout;