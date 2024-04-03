import Header from '../conponents/header/Header';
import Navbar from '../conponents/navbar/Navbar';
import Footer from '../conponents/footer/Footer';   


const Homestay = (props) => {
    // console.log("here is homestay"+ props.loginUser.fname);


    return (
      
        <div>
            {/* pass login user and logout function to navbar */}
            <Navbar loginUser={props.loginUser} logoutUser={props.logout}/>
            <Header/>
            
            <h1>Homestay</h1>   
            <Footer/>
        </div>
           
    )
}


export default Homestay;