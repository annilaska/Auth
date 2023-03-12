import { useNavigate } from 'react-router-dom';
import { Button, Toolbar, Typography, AppBar } from "@mui/material";
import { useAuth } from '../../hooks/useAuth'
import { useAppDispatch } from "../../hooks/reduxHooks";
import { removeUser } from '../../store/slices/userSlice'
import { signOut } from 'firebase/auth';
import { auth } from '../../farebase'
import './Header.scss'

const Header: React.FC = () => {

    const { isAuth, email } = useAuth()
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const handleClick = () => {
        signOut(auth)
        dispatch(removeUser())
        navigate('/login')
    };

    return (
        <AppBar position="static">
            <Toolbar className='appBar'>
                <Typography className='appBar_title' onClick={() => navigate('/')} variant="h6" component="div" >
                    My App
                </Typography>
                {isAuth && <Button color="inherit" onClick={handleClick}>Logout</Button>} 
            </Toolbar>
        </AppBar>
    )
};


export default Header;