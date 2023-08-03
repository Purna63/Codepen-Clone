// import { useEffect } from "react"; 
import Header from "./Header";
import Code from "./Code";
import Result from "./Result";


const Home = () =>{
    // useEffect(()=>{
    //         document.title='{props.data}'
    //     },[]);   
    return(
        <>
         <Header />
         <Code />
         <Result/>
        </>
       
    )
}

export default Home;