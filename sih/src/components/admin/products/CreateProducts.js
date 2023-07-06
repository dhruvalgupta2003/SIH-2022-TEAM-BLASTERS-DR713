import React, { useEffect, useState } from "react";
import { formatDate } from "../../util/Tools1";
import styles from "../../../styles/PaginatedItems.module.css";
import { Navbar } from "../../util/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

export const CreateProduct = ({ params }) => {
  const [product, setProduct] = useState({
    title: "",
    deadline: "",
    award: "",
    description: "",
    website: "",
    elegibility: "",
    elegibility2: "",
    elegibility3: "",
    origin: "",
    state: "",
    profession:"",
    gender:"",
    income:"",
    caste:""
  });
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(product);

    // TODO: change to base url
    // const url = process.env.BASE_URL + "/api/products"
    const url = "http://localhost:5000/api/products/";
    fetch(url, {
      method: "POST",
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
        if (data._id) {
          navigate("/home");
        } else {
          throw Error("No data returned");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>
                <label for="title">Title:</label>
              </td>
              <td>
                <input
                  name="title"
                  id="title"
                  type="text"
                  value={product.title}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="deadline">Deadline:</label>
              </td>
              <td>
                <input
                  name="deadline"
                  id="deadline"
                  type="date"
                  value={formatDate(product.deadline)}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="award">Award:</label>
              </td>
              <td>
                <input
                  name="award"
                  id="award"
                  type="text"
                  value={product.award}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="description">Description:</label>
              </td>
              <td>
                <textarea
                  style={{ width: "100%", height: "10rem", resize: "none" }}
                  rows={5}
                  name="description"
                  id="description"
                  type="text"
                  value={product.description}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="website">Website:</label>
              </td>
              <td>
                <input
                  name="website"
                  id="website"
                  type="text"
                  value={product.website}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="elegibility">Elegibility:</label>
              </td>
              <td>
                <input
                  name="elegibility"
                  id="elegibility"
                  type="text"
                  value={product.elegibility}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="elegibility2">Elegibility2:</label>
              </td>
              <td>
                <input
                  name="elegibility2"
                  id="elegibility2"
                  type="text"
                  value={product.elegibility2}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="elegibility3">Elegibility3:</label>
              </td>
              <td>
                <input
                  name="elegibility3"
                  id="elegibility3"
                  type="text"
                  value={product.elegibility3}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="origin">Origin:</label>
              </td>
              <td>
                <input
                  name="origin"
                  id="origin"
                  type="text"
                  value={product.origin}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="state">State:</label>
              </td>
              <td>
                <input
                  name="state"
                  id="state"
                  type="text"
                  value={product.state}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="profession">Profession:</label>
              </td>
              <td>
                <input
                  name="profession"
                  id="profession"
                  type="text"
                  value={product.profession}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="gender">Gender:</label>
              </td>
              <td>
                <input
                  name="gender"
                  id="gender"
                  type="text"
                  value={product.gender}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="income">Income:</label>
              </td>
              <td>
                <input
                  name="income"
                  id="income"
                  type="text"
                  value={product.income}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="category">Category:</label>
              </td>
              <td>
                <input
                  name="category"
                  id="category"
                  type="text"
                  value={product.category}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.btnGrp}>
          <button type="submit">Create</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};