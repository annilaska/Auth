import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import {
    Card, Container,
    CardHeader, Avatar,
    CardMedia, Typography,
    CardContent, Collapse,
    CardActions, IconButton, IconButtonProps
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert'
//import { Contact } from './Contact';
import { useAuth } from '../../hooks/useAuth'
import { useCropName } from '../../hooks/useCropName'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const Profile: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const { email, name, image, } = useAuth()
   
    return (
        <>
            <h2>Welcom!</h2>
            <Container maxWidth="xs">
                <Card>
                    <CardHeader 
                        avatar={
                            <Avatar sx={{ bgcolor: '#2569f0' }} aria-label="recipe">
                                {useCropName(name)}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={name}
                    />
                    <CardMedia
                        sx={{ height: '100%' }}
                        //@ts-ignore
                        image={image}
                        height="194"
                        component="img"
                        alt={name}
                    />

                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Contacts:</Typography>
                            {/* {
                                Object.values(contactsData)
                                    .map(f => {
                                        return <div key={f.userId}>{
                                            Object.keys(f.contacts).map(key => {

                                                return (
                                                    <Contact key={key} contactTitle={key} contactValue={f.contacts} />
                                                )
                                            })
                                        }</div>
                                    })
                            } */}
                        </CardContent>
                    </Collapse>
                </Card>
            </Container>
        </>
    )
};

export default Profile;