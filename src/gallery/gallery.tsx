import "./gallery.scss";
import React from "react";
import { Topbar } from "./topbar";
import { Album, Albums } from "./albums";
import { Artist, Artists } from "./artists";
import { Nav, NavGroup, NavItem } from "./nav";
import Artist1 from "../assets/artist-1.jpg";
import Artist2 from "../assets/artist-2.jpg";
import Artist3 from "../assets/artist-3.jpg";
import Artist4 from "../assets/artist-4.jpg";
import Artist5 from "../assets/artist-5.jpg";
import Artist6 from "../assets/artist-6.jpg";
import Artist7 from "../assets/artist-7.jpg";
import Cover1 from "../assets/cover-1.jpg";
import Cover2 from "../assets/cover-2.jpg";
import Cover3 from "../assets/cover-3.jpg";
import Cover4 from "../assets/cover-4.jpg";
import Cover5 from "../assets/cover-5.jpg";
import Cover6 from "../assets/cover-6.jpg";
import Cover7 from "../assets/cover-7.jpg";

export const Gallery = (): any => {
    return (
        <div id="gallery">
            <Topbar />

            <Nav>
                <NavGroup iconClass="fas fa-compact-disc" label="Podcasts">
                    <NavItem iconClass="fas fa-headphones">Top Lists</NavItem>
                    <NavItem iconClass="fa fa-search" active>
                        Discover
                    </NavItem>
                    <NavItem iconClass="fas fa-child">Kids Music</NavItem>
                    <NavItem iconClass="fas fa-user-friends">Adult Music</NavItem>
                </NavGroup>

                <NavGroup iconClass="fas fa-heart" label="Favourites">
                    <NavItem iconClass="fas fa-sun">Summer Vibes</NavItem>
                    <NavItem iconClass="fa fa-snowman">Chill Out</NavItem>
                    <NavItem iconClass="fas fa-guitar">Classic Rock</NavItem>
                </NavGroup>

                <NavGroup iconClass="fas fa-sliders-h" label="Playlists" />

                <NavGroup iconClass="fas fa-microphone-alt" label="Messages" />
            </Nav>

            <Albums>
                <Album src={Cover1} title="Romance" subtitle="150k+ Total Songs" />
                <Album src={Cover2} title="Festivals" subtitle="250k+ Total Songs" />
                <Album src={Cover3} title="Party" subtitle="350k+ Total Songs" />
                <Album src={Cover4} title="EDM & Retro" subtitle="550k+ Total Songs" />
                <Album src={Cover5} title="Dance" subtitle="950k+ Total Songs" />
                <Album src={Cover6} title="Nugget Specials" subtitle="880k+ Total Songs" />
                <Album src={Cover7} title="Live" subtitle="600k+ Total Songs" />
            </Albums>

            <Artists>
                <Artist src={Artist1} followerCount="25M">
                    Manuella Asianoa
                </Artist>
                <Artist src={Artist2} followerCount="3.5M">
                    Adele Abbot
                </Artist>
                <Artist src={Artist3} followerCount="2.5M">
                    Ollie Hunt
                </Artist>
                <Artist src={Artist4} followerCount="4.5M">
                    Connor Myers
                </Artist>
                <Artist src={Artist5} followerCount="5.5M">
                    Jeffery Allen
                </Artist>
                <Artist src={Artist6} followerCount="10M">
                    Craig Bell
                </Artist>
                <Artist src={Artist7} followerCount="1.4M">
                    Ray Johnson
                </Artist>
            </Artists>
        </div>
    );
};
