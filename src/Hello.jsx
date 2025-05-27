function Hello(props){
    /*
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
     const loggedIn = <h2 className="logged">Welcome{props.username}</h2>
     const notlogged = <h2 className="notlogged">Please login</h2>
      return(
      props.isloggedIn? loggedIn : notlogged);


}
export default Hello