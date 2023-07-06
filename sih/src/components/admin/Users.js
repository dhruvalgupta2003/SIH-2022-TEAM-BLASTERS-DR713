import React, { useState } from "react";
import { Navbar } from "../util/Navbar";
import { UsersPaginatedItems } from "./users/UsersPaginatedItems";

export const Users = ({ params }) => {
  const [products, setProducts] = useState([]);

  const url = "http://localhost:5000/api/users/";

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlignzz: "center" }}>Users</h1>
      {products && <UsersPaginatedItems url={url} itemsPerPage={10} />}
    </div>
  );
};