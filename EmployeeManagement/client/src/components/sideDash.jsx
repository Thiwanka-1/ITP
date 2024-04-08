import { HiUser, HiArrowSmRight, HiChartPie } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSilce";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState("");
 






  return (
    <div className=" hidden flex-col flex-shrink-0 p-3 bg-black  w-55 h-[600px]  lg:block">
      <ul className="flex flex-col space-y-1 mb-auto">
        {currentUser && currentUser && (
          <li className="nav-item">
            <Link to="/profile" className={`block py-2 px-4 rounded-lg hover:bg-yellow-300 hover:text-black bg-opacity-20 text-white `}>
              <HiChartPie className="inline-block w-5 h-5 mr-2" />
              Dashboard
            </Link>
          </li>
        )}
        <li className="nav-item">
          <Link to="/sign-up" className={`block py-2 px-4 rounded-lg text-white hover:bg-yellow-300 hover:text-black `}>
            <HiUser className="inline-block w-5 h-5 mr-2" />
             Register
          </Link>
        </li>
        <li className="">
          <Link to="/view" className={`block py-2 px-4 rounded-lg text-white hover:bg-yellow-300 hover:text-black `}>
            <HiUser className="inline-block w-5 h-5 mr-2" />
             All Employees
          </Link>
        </li>
        <li className="">
          <Link to="/absent" className={`block py-2 px-4 rounded-lg text-white hover:bg-yellow-300 hover:text-black `}>
          <FontAwesomeIcon icon={faCalendarAlt} className="inline-block w-5 h-5 mr-2" />
            Leave
          </Link>
        </li>
      </ul>
      <hr className="my-2 border-gray-300" />
      
    </div>
  );
}
