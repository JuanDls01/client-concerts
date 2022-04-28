import {useEffect} from 'react';
import ReactDom from 'react-dom';

export default function Modal({children}){
    const portalNode = document.createElement('div');
    // const newContent = document.createTextNode("Hola!¿Qué tal?");
    // portalNode.appendChild(newContent);

    useEffect(() => {
        document.body.appendChild(portalNode);
        return ()=>{
            portalNode.remove();
        }
    }, [portalNode]);
    return ReactDom.createPortal(children, portalNode);
}