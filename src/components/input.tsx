import "./input.scss";
// import { useState } from "react";

interface InputProp {
  style:any,
  defaultValue: string,
  placeholder: string
}

export default function Input({defaultValue, style, placeholder}: InputProp) {
  function inputFocus(e:any){
    e.target.parentNode.setAttribute("class","input_wrapper is-focus");
  }
  function inputBlur(e:any){
    e.target.parentNode.setAttribute("class","input_wrapper");
  }

  return (<div className={`input_wrapper`} style={style}>
    <input
      type="text"
      className={`input__inner`}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onFocus={(e)=> inputFocus(e)}
      onBlur={(e) => inputBlur(e)}
    />
  </div>)
}
