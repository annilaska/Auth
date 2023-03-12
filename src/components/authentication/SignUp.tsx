import React, { useState } from 'react'
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setUser } from '../../store/slices/userSlice'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage } from '../../farebase'
import AuthenticationForm from './AuthenticationForm';
import s from './Login.module.css'
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";  
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const [err, setError] = useState(false)
  

  const handelRegistar = async (email: string, password: string, displayName: string, file: any) => {
    
    
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, displayName);
      
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on( 
      //@ts-ignore
        (error) => {
          setError(true)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
          .then( async(downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            })
          })
          .then(() => {
            console.log(res.user)
            dispatch(setUser({
              email: res.user.email,
              token: res.user.refreshToken,
              id: res.user.uid,
              name: res.user.displayName,
              image: res.user.photoURL,
            }))
            navigate('/')
          })
        }
      )
    } catch {
      setError(true)
    }
  }

  return (
    <div className='loginBlock'>
      <AuthenticationForm title="registar" onSubmit={handelRegistar} />
      <p>Already have an account.
                <NavLink className='loginLink' to={'/login'}>
                    Login
                </NavLink>
            </p>
      {err && <span>Something went wrong</span>}
    </div>
  )
}

export default SignUp