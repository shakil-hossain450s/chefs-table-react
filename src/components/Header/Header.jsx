import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-10 py-4 lg:py-8">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;