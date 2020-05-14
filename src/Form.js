import React, { Component } from 'react';
import './Form.css';
class Form extends Component {
    constructor(props){
        super(props);
        this.state = { Fullname: "Enter Your Name",Email:"Enter your Email id",Mobile:"Enter your number",Message:"Enter you Query here."}
    }
/* 
    handlename = (event) => {
        this.setState({Fullname :event.target.value})
    }
    handleemail = (event) => {
        this.setState({Email:event.target.value})
    }
    handlenumber = (event) => {
        this.setState ({Mobile :event.target.value})
    }
    handlemessage = (event) =>{
        this.setState ({Message :event.target.value})
    } */

    handlechange = (event) =>{
            this.setState({[event.target.name]: event.target.value})
    }

    handlesubmit = (event) => {
        /* alert(`My name is ${this.state.Fullname}. My Email id is ${this.state.Email}. 
        My number is ${this.state.Mobile}.My message is ${this.state.Message}`); */

        
        alert(JSON.stringify(this.state));
        event.preventDefault();

    } 

    render(){
        return(
            <div>
            <form onSubmit = {this.handlesubmit}>
            <label>Fullname</label><br/>
               <input type="text" name="Fullname" value={this.state.Fullname} onChange={this.handlechange}/><br/>
            <label> Email </label><br/>
                <input type="email" name="Email" value={this.state.Email} onChange={this.handlechange} /><br/>
            <label>Mobile</label><br/>
               <input type="number" name = "Mobile"value={this.state.Mobile} onChange={this.handlechange} /><br/>
               <label>Message</label><br/>
                    <textarea name="Message" value={this.state.Message} onChange={this.handlechange}/><br/>
                    <input type="submit" value="Send"/>
              </form>
            
            </div>
        )
      

        
    }
}
export default Form;