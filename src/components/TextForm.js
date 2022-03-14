import React, {useState} from 'react';
export default function TextForm(prop) {
  const handleOnChange = (event) =>{
    console.log("handle On Change is clicked.");
    setText(event.target.value);
  }
  const changeIntoUpperCase = ()=>{
    console.log("change Into Upper Case is clicked.")
    let newtext= text.toUpperCase();
    setText(newtext);
   prop.showAlert('your entered Texet converted in to Upper Case', "success");
  }
  const changeIntoLowerCase = ()=>{
    console.log("change Into Lower Case is clicked.")
    let newtext= text.toLowerCase();
    setText(newtext);
    prop.showAlert('your entered Texet converted in to Lower Case', "success");
  }
  const clearText =()=>{
    console.log("clear text funcation is clicked.");
    setText("");
    prop.showAlert('Are you sure to clear your entered text', "success");
  }
const fistLatterInUpperCaseOfNewSentence = () => {
        let newText = text.split(". ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(". "));
        
  alert("your text is captalised as first latter of new sentence is change into upperCase");
    }
const colorText={
  color: '#131c03',
  font:'bold',
}
  const [text,setText] = useState();

  return (
    <>
    <div>
        <h1>{prop.heading}</h1>
        <div className="mb-8">
        <textarea className="form-control mx-auto bg-#87919c" style={colorText} id="textBox" placeholder='enter your text here...' value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className={`btn btn-primary btn-${prop.mode} my-3 mx-3`} onClick={clearText}>remove text</button>
        <button className={`btn btn-primary btn-${prop.mode} my-3 mx-3`} onClick={fistLatterInUpperCaseOfNewSentence}>Capitalized </button>
        <button className={`btn btn-primary btn-${prop.mode} my-3 mx-3`} onClick={changeIntoUpperCase}>Convert into UpperCase</button>
        <button className={`btn btn-primary btn-${prop.mode} my-3 mx-3`} onClick={changeIntoLowerCase}>Convert into LowerCase</button>
    </div>
    <div className="container">
      <h1>your text summary</h1>
      </div>
    </>
  );
}
