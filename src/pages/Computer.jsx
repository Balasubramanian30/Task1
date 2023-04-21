import React, { Fragment } from "react";
import Header from "./Header";

function Computer() {
  return (
    <Fragment>
      <Header />
      <div className="lap1">
        <div className="img1">
          <img src="./ascets/images/lap1.webp" alt="img" />
        </div>
        <div className="img1">
          <img src="./ascets/images/lap2.webp" alt="img" />
        </div>
        <div className="img1">
          <img src="./ascets/images/lap3.webp" alt="img" />
        </div>
      </div>
    </Fragment>
  );
}

export default Computer;
