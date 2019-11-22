import React from 'react';
import User from './User';
import Password from './Password';
import Hint from './Hint';
import './Form.css';

class Form extends React.Component{
        state={
            labelName:"",
            storeName:"",
        }
    
    render(){
        return(
            <div className = "form_alter">
   
   
    {/* USER    */}
                
                <label>User Name:</label>
               
               <input type="text" name="labelname"
                value={this.state.labelname}></input><br></br>
               
                <button type ="submit" onClick={this.labelButton}>Submit</button>
               

{/* PASSWORD */}
                <label>Password:</label>
                
                <input type="password" name="labelPass" value={this.state.labelPass}></input><br></br>
               
                <button type ="submit" onClick={this.buttonClick}>Submit</button>
              
{/* HINT */}
                <label>Hint:</label>
               
                <input type="text" name="hintName" value={this.state.hintName} onChange={this.hintNameChange}></input><br></br>
               
                <button type ="submit" onClick={this.hintClick}>Submit</button>


                
                
                
                
                
                <User/>
                <Password />
                <Hint/>
            </div>
        )
    }
}
export default Form; 