import AdminSidebar from "../../components/AdminSidebar";
import { LineChart } from "../../components/Charts";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function LineCharts() {
  return (
    <div className="admin-container">
      {/* sidebar */}
      <AdminSidebar />
      <main className="chart-container">
        <h1>Line Charts</h1>
        <section>
          <LineChart
            data={[
              200, 444, 444, 556, 778, 455, 990, 1444, 256, 447, 1000, 1200,
            ]}
            label="Users"
            borderColor="rgb(53,162,255)"
            bgColor="rgba(53,162,255,0.5)"
            labels={months}
          />
          <h2>ACTIVE USERS</h2>
        </section>
        <section>
          <LineChart
            data={[40, 60, 244, 100, 143, 120, 41, 47, 50, 56, 32]}
            label="Products"
            bgColor={"hsla(269,80%,40%,0.4)"}
            borderColor={"hsl(269,80%,40%)"}
            labels={months}
          />
          <h2>TOTAL PRODUCTS (SKU)</h2>
        </section>
        <section>
          <LineChart
            data={[
              24000, 14400.241, 34300, 90000, 20000, 25600, 44700, 99000,
              144400, 100000, 120000,
            ]}
            label="Revenue"
            bgColor={"hsla(129,80%,40%,0.4)"}
            borderColor={"hsl(129,80%,40%)"}
            labels={months}
          />
          <h2>TOTAL REVENUE</h2>
        </section>
        <section>
          <LineChart
            data={[
              9000,12000,12000,9000,1000,5000,4000,1200,1100,1500,2000,5000
            ]}
            label="Discount"
            bgColor="hsla(29,80%,40%,0.4)"
            borderColor="hsl(29,80%,40%)"
            labels={months}
          />
          <h2>DISCOUNT ALLOTTED</h2>
        </section>
      </main>
    </div>
  );
}

export default LineCharts;
