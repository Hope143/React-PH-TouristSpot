import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [height, setHeight] = useState("");

  var contributions = [
    {
      productName: "K87 TKL Keyboard",
      price: "$86.99",
      description:
        "Womier K87 botanical TKL keyboard is illuminated with fully customizable RGB backlighting and under-lighting.",
      image: require("../img/keyboard.jpg"),
      height: 170,
    },
    {
      productName: "Table Lamp",
      price: "$39.99",
      description:
        "This table lamp has a metal base and a glass lampshade, giving it a modern look to fit in an industrial-style room.",
      image: require("../img/lamp.jpg"),
      height: 202,
    },
    {
      productName: "Apple MacBook Air",
      price: "$899.99",
      description:
        "All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.",
      image: require("../img/laptop.jpg"),
      height: 177,
    },
    {
      productName: "Acer Aspire Desktop",
      price: "$629.00",
      description:
        "9th Generation Intel Core i3 9100 Processor (Up to 4. 2GHz) Windows 10 Home, USB keyboard & USB mouse",
      image: require("../img/systemUnit.jpg"),
      height: 328,
    },
    {
      productName: "Headset",
      price: "$289.00",
      description:
        "BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling",
      image: require("../img/headset.jpg"),
      height: 260,
    },
    {
      productName: "Iphone 13",
      price: "$500.00",
      description:
        "BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling",
      image: require("../img/phone.jpg"),
      height: 412,
    },
    {
      productName: "Drone",
      price: "$299.00",
      description:
        "Weighing less than 0 55lbs / 249 grams, DJI Mini SE is roughly the same weight as the smartphone.",
      image: require("../img/drone.jpg"),
      height: 127,
    },
    {
      productName: "Monitor",
      price: "$139.99",
      description:
        "Immersive Viewing Experience: The curvature of the screen lets you enjoy big, and stunning panoramic views.",
      image: require("../img/monitor.jpg"),
      height: 281,
    },
  ];
  const imgRef = React.createRef();

  const handleImageLoad = (event) => {
    // Do whatever you want here
    const imageHeight = event.target.clientHeight;
    setHeight(imageHeight);
  };

  console.log(height);

  const listItems = contributions.map((detail) => {
    console.log(detail.height);
    return (
      <div className="col-md-6 col-lg-3">
        <div className="card">
          <img
            ref={imgRef}
            onLoad={handleImageLoad}
            src={detail.image}
            alt="photos"
            className={`img-fluid card-img-top h-sm-auto ${
              detail.height <= 202 ? "lessHeight" : "moreHeight"
            }`}
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title mb-3">{detail.productName}</h5>
              <h5>{detail.price}</h5>
            </div>
            <p className="card-text mb-3">{detail.description}</p>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-light border rounded-circle border-white"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                data-bs-custom-class="custom-tooltip"
                title="add to cart"
              >
                <i class="bi bi-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="p-5">
      <div className="container">
        <div className="row g-4">
          {listItems}
          {/* <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src={require("../img/keyboard.jpg")}
                className="img-fluid w-100 card-img-top"
                style={{ height: "202px" }}
                alt="keyboard"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title mb-3">K87 TKL Keyboard</h5>
                  <h5>$86.99</h5>
                </div>
                <p className="card-text mb-3">
                  Womier K87 botanical TKL keyboard is illuminated with fully
                  customizable RGB backlighting and under-lighting.
                </p>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-light border rounded-circle border-white"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-custom-class="custom-tooltip"
                    title="add to cart"
                  >
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src={require("../img/lamp.jpg")}
                className="img-fluid w-100 card-img-top"
                style={{ height: "202px" }}
                alt="keyboard"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title mb-3">Table Lamp</h5>
                  <h5>$39.99</h5>
                </div>
                <p className="card-text mb-3">
                  This table lamp has a metal base and a glass lampshade, giving
                  it a modern look to fit in an industrial-style room.
                </p>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-light border rounded-circle border-white"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-custom-class="custom-tooltip"
                    title="add to cart"
                  >
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src={require("../img/laptop.jpg")}
                className="img-fluid w-100 card-img-top"
                style={{ height: "202px" }}
                alt="keyboard"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title mb-3">Apple MacBook Air</h5>
                  <h5>$899.99</h5>
                </div>
                <p className="card-text mb-3">
                  All-Day Battery Life – Go longer than ever with up to 18 hours
                  of battery life.
                </p>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-light border rounded-circle border-white"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-custom-class="custom-tooltip"
                    title="add to cart"
                  >
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src={require("../img/systemUnit.jpg")}
                className="img-fluid w-100 card-img-top system-unit"
                style={{ height: "202px" }}
                alt="keyboard"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title mb-3">Acer Aspire Desktop</h5>
                  <h5>$629.00</h5>
                </div>
                <p className="card-text mb-3">
                  9th Generation Intel Core i3 9100 Processor (Up to 4. 2GHz)
                  Windows 10 Home, USB keyboard & USB mouse
                </p>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-light border rounded-circle border-white"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-custom-class="custom-tooltip"
                    title="add to cart"
                  >
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src={require("../img/headset.jpg")}
                className="img-fluid w-100 card-img-top headset"
                style={{ height: "202px" }}
                alt="keyboard"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title mb-3">Headset</h5>
                  <h5>$629.00</h5>
                </div>
                <p className="card-text mb-3">
                  BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5
                  Controller, Noise Cancelling
                </p>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-light border rounded-circle border-white"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-custom-class="custom-tooltip"
                    title="add to cart"
                  >
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src={require("../img/phone.jpg")}
                className="img-fluid w-100 card-img-top phone"
                style={{ height: "202px", objectFit: "fill" }}
                alt="keyboard"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title mb-3">Headset</h5>
                  <h5>$629.00</h5>
                </div>
                <p className="card-text mb-3">
                  BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5
                  Controller, Noise Cancelling
                </p>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-light border rounded-circle border-white"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-custom-class="custom-tooltip"
                    title="add to cart"
                  >
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src={require("../img/drone.jpg")}
                className="img-fluid w-100 card-img-top phone"
                style={{ height: "202px", objectFit: "fill" }}
                alt="keyboard"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title mb-3">Drone</h5>
                  <h5>$299.00</h5>
                </div>
                <p className="card-text mb-3">
                  Weighing less than 0 55lbs / 249 grams, DJI Mini SE is roughly
                  the same weight as the smartphone.
                </p>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-light border rounded-circle border-white"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-custom-class="custom-tooltip"
                    title="add to cart"
                  >
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src={require("../img/monitor.jpg")}
                className="img-fluid w-100 card-img-top phone"
                style={{ height: "202px", objectFit: "fill" }}
                alt="keyboard"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title mb-3">Monitor</h5>
                  <h5>$139.99</h5>
                </div>
                <p className="card-text mb-3">
                  Immersive Viewing Experience: The curvature of the screen lets
                  you enjoy big, and stunning panoramic views.
                </p>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-light border rounded-circle border-white"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-custom-class="custom-tooltip"
                    title="add to cart"
                  >
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
