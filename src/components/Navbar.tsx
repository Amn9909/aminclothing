const Navbar = () => {
  return (
    <div className=" flex justify-between bg-green-900 w-[94%] m-1  text-white h-16 fixed bottom-2 rounded-xl  ">
      <ul className="flex text-black p-4">
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
