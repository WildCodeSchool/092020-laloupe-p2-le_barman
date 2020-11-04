import React, {Component} from "react";
import "./Contact.css";

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
                <form className="contact-form" id="contact-form">
                    <p id="contact-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex velit et? Facere provident
                        laudantium consequatur dolor harum numquam animi illum? Voluptate enim vitae voluptates perspiciatis
                        quia adipisci est consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsa 
                        dolorem quidem aliquam nihil consequatur fugiat incidunt vitae asperiores, aliquid officiis deserunt
                         veritatis id aperiam, cum totam accusantium explicabo sequi!</p>
                    <section id="section">
                        <input className="contact-input" lastName= "lastname"></input>
                        <input className="contact-input" firstName= "firstname"></input>
                    </section>
                        <input id="contact-mail" mail = "email"></input>
                        <select name="choicelist" id="choicelist">
                            <option value="">--Please choose an option--</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <textarea id="contact-message" name="message" rows="10" cols="50"></textarea> 
                 </form>
                 <team>
                     <ul  className="team">
                        <li>
                        <img src="https://picsum.photos/200" alt="Maxence" className="img-team"/>
                        <p className="contact-name">Maxence</p>
                        </li>
                        <li>
                        <img src="https://picsum.photos/200?grayscale" alt="Valentin" className="img-team"/>
                        <p className="contact-name">Valentin</p>
                        </li>
                        <li>
                        <img src="https://picsum.photos/200?blur" alt="Fabien" className="img-team"/>
                        <p className="contact-name">Fabien</p>
                        </li>
                    </ul>
                 </team> 
                 
            </div>
            
        )
    }
} 


export default ContactUs;