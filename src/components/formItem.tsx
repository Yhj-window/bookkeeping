import "./form.scss";
import { ReactNode } from "react";

interface formItemProp{
  label: string,
  labelWidth?: number,
  children: ReactNode
}

export default function FormItem({label,labelWidth,children}:formItemProp){
  return (
    <div className={`form-item`}>
      <div className={`form-item_label`} style={{width: `${labelWidth}px`}}>{label}</div>
      <div className={`form-item_content`}>{children}</div>
    </div>
  )
}
