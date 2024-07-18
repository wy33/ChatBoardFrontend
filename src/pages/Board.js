import React, { useState, useEffect } from 'react';
import Bubble from '../components/Bubble.js';
import SendMessage from '../components/SendMessage.js';
import './Board.css';

export default function Board() {
    const [apiData, setData] = useState([]);

    useEffect(() => {
        // Fetch most recent messages
        async function fetchMessage() {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}`)
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Data fetch failure:", error);
            }
        }
        fetchMessage();

        // Simple but not the most scalable solution
        const intervalId = setInterval(fetchMessage, 5000); // Fetch data every 10 seconds
        return () => clearInterval(intervalId); // Cleanup when component is unmounted
    }, []);

    return (
        <div className="board">
            <h1>Board</h1>
            {apiData.slice(0).reverse().map((output, id) => (
                <div key={id}>
                    <Bubble
                        name={output.name}
                        message={output.message}
                    />
                </div>
            ))}
            <SendMessage />
            <p>Please give 5 seconds for an update upon submission</p>
        </div>
    )
}