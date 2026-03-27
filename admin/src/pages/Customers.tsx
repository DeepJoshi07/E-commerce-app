import { useCallback, useState, type ReactElement } from "react";
import AdminSidebar from "../components/AdminSidebar";
import type { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
}

const column: Column<DataType>[] = [
  { Header: "Avater", accessor: "avatar" },
  { Header: "Name", accessor: "name" },
  { Header: "Email", accessor: "email" },
  { Header: "Gender", accessor: "gender" },
  { Header: "Role", accessor: "role" },
  { Header: "Action", accessor: "action" },
];

const arr: DataType[] = [
  {
    avatar: <img style={{borderRadius:"50%"}} src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />,
    name: "deep",
    email: "joshideep@gmail.com",
    gender: "male",
    role: "user",
    action: <button><FaTrash/></button>,
  },
  {
    avatar: <img style={{borderRadius:"50%"}} src="https://img.freepik.com/free-photo/beautiful-girl-stands-park_8353-5084.jpg?semt=ais_hybrid&w=740&q=80" alt="" />,
    name: "deepika",
    email: "joshideepika@gmail.com",
    gender: "female",
    role: "user",
    action: <button><FaTrash/></button>,
  },
];

function Customers() {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(column, data, "dashboard-product-box", "Customer", true),
    []
  );
  return (
    <div className="admin-container">
      {/* sidebar */}
      <AdminSidebar />
      {/* main */}
      <main>{Table()}</main>
    </div>
  );
}

export default Customers;
