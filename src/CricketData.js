import React, { Component } from 'react';
import './CricketData.css'; // Import your CSS file

class CricketData extends Component {
    componentDidMount() {
        // Place your API fetching and data manipulation logic here
        // You can also include your JavaScript code from script.js
    }

    render() {
        return (
            <div className="container">
                <h1>Live Cricket</h1>
                <div className="video-container">
                    <iframe
                        src="https://crichdplayer.xyz/embed2.php?id=ptvsp&amp;q=PTV%20Sports"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        );
    }
}

export default CricketData;
