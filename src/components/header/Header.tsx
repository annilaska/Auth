import { useNavigate } from 'react-router-dom';
import { Button, Toolbar, Typography, AppBar } from "@mui/material";
import { useAuth } from '../../hooks/useAuth'
import { useAppDispatch } from "../../hooks/reduxHooks";
import { removeUser } from '../../store/slices/userSlice'
import { signOut } from 'firebase/auth';
import { auth } from '../../farebase'

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
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }} onClick={() => navigate('/')} variant="h6" component="span" >
                    My App
                </Typography>
                {isAuth && <Button color="inherit" onClick={handleClick}>Logout</Button>} 
            </Toolbar>
        </AppBar>
    )
};


export default Header;