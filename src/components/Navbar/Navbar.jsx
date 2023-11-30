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
    <div className="flex justify-between p-4">
      <h1 className="">Book Store 📖</h1>
      <ul className="sm:flex gap-4 hidden">
        {routes.map((route) => {
          return <NavButton key={route.title} route={route} />;
        })}
      </ul>
      <div className="sm:hidden text-xl">&#9776;</div>
      {/* <Drawer /> */}
    </div>
  );
};

export default Navbar;
