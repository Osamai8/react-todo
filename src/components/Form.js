import React from 'react'

const Form = ({ setInput, todos, setTodos, input }) => {
    const inputHandler = (e) => {
        setInput(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {
            text: input,
            completed: false,
            id: Math.random() * 1000
        }]);
        setInput('');
    }
    return (
        <form  >
            <input value={input} type="text" className="todo-input" onChange={inputHandler} />
            <button className="todo-button" onClick={submitHandler}>
                <i className="fa fa-plus-square"></i>
            </button>
        </form>
    )
}

export default Form;
