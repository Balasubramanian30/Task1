import React, { Fragment } from "react";
import Header from "./Header";

function Registration() {
  const saveFile = () => {
    const name = document.getElementById('name');
    const phone = document.getElementById('Phone');
    const email = document.getElementById('mail');
    const msg = document.getElementById('Description');

    let data =
      'Name: ' + name.value + '\n' +
      'Phone: ' + phone.value + '\n' +
      'Email: ' + email.value + '\n' +
      'Message: ' + msg.value;

    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
    }

    newLink.click();
  }

  return (
    <Fragment>
      <Header />
      <div className="label">
        <form>
          <div>
            <label htmlFor="inputText"> Name :</label>
            <input
              type="text"
              className="inputText"
              id="name"
              name="inputText"
              maxLength="60"
            />
          </div>
          <div>
            <label htmlFor="inputText">Phone:</label>
            <input
              type="tel"
              className="inputText"
              id="Phone"
              name="inputText"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
          <div>
            <label htmlFor="inputText">Email :</label>
            <input
              type="email"
              className="inputText"
              id="mail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </div>
          <div>
            <label htmlFor="inputText">Description :</label>
            <textarea
              id="Description"
              name="Description"
              rows="3"
              cols="36"
            ></textarea>
          </div>

          <button id="btn" onClick={saveFile}>
            Submit
          </button>
          <button id="btnn">Cancel</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Registration;
