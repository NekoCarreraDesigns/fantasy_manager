import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
// import Players from '../Card';
import "./index.css"
const Navbar = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div>
            <Nav className="navbar">
                <NavItem>
                    <NavLink className="navbar-link" href="/" active>Home</NavLink>
                </NavItem>
                <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle className="drop" nav caret>
                        Teams
          </DropdownToggle>
                    <DropdownMenu className="drop-menu">
                        <DropdownItem className="drop-head" header>Your Teams</DropdownItem>
                        <DropdownItem href="/players/team0" className="drop0">{props.team}</DropdownItem>
                        <DropdownItem href="/players/team1" className="drop1">Team1</DropdownItem>
                        <DropdownItem href="/players/team2" className="drop2">Team2</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavItem>
                    <NavLink className="navbar-link" href="/api/stats">Stats</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navbar-link" href="api/players">Players</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navbar-link" href="api/standings/:id">Standings</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default Navbar;