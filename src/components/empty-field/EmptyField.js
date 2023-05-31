import './EmptyField.css'

function emptyField({type,text}) {
    return (
        <input type={type} className='empty-field' placeholder={text} />
    )
}

export default emptyField