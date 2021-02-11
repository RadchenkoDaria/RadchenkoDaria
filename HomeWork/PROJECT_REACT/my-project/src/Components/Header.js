import React, { Component } from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Hello from "../Pages/Hello";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Portfolio from "../Pages/Portfolio";
import Team from "../Pages/Team";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import "../Components/SectionTwo.css"; //нужно перенести стиль ссылки в отдельный css файл

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">BOUNCY</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"> Hello </Nav.Link>
                <Nav.Link href="/about"> About </Nav.Link>
                <Nav.Link href="/services"> Services </Nav.Link>
                <Nav.Link href="/portfolio"> Portfolio </Nav.Link>
                <Nav.Link href="/team"> Team </Nav.Link>
                <Nav.Link href="/blog"> Blog </Nav.Link>
                <Nav.Link href="/contact"> Contact </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/" component={Hello} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}
