import React, {Component} from "react";
import "./Contact.css";

class ContactUs extends Component {
    state = {
      lastname: "",
      firstname: "",
      mail: "",
      select: "",
      message: ""  
    };


    handleChange = (event) => {  
        this.setState({[event.target.name] : event.target.value});
    };
     
    handleSubmit = (event) => {
            event.preventDefault();
    alert(`Hello ${this.state.lastname} ${this.state.firstname}, this service is in the process of being developed.
    Please renew your request.`);
  }
    
    render (){
        return(
            <div className="contact">
                <form className="contact-form" id="contact-form" onSubmit={this.handleSubmit}>
                            <p id="contact-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex velit et? Facere provident
                            laudantium consequatur dolor harum numquam animi illum? Voluptate enim vitae voluptates perspiciatis
                            quia adipisci est consequatur. </p>
                        <allinput>     
                            <capture className="capture" id="capture-input">
                                <section id="section">
                                    <label>
                                    <input className="contact-lastname" placeholder="Lastname" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                                    <input className="contact-firstname" placeholder="Firstname" name="firstname"  value={this.state.firstname} onChange={this.handleChange}/>
                                    </label>
                                </section>
                                <adressmail>
                                    <input id="contact-mail" type="text" placeholder="@" name="email"/>
                                </adressmail>
                                <contactselect>
                                    <select id="choicelist" name="choicelist" >
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
                                <textarea id="contact-message" placeholder="Message" name="message" rows="10" cols="50"></textarea> 
                            </message>
                        </allinput>    
                            <input id="submit" type="submit" value="Send" />       
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