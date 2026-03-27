import type { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar";
import { useCallback, useState, type ReactElement } from "react";
import { Link } from "react-router-dom";
import TableHOC from "../components/TableHOC";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const column: Column<DataType>[] = [
  { Header: "User", accessor: "user" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Discount", accessor: "discount" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Status", accessor: "status" },
  { Header: "Action", accessor: "action" },
];

const arr: DataType[] = [
  {
    user: "Deep",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/something">Manage</Link>,
  },
  {
    user: "Deepak",
    amount: 6999,
    discount: 400,
    quantity: 6,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/something">Manage</Link>,
  },
  {
    user: "Deepika",
    amount: 6999,
    discount: 400,
    quantity: 6,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/something">Manage</Link>,
  },
];

function Transaction() {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(
      column,
      data,
      "dashboard-product-box",
      "Transaction",
      true
    ),
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

export default Transaction;
