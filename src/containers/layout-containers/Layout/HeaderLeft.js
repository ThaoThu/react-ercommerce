import React, { Component } from 'react';
import { Nav, NavItem,NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { CustomDropdown }  from '../../../components';
import { FiAlertCircle } from "react-icons/fi";

const propTypes = {
  children: PropTypes.node,
};
const defaultProps = {};

class HeaderLeft extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props.nav;
    let { title } = this.props
    return (
        <Nav className="header__left" navbar> 
         {items.map((item,index)=>{
            return(
            <NavItem className="px-3" key={'nav___'+index}>
                <CustomDropdown item={item} />
            </NavItem>)
         })}
        <NavItem className="px__select">
        <NavLink onClick={()=>this.props.onSetTime()}><FiAlertCircle size={14} color={"#FFE974"}/><span style={{color:"#FFE974"}}>{title}</span></NavLink>
        </NavItem>
        </Nav>
    );
  }
}

HeaderLeft.propTypes = propTypes;
HeaderLeft.defaultProps = defaultProps;

export default HeaderLeft;

