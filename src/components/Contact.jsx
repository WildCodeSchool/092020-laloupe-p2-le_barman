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
                            quia adipisci est consequatur. </p> 
                    <capture className="capture">
                        <section id="section">
                            <label>
                            <input className="contact-lastname" type="text" name="lastname"></input>
                            <input className="contact-firstname"type="text" name="firstname"></input>
                            </label>
                        </section>
                        <mail>
                            <input id="contact-mail" type="text" name="email"></input>
                        </mail>
                        <contactselect>
                            <select name="choicelist" id="choicelist">
                                <option value="">--Please choose an option--</option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </contactselect>
                        </capture> 
                    <message className="capture"> 
                        <textarea id="contact-message" name="message" rows="10" cols="50"></textarea> 
                    </message>       
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