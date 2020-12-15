import "./app.scss";
import React from "react";
import { Gallery } from "./gallery";
import { Player } from "./player";

export const App = (): any => {
    return (
        <div id="app">
            <Gallery />
            <Player />
        </div>
    );
};
