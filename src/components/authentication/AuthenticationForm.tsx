import React, { useState } from "react";
import './Login.scss';
import { useFormik } from 'formik';
//import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import ava from '../../assets/user.png'


type FormPropsType = {
  title: string,
  onSubmit: (email: string, pass: string, name: string, file: any) => void,
}

// const validationSchema = yup.object({
//   name: yup
//     .string()
//     .required('name is required'),

// }); 


const LoginForm: React.FC<FormPropsType> = ({ title, onSubmit }) => {
  const [uploading, setUploading] = useState('')
 
  const formik = useFormik({
    initialValues: {
      email: '',
      pass: '',
      name: '',
      image: ''
    },
    //validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values.email, values.pass, values.name, values.image);
    },
  });

  
  const uploadImage = (e: any) => {
    const file = e.target.files[0]
    formik.setFieldValue("image", file)
    setUploading(file.name)
  }
 
  return (
      <form onSubmit={formik.handleSubmit} className={title === 'registar' ? 'registarForm' : 'loginForm'}>
        <TextField
          id="email"
          name="email"
          label="email"
          variant="outlined"
          type='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          //error={formik.touched.name && Boolean(formik.errors.name)}
          //helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          id="pass"
          name="pass"
          label="password"
          variant="outlined"
          value={formik.values.pass}
          type='password'
          onChange={formik.handleChange}
          //error={formik.touched.name && Boolean(formik.errors.name)}
          //helperText={formik.touched.name && formik.errors.name}
        />
        {
          title === 'registar' && <>
            <TextField
              id="name"
              name="name"
              label="name"
              variant="outlined"
              value={formik.values.name}
              type='text'
              onChange={formik.handleChange}
              //error={formik.touched.name && Boolean(formik.errors.name)}
              //helperText={formik.touched.name && formik.errors.name}
            />
            <input 
              id="image"
              type="file" 
              onChange={(e) => uploadImage(e)}
              className="hiddenImageInput"
            />
            <label className="addImageBlok" htmlFor="image">
              <img className="image" src={ava} alt="avatar" />
              <span className="addImageText">{uploading === '' ? 'add avatar' : uploading}</span>
            </label>
          </>
        }

        <Button 
          className="submitBtn"
          color="primary" 
          variant="contained" 
          type="submit">
          {title}
        </Button>
      </form>
  );
};

export default LoginForm;