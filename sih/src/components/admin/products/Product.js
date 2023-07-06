import React, { useEffect, useState } from "react";
import { formatDate } from "../../util/Tools1";
import styles from "../../../styles/PaginatedItems.module.css";
import { Navbar } from "../../util/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

export const Product = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  const url = "http://localhost:5000/api/products/find/" + params.productId;

  // GET product from id
  useEffect(() => {
    console.log("run");
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data._id) {
          setProduct(data);
          setLoading(false);
          console.log(product);
        } else {
          throw Error("No data found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // DELETE product
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete!!")) {
      const url = "http://localhost:5000/api/products/" + product._id;
      fetch(url, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, /",
          "Content-Type": "application/json",
          token: `Bearer ${user.token}`,
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => {
          // if no id is returned from backend throw error
          if (data.error) {
            throw Error(data.error);
          } else {
            navigate("/home");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <Navbar />
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>Title:</td>
            <td>{product.title}</td>
          </tr>
          <tr>
            <td>Deadline:</td>
            <td>{formatDate(product.deadline)}</td>
          </tr>
          <tr>
            <td>Award:</td>
            <td>{product.award}</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>{product.description}</td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>
              <a href={product.website}>{product.website}</a>
            </td>
          </tr>
          <tr>
            <td>Elegibility:</td>
            <td>{product.elegibility}</td>
          </tr>
          <tr>
            <td>Elegibility2:</td>
            <td>{product.elegibility2}</td>
          </tr>
          <tr>
            <td>Elegibility3:</td>
            <td>{product.elegibility3}</td>
          </tr>
          <tr>
            <td>Origin:</td>
            <td>{product.origin}</td>
          </tr>
          <tr>
            <td>State:</td>
            <td>{product.state}</td>
          </tr>
          <tr>
            <td>Profession:</td>
            <td>{product.profession}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{product.gender}</td>
          </tr>
          <tr>
            <td>Income:</td>
            <td>{product.income}</td>
          </tr>
          <tr>
            <td>Category:</td>
            <td>{product.category}</td>
          </tr>
        </tbody>
        
      </table>

      <div className={styles.btnGrp}>
        <button
          onClick={() => {
            navigate(`/product/update/${product._id}`);
          }}
        >
          Update
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};