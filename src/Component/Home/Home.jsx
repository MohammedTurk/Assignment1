import React from 'react';
import Title from '../Title/Title';
import "./Home.css";

export default function Home() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="header">
                    <Title name="Home" title="page" />
                </div>
                <div className="content container">
                    <div className="img-info">
                        <img src="http://placekitten.com/300/300" alt="cat" />
                    </div>
                    <div className="text-info">
                        <h3>Lorem ipsum dolor sit.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit quos nobis nemo consequuntur quia aut! Minus impedit id sed odit inventore culpa incidunt, modi similique repellat, suscipit, quia dignissimos!Lorem</p>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
