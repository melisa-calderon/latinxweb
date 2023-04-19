import React from "react";
import Navbar from "../../Navbar/Navbar";
import { txres } from "./TX.js";

const Texas = () => {
    return (
        <div>
            <Navbar />
            <div className="spacing-pg">
                <h1>Texas Resources</h1>
                {txres.map((tx) =>
                <div>
                    <h1>{tx.name}</h1>
                    <p>{tx.description} </p>
                </div>)}
            </div>
        </div>
    );
}
export default Texas;