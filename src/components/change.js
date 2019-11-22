import React from 'react';

class Simpleform extends React.Component{
    state={
        firstname:"",
        lastname:"",
        Name:"" ,
        Name2:""
        }
        npm 
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
               
                Name:  <input type = "text" name={"firstname"}
                value ={this.state.firstname}></input><br></br>              
                               
               Gamil:  <input type ="text" name={"lastname"}
                value={this.state.lastname}></input><br></br>
                
                <button  onClick={this.total}>Click</button><br></br>
                
                <p>{this.state.Name}</p>
                <p>{this.state.Name2}</p>
               
                </div>
            </div>
        )
    }
}
export default Simpleform ;