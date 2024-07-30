import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const response = await res.json();
      setOrderData(response.orderData || []);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {orderData && orderData.order_data ? (
            orderData.order_data.slice(0).reverse().map((item, index) => (
              <div key={index}>
                {item.map((arrayData, index) => (
                  <div key={index}>
                    {arrayData.Order_date ? (
                      <div className="m-auto mt-5">
                        {arrayData.Order_date}
                        <hr />
                      </div>
                    ) : (
                      <div className="col-12 col-md-6 col-lg-3">
                        <div
                          className="card mt-3"
                          style={{ width: "16rem", maxHeight: "360px" }}
                        >
                          {/* <img
                            src={arrayData.img}
                            className="card-img-top"
                            alt="Product"
                            style={{ height: "120px", objectFit: "fill" }}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://via.placeholder.com/150";
                            }} */}
                          {/* /> */}
                          <div className="card-body">
                            <h5 className="card-title">{arrayData.name}</h5>
                            <div
                              className="container w-100 p-0"
                              style={{ height: "38px" }}
                            >
                              <span className="m-1">{arrayData.qty}</span>
                              <span className="m-1">{arrayData.size}</span>
                              <span className="m-1">
                                {orderData.Order_date}
                              </span>
                              <div className="d-inline ms-2 h-100 w-20 fs-5">
                                ₹{arrayData.price}/-
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div>No Orders Found</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
