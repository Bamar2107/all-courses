import React,{useState} from 'react';



export default function TextForm(props) {
    const[text, setText] = useState('');

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () =>{
        let newText = '';
        setText(newText);
    }

    const darkMode = () =>{
        document.getElementById('mytext').style.background="black";
        document.getElementById('mytext').style.color="white";
    }

    const handleOnchange = (event) =>{
        //console.log('On Change');
        setText(event.target.value);  //without this line we can't write inside the textarea, only handleOnChange function will call
    }
  return (
        <>
            <div className="container">
        <div class="m-3">
            <label for="mytext" class="form-label">{props.title}</label>
            <textarea type="text" value={text} onChange={handleOnchange} className="form-control" id="mytext" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        <button type="button" className="btn btn-primary mx-2" onClick={darkMode}>Dark Mode</button>
        </div>

        <div className="container my-4">
            <h3>Your text summary</h3>
            <p>total numbers of words is {(text.split(" ").length)-1} and total number of character is {text.length}</p>
            <p>{0.004 *(text.split(" ").length-1)} average minutes to read above text</p>
            <h3>Your Preview</h3>
            <p>{text}</p>
        </div>
        </>
  
  )
}
