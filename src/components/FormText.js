import React , {useState} from 'react'

export default function FormText(props) {
    const handleOnClk =()=>{
        console.log("Haris Ali BSCS")
        // setText('Im Muhammad  Haris Ali')
        const newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChge =(event)=>{
        setText(event.target.value)
        console.log(text)

    }
    const OnLCaseClk=()=>{
        const Lercase = text.toLowerCase()
        setText(Lercase)
    }
    const [text, setText] = useState("Hello Haris");
    
     
    return (
        <>
        <div className="my-3">
            <h2>{props.heading}</h2>    
        </div>
        <div className="mb-3">
            <label htmlFor="mybox" className='form-label' id="addon-wrapping">Write your text here</label>
            <textarea className="form-control" id='mybox'  value={text} onChange={handleOnChge} rows='3' />
        </div>
        <button className='btn btn-primary mx-2' onClick={handleOnClk} >Set to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={OnLCaseClk} >Set to LowerCase</button>

        <div className='my-3'>
            <h2>Text Summery</h2>
            <p>The total number of Words {text.split(' ').length} and characters {text.length}</p>
            <p>Read in {0.008 * text.split(' ').length}per second</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
         </>
    )
}