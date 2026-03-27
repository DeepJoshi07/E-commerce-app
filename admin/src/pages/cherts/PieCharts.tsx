import AdminSidebar from "../../components/AdminSidebar";
import { DoughnutChart, PieChart } from "../../components/Charts";
import { categories } from "../../assets/data.json";

function PieCharts() {
  return (
    <div className="admin-container">
      {/* sidebar */}
      <AdminSidebar />
      <main className="chart-container">
        <h1>Pie & Doughnut Charts</h1>
        <section>
          <div>
            <PieChart
              labels={["Processing", "Shipped", "Delivered"]}
              data={[12, 9, 13]}
              bgColor={[
                `hsl(110,80%,80%)`,
                `hsl(110,80%,50%)`,
                `hsl(110,40%,50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>ORDER FULFILLMENT RATIO</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={categories.map((ca) => ca.heading)}
              data={categories.map((ca) => ca.value)}
              bgColor={categories.map(
                (ca) => `hsl(${ca.value * 4},${ca.value}%,50%)`
              )}
              legends={false}
              offset={[0, 0, 0, 80]}
            />
          </div>
          <h2>PRODUCT CATEGORIES RATIO</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={["In Stock", "Out Of Stock"]}
              data={[40, 20]}
              bgColor={["hsl(269,80%,40%)", "rgb(53,162,255)"]}
              legends={false}
              offset={[0, 80]}
              cutout={"70%"}
            />
          </div>
          <h2>STOCK AVAILABILITY</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={[
                "Marketing cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[32, 18, 5, 20, 25]}
              bgColor={[
                "hsl(110,80%,40%)",
                "hsl(19,80%,40%)",
                "hsl(69,80%,40%)",
                "hsl(300,80%,40%)",
                "rgb(53,162,255)",
              ]}
              legends={false}
              offset={[20, 30, 20, 30, 80]}
            />
          </div>
          <h2>REVENUE DISTRIBUTION</h2>
        </section>
        <section>
          <div>
            <PieChart
              labels={["Teenager(Below 20)", "Adult(20-40)", "Older(above 40)"]}
              data={[30,250,70]}
              bgColor={[
                `hsl(10,80%,80%)`,
                `hsl(10,80%,50%)`,
                `hsl(10,40%,50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>USERS AGE GROUP</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={[
               "Admin",
               "Customers"
              ]}
              data={[40, 250]}
              bgColor={[
                "hsl(335,100%,38%)",
                "hsl(44,98%,50%)",
              ]}
              offset={[0,80]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default PieCharts;
