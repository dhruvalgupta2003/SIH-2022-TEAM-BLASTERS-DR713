import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilterContainer from '../components/FilterContainer'
import {CreateProduct} from '../components/admin/products/CreateProducts';
import { Home } from "../components/admin/Home";
import Main from "../components/Main";
import Signup from '../components/Signup';
import Loginuser from '../components/Loginuser';
import MatricPage from "./MatricPage";
import { Product } from "../components/admin/products/Product";
import { UpdateProduct } from "../components/admin/products/UpdateProduct";
import { Users } from "../components/admin/Users";
import { Login } from "../components/auth/Login";
import { PrivateRoute } from "../components/auth/PrivateRoute";
import { AuthProvider } from "../contexts/AuthContext";
import ApplyPage from "../components/ApplyPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Help from "../components/Help";
import Chain from "../components/Chain";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import SingleScholorship from "./SingleScholorship";
import { Form } from "../Form";
import Chatzot from "../components/Chatzot";



const NewPage = () => (
  <Router basename="/">
    <AuthProvider>
      <Navbar />
      <Routes>
      <Route path="/" element={<ApplyPage />} />
      <Route path="/applypage" element={<MatricPage />} />
      <Route path="/form" element={<Form />} />
      <Route exact path="/product/:id" element={<SingleScholorship />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/chain" element={<Chain />} />
        {/* Routes for Login Authentication */}
        <Route path="/loginuser" element={<Loginuser/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/signup" element={<Signup/>} />



        
        {/* routes that require authentication commented */}
         {/* Product Paths is to be commented */}
        <Route path="/home" element={<PrivateRoute component={Home} />} />
        <Route
        
        exact path="/myproduct/:productId"
          element={<PrivateRoute component={Product} />}
        />
        <Route
          path="/product/update/:productId"
          element={<PrivateRoute component={UpdateProduct} />}
        />
        <Route
          path="/product/create"
          element={<PrivateRoute component={CreateProduct} />}
        />

        
        <Route path="/users" element={<PrivateRoute component={Users} />} />
      </Routes>
    </AuthProvider>
    <Footer />
  </Router>
);

export default NewPage;