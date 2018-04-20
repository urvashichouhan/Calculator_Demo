import React,{Component} from 'react';
import './Cal.css';
import { Link } from 'react-router-dom';
export default class Cal extends Component{
	constructor(){
		super();
		this.state={
			firstNum:0,
			secondNum:0,
			op:''
		};
	}
	handleClickBtn(event){

	}
	handleClickOp(event){
		
	}
	handleClickRst(event){
		
	}
	render(){
		
		return(		
			<div className="container">
				<Link className="link" to="/Login">Logout?</Link><br/><br/>
				<h1>CALCULATOR</h1>	
				<p><h3>Welcome to the Calculator App!</h3></p>
				<p>Demo app in progress......!!</p>	<br/><br/>				
				<div className="caldiv">
					<input className="input" type="text" readOnly value="" /><br/><br/>
					<input className="btn" type="button" value='1' onClick={this.handleClickBtn.bind(this)}/>
					<input className="btn" type="button" value='2' onClick={this.handleClickBtn.bind(this)}/>
					<input className="btn" type="button" value='3' onClick={this.handleClickBtn.bind(this)}/>
					<input className="btn" type="button" value='+' onClick={this.handleClickOp.bind(this)}/><br/>
					<input className="btn" type="button" value='4' onClick={this.handleClickBtn.bind(this)}/>
					<input className="btn" type="button" value='5' onClick={this.handleClickBtn.bind(this)}/>
					<input className="btn" type="button" value='6' onClick={this.handleClickBtn.bind(this)}/>
					<input className="btn" type="button" value='-' onClick={this.handleClickOp.bind(this)}/><br/>
					<input className="btn" type="button" value='7' onClick={this.handleClickBtn.bind(this)}/>
					<input className="btn" type="button" value='8' onClick={this.handleClickBtn.bind(this)}/>
					<input className="btn" type="button" value='9' onClick={this.handleClickBtn.bind(this)}/>
					<input className="btn" type="button" value='*' onClick={this.handleClickOp.bind(this)}/><br/>
					<input className="btn" type="button" value='/' onClick={this.handleClickOp.bind(this)}/>
					<input className="btn" type="button" value='0' onClick={this.handleClickBtn.bind(this)}/>
					<input className="btn" type="button" value='C' onClick={this.handleClickRst.bind(this)}/>
					<input className="btn" type="button" value='=' onClick={this.handleClickOp.bind(this)}	/>
				</div>    
      </div> 
		);
	}
}
