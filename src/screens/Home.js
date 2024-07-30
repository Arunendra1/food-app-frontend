import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [foodcat, setFoodcat] = useState([]);
  const [fooditem, setFooditem] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      let data = await response.json();
  
      console.log('Fetched data:', data); // Debugging line
  
      setFoodcat(data[1]);
      setFooditem(data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div style={{ objectFit: "contain !important" }}>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            style={{ objectFit: "contain !important" }}
          >
            <div className="carousel-inner" id="carousel">
              <div className="carousel-caption " style={{ zIndex: "10" }}>
                <div className="d-flex justify-content-center">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="carousel-item active">
                <img
                  src="https://media.istockphoto.com/id/1935468756/photo/cheeseburger-with-salad-and-tomato-on-a-wooden-board.webp?b=1&s=170667a&w=0&k=20&c=ejqIk94wEe3a4uueV-VZbGh06woCW_ueF_WHBuOyGCc="
                  className="d-block w-100"
                  style={{ filter: "brightness(30%)" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://media.istockphoto.com/id/830832802/photo/spicy-golden-fried-crisp-cutlets-served-tomato-sauce-or-ketchup-on-white-plate-prepare-for.webp?b=1&s=170667a&w=0&k=20&c=zmwCuCQ02m1KDvZBScxd8rCkJxaJTVKY-KhTrNgpxNQ="
                  className="d-block w-100"
                  style={{ filter: "brightness(30%)" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://media.istockphoto.com/id/1339389866/photo/homemade-christmas-plum-cake-indian-christmas-celebration-serving-india-kerala-fruitcake-made.jpg?s=612x612&w=0&k=20&c=bLjQ-l5kJ70xQ0njYFS2KyguZvckYGZ6uHCu1z9sZUc="
                  className="d-block w-100"
                  style={{ filter: "brightness(30%)" }}
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        {foodcat.length > 0
          ? foodcat.map((data) => {
              return (
                <div className="row mb-3" key={data._id}>
                  <div className="fs-3 m-3">{data.CategoryName}</div>
                  <hr />
                  {fooditem.length > 0 ? (
                    fooditem
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                            <Card foodItem={filterItems} options={filterItems.options[0]} />
                          </div>
                        );
                      })
                  ) : (
                    <div>No Such Data Found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
