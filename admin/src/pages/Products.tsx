import { useCallback, useState, type ReactElement } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import type { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const image1 =
  "https://m.media-amazon.com/images/I/41nPYng2PBL._SR290,290_.jpg";

const image2 =
  "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell-plus/db16255/media-gallery/non-touch/laptop-dell-plus-db16255nt-ice-bl-fpr-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=979&qlt=100,1&resMode=sharp2&size=979,804&chrss=full";
  
const arr: DataType[] = [
  {
    photo: <img src={image2} alt="" />,
    name: "Puma Shoes",
    price: 2322,
    stock: 21,
    action: <Link to="/admin/product/shoes">Manage</Link>,
  },
  {
    photo: <img src={image1} alt="" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/laptop">Manage</Link>,
  },
  {
    photo: <img src={image2} alt="" />,
    name: "Puma Shoes",
    price: 2322,
    stock: 21,
    action: <Link to="/admin/product/shoes">Manage</Link>,
  },
  {
    photo: <img src={image1} alt="" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/laptop">Manage</Link>,
  },
  {
    photo: <img src={image2} alt="" />,
    name: "Puma Shoes",
    price: 2322,
    stock: 21,
    action: <Link to="/admin/product/shoes">Manage</Link>,
  },
  {
    photo: <img src={image1} alt="" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/laptop">Manage</Link>,
  },
  {
    photo: <img src={image2} alt="" />,
    name: "Puma Shoes",
    price: 2322,
    stock: 21,
    action: <Link to="/admin/product/shoes">Manage</Link>,
  },
  {
    photo: <img src={image1} alt="" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/laptop">Manage</Link>,
  },
  {
    photo: <img src={image2} alt="" />,
    name: "Puma Shoes",
    price: 2322,
    stock: 21,
    action: <Link to="/admin/product/shoes">Manage</Link>,
  },
  {
    photo: <img src={image1} alt="" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/laptop">Manage</Link>,
  },
  {
    photo: <img src={image2} alt="" />,
    name: "Puma Shoes",
    price: 2322,
    stock: 21,
    action: <Link to="/admin/product/shoes">Manage</Link>,
  },
  {
    photo: <img src={image1} alt="" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/laptop">Manage</Link>,
  },
  {
    photo: <img src={image2} alt="" />,
    name: "Puma Shoes",
    price: 2322,
    stock: 21,
    action: <Link to="/admin/product/shoes">Manage</Link>,
  },
  {
    photo: <img src={image1} alt="" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/laptop">Manage</Link>,
  },
];

const column: Column<DataType>[] = [
  { Header: "Photo", accessor: "photo" },
  { Header: "Name", accessor: "name" },
  { Header: "Price", accessor: "price" },
  { Header: "Stock", accessor: "stock" },
  { Header: "Action", accessor: "action" },
];

function Products() {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(column, data, "dashboard-product-box", "Products",true),
    []
  );

  return (
    <div className="admin-container">
      {/* sidebar */}
      <AdminSidebar />
      {/* main */}
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
}

export default Products;
