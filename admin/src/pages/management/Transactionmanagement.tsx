import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import type { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const image2 =
  "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell-plus/db16255/media-gallery/non-touch/laptop-dell-plus-db16255nt-ice-bl-fpr-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=979&qlt=100,1&resMode=sharp2&size=979,804&chrss=full";

const orderItems: OrderItemType[] = [
  {
    name: "puma shoes",
    photo: image2,
    _id: "anyidavailable",
    quantity: 4,
    price: 2000,
  },
];

function Transactionmanagement() {
  const [order, setOrder] = useState<OrderType>({
    name: "deep joshi",
    address: "77 black street",
    city: "nework",
    state: "nevada",
    country: "India",
    pinCode: 23456788,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: "random",
  });
  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subtotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order;

  const updateHandler = () =>{
    setOrder(prev=>({
      ...prev,status:prev.status === "Processing"?"Shipped":"Delivered",
    }));
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <section style={{
          padding:"2rem"
        }}>
          <h2>Order Items</h2>
          {order.orderItems.map((i) => (
            <ProductCard
              name={i.name}
              photo={i.photo}
              price={i.price}
              quantity={i.quantity}
              _id={i._id}
            />
          ))}
        </section>
        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>Adress: {`${address},${city},${state},${country},${pinCode}`}</p>
          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>ShippingCharges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>
          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
}

function ProductCard({ name, photo, price, quantity, _id }: OrderItemType) {
  return (
    <div className="transaction-product-card">
      <img src={photo} alt={name} />
      <Link to={`/product/${_id}`}>{name}</Link>
      <span>
        ${price} X {quantity} = ${price * quantity}
      </span>
    </div>
  );
}

export default Transactionmanagement;
