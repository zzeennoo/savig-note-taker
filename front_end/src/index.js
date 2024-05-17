import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/dashboard-react.scss";

import UserLayout from "layouts/User.js";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

// const express = require('express');
// const db = require('./config/db');
// // Connect to DB
// db.connect();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/user/*" element={<UserLayout />} />
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  </BrowserRouter>
);
