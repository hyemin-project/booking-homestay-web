import Header from '../conponents/header/Header';
import Navbar from '../conponents/navbar/Navbar';



const Homestay = (props) => {
    // console.log("here is homestay"+ props.loginUser.fname);


    return (
      
        <div>
            {/* pass login user to navbar */}
            <Navbar loginUser={props.loginUser} logoutUser={props.logout}/>
            <Header/>

            <h1>Homestay</h1>   
           
        </div>
           
    )
}


export default Homestay;