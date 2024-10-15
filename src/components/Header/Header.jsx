import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
    return (
        <div className="container mx-auto md:px-6 lg:px-10 py-4 lg:py-8">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="text-xl md:text-2xl lg:text-[32px] font-bold whitespace-nowrap">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <div className="hidden lg:flex  items-center gap-2 bg-[#150B2B0D] py-3 px-6 text-[#150B2BB2] rounded-full">
                        <span className="text-xl text-[#150B2BB2]">
                            <IoSearchOutline></IoSearchOutline>
                        </span>
                        <input className="bg-transparent outline-none" type="text" placeholder="Search" />
                    </div>
                    <a className="btn btn-circle bg-[#0BE58A] hover:bg-[#0BE58A] border-0">
                        <FaRegUserCircle className="text-2xl"></FaRegUserCircle>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;