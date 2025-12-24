// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";
// import { useState, useRef, useEffect } from "react";
// import { Menu, X, Car, Briefcase, Info, Smartphone, Phone } from "lucide-react";

// const MiniNavbar = () => {
//   const [open, setOpen] = useState(false);
//   const sidebarRef = useRef(null);

//   // Close sidebar if click outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };

//     if (open) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [open]);

//   return (
//     <nav className="md:hidden fixed top-0 w-full z-50">
//       {/* TOP BAR */}
//       <div className="h-[70px] flex items-center justify-between py-4 px-4 bg-white border-b border-gray-100">
//         {/* LEFT MENU ICON */}
//         <button onClick={() => setOpen(!open)} className="p-2 hover:bg-gray-100 rounded-lg">
//           {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>

//         {/* CENTER LOGO */}
//         <Link to="/">
//           <img src="/Images/logo.webp" alt="Logo" className="h-[60px] object-contain" />
//         </Link>

//         {/* CONTACT BUTTON */}
//         <Link
//           to="/contact"
//           className="border border-gray-300 rounded-md bg-black text-white text-sm px-2 py-2 flex items-center gap-1"
//         >
//           <Phone className="w-4 h-4" />
//           Contact
//         </Link>
//       </div>

//       {/* SIDEBAR MENU BELOW NAVBAR */}
//       <div
//         ref={sidebarRef}
//         className={`fixed left-0 top-[70px] h-[calc(100%-70px)] bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
//         ${open ? "translate-x-0" : "-translate-x-full"} w-64`}
//       >
//         <div className="flex flex-col px-8 py-10 space-y-8">
//           {/* HASHLINKS FOR SMOOTH SCROLL */}
//           <HashLink
//             smooth
//             to="/#rides"
//             onClick={() => setOpen(false)}
//             className="flex items-center gap-2"
//           >
//             <Car className="w-5 h-5" />
//             Rides
//           </HashLink>

//           <HashLink
//             smooth
//             to="/#services"
//             onClick={() => setOpen(false)}
//             className="flex items-center gap-2"
//           >
//             <Briefcase className="w-5 h-5" />
//             Services
//           </HashLink>

//           <HashLink
//             smooth
//             to="/#about"
//             onClick={() => setOpen(false)}
//             className="flex items-center gap-2"
//           >
//             <Info className="w-5 h-5" />
//             About
//           </HashLink>

//           <HashLink
//             smooth
//             to="/#app"
//             onClick={() => setOpen(false)}
//             className="flex items-center gap-2"
//           >
//             <Smartphone className="w-5 h-5" />
//             App
//           </HashLink>
//         </div>

//         {/* BOOK NOW BUTTON */}
//         <div className="px-5">
//           <Link to="/book">
//             <button className="w-full border border-gray-300 rounded-md py-2 text-gray-900">
//               Book Now
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default MiniNavbar;


import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Car, Briefcase, Info, Smartphone, Phone } from "lucide-react";

const MiniNavbar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Menu items array
  const menuItems = [
    { to: "/#rides", icon: Car, label: "Rides" },
    { to: "/#services", icon: Briefcase, label: "Services" },
    { to: "/#about", icon: Info, label: "About" },
    { to: "/#app", icon: Smartphone, label: "App" },
  ];

  return (
    <nav className="md:hidden fixed top-0 w-full z-50">
      {/* TOP BAR */}
      <div className="h-[70px] flex items-center justify-between py-4 px-4 bg-white border-b border-gray-100">
        {/* LEFT MENU ICON */}
        <button onClick={() => setOpen(!open)} className="p-2 hover:bg-gray-100 rounded-lg">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* CENTER LOGO */}
        <Link to="/#main">
          <img src="/Images/logo.webp" alt="Logo" className="h-[60px] object-contain" />
        </Link>

        {/* CONTACT BUTTON */}
        <Link
          to="/contact"
          className="border border-gray-300 rounded-md bg-black text-white text-sm px-2 py-2 flex items-center gap-1"
        >
          <Phone className="w-4 h-4" />
          Contact
        </Link>
      </div>

      {/* SIDEBAR MENU BELOW NAVBAR */}
      <div
        ref={sidebarRef}
        className={`fixed left-0 top-[70px] h-[calc(100%-70px)] bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} w-64`}
      >
        <div className="flex flex-col px-8 py-10 space-y-8">
          {/* HASHLINKS FOR SMOOTH SCROLL */}
          {menuItems.map((item) => {
            const Icon = item.icon; // assign here
            return (
              <HashLink
                smooth
                to={item.to}
                onClick={() => setOpen(false)}
                key={item.label}
                className="flex items-center gap-2 text-gray-900 font-medium"
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </HashLink>
            );
          })}
        </div>

        {/* BOOK NOW BUTTON */}
        <div className="px-5">
          <Link to="/book">
            <button className="w-full border border-gray-300 rounded-md py-2 text-gray-900">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MiniNavbar;
