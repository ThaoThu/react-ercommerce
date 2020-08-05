import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
} from "reactstrap";
import PropTypes from "prop-types";
import HeaderLeft from "./HeaderLeft";
import { AppAsideToggler } from "@coreui/react";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    const { children, ...attributes } = this.props;
    let { navConfig } = this.props;
    return (
      <React.Fragment>
        <div className="brand-box">
          <Link to="/dashboard">
            {/* <img src={house} className="img-home" alt="admin" /> */}
          </Link>
        </div>
        <HeaderLeft nav={navConfig} {...this.props} />
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link icon">
              <i className="fa fa-envelope-o"></i>
              <Badge pill color="success">
                5
              </Badge>
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link icon">
              <i className="fa fa-bell-o"></i>
              <Badge pill color="danger">
                5
              </Badge>
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img
                src="https://picsum.photos/30/30"
                className="img-avatar"
                alt="admin"
              />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center">
                <strong>Tài khoản</strong>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-wrench"></i>Cài đặt
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-file"></i>Bảng tin
                <Badge color="primary">42</Badge>
              </DropdownItem>
              <DropdownItem onClick={(e) => this.props.onLogout(e)}>
                <i className="fa fa-lock"></i>Đăng xuất
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
