import React, { Component } from "react";
import "./Contact.css";

class ContactUs extends Component {
  state = {
    lastname: "",
    firstname: "",
    email: "",
    select: "",
    message: "",
  };

  handleChange = (event) => {
    if (
      !event.target.value.includes("*") &&
      !event.target.value.includes("/") &&
      !event.target.value.includes(";") &&
      !event.target.value.includes("$") &&
      !event.target.value.includes("#")
    )
      this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { lastname, firstname } = this.state;
    alert(
      `Hello ${lastname} ${firstname}, this service is in the process of being developed. Please renew your request.`
    );
  };

  render() {
    const { lastname, firstname, email, select, message } = this.state;
    return (
      <div className="contact">
        <form
          className="contact-form"
          id="contact-form"
          onSubmit={this.handleSubmit}
        >
          <p id="contact-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex
            velit et? Facere provident laudantium consequatur dolor harum
            numquam animi illum? Voluptate enim vitae voluptates perspiciatis
            quia adipisci est consequatur.{" "}
          </p>
          <div className="allinput">
            <div className="capture" id="capture-input">
              <section id="section">
                <div>
                  <input
                    required
                    className="contact-lastname"
                    placeholder="Lastname"
                    name="lastname"
                    value={lastname}
                    onChange={this.handleChange}
                  />
                  <input
                    className="contact-firstname"
                    placeholder="Firstname"
                    name="firstname"
                    value={firstname}
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </section>
              <div className="adressmail">
                <input
                  id="contact-mail"
                  type="email"
                  placeholder="@"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <select
                  id="choicelist"
                  name="select"
                  value={select}
                  onChange={this.handleChange}
                  required
                >
                  <option value="">--Please choose an option--</option>
                  <option value="Share your cocktail ideas">
                    Share your cocktail ideas
                  </option>
                  <option value="A question about cocktails">
                    A question about cocktails
                  </option>
                  <option value="A note on the site">A note on the site</option>
                </select>
              </div>
            </div>
            <div id="message" className="capture">
              <textarea
                id="contact-message"
                placeholder="Message"
                name="message"
                rows="10"
                cols="50"
                value={message}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <input id="submit" type="submit" value="Send" />
        </form>
        <div className="div-team">
          <ul className="team">
            <li>
              <img
                src="https://picsum.photos/200"
                alt="Maxence"
                className="img-team"
              />
              <p className="contact-name">Maxence</p>
            </li>
            <li>
              <img
                src="https://picsum.photos/200?grayscale"
                alt="Valentin"
                className="img-team"
              />
              <p className="contact-name">Valentin</p>
            </li>
            <li>
              <img
                src="https://picsum.photos/200?random=3"
                alt="Fabien"
                className="img-team"
              />
              <p className="contact-name">Fabien</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ContactUs;
