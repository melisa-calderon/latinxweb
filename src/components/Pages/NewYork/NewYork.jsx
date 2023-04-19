import React from "react";
import Navbar from "../../Navbar/Navbar";
import { nyres } from "./NY.js";
const NewYork = () => {

    return (
        <div>
            <Navbar />
            <div className="spacing-pg">
                <h1>New York Resources</h1>
                {nyres.map((ny) =>
                <div>
                    <h1>{ny.name}</h1>
                    <p>{ny.description} </p>
                    <p> Link: <a href={ny.external_link}> {ny.external_link} </a></p>
                </div>)}
            </div>
        </div>
    );
}
export default NewYork;