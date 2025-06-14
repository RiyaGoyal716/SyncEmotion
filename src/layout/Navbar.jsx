import { Bell, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex justify-between items-center fixed top-0 z-50">
      <div className="text-2xl font-bold text-indigo-600">
        LifeCheck<span className="text-pink-500">+</span>
      </div>

      <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/compatibility">Compatibility Test</Link></li>
        <li><Link to="/journal">Journal</Link></li>
        <li><Link to="/insights">Insights</Link></li>
        <li><Link to="/partner">My Partner</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/help">Help / FAQs</Link></li>
      </ul>

      <div className="flex items-center space-x-4">
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
        <UserCircle className="w-8 h-8 text-gray-600 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
