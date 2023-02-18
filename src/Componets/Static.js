import React from "react";
import "./Static.css";
const Static = () => {
  return (
    <>
      <div className="container_stat">
        <div className="col-md-3 col-sm-3">
          <i className="icon-piggy"></i>
          <p>
            <span className="count">4</span>
          </p>
          <h2>GENERATIONS OLD RECIEPES</h2>
        </div>
        <div className="col-md-3 col-sm-3">
          <i className="icon-photo"></i>
          <p>
            <span className="count">23</span>
          </p>
          <h2>INGREDIENTS AND SPICES USED</h2>
        </div>
        <div className="col-md-3 col-sm-3">
          <i className="icon-rocket"></i>
          <p>
            <span className="count">9</span>
          </p>
          <h2>THALI VARIATIONS</h2>
        </div>
        <div className="col-md-3 col-sm-3">
          <i className="icon-world"></i>
          <p>
            <span className="count">2017</span>
          </p>
          <h2>SERVING SINCE</h2>
        </div>
      </div>
    </>
  );
};

export default Static;
