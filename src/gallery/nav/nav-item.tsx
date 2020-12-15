import "./nav-item.scss";
import React from "react";

interface INavItem {
    iconClass: string;
    active?: boolean;
    children: any;
}

export const NavItem = ({ iconClass, active, children }: INavItem): any => {
    return (
        <div className={`nav-item d-flex align-items-center ${active ? "active" : ""}`}>
            <i className={iconClass} />
            <span>{children}</span>
            <i className="fa fa-chevron-right" />
        </div>
    );
};
