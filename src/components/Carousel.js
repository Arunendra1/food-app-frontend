import React from "react";

export default function Carousel() {
  return (
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
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success text-white bg-success"
                  type="submit"
                >
                  Search
                </button>
              </form>
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
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
