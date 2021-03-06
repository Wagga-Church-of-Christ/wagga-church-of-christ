import React from 'react';
import './Header.scss';

interface IHeaderProps {

}

interface IHeaderState {
  collapsed: boolean;
  currentPage: string;
}

function getCurrentPathName() {
  if (typeof window !== `undefined`) {
    return window.location.pathname
  } else {
    return "/"
  }
}

class Header extends React.Component<IHeaderProps, IHeaderState> {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      currentPage: getCurrentPathName()
    }
  }

  navBarToggleClick = (event) => {
    this.setState({
      collapsed: this.state.collapsed ? false : true
    });
  }

  navLinkClick = (event) => {
    this.setState({
      collapsed: true
    });
  }

  render() {

    let collapsedClass = "collapse";

    if (!this.state.collapsed) {
      collapsedClass = "";
    }

    return (
      <nav className="sbc-navbar navbar fixed-top navbar-expand-lg navbar-light">
        <a href="/" className="navbar-brand" onClick={this.navLinkClick}>
          <img className="sbc-navbar-logo" src="/logos/header-logo.png" alt="Wagga Church of Christ" />
        </a>
        <button className="navbar-toggler" type="button" onClick={this.navBarToggleClick}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={collapsedClass + " navbar-collapse sbc-navbar-collapse"} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav sbc-navbar-content">
            <li className="nav-item">
              <a href="/" className={`nav-link ${this.state.currentPage === '/' ? "active" : ""}`} onClick={this.navLinkClick}>Home</a>
            </li>
            <li className="nav-item">
              <a href="/who-we-are" className={`nav-link ${this.state.currentPage.startsWith('/who-we-are') ? "active" : ""}`} onClick={this.navLinkClick}>Who we are</a>
            </li>
            <li className="nav-item">
              <a href="/confession-of-faith" className={`nav-link ${this.state.currentPage.startsWith('/confession-of-faith') ? "active" : ""}`} onClick={this.navLinkClick}>Confession of Faith</a>
            </li>
            <li className="nav-item">
              <a href="/sermons" className={`nav-link ${this.state.currentPage.startsWith('/sermons') ? "active" : ""}`} onClick={this.navLinkClick}>Sermons</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
};

export default Header;
