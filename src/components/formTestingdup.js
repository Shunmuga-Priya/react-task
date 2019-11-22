import React from 'react';
import uuid from 'uuid';

class FormTestingDuplicate extends React.Component{
    state = {
        id:null,
        Name:"",
        Gmail:"",
        group:[],
        editchange:true,
        currentstate:""
    }
    changeData = (e) => {  
        {
            this.setState({
              [e.target.name]:e.target.value});
        }
    }
    deleteFunction= (e)=>{
        this.state.group.splice(e,1)
        this.setState({})

    }
    clickData=(e)=>{
        e.preventDefault();
        var id = uuid();
        this.state.group.push({id:id,Name:this.state.Name,Gmail:this.state.Gmail})
        this.setState({Name:"",
    Gmail:""})
         }
    
    editFunction=(id)=>{
        
        this.setState(
            {
                Name:this.state.group[id].Name,
                Gmail:this.state.group[id].Gmail,
                editchange:!this.state.editchange,
                currentstate:id 
            }
        )
     }

     updatefunction=(e)=>{
         e.preventDefault()

        this.state.group[this.state.currentstate].Name=this.state.Name
        this.state.group[this.state.currentstate].Gmail=this.state.Gmail
        this.setState({editchange:!this.state.editchange,Name:"",Gmail:""})

     }
  
    render(){
        console.log(this.state.group)
        return(
            <>
                <form >
                    Name: <input type="text" name="Name" value={this.state.Name} onChange={this.changeData}/><br></br>
                    Gmail: <input type="text" name="Gmail" value={this.state.Gmail} onChange={this.changeData}/><br></br>
                    {this.state.editchange?
                    <button type="submit" className="btn btn-primary btn-sm" onClick={this.clickData}>Submit</button>
                        :
                    <button type = "reset" className="btn btn-primary btn-sm" onClick={this.updatefunction}>Update</button>
                    }
                </form>
               <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Gmail</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            this.state.group.map((val,Index)=>{
                                return(
                                    <tr>
                                        <td>{val.Name}</td>
                                        <td>{val.Gmail}</td>
                                        <button type = "reset"className="btn btn-primary btn-sm" onClick={()=>this.editFunction(Index)}>Edit</button>
                            
                                        <button className="btn btn-danger btn-sm"onClick={()=>this.deleteFunction(Index)}>Delete</button>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </>
        )
       
    }
}

export default FormTestingDuplicate;