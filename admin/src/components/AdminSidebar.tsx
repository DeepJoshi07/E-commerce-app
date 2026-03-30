import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, useLocation, type Location } from "react-router-dom";

function AdminSidebar() {
  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100,
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  },[]);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Logo.</h2>
        <DivOne location={location} />
        <DivTwo location={location} />
        <DivThree location={location} />
        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
}

function DivOne({ location }: { location: Location }) {
  return (
    <div>
      <h5>Dashboard</h5>
      <ul>
        <Li
          text="Dashboard"
          url="/admin/dashboard"
          location={location}
          Icon={RiDashboardFill}
        />
        <Li
          text="Product"
          url="/admin/products"
          location={location}
          Icon={RiShoppingBag3Fill}
        />
        <Li
          text="Customer"
          url="/admin/customers"
          location={location}
          Icon={IoIosPeople}
        />
        <Li
          text="Transaction"
          url="/admin/transaction"
          location={location}
          Icon={AiFillFileText}
        />
      </ul>
    </div>
  );
}

function DivTwo({ location }: { location: Location }) {
  return (
    <div>
      <h5>Charts</h5>
      <ul>
        <Li
          text="Bar"
          url="/admin/chart/bar"
          location={location}
          Icon={FaChartBar}
        />
        <Li
          text="Pie"
          url="/admin/chart/pie"
          location={location}
          Icon={FaChartPie}
        />
        <Li
          text="Line"
          url="/admin/chart/line"
          location={location}
          Icon={FaChartLine}
        />
      </ul>
    </div>
  );
}

function DivThree({ location }: { location: Location }) {
  return (
    <div>
      <h5>Apps</h5>
      <ul>
        <Li
          text="Stopwatch"
          url="/admin/apps/stopwatch"
          location={location}
          Icon={FaStopwatch}
        />
        <Li
          text="Coupon"
          url="/admin/apps/coupon"
          location={location}
          Icon={RiCoupon3Fill}
        />
        <Li
          text="Toss"
          url="/admin/apps/toss"
          location={location}
          Icon={FaGamepad}
        />
      </ul>
    </div>
  );
}

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

function Li({ url, text, location, Icon }: LiProps) {
  return (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "rgba(0,115,255,0.1)"
          : "white",
      }}
    >
      <Link
        to={url}
        style={{
          color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
        }}
      >
        <Icon />
        {text}
      </Link>
    </li>
  );
}

export default AdminSidebar;
