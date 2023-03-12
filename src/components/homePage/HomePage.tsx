import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './HomePage.scss';
import { useAuth } from '../../hooks/useAuth'
import Profile from '../profile/Profile';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../farebase'
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setUser } from '../../store/slices/userSlice'

const HomePage: React.FC = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user !== null) {
                dispatch(setUser({
                    email: user.email,
                    token: user.refreshToken,
                    id: user.uid,
                    name: user.displayName,
                    image: user.photoURL,
                
                }))
            }
        })
    }, [])

    const { isAuth } = useAuth()

    return isAuth ? (
        <>
            <Profile />
        </>
    ) : (
        <>
            <h2>Welcome to My App!</h2>
            <p>You need 
                <NavLink className='loginLink' to={'/registar'}>
                    Sign up
                </NavLink> to use this app.</p>
            <p>Already have an account? 
                <NavLink className='loginLink' to={'/login'}>
                    Login
                </NavLink>
            </p>
        </>
    )
};


export default HomePage;