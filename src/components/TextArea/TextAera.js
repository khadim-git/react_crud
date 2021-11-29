import { React, useRef, useState } from 'react';
const TextAera = () => {

    const [format,setFormat] = useState();
    const [limit,setLimit] = useState();
    const [copy,setCopySuccess] = useState('Copy');
    const textAreaRef = useRef(null);
    
    const handleonChnage = (event) => {
        const text = event.target.value;
        setFormat(text);

        const count = text.length;
        setLimit(count)

    }
    const UpperCaseFunc = () => {
        const upCase = format.toUpperCase();
        setFormat(upCase);
    
    }

    const LowerCaseFunc = () => {
        const lowCase = format.toLowerCase();
        setFormat(lowCase);
        
    }
    const ClearCaseFunc = () => {
        setFormat('');
    }
    
    const copyToClipboard = (e) => {
      textAreaRef.current.select();
      const Success = document.execCommand('copy');

    if(Success)
       setCopySuccess('Copied!');
    }



     return(
         <>
            <div className="container mt-5">
                <div className="row">
                    <div className="form-group mt-10">
                    <label forHTML="exampleFormControlTextarea1">Enter your Text Here</label>
                    <textarea className="form-control" ref={textAreaRef} value={format} onChange={handleonChnage} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="col-sm-12 d-felx">
                    <button onClick={UpperCaseFunc} className="btn btn-primary m-2">UpperCase</button>
                    <button onClick={LowerCaseFunc} className="btn btn-success m-2">LowerCase</button>
                    <button onClick={ClearCaseFunc} className="btn btn-danger m-2">Clear</button>
                    <button onClick={copyToClipboard} className="btn btn-warning m-2">{copy}</button>
                    </div>
                    <h1>Count : {limit}</h1>
            </div>
        </div>
      
        </>

     )
}

export default TextAera

