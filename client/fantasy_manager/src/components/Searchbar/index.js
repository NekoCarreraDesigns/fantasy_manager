import React, { useState } from "react";
import "./index.css";

function Searchbar() {
    const [searchInput, setSearchInput] = useState("");
    // const userSearch = () => {
    //     axios({
    //         method: "GET",
    //         url: `/api/players/${searchInput}`
    //     }).then((res) => console.log(res.data))
    // }
    return (
        <div>
            <input className="searchbar" placeholder="search players or leagues"></input>
            <button className="search-btn"><i className="fas fa-search icon"></i></button>
        </div>
    );
};
export default Searchbar;