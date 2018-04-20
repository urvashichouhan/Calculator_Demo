import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Cal.css';
import Login from './Login.js'

export default class Signup extends Component{
	constructor(){
		super();
		this.state={
			username:'',
			password:'',
			email:'',
			phone:'',	  
	  };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event){
		this.setState({[event.target.name]:event.target.value});
	}

	handleSubmit(event) { 
 	 	if(this.state.username==='')
	 		alert('username is required');	
		if(this.state.password==='')
	 		alert('password is required');
	 	if(this.state.email==='')
	 		alert('email is required');	  
	  var data={
			username:this.state.username,
			password:this.state.password,
			email:this.state.email,
			phone:this.state.phone
 		}
 		axios.post('http://localhost:3030/hello', { data })
   .then(res => {
      console.log(res.data);
    })	  
	}

	render(){

		return(
			<div className="container">
		    <h1>SignUp</h1><br/><br/>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label >
	   					UserName:
	    			  <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
	  				</label> <br/><br/>
		  			<label >
					   	Password:
					    <input className="form-control" type="text" name="password" value={this.state.password} onChange={this.handleChange} />
	  				</label> 
	  				<br/><br/>
	  				<label >
					   	Email:
					    <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleChange} />
	  				</label> 
	  				<br/><br/>
	  				<label >
					   	Phone No:
					    <input className="form-control" type="number" name="phone" value={this.state.phone} onChange={this.handleChange} />
	  				</label> 
	  				<br/><br/>
	  				<input className="btn btn-primary" type="submit" value="Submit" />
  				</div>
				</form>	
				<Link to="/Login">Already have an account?</Link>
			</div>

		);
	}
}
