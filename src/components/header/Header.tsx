import React from 'react';
import './Header.scss';

interface IHeaderProps {

}

interface IHeaderState {
  collapsed: boolean
}

class Header extends React.Component<IHeaderProps, IHeaderState> {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
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
              <a href="/about" className="nav-link" onClick={this.navLinkClick}>About Us</a>
            </li>
            <li className="nav-item">
              <a href="/sermons" className="nav-link" onClick={this.navLinkClick}>Sermons</a>
            </li>
            <li className="nav-item">
              <a href="/focus" className="nav-link" onClick={this.navLinkClick}>The Focus</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link" onClick={this.navLinkClick}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
};

export default Header;
