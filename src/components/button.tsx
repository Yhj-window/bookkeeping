import "./button.scss";
import { ReactNode } from "react";
interface ModalRendererProps{
    children: ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
function Button(props:ModalRendererProps){
    return (
        <button className="primary_button button hover:bg-blue-600 hover:border-blue-600" onClick={props.onClick}>{ props.children }</button>
    )
}

export default Button
