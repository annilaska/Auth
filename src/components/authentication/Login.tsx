import React from "react";
import { NavLink } from 'react-router-dom';
import AuthenticationForm from './AuthenticationForm';
import './Login.scss'
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setUser } from '../../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Login: React.FC = () => {
   
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const handelLogin = (email: string, password: string) => {
        const auth = getAuth();
        
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user)
            dispatch(setUser({
              email: user.email,
              token: user.refreshToken,
              id: user.uid,
              name: user.displayName,
              image: user.photoURL,
            }))
            navigate('/')
        })
        .catch(() => alert('Invalid user!'))
        
    }

    return (
        <div className='loginBlock'>
            <AuthenticationForm title="sign in" onSubmit={handelLogin} />
            <p>I have not an account.
                <NavLink className='loginLink' to={'/registar'}>
                   Sign up
                </NavLink>
            </p>
        </div>
    )
};


export default Login
