// import React, { useState } from 'react';



// function TextForm(props) {
//     const handleUpClick=()=>{
//     console.log("uppercase was clicked");
//     let newText=text.toUpperCase();
//     setText(newText)
//     props.showAlert("converted to upper","success")
//     }
//     const handleLowClick=()=>{
//         console.log("uppercase was clicked");
//         let newText=text.toLowerCase();
//         setText(newText)
//         props.showAlert("converted to lower case","success")
//         }
    

//     const handleOnChange=(event)=>{
//         console.log("On change");
//         setText(event.target.value);
//     }
//     const clearText=()=>{
//       let newText=" "
//       setText(newText)
//     }
//     const handleCopy=()=>{
//         var text=document.getElementById("myBox"); 
//         text.select();
//         navigator.clipboard.writeText(text.value);
//     }
//     const handleSpaces=()=>{
//       let newText=text.split(/[ ]+/);
//       setText(newText.join(" "))
//     }
//     const [text, setText] = useState(' ');
//     //setText("new text");
//   return (
//     <>
//     <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
     
//       <h1>{props.heading} </h1>
//     <div className="mb-3">
   
//     <textarea clasName="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ width: '100%',backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} ></textarea>
//     </div>
//     <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
//     <button  className='btn btn-primary' onClick={handleLowClick}>Convert to lowercase</button>
//     <button  className='btn btn-primary mx-2' onClick={clearText}>Clear text</button>
//     <button  className='btn btn-primary mx-2' onClick={handleCopy}>Copy text</button>
//     <button  className='btn btn-primary mx-2' onClick={handleSpaces}>remove extraspaces</button>
//    </div>
//    <div className='container my-3'style={{color:props.mode==='dark'?'white':'black'}}>
//     <h2>Your text summary</h2>
//     <p>{text.split(" ").length} words and {text.length} characters</p>
//     <p>{0.008 * text.split(" ").length } minutes read</p> 
//     <h2>Preview</h2>
//     <p>{text}</p>
//    </div>
//     </>
//   )
// }

// export default TextForm
import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClearClick = () => {
        setText("");
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="container">
            <h1>Enter the text to analyze</h1>
            <textarea 
                className="form-control" 
                value={text} 
                onChange={handleOnChange} 
                rows="8">
            </textarea>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
            
            <h2>Your text summary</h2>
            <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
            <p>{0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)} minutes read</p>
            
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
    );
}