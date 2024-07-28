
import React, {useState} from 'react';

function Contact() {

    const [name, setName] = useState("Guest");
    const [comment, setComment] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    let count = 0; // 'let' means that might be reassigned - if not, use 'const' 

    const handleClick = (name,e) => {
      count++;
      console.log(`Button clicked ${count} times by ${name}`);
      e.target.textContent = "OUCH!"
    };

    return (
        <div className="Contact">
            <h1><span>Contact</span><br/>Get In Touch. Ask for my resume or see if we can build something amazing together. I'd love to hear from you!</h1>

            <p>Name: {name}</p>
            
            <input type="text" value={name} onChange={handleNameChange} />
            
            <p>Comment: {comment}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Leave a comment."/>

            <button className="button" onDoubleClick={(e) => handleClick("Bro",e)}>Click me!</button>
        </div>
    );
}

export default Contact;