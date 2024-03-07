import "./button.css";
import { ReactNode } from "react";
interface ModalRendererProps{
    title: string,
    children: ReactNode,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}
function Button(props:ModalRendererProps){
    // console.log("props", props)
    return (
        <button className="parameButton" onClick={props.onClick}>{ props.children }</button>
    )
}

export default Button