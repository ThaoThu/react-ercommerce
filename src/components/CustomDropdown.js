import React, { useState } from 'react';
import {  Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import ChildDropdown from "./ChildDropdown";

const CustomDropdown = (props) => {
  let { name, children } = props.item
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            {name}
          </DropdownToggle>
          <DropdownMenu>
            {children.map( (e,index) =>{
              return(
                <span key={"sub_menu__"+index}> 
                  {e && e.children.length > 0 ? (
                    <ChildDropdown  item={e} toggle={toggle}/>
                  ):(
                  <DropdownItem key={'dropdown___'+index} disabled={e.attributes['disabled']} >
                    <Link to={e.url} className="nav-link item" >{e.name}</Link>
                  </DropdownItem>
                 
                  )} 
                </span>
              )
            })}
          </DropdownMenu>
    </Dropdown>
  );
}

export { CustomDropdown };