import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-autoflex">
            <div className="text-x1 font-bold">UTPedia</div>
            <ul className="hidden md:flex space-x-6">
                <li><a href="#"
                className="hover:text-gray-200">Inicio</a>
                </li>
                <li><a href="#"
                className="hover:text-gray-200">Servicio</a>
                </li>
                <li><a href="#"
                className="hover:text-gray-200">Contacto</a>
                </li>
            </ul>
            <div className="md:hidden">
                <button className="text-white focus:outline-none">≡</button>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
