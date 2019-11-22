import React  from 'react';

class Edit extends React.Component{
    state={
        name:"",
        mail:"",
        tot:""
        // formArray:[{id:1,name:"ajay"},{id:2,name:'sujay'}]
       
    }
    
    SubmitClick=(e)=>{
        e.preventDefault();
        var name =e.target.elements.name.value
        var email= e.target.elements.email.value
        

        this.setState({
         tot:name+email

        })
        // e.target.elements.name.value="";
        // e.target.elements.email.value="";
          
    }
    
    
    render(){
        // console.log("state updating....")
        return(
            // <>

           <form onSubmit={this.SubmitClick}>
                {/* {
                    this.state.formArray.map(val =><p>{val.id + "  " +val.name}</p>)
                }
              
             */}
                <p>Name: <input type = "text" name="name" ></input></p><br></br>
                <p>E-mail: <input type = "text" name="mail"></input></p><br></br>
                <button type = "submit" >Submit</button>
                <input typename="tot" value={this.state.tot}></input>
        
          
               
            
{/*                
                {
                    this.state.tot == true &&
                    <p>{this.state.name+"  "+this.state.mail}</p>
                }
                */}

</form> 
            // </>
        )
    }
}
export default Edit;
