import React, {useState} from 'react'
import axios from 'axios'

function CreatePost() {

    const [input, setInput] = useState({
        title:'',
        desc:''
    })

    function handleChange(event){
        const{name,value} = event.target;
        setInput((prevInput)=>{
            return{
                ...prevInput,
                [name]:value
            }
        })
    }


    function handleClick(e){
        e.preventDefault();
        const newPost ={
            title: input.title,
            desc: input.desc
        }
        axios.post('http://localhost:3001/create', newPost);

    }


    return (

        <div className="mid">
            <h2>Make a Post</h2>
            <form action="">
                <label htmlFor="title">Whats it about?</label>
                <div><input onChange={handleChange} type="text" name="title" id="title" value={input.title}/></div>
                <label htmlFor="desc">More about it</label> 
                <div> <textarea onChange={handleChange} name="desc" id="desc" cols="50" rows="5" value={input.desc}></textarea></div>
                <button onClick={handleClick}>POST</button>
            </form>            
        </div>
    )
}

export default CreatePost