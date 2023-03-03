import Navbar from "./Navbar";
import MySlider from "./MySlider";
import Footer from '../components/Footer';
function Layout({ children }) {
    return (
      <div>
        <Navbar />
        <MySlider />
        <main>{children}</main>
        <Footer />
      </div>
    );
  }
  
  export default Layout;