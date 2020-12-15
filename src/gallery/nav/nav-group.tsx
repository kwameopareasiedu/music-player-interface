import "./nav-group.scss";
import React from "react";

interface INavGroup {
    iconClass: string;
    label: string;
    children?: any;
}

export const NavGroup = ({ iconClass, label, children }: INavGroup): any => {
    return (
        <div className="nav-group mb-2">
            <div className="nav-group-label d-flex align-items-center">
                <i className={iconClass} />
                <span>{label}</span>
            </div>

            {children && children}
        </div>
    );
};
