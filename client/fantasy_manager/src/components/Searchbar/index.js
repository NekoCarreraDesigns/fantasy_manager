import React, { useState } from "react";
import Results from "../../components/Results/index"
import "./index.css";

function Searchbar() {
    const [showResults, setShowResults] = useState(false);
    const onSubmit = () => setShowResults(true)


    return (
        <div>
            <div>
                <input onSubmit={onSubmit} className="searchbar" placeholder="search players or leagues"></input>
                <button className="search-btn"><i className="fas fa-search icon"></i></button>
            </div>
            <div>
                {showResults ? <Results /> : null}
            </div>
        </div>
    );
};
export default Searchbar;