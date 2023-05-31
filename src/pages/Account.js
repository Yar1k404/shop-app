import EmptyField from "../components/empty-field/EmptyField";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import './Account.css'

function Account() {
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='pages-wrapper'>
            <div className="login-form">
                Enter your name
                <EmptyField type={'text'} text={'write your name...'}/>
                Enter your password
                <EmptyField type={'password'} text={'write your password...'}/>
                Repeat your password
                <EmptyField type={showPassword ? 'text' : 'password'} text={'repeat your password...'}/>

                <button onClick={toggleShowPassword} className='showPassword-btn'>
                    {showPassword ? <FaEyeSlash/> : <FaEye/>}
                </button>

                <NavLink to='/react-shop' className='login-btn'>Login</NavLink>
            </div>
        </div>
    )
}

export default Account