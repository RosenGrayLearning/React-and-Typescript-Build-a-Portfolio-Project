import React from "react";

const EventComponent : React.FC = () => {

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
    }
    const onDragStart = (event:React.DragEvent<HTMLDivElement>) => {
        console.log(event)
    }

    return(
        <div>
            <input onChange={onChange} type="text" />
            <div onDragStart={onDragStart} style={{border:'1px solid red',width:300}} draggable>Drag me!</div>
        </div>
    )
}

export default EventComponent;