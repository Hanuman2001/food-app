import React from 'react';
import {Switch, Route} from "react-router-dom"
import Homepage from "./pages/homepage/homepage.component"
import ButtonAppBar from "./components/header/header.component"
import './App.css';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {setCurrentUser} from "./redux/user/user.actions"
import AboutUs from "./pages/about-us/about-us.component"
class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

     const {setCurrentUser} =this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => 
            setCurrentUser( {
              id: snapShot.id,
              ...snapShot.data()
            }));
        
      }



      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
  const {currentUser} =this.props
  return (
    <div className="App">
     <ButtonAppBar className="hello"/>
     <Switch>
     <Route exact path="/" component={Homepage} />
       <Route
            exact
            path='/login'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
           / >
      
      <Route  path="/aboutus" component={AboutUs} />
     
     </Switch>
    </div>
  );
}
}

const mapDispatchtoProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user)) 
})
const mapStatetoProps=state=>({
  currentUser:state.user.currentUser
})
export default connect(mapStatetoProps,mapDispatchtoProps)(App);
