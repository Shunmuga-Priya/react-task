import React from 'react';

class Simpleform extends React.Component{
    state={
        firstname:"",
        lastname:"",
        Name:"" ,
        Name2:""
        }
        
    formclick=(e)=>{
        this.setState({
            [e.target.name]:e.target.value});
    }

    total = (e) =>{
        this.setState({
            Name:this.state.firstname,
            Name2:this.state.lastname

        })
    }
    
    render(){
        return(
            <div>
                <div onChange={this.formclick}>
                <label>First name:</label>
                
                <input type = "text" name={"firstname"}
                value ={this.state.firstname}></input>                
                
                <label>Last Name:</label>
                
                <input type ="text" name={"lastname"}
                value={this.state.lastname}></input>
                
                <button type="submit" onClick={this.total}>Submit</button>
                
                <p>{this.state.Name}</p>
        <p>{this.state.Name2}</p>
               
                </div>
            </div>
        )
    }
}
export default Simpleform ;