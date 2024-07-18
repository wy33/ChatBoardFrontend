import { useState } from 'react';
import './SendMessage.css';

export default function SendMessage() {
    const [formData, setFormData] = useState({
        name: "",
        message: ""
    });

    // Visuals when typing
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value,}));
    }

    // Post message to backend
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent refresh
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}post/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await response.json();
            // Since other users may update the chat/database, updating the current data being displayed
            // may leave a gap in the chat board history
            // setData((prev) => [...prev, result]);
            setFormData({name: "", message: ""});   // Clear form
        } catch (error) {
            console.error("Form submission failure:", error);
        }
    }

    return (
        <div>
            <h1>Send Message</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form-label">
                        Message:
                    </label>
                    <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <button className="submit-button" type="submit">Send</button>
            </form>
        </div>
    )
}