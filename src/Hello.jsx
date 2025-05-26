function Hello(props){
    if(props.islogged){
         return(
           <p>welcome {props.username}</p>
        );
    }
    return(
        <p>come again</p>
    );
}
export default Hello