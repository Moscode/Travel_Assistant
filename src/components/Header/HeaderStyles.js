import { makeStyles } from "@material-ui/core/styles";
import { alpha } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
root: {
    flexGrow: 1,
},

title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
        display: 'block',
    },
},
search:{
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover':{
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
},
SearchIcon:{
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    PointerEvents: 'none',
},
inputRoot: {
    color: 'inherit',
},
inputInput:{
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus':{
            width: '20ch',
        },
    },
},
toolbar:{
    display: 'flex', justifyContent: 'space-between',
},
}));
