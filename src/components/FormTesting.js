import React from 'react';
import uuid from 'uuid';

class FormTesting extends React.Component{
    state = {
        id:null,
        Name:"",
        Gmail:"",
        group:[],
    }
    submitData = (e) => {
        console.log("e-value",e);
        e.preventDefault();
        var Name= e.target.elements.Name.value
        var Gmail = e.target.elements.Gmail.value
        var id = uuid();
       
        this.setState({
            id,
            Name,
            Gmail
        })

        this.state.group.push({id,Name,Gmail})
        
        e.target.elements.Name.value="";
        e.target.elements.Gmail.value="";
    }
    deleteFunction= (e)=>{
        // alert(id)
        this.state.group.splice(e)

        this.setState({})
    }

    
    editFunction=(e)=>{
        console.log(e,"name")

        var Name= this.state.group[e].Name
        
       var Gmail = this.state.group[e].Gmail

       this.setState({
       })
       
    }
  
   
    render(){
        // alert(this.state.group)
        // alert(this.nameEdit)
        return(
            <>
                <form onSubmit={this.submitData}>
                    <input type="text" name="Name" value={this.Name}/><br></br>
                    <input type="text" name="Gmail" value={this.Gmail}/><br></br>
                    <button type="submit">Submit</button>
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

export default FormTesting;