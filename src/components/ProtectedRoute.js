import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


const ProtectedRoute = ({isAuth: isAuth, component: Component, ...res}) => {
    return ( <Route {...res} render={(props)=>{
            if (isAuth){
                return <Component />
            }else{
                return( <Redirect to={ {pathname: '*', state: {from: props.location} }}/>
                );
            }
        }}
        />
     );
}
 
export default ProtectedRoute;