import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import styles from "../../styles/PaginatedItems.module.css";
import { formatDate } from "./Tools1";

export const PaginatedItems = ({ itemsPerPage }) => {
  // We start with an empty list of items.
  const [items, setItems] = useState();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products/", {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setLoading(false);
          setItems(data);
          const endOffset = itemOffset + itemsPerPage;
          console.log(`Loading items from ${itemOffset} to ${endOffset}`);
          setCurrentItems(items.slice(itemOffset, endOffset));
          setPageCount(Math.ceil(items.length / itemsPerPage));
        } else {
          throw Error("No data returned");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [itemOffset, itemsPerPage, items, loading]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return loading ? (
    <h4 style={{ textAlign: "center" }}>Loading...</h4>
  ) : (
    <>
      <Items currentItems={currentItems} itemOffset={itemOffset} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName={styles.pageItem}
        previousClassName="page-item"
        previousLinkClassName={styles.pageItem}
        nextClassName="page-item"
        nextLinkClassName={styles.pageItem}
        breakLabel="..."
        breakClassName={styles.pageItem}
        breakLinkClassName="page-link"
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

function Items({ currentItems, itemOffset }) {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>S.No.</th>
          <th>Title</th>
          <th>Deadline</th>
        </tr>
        {currentItems &&
          currentItems.map((item, key) => {
            return (
              <tr key={key}>
                <td>{itemOffset + key + 1}</td>
                <td>{item.title}</td>
                <td>{formatDate(item.deadline)}</td>
                <td>
                  <Link to={`/myproduct/${item._id}`}>View</Link>
                </td>
              </tr>
              
            );
          })}
      </tbody>
    </table>
  );
}