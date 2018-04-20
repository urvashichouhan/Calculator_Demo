import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Cal.css';
import Signup from './Signup.js'
import Cal from './Cal.js'
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class Login extends Component{
	constructor(){
		super();
		this.state={username:'',
		password:'',
		count:0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event){
		this.setState({[event.target.name]:event.target.value});
	}

	async handleSubmit(event) { 	
		const {count}=this.state;	
		event.preventDefault();
		if(this.state.username==='')
			alert('username is required');	
		if(this.state.password==='')
			alert('password is required');		
		var data={
			username:this.state.username,
			password:this.state.password,			
		}
		await axios.post('http://localhost:3030/hello1',data)		
	  	.then(res => {  debugger;     			
			var bool=(res.data);
			if(bool)	 {
				this.props.history.push("/Cal"); 
			}    
			else{
			alert("Invalid Username or password")
			}			
	  })					
	}

	render(){		
		return(
			<div className="container">				
				<h1>LOGIN</h1><br/><br/>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label >
							UserName:
						  <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
						</label> <br/><br/>
						<label >
							Password:
							<input className="form-control" type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
						</label> 
						<br/><br/>
						<input  className="btn btn-primary" type="submit" value="Submit" />
					</div>
				</form>
				<Link to="/Signup">Not Registered?</Link>
			</div>
		);
	}
}