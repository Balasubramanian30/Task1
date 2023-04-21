import React, { Fragment } from "react";
import Header from "./Header";

function Computer() {
  return (
    <Fragment>
      <Header />
      <div class="lap1">
        <div class="img1">
            <img src="images/lap1.webp" alt="ak"/>
        </div>
        <p class="sys">System 1</p>
        <div class="img1">
            <img src="images/lap2.webp" alt="ak" />

        </div>
        <p class="sys">System 2</p>
        <div class="img1">
            <img src="images/lap3.webp" alt="ak" />
        </div>
        <p class="sys">System 3</p>



    </div>
    </Fragment>
  );
}

export default Computer;
