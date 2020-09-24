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
                    <DropdownMenu className="drop-menu">
                        <DropdownItem className="drop-head" header>Your Teams</DropdownItem>
                        <DropdownItem className="drop0">Team0</DropdownItem>
                        <DropdownItem className="drop1">Team1</DropdownItem>
                        <DropdownItem className="drop2">Team2</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavItem>
                    <NavLink className="navbar-link" href="#">Stats</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navbar-link" href="#">Players</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navbar-link" href="#">Standings</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default Navbar;