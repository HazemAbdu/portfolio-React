import React from "react";
import "./SectionTwo.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "../asistant/wallpaperflare.com_wallpaper (2).jpg";
import img2 from "../asistant/pexels-josh-hild-16248188.jpg";
import img3 from "../asistant/03.jpg";
import img4 from "../asistant/to-do-tist.png";
import img5 from "../asistant/weather.png";
import img6 from "../asistant/calculator.png";

const SectionTwo = () => {
  return (
    <div>
      <section className="Main container">
        <h1 className="titleproject"> my projects </h1>
        <div className="SCards">
          <div className=" AMain row l-10 ">
            <div className="col-xl-4 col-sm-6 scsm p-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>Gold Price</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      className="a-view"
                      href="https://pricegold1.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      view
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xl-4 col-sm-6 scsm p-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>Restrouant</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      className="a-view"
                      href="https://calculator-projct.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      view
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xl-4 col-sm-6 scsm p-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Card.Title>Restrouant</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      className="a-view"
                      href="https://calculator-projct.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      view
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xl-4 col-sm-6 scsm p-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Title>To Do List</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      className="a-view"
                      href="https://to-do-list-pro.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      view
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xl-4 col-sm-6 scsm p-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Title>Weather</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      className="a-view"
                      href="https://weatherr-p.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      view
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xl-4 col-sm-6 scsm p-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img6} />
                <Card.Body>
                  <Card.Title>Calculater</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      className="a-view"
                      href="https://calculator-projct.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      view
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionTwo;
