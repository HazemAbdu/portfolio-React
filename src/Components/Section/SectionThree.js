import React from "react";
import "./SectionThree.css";

function SectionThree() {
  return (
    <div>
      <section className="test">
        <h1 className="titlecontact">contact</h1>
        <div className="formm">
          <form>
            <input type="text" name="Name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              name="Message"
              rows="6"
              placeholder="Your Message"
              required
            />
            <button type="submit" className="btn-1">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SectionThree;
