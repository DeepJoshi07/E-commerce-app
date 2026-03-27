import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(() => import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(() => import("./pages/management/Transactionmanagement"));
const BarCharts = lazy(() => import("./pages/cherts/BarCharts"));
const PieCharts = lazy(() => import("./pages/cherts/PieCharts"));
const LineCharts = lazy(() => import("./pages/cherts/LineCharts"));
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path="/admin/customers" element={<Customers />} />
          {/* charts */}
          <Route path="/admin/chart/bar" element={<BarCharts/>}></Route>
          <Route path="/admin/chart/pie" element={<PieCharts/>}></Route>
          <Route path="/admin/chart/line" element={<LineCharts/>}></Route>
          {/* Apps */}
          {/* management */}
          <Route path="/admin/product/new" element={<NewProduct/>}/>
          <Route path="/admin/product/:id" element={<ProductManagement/>}/>
          <Route path="/admin/transaction/:id" element={<TransactionManagement/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
