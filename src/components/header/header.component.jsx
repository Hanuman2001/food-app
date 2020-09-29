import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {auth} from "../../firebase/firebase.utils"
import Dropdown from "../drop-down/drop-down.component"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

 function ButtonAppBar({currentUser}) {
  const classes = useStyles();
  const [hidden,setHidden]=useState('true');
  return (
    <div className="header">
      <AppBar position="static" style={{ background: '#000000' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>setHidden(!hidden)} >
            <MenuIcon  />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Link to="/" alt="home">
            Tasty Takeaway Food Centre
          </Link>
          </Typography>
          <Button color="inherit">
            {
              currentUser?<Link to="" onClick={()=>auth.signOut()}>
              SIGNOUT
              </Link>:<Link to="/login">
                SIGNIN
              </Link>
            }

          </Button>
        </Toolbar>
        {
          hidden?null:<div>
            <Dropdown  className="setting" />
          </div> 
        }
       
      </AppBar>
    </div>
  );
}
const mapStateToProps=({user:{currentUser}})=>({
  currentUser
 
})

export default connect(mapStateToProps)(ButtonAppBar)
