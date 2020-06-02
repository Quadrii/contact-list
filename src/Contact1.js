import React, {useState} from 'react';
import './App.css';
function Contact1 (props) {
    const [showAge, setShowAge] = useState(false);
    return(
        <div className="contact-card">
            <img src={props.avatarUrl} alt="profile"/>
            <div className="user-details">
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <button onClick={()=>setShowAge(!showAge)}>Show Age</button>
                {showAge && <p>Age: {props.age}</p>}
            </div>
        </div>
    );
}

export default Contact1;