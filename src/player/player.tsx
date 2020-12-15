import "./player.scss";
import React, { useEffect, useRef, useState } from "react";
import Cover1 from "../assets/cover-1.jpg";
import Cover2 from "../assets/cover-7.jpg";
import Sample1 from "../assets/sample-1.ogg";
import Sample2 from "../assets/sample-2.ogg";

export const Player = (): any => {
    const tracks = [
        { title: "Sample #1", meta: "A sample of audio 1", src: Sample1, art: Cover1 },
        { title: "Sample #2", meta: "A sample of audio 2", src: Sample2, art: Cover2 }
    ];

    const [track, setTrack] = useState(tracks[0]);
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(75);
    const audioRef = useRef<HTMLAudioElement>();

    useEffect(() => {
        // Add a time update listener to get access to the duration and current time
        const audioPlayer = audioRef.current;

        if (audioPlayer) {
            const onTimeUpdate = () => {
                setCurrentTime(audioPlayer.currentTime);
                setDuration(audioPlayer.duration);
            };

            audioPlayer.addEventListener("timeupdate", onTimeUpdate);
            return () => audioPlayer.removeEventListener("timeupdate", onTimeUpdate);
        }
    }, []);

    useEffect(() => {
        const audioPlayer = audioRef.current;
        if (audioPlayer) audioPlayer.volume = volume / 100.0;
    }, [volume]);

    useEffect(() => {
        const audioPlayer = audioRef.current;

        if (audioPlayer) {
            if (playing) {
                if (audioPlayer.src.indexOf(track.src) === -1) {
                    audioPlayer.src = track.src;
                    audioPlayer.load();
                }

                audioPlayer.play().then(() => null);
            } else audioPlayer.pause();
        }
    }, [playing]);

    useEffect(() => {
        const audioPlayer = audioRef.current;

        if (audioPlayer) {
            audioPlayer.pause();

            if (audioPlayer.src.indexOf(track.src) === -1) {
                audioPlayer.src = track.src;
                audioPlayer.load();
            }
        }

        setPlaying(false);
    }, [track]);

    useEffect(() => {
        if (playing && currentTime >= duration) {
            setPlaying(false);
            changeTrack(1);
        }
    }, [currentTime, duration, playing]);

    const changeTrack = (offset: number): void => {
        const tempIndex = tracks.map(t => t.title).indexOf(track.title) + offset;
        const newIndex = tempIndex < 0 ? tracks.length - 1 : tempIndex % tracks.length;
        setTrack(tracks[newIndex]);
    };

    const parseCurrentTime = (time: number): string => {
        const floor = Math.floor(time);
        const minutes = Math.floor(floor / 60);
        const seconds = floor % 60;
        return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
    };

    const progress = (time: number, duration: number): number => {
        if (!duration) return 0;
        return (100 * time) / duration;
    };

    return (
        <div id="player" className="d-flex align-items-center">
            <audio ref={audioRef} hidden />

            <div id="track-art" className="mr-3">
                <img src={track.art} alt="" />
            </div>

            <div id="track-info" className="mr-4">
                <p id="title" className="mb-0">
                    {track.title}
                </p>
                <p id="meta" className="mb-0">
                    {track.meta}
                </p>
            </div>

            <button id="prev" className="btn btn-link btn-lg mr-2" onClick={() => changeTrack(-1)}>
                <i className="fa fa-backward" />
            </button>

            <button id="play" className="btn btn-link btn-lg mr-2" onClick={() => setPlaying(!playing)}>
                {!playing ? <i className="fa fa-play" /> : <i className="fa fa-pause" />}
            </button>

            <button id="next" className="btn btn-link btn-lg mr-4" onClick={() => changeTrack(1)}>
                <i className="fa fa-forward" />
            </button>

            <p id="duration" className="mb-0 mr-2">
                {parseCurrentTime(currentTime)}
            </p>

            <div id="time-track" className="mr-4">
                <div id="time-fill" style={{ width: `${progress(currentTime, duration)}%` }} />
            </div>

            {volume === 0 && <i className="fa fa-volume-mute mr-2" style={{ width: "30px", fontSize: "1.5rem" }} />}
            {volume > 0 && volume <= 50 && <i className="fa fa-volume-down mr-2" style={{ width: "30px", fontSize: "1.5rem" }} />}
            {volume > 50 && volume <= 100 && <i className="fa fa-volume-up mr-2" style={{ width: "30px", fontSize: "1.5rem" }} />}

            <input type="range" value={volume} min={0} step={1} max={100} onChange={e => setVolume(parseInt(e.target.value))} />
        </div>
    );
};
