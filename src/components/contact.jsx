import React,{Component} from "react";
import Footer from "./footer";

class contact extends Component{

       

    render(){
        
        return(            
            <div className="contact1">   
            
              <img src="../Img/girl1.png"/>
              <p>SIGN UP FOR EMAILS AND</p>
              <h1>GET IN ON ALL THE ACTION</h1>
              <form action="/action_page.php">
   <input className="email" type="email" name="emailaddress" placeholder="    Enter your Email Address"></input>
  <input className="submit" type="submit"></input>
</form>
        
{/* <div className="contact2">
<h2>STAY CONNECTED</h2>
<p className="par"> WE’D LOVE TO HEAR FROM YOU! SEND A MESSAGE USING THE FORM BELOW.</p> */}
            
              <Footer/>   
   {/* </div>       */}
</div>
        );
    }
}

export default contact;