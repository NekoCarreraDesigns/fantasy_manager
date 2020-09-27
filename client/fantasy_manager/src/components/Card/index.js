import React from "react";
import "./index.css";

function Players(props) {

    return (
        <div size="fluid">
            <div href="/players/team0" className="player-card" className="lefty">
                <div>
                    <h3>{props.team}</h3>
                    <p>{props.players}</p>
                    <p>{props.points}</p>
                </div>
            </div>
            <div href="/players/team1" className="player-card">
                <div>
                    <h3>{props.team}</h3>
                    <p>{props.players}</p>
                    <p>{props.points}</p>
                </div>
            </div>
            <div href="/players/team2" className="player-card" className="right-said-fred">
                <div>
                    <h3>{props.team}</h3>
                    <p>{props.players}</p>
                    <p>{props.points}</p>
                </div>
            </div>
        </div>
    )
}
export default Players;