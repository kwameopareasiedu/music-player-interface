import "./artist.scss";
import React from "react";

interface IArtist {
    src: string;
    followerCount: string;
    children: string;
}

export const Artist = ({ children, src, followerCount }: IArtist): any => {
    return (
        <div className="artist d-flex align-items-center">
            <div className="artist-icon">
                <img src={src} alt="Artist icon" />
            </div>

            <div className="artist-info">
                <p className="name">{children}</p>
                <p className="follower-count">{followerCount} Followers</p>
            </div>

            <div className="options">
                <button className="btn btn-link">
                    <i className="fa fa-ellipsis-h" />
                </button>
            </div>
        </div>
    );
};
