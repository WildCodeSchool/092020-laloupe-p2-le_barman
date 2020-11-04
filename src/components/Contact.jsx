import React, {Component} from "react";


console.log('salut')
class ContactUs extends Component {
    state = {
      lastname: "lastname",
      firstname: "firstname",
      mail: "email",
      select: "",
      message: ""  
    }
    render (){
        return(
            <div className="contact">
               <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsa dolorem quidem aliquam nihil consequatur fugiat incidunt vitae asperiores, aliquid officiis deserunt veritatis id aperiam, cum totam accusantium explicabo sequi!</p>
                <label lastName= "lastname"></label>
                <label firstName= "firstname"></label>
                <label mail = "email"></label>
                <select name="choicelist" id="choicelist">
                </select>
                    <option value="">--Please choose an option--</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <textarea id="contact-message" name="message" rows="5" cols="33"></textarea>  
            </div>
            
        )
    }
} 


export default ContactUs;