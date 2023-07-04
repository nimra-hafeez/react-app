import React, {useState} from 'react'

export default function TextForm(props){
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleOnChange = (event)=>{
        console.log("OnChange");
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
    // setText = 'new text';
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'grey', color:props.mode==='dark'?'white':'#042743'}} id='myBox' rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>


        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p> 
            <h2> const text:string</h2>
            <p>{text.length>0?text: "Enter something in the textbox about preview it here"}</p>


        </div>
        </>
    )
}