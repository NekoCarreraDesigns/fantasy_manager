import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import "./index.css"
const Navbar = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div>
            <Nav className="navbar">
                <NavItem>
                    <NavLink className="navbar-link" href="#" active>Link</NavLink>
                </NavItem>
                <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle className="drop" nav caret>
                        Dropdown
          </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavItem>
                    <NavLink className="navbar-link" href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navbar-link" href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navbar-link" href="#">Disabled Link</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default Navbar;