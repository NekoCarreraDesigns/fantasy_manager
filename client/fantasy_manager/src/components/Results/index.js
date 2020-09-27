import React from "react";
import "./index.css"

function Results(props) {

    return (
        <div className="search-results">
            <div className="search-table">
                <tbody>
                    <tr className="players">Players</tr>
                    <td>{props.name}</td>
                    <tr className="points">Points</tr>
                    <td>{props.points}</td>
                </tbody>
            </div>
        </div>
    )
}
export default Results