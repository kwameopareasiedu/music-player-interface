import "./albums.scss";
import React from "react";

interface IAlbums {
    children?: any;
}

export const Albums = ({ children }: IAlbums): any => {
    return (
        <div id="albums" className="d-flex flex-column">
            <div className="container mb-4">
                <header className="d-flex align-items-center">
                    <h1 className="mb-0">Discover</h1>
                    <button className="btn btn-link btn-sm">
                        <i className="fa fa-ellipsis-h" />
                    </button>
                </header>
            </div>

            <div id="albums-content">
                <div className="container">{children && <div className="row">{children}</div>}</div>
            </div>
        </div>
    );
};
