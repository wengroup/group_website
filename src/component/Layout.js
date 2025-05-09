import React from "react";
import { Header } from "./Hero";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

const Layout = ({ children }) => {
  //   const [isOpen, setIsOpen] = useState(false)
  //   const toggleSidebar = () => {
  //     setIsOpen(!isOpen)
  //   }
  return (
    <div>
      <Nav />
      {/* <Header /> */}
      <div className="max-w-6xl mx-auto page">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
    // className={`${fixFoot && "absolute bottom-0 right-0 left-0"}`}
  );
};

export default Layout;
