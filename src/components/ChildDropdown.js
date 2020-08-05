import React, { useState } from 'react';
import {  Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom'

const ChildDropdown = (props) => {
  let { name, children } = props.item
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => {
   // if(dropdownOpen) props.toggle()
    setDropdownOpen(!dropdownOpen);
  }
  return (
    <Dropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            {name}
          </DropdownToggle>
          <DropdownMenu>
            {children.map( (e,index) =>{
              return(
                <DropdownItem key={'dropdown___'+index} disabled={e.attributes['disabled']} dropright="true">
                  <Link to={e.url} className="nav-link item" >{e.name}</Link>
                </DropdownItem>
              )
            })}
          </DropdownMenu>
    </Dropdown>
  );
}

export default ChildDropdown ;