import "./topbar.scss";
import React from "react";

export const Topbar = (): any => {
    return (
        <div id="topbar" className="d-flex align-items-center">
            <i className="fa fa-search mr-4" />
            <input type="text" className="form-control mr-4" placeholder="Search for artists, songs & albums..." />

            <div id="spacer" />
            <i className="far fa-bell mr-4" />

            <div id="profile-picture" className="mr-2">
                <img
                    src="https://avatars0.githubusercontent.com/u/26204283?s=400&u=6c84048d874f27e0acdfb027321c928abadb5109&v=4"
                    alt="Profile picture"
                />
            </div>

            <p className="mb-0 mr-4">Kwame Opare Asiedu</p>

            <i className="fa fa-chevron-down mr-2" />
        </div>
    );
};
