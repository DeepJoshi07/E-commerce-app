import { RiDashboardFill, RiShoppingBag3Fill,RiCoupon3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { Link, useLocation, type Location } from "react-router-dom";
import type { IconType } from "react-icons";
import {FaChartBar,FaChartLine,FaChartPie} from "react-icons/fa";
import {FaStopwatch,FaGamepad} from "react-icons/fa";



function AdminSidebar() {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo.</h2>
        <DivOne location={location}/>
        <DivTwo location={location}/>
        <DivThree location={location}/>
    </aside>
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
