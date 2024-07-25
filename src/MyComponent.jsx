import React, {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployes, setIsEmployes] = useState(false);
    const [comment, setComment] = useState("");
    
    function handleNameChange(event){
        setName(event.target.value);
    }
    
    const incrementAge = () => {
        setAge(age + 1);
    }

    const decrementAge = () => {
        setAge(age - 1);
    }

    const resetAge = () => {
        setAge(0);
    }

    const toggleEmployes = () => {
        setIsEmployes(!isEmployes);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }
    
    return (
        <div>
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={handleNameChange} />

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={decrementAge}>decrement Age</button>
            <button onClick={resetAge}>reset Age</button>

            <p>Employes: {isEmployes ? "Yes" : "No"}</p>
            <button onClick={toggleEmployes}>Toggle Employes</button>

            <p>Comment: {comment}</p>
            <textarea value={comment} onChange={handleCommentChange}
            placeholder="Leave a comment."/>
        </div>
    );
}

export default MyComponent