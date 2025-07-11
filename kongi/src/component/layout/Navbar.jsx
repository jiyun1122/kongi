import { Link } from "react-router-dom";

export const Navbar = () => {
  return(
    <nav className="fixed top-0 border-amber-300 bg-amber-200 left-0 right-0 h-20 text-amber-600 flex items-center justify-between px-10 z-50">
      <div className="items-center flex">
        <Link to="/" className="font-semibold text-2xl">
          콩이의 일상🐶
        </Link>
      </div>
      <div className="space-x-4 flex items-center">
        <Link to="/SignIn">Sign In</Link>
        <Link to="/videos">Videos</Link>
      </div>
    </nav>
  );
}