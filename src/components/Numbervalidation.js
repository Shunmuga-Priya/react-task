import React from "react";
import "./Numbervalidation.css"

class  Number extends React.Component{


state={
    numbers:"",
    message:"",
    bordercolor:""
}


 onlyNumbers=(e)=> {

    var regex = /^[0-9\b]+$/;
    if (regex.test(e.target.value)) {
        this.setState({
            numbers:e.target.value,
            message:"",
            bordercolor:""
        })
    } else {
        this.setState({
            numbers:e.target.value,
            message:"Enter only numbers",
            bordercolor:"bordercolor"
        })
    }
  
  
  }

    render(){

    return(
        <form style={{marginTop:"30px"}}>

         <label >Numbers *</label>

      <input type="text" 
      className={`form-control ${this.state.bordercolor}`}
      placeholder="Numbers" 
      value={this.state.numbers} 
      required
      name="numbers"
      style={{width:"30%"}}
      onChange={this.onlyNumbers}
      >

      </input>
      <div style={{color:"red"}}>
      {this.state.message}
      </div>

      <button class="btn btn-primary" style={{marginTop:"30px"}} type="submit">Submit form</button>

        </form>

    )
    }
}

export default Number;