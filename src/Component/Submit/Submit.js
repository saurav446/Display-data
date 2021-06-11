import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';


const Submit = () => {
  
  const [inputs,setInput]  =  useState([]);   
  const [name,setName] =  useState('')  
  const [number,setNumber] =  useState('')
  const [email,setEmail] =  useState('')
   
    
   const listOfItem = (e) =>{  
     const newTodo ={
       id: new Date().getTime(),
       Name:name,
       Email:email,
       Number:number
     } 
     setInput([...inputs,newTodo])
     e.preventDefault(); 
     e.target.reset();
     setName('')
     setNumber('')
     setEmail('')
   }
   const deletes = (index) =>{
     const newList = inputs;
     newList.splice(index,1);
     setInput([...inputs])
   }
   useEffect(() =>{
     const getZ = localStorage.getItem('inputs')
     const AllSet = JSON.parse(getZ) 
     if(AllSet){
      setInput(AllSet)
     }
     
   },[])

   
   useEffect(() =>{
    const setZ = JSON.stringify(inputs)
    localStorage.setItem('inputs',setZ)
  },[inputs])

    return (
        <div>
          <Container >
            <div className="submit ">
              <h2>User Input</h2>
            <Form    onSubmit={listOfItem} >
                <Form.Control  className="w-50 mt-4" value={name} onChange={(e) =>{setName(e.target.value)}} name="name"  type="text" placeholder="Name" required />
                 <Form.Control className="w-50 mt-4" value={email} onChange={(e) =>{setEmail(e.target.value)}} type="name" placeholder="Email" required />
                <Form.Control value={number} onChange={(e) =>{setNumber(e.target.value)}}  className="w-50 mt-4" name="number"  type="text" placeholder="Phone Number" required /> 
                <Form.Control  className="w-50 mt-4 btn-primary"   type="Submit" value="Submit" required /> 
            </Form>
          </div>
        
        <div className="mt-5" style={{textAlign:'left'}}>
        <div><h1>User List :{inputs.length}</h1></div>
        

        
       {
         inputs.map((pd,index) =>{
           return (
             <div>
             <h5 className="mt-2">User No:{index + 1}</h5>
             <h2>Name:{pd.Name}</h2>
             <h2>Email:{pd.Email}</h2>
             <h2>Number:{pd.Number}</h2> 
             <Button onClick={() => deletes( index)}>Delete User</Button>
           </div>
           ) 
         })
       }
    </div>
    </Container>
        </div>
    );

}
  

export default Submit;