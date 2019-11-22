import  React from 'react';
import uuid from 'uuid';

class Task_form extends React.Component{
    state={
    id : null,
    name:"",
    mail:"",
    groupData:[],
   
 }
  
    SubmitClick=(e) =>{
        e.preventDefault();
        // var id = e.target.elements.id.value
        var name = e.target.elements.name.value
        var mail = e.target.elements.mail.value
        var id = uuid();
        this.setState({
            id,
            name,
            mail
        })
        // console.log(id)
        name=e.target.elements.name.value=""
        mail= e.target.elements.mail.value=""
        {
            this.state.groupData.push({id,name,mail})
        }


    }
    render(){
        console.log(this.state.groupData)
        return(
            <>
           <form onSubmit={this.SubmitClick}>            
               
               Name: <input type="text" name="name"></input><br></br>
               mail: <input type="text" name="mail"></input><br></br>
               <button type = "submit" >Submit</button><br></br>

           </form>
           <table className="table">
                <thead>
                    <tr>
                        <th scope ="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col" >Mail</th>
                        <th scope ="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                       
                        {
                            this.state.groupData.map((val)=>{
                                return(
                                    <tr>
                                        {/* <td>{val.id}</td> */}
                                        <td>{val.email}</td>
                                        <td>{val.password}</td>
                                        <button type = "reset"className="btn btn-primary btn-sm">Edit</button>
                                        <button className="btn btn-danger btn-sm">Delete</button>
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
export default Task_form ;
