const NavBar = () =>{
    return (
        <>
        <nav className="top-0 fixed bg-gray-100 border-gray-200 w-full">
            <div className="max-w-screen-xl flex items-center mx-3 p-4">
                    <h3 className="font-bold italic">Portfolio</h3>
                <div className="flex-grow flex justify-center">
                    <ul className="flex flex-warp m-3 p-4 space-x-5">
                        <li><a href="#about"className="p-5">About</a></li>
                        <li><a href="#experience" className="p-5">Experience</a></li>
                        <li><a href="#skills"className="p-5">Skills</a></li>
                        <li><a href="#projects"className="p-5">Projects</a></li>
                        <li><a href="#contact"className="p-5">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}
export default NavBar
