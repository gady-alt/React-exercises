import propTypes from 'prop-types'
function Hello({
    username = 'Guest',
    isloggedIn = false
}){
    /* 
    // by using if condition
              if(props.islogged){
         return(
           <p>welcome {props.username}</p>
        );
    }else{
        return(
            <p>Please log in </p>
        )
    }
    */
    // by using terinal operator 
     /* return(
      props.isloggedIn? <h2 className="logged">Welcome{props.username}</h2>:
                <h2 className="notlogged">Please login</h2>
      );
      */
     //for best reading
     const loggedIn = <h2 className="logged">Welcome {username}</h2>
     const notLogged = <h2 className="notlogged">Please login {username}</h2>
      return(
      isloggedIn? loggedIn : notLogged);
}
Hello.propTypes = {
    username: propTypes.string,
    isloggedIn: propTypes.bool
}
export default Hello