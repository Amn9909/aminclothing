const Navbar = () => {
  return (
    <div className="max-h-xs sm:max-h-sm md:max-h-md lg:max-h-lg xl:max-h-xl flex items-center bg-gray-900 h-16 m-4 fixed bottom-0 left-0 right-0 rounded-xl">
      <ul className="w-full justify-evenly flex text-white">
        <li className="ml-4">
          <a href="#">Home</a>
        </li>
        <li className="ml-4">
          <a href="#">shop</a>
        </li>
        <li className="ml-4">
          <a href="#">Contact</a>
        </li>
        <li className="ml-4">
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
