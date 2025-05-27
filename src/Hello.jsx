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
      return(
      props.islogged? <h2>Welcome{props.username}</h2>:
                <h2>Please login</h2>
      );
}
export default Hello