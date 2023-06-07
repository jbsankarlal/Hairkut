import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/User-pages/home/Home";
import List from "./Pages/User-pages/list/List";
import Saloon from "./Pages/User-pages/saloon/Saloon";
import Slot from "./Pages/User-pages/slot/Slot";
import Payment from "./Pages/User-pages/payment/Payment";
import Dashboard from "./Pages/admin-Pages/dashboard/Dashboard";
import Users from "./Pages/admin-Pages/user-management/Users";
import Company from "./Pages/admin-Pages/company-management/Company";
import Services from "./Pages/admin-Pages/services-management/Services";
import Bookings from "./Pages/admin-Pages/bookings/Bookings";
import Reports from "./Pages/admin-Pages/reports/Reports";
import FundTransfer from "./Pages/admin-Pages/fund-transfer/Fund-Transfer";
import VendorHome from "./Pages/vendor-Pages/vendor-home/VendorHome";
import Regis from "./Pages/vendor-Pages/registration/Regis";
import BankInfo from "./Pages/vendor-Pages/bank-info/BankInfo";
import PaymentInfo from "./Pages/vendor-Pages/payment-info/PaymentInfo";
import Reporter from "./Pages/vendor-Pages/view-report/Reporter";
import AddService from "./Pages/vendor-Pages/add-service/AddService";
import Slots from "./Pages/vendor-Pages/slot-management/Slots";
import Register from "./Components/user/register/Register";
import Login from "./Pages/User-pages/login/SignUp";
import Homepage from "./Pages/vendor-Pages/homepage/homepage";
import SuccessPage from "./Pages/User-pages/success/success";
import ViewBookings from "./Pages/User-pages/view-bookings/ViewBookings";
import ViewVendorBookings from "./Pages/vendor-Pages/view-bookings/ViewVendorBookings";
import VLogin from "./Pages/vendor-Pages/vendor-login/VLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saloons" element={<List />} />
        <Route path="/saloons/:id" element={<Saloon />} />
        <Route path="/saloons/slot" element={<Slot />} />
        <Route exact path="/saloons/payment" element={<Payment />} />
        <Route path="/admin/Dashboard" element={<Dashboard />} />
        <Route path="/admin/Users" element={<Users />} />
        <Route path="/admin/Companies" element={<Company />} />
        <Route path="/admin/Services" element={<Services />} />
        <Route path="/admin/Bookings" element={<Bookings />} />
        <Route path="/admin/Reports" element={<Reports />} />
        <Route exact path="/admin/Fund-Transfer" element={<FundTransfer />} />
        <Route path="/vendor/" element={<VendorHome />} />
        <Route path="/vendor/home" element={<Homepage />} />
        <Route
          path="/vendor/ViewVendorBookings"
          element={<ViewVendorBookings />}
        />
        <Route path="/vendor/registration" element={<Regis />} />
        <Route path="/vendor/login" element={<VLogin />} />
        <Route path="/vendor/bankinfo" element={<BankInfo />} />
        <Route path="/vendor/paymentinfo" element={<PaymentInfo />} />
        <Route path="/vendor/reporter" element={<Reporter />} />
        <Route path="/vendor/addservice" element={<AddService />} />
        <Route path="/vendor/slotmanagement" element={<Slots />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/view-bookings" element={<ViewBookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
