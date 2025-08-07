import React from "react";
import { Container, Nav, NavbarBrand, Badge } from "react-bootstrap";

export default function NavbarApp(props) {
  return (
    <>
      <Nav className="navbar navbar-expand-lg bg-primary d-flex justify-content-between p-3">
        <Container>
          <NavbarBrand className="text-white" href="#">
            <img
              src={props.image}
              alt={props.name}
              className="img-fluid"
              width={props.size}
              height={props.size}
            />
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ filter: "brightness(0) invert(1)" }}
            ></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto d-flex gap-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="#">
                  {props.contact ? `${props.contact}` : " "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="#">
                  Cart
                  <Badge className="badge bg-danger text-white ms-1">0</Badge>
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </Nav>
    </>
  );
}
