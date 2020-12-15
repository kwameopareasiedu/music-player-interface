import "./artists.scss";
import React from "react";

interface IArtists {
    children?: any;
}

export const Artists = ({ children }: IArtists): any => {
    return (
        <div id="artists" className="d-flex flex-column">
            <header className="d-flex align-items-center mb-4">
                <h5 className="mb-0">Featured Artists</h5>
                <button className="btn btn-link btn-sm">View more</button>
            </header>

            <div id="artists-content">{children && children}</div>
        </div>
    );
};
