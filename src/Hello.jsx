function Hello(props){
    if(props.islogged){
         return(
           <p>welcome {props.username}</p>
        );
    }else{
        return(
            <p>Please log in </p>
        )
    }
}
export default Hello