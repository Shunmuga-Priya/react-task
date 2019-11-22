import React from 'react';
import User from './User';
import Password from './Password';
import Hint from './Hint';
import './Form.css';

class Details extends React.Component{
    state={
        UserName:"",
        password:"",
        hintName:"",
        submitUser:"",
        submitPass:"",
        submitHint:"",

    }
    submitUser =(e)=>{
        this.setState({
            submitUser :this.state.UserName

          })
    }

    submitPass =(e)=>{
        this.setState({
            submitPass :this.state.Password
          })
    }

    submitHint =(e)=>{
        this.setState({
            submitHint :this.state.Hint
          })
    }
  
    submitChange =(e)=>{
            this.setState({
                [e.target.name]:e.target.value
                
            })
        }
    render(){
        return (
            <div  className = "form_alter " onChange={this.submitChange}>
                <div className="alter"> 
                   <label>User Name:</label>
                   <input type="text" name="UserName" value={this.state.UserName}></input><br></br>
                   <button type ="submit" onClick={this.submitUser}>Submit</button>
                   <p>{this.state.submitUser}</p>
                </div>  
                
                <div className="alter">
                   <label>Password:</label>
                   <input type="password"  name="password" value={this.state.password}></input><br></br>
                   <button type ="submit" onClick={this.submitPass}>Submit</button>
                   <p>{this.state.submitPass}</p>
                </div>  

                <div className="alter">
                   <label>Hint:</label>
                   <input type="text"  name="hintName" value={this.state.hintName}></input><br></br>
                   <button type ="submit" onClick={this.submitHint}>Submit</button>
                   <p>{this.state.submitHint}</p>
                </div>    

                <User uname = { this.state.UserName}/>
                <Password pname= {this.state.password}/>
                <Hint hname = {this.state.submitUser}/>
            </div>
        )
    }
}
export default Details;