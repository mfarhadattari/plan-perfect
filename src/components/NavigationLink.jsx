import { NavLink } from "react-router-dom";

const NavigationLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "p-2 rounded-2xl bg-blue-600 text-white cursor-pointer"
          : "p-2 rounded-2xl group hover:bg-blue-600 text-deep-orange-700 cursor-pointer transition-all"
      }
    >
      {children}
    </NavLink>
  );
};

export default NavigationLink;
