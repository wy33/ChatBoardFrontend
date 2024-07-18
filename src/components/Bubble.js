import './Bubble.css';

export default function Bubble({ name, message }) {
    return (
        <div className="bubble">
            <p className="name">{name}</p>
            <p className="message">{message}</p>
        </div>
    )
}