import React, { useEffect, useState } from 'react';
import { Button, Container,Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const Submit = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [inputs,setInput]  =  useState([]);   
  const [name,setName] =  useState('')  
  const [number,setNumber] =  useState('')
  const [email,setEmail] =  useState('')
    
   const onSubmit = (e) =>{  
      
     const newTodo ={
       id: new Date().getTime(),
       Name:name,
       Email:email,
       Number:number
     } 
     setInput([...inputs,newTodo]) 
     setName('')
     setEmail('')
     setNumber('')
   }
   const deletes = (index) =>{
     const newList = inputs;
     newList.splice(index,1);
     setInput([...inputs])
   }

   const heandleEdit = (id) =>{
     const editTodo = inputs.find((pd) => pd.id === id)
     setName(editTodo.name)
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
              <form    onSubmit={handleSubmit(onSubmit)}>
                
              <input
              {...register("names", { required: true,minLength: 5 })} 
              value={name}
              onChange={(e) =>{setName(e.target.value)}} 
                type="text" placeholder="Name"  
                required
                /><br /> 
            {errors.names && <p className="red">This name minLength 5 character</p>}

               <input value={email}
              
              {...register("emails", { required: true, })} 
              className="mt-1"
              onChange={(e) =>{setEmail(e.target.value)}} type="email"
               placeholder="Email"  /><br />
              
            {errors.emails && <p className="red">This email </p>}
              <input
              {...register("numbers", { required: true,maxLength: 11,minLength: 11 })} 
              value={number} onChange={(e) =>{setNumber(e.target.value)}} 
               className="mt-1"  type="number" placeholder="Phone Number"
              /><br />
              
            {errors.numbers && <p className="red">This number length 11 character </p>}
              
              <input className="mt-1" type="submit" />
            </form>
  
          </div>
        
        <div className="mt-3" style={{textAlign:'left'}}>
        <div><h3>User List :{inputs.length}</h3></div>
        
       {
         inputs.map((pd,index) =>{
           return (
             <div key={pd.id}>
             <h5 className="mt-2">User No:{index + 1}</h5>
             <h4>Name:{pd.Name}</h4>
             <h4>Email:{pd.Email}</h4>
             <h4>Number:{pd.Number}</h4> 
             <Button  onClick={() => deletes( index)}>Delete User</Button>
             <Button onClick={() => heandleEdit(index) } style={{marginLeft:'2rem'}}>Edit User</Button>
           </div>
           ) 
         })
       }
    </div>
    </Container>
        </div>
    );
   
}
  // saurav

export default Submit;