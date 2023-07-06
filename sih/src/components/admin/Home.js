import React, { useEffect, useState } from "react";
import { PaginatedItems } from "../util/PaginatedItems";
import { Navbar } from "../util/Navbar";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles.module.css";

export const Home = ({ params }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const url = "http://localhost:5000/api/products/";
  // width: 140px;
  // height: 42px;
  // color:white;
  // border:none;
  // display:flex;
  // margin-left:auto;
  // align-items:center;
  // justify-content:center;
  // margin-right:auto;
  // /* Yellow Gradient */
  // font-family: 'Roboto';
  // font-style: normal;
  // font-weight: 500;
  // font-size: 15px;
  // cursor:pointer;
  // background: linear-gradient(276.31deg, #EFB506 -25.96%, rgba(255, 193, 7, 0.15) 180.24%);
  // border-radius: 15px;
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Scholarships</h1>
      <div className={styles.createDiv} >
        <button style={{width:"140px",
  background: "linear-gradient(276.31deg, #EFB506 -25.96%, rgba(255, 193, 7, 0.15) 180.24%)",
  color:"white",
  fontWeight:"500"

        
      }}
          onClick={() => {
            
            navigate("/product/create");
          }}
        >
          Create
        </button>
      </div>
      {products && <PaginatedItems url={url} itemsPerPage={10} />}
    </div>
  );
};