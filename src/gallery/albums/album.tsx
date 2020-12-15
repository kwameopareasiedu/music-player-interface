import "./album.scss";
import React from "react";

interface IAlbum {
    src: string;
    title: string;
    subtitle: string;
}

export const Album = ({ src, title, subtitle }: IAlbum): any => {
    return (
        <div className="album col-12 col-md-4">
            <div className="album-cover mb-2">
                <img src={src} alt="Album cover" />
            </div>

            <p className="mb-0 title">{title}</p>

            <p className="mb-0 subtitle">{subtitle}</p>
        </div>
    );
};
