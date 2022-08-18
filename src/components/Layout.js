import React from "react";
import logo from "../assets/images/prashanth_logo.png";
import { useLocation } from "react-router-dom"

class Layout extends React.Component {
  
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div className="overlay"></div>
        <nav
          className="navbar navbar-inverse fixed-top"
          id="sidebar-wrapper"
          role="navigation"
        >
          <ul className="nav sidebar-nav">
            <div className="sidebar-header">
              <div className="sidebar-brand mt-1">
                <img src={logo} style={{ height: "66px" }}  className="mx-auto"/>
              </div>
            </div>
            <li>
              <a href="/">
                <i className="fa fa-user"/> &nbsp; Profile
              </a>
            </li>
            <div className="dropdown-header">Logical programs</div>
            <li>
              <a href="fibbonacci">Fibbonacci</a>
            </li>
            <li>
              <a href="callback-function">Callback Function</a>
            </li>
            <li>
              <a href="string-reverse">String Reverse</a>
            </li>
            <li>
              <a href="sorting-strings">Sorting Strings</a>
            </li>
            <li>
              <a href="sorting-numbers">Sorting Numbers</a>
            </li>
            <li>
              <a href="quadratic-formula">Quadratic formula</a>
            </li>
            <li>
              <a href="qrcode">QrCode Generator</a>
            </li>
            <li>
              <a href="amstrong">Amstrong number</a>
            </li>
            <li>
              <a href="genarate-password">Password Generator</a>
            </li>

            <li>
              <a href="calculator">Calculator</a>
            </li>
            <li className="dropdown">
              <a
                href="works"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                Logicals <span className="caret"></span>
              </a>
              <ul className="dropdown-menu animated fadeInLeft" role="menu">
                <div className="dropdown-header">Logical programs</div>

                <li>
                  <a href="art">Data structure</a>
                </li>
                <li>
                  <a href="awards">Marthon</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div id="page-content-wrapper">
          <button
            type="button"
            className="hamburger is-open"
            data-toggle="offcanvas"
          >
            <span className="hamb-top"></span>
            <span className=""></span>
            <span className="hamb-bottom"></span>
          </button>
          <div className="container">
            {/* content */}
            <main>{this.props.children}</main>
            {/* end content */}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
