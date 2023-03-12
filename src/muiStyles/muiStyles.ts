//import { makeStyles, Theme, createStyles } from '@mui/material';
//import { styled } from '@mui/material/styles';

// export const useHeaderStyles = makeStyles({
//     toolbarStyle: {
//        display: 'flex',
//        flexDirection: 'row',
//        flexWrap: 'nowrap',
//        justifyContent: 'space-between'
//    },
//    logo: {
//     cursor: 'pointer'
//    }
// })

export const useLoginFormStyles = {
    // formRegistar: {
    //     marginTop: '40px',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     height: '20rem'
    // },
    formLogin: {
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '12rem'
    },
    button: {
        width: '100px',
        marginTop: '25px'
    },
    addImageBlok: {
        display: 'flex',
        // flexDirection:'row',
        alignItems: 'center',
        color: 'DarkGray',
        marginTop: '15px',
        cursor: 'pointer'
    },
    image: {
        width: '40px',
        opacity: '0.5',
        marginRight: '1rem'
    },
    hiddenImageInput: {
        display: 'none'
    },
    textInput: {
        marginTop: '10px'
    }
}

// export const useProfileStyles = makeStyles((theme: Theme) => 
//     createStyles({

//         expand: {
//             transform: 'rotate(0deg)',
//             marginLeft: 'auto',
//             transition: theme.transitions.create('transform', {
//             duration: theme.transitions.duration.shortest,
//             }),
//         },
//         expandOpen: {
//             transform: 'rotate(180deg)',
//         },

//         cardStyle: {
//             marginTop: '30px',
//             marginBottom: '100px',
//         },
//         titleStyle: {
//             fontSize: '20px'
//         },
//         cardMediaStyle: {
//             borderRadius: '6px',
//             height: '300px'
//         },
//         contactsStyle: {
//             textAlign: 'start'
//         },
//         avatar: {
//             backgroundColor: "#3B52C4"
//         },
//         cardAction: {
//             display: 'flex',
//             flexDirection: 'row',
//             flexWrap: 'nowrap',
//             justifyContent: 'end'
//         },
//         Icon: {
//             alignSelf: "start"
//         }
//     })
// );
