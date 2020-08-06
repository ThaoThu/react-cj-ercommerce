// import React, { Component } from "react";
// import { NavLink, Link } from "react-router-dom";
// import {
//   Badge,
//   UncontrolledDropdown,
//   DropdownItem,
//   DropdownMenu,
//   DropdownToggle,
//   Nav,
//   NavItem,
// } from "reactstrap";
// import PropTypes from "prop-types";
// import HeaderLeft from "./HeaderLeft";
// import { AppAsideToggler } from "@coreui/react";

// const propTypes = {
//   children: PropTypes.node,
// };

// const defaultProps = {};

// class DefaultHeader extends Component {
//   render() {
//     const { children, ...attributes } = this.props;
//     let { navConfig } = this.props;
//     return (
//       <React.Fragment>
//         <div className="brand-box">
//           <Link to="/dashboard">
//             {/* <img src={house} className="img-home" alt="admin" /> */}
//           </Link>
//         </div>
//         {/* <HeaderLeft nav={navConfig} {...this.props} /> */}
//         <Nav className="ml-auto" navbar>
//           <NavItem className="d-md-down-none">
//             <NavLink to="#" className="nav-link icon">
//               <i className="fa fa-envelope-o"></i>
//               <Badge pill color="success">
//                 5
//               </Badge>
//             </NavLink>
//           </NavItem>
//           <NavItem className="d-md-down-none">
//             <NavLink to="#" className="nav-link icon">
//               <i className="fa fa-bell-o"></i>
//               <Badge pill color="danger">
//                 5
//               </Badge>
//             </NavLink>
//           </NavItem>
//           <UncontrolledDropdown nav direction="down">
//             <DropdownToggle nav>
//               <img
//                 src="https://picsum.photos/30/30"
//                 className="img-avatar"
//                 alt="admin"
//               />
//             </DropdownToggle>
//             <DropdownMenu right>
//               <DropdownItem header tag="div" className="text-center">
//                 <strong>Tài khoản</strong>
//               </DropdownItem>
//               <DropdownItem>
//                 <i className="fa fa-wrench"></i>Cài đặt
//               </DropdownItem>
//               <DropdownItem>
//                 <i className="fa fa-file"></i>Bảng tin
//                 <Badge color="primary">42</Badge>
//               </DropdownItem>
//               <DropdownItem onClick={(e) => this.props.onLogout(e)}>
//                 <i className="fa fa-lock"></i>Đăng xuất
//               </DropdownItem>
//             </DropdownMenu>
//           </UncontrolledDropdown>
//         </Nav>
//         <AppAsideToggler className="d-md-down-none" />
//       </React.Fragment>
//     );
//   }
// }

// DefaultHeader.propTypes = propTypes;
// DefaultHeader.defaultProps = defaultProps;

// export default DefaultHeader;
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
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

import {
  AppAsideToggler,
  AppNavbarBrand,
  AppSidebarToggler,
} from "@coreui/react";
// import logo from "../../assets/img/brand/logo.svg";
// import sygnet from "../../assets/img/brand/sygnet.svg";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        {/* <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: "CoreUI Logo" }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: "CoreUI Logo" }}
        /> */}
        {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> */}
        <div className="header__brand">CJ-Ecommorce</div>

        <Nav className="d-md-down-none menu-top" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link">
              Danh mục
            </NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">
              Sản phầm
            </Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">
              Đơn hàng
            </Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">
              Kho hàng
            </Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="#" className="nav-link">
              Khách hàng
            </NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">
              Báo cáo
            </Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">
              Khuyến mãi
            </Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">
              Thiết lập
            </Link>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link">
              <i className="icon-bell"></i>
              <Badge pill color="danger">
                5 <i class="cis-library-books"></i>
              </Badge>
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link">
              <i className="icon-list"></i>
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link">
              <i className="icon-location-pin"></i>
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav direction="down">
            <DropdownMenu right>
              <DropdownItem onClick={(e) => this.props.onLogout(e)}>
                <i className="fa fa-lock"></i> Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
