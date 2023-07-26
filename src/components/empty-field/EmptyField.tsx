import React from "react";
import './EmptyField.css'

interface EmptyFieldProps {
    type: string,
    text: string
}

function EmptyField({type,text}: EmptyFieldProps) {
    return (
        <input type={type} className='empty-field' placeholder={text} />
    )
}

export default EmptyField