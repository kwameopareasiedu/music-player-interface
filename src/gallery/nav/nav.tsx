import "./nav.scss";
import React from "react";

interface INav {
    children: any;
}

export const Nav = ({ children }: INav): any => {
    return (
        <div id="nav">
            <div id="app-name">uim</div>
            {children}
        </div>
    );
};
