import React, { useState } from 'react';
import "../App.css";

const Musichai = (props) => {
    const { Music } = props;
    const [duration, setDuration] = useState(0);

    const handleLoadedMetadata = (event) => {
        // Update the duration state when the metadata of the audio is loaded
        setDuration(event.target.duration);
    };

    const widths = (duration.toFixed(2) / 30) * 100;

    return (
        <>
            <div className='musicName' style={{ width: widths + "%", height: "40px", backgroundColor: Music.colors, borderRadius: "70px" }}>{Music.music}</div>
            <audio
                autoPlay
                onLoadedMetadata={handleLoadedMetadata} // Listen for the 'loadedmetadata' event
            >
                <source src={Music.music} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <div>Duration: {duration.toFixed(2)} seconds</div>
        </>
    );
};

export default Musichai;
