import NavButton from "../NavButton/NavButton";
const Navbar = () => {
  const routes = [
    {
      title: "Home",
      icon: "",
      path: "/",
    },
    {
      title: "Books",
      icon: "",
      path: "books",
    },
    {
      title: "Authors",
      icon: "",
      path: "authors",
    },
    {
      title: "Cart",
      icon: "",
      path: "cart",
    },
  ];

  return (
    <div className="flex justify-between py-4 relative">
      <h1 className="text-3xl pl-2 border-l-2 border-cyan-500">
        Book Store 📖
      </h1>
      <ul className="hidden gap-3 md:flex">
        {routes.map((route) => {
          return <NavButton key={route.title} route={route} />;
        })}
      </ul>
      <div className="md:hidden text-3xl cursor-pointer">&#9776;</div>
    </div>
  );
};

export default Navbar;
