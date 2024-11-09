import { useState } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { BsArrowLeftShort, BsChevronDown, BsSearch } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

export function SideBar() {
  const [open, setOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track which submenu is open

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages" },
    { title: "Media", spacing: true },
    {
      title: "Projects",
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics" },
    { title: "Profile", spacing: true },
    { title: "Setting" },
    { title: "Logout" },
  ];

  const toggleSubmenu = (index) => {

    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}
      >
        <BsArrowLeftShort
          onClick={() => setOpen(!open)}
          className={`bg-white text-dark-purple text-3xl rounded-full absolute top-9 -right-3 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
        />

        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl rounded curso-pointer block float-left mr-2 ${
              open && "rotate-[360deg]"
            } duration-300`}
          />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>
            Tailwind
          </h1>
        </div>

        <div
          className={`flex items-center rounded-md bg-light-white mt-6 py-2 ${!open ? "px-2.5" : "px-4"}`}
        >
          <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />

          <input
            type="text"
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <div key={index}>
              <li
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
                onClick={() => menu.submenu && toggleSubmenu(index)}
              >
                <span className="text-2xl block float-left">
                  <RiDashboardFill />
                </span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown
                    className={`transition-transform ${openSubmenu === index ? "rotate-180" : ""}`}
                  />
                )}
              </li>

              {/* Render submenu items conditionally based on openSubmenu state */}
              {menu.submenu && open && openSubmenu === index && (
                <ul>
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 pl-12 hover:bg-light-white rounded-md"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
}
