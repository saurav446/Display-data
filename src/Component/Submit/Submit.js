import React, { useEffect, useState } from 'react';
import { Button, Container,Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const Submit = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  

  const init = {
        Name:'',
       Email:'',
       Number:''
  }
  const [inputs,setInput]  =  useState(init); 
  const [value,setValue] = useState([])
    

    const {names,email,number} = inputs;
       const hendlChange = (e) =>{
          setInput({...inputs,[e.target.name]:e.target.value})
        }
      const onSubmit = () =>{   
        reset()
        setValue([...value,inputs])  
      }
   const deletes = (index) =>{
     const newList = value;
     newList.splice(index,1);
     setValue([...value])
   }

   
   useEffect(() =>{
     const getZ = localStorage.getItem('value')
     const AllSet = JSON.parse(getZ) 
     if(AllSet){
      setValue(AllSet)
     }
     
   },[])

   
   useEffect(() =>{
    const setZ = JSON.stringify(value)
    localStorage.setItem('value',setZ)
  },[value])

    return (
        <div>
          <Container >
            <div className="submit ">
              <h2>User Input</h2>
              <form    onSubmit={handleSubmit(onSubmit)}>
                
              <input
              {...register("names", { required: true,minLength: 5 })} 
              value={names} name="names"
              onChange={(e) =>{hendlChange(e)}} 
                type="text" placeholder="Name"  
                required
                /><br /> 
            {errors.names && <p className="red">This name minLength 5 character</p>}

               <input value={email}
              name="email"
              {...register("email", { required: true, })} 
              className="mt-1"
              onChange={(e) =>{hendlChange(e)}} type="email"
               placeholder="Email"  /><br />
              
            {errors.email && <p className="red">This email </p>}
              <input
              {...register("numbers", { required: true,maxLength: 11,minLength: 11 })} 
              value={number} onChange={(e) =>{hendlChange(e)}} 
               className="mt-1"  type="number" placeholder="Phone Number" name="number"
              /><br />
              
            {errors.numbers && <p className="red">This number length 11 character </p>}
              
              <input className="mt-1" type="submit" />
            </form>
  
          </div>
        
        <div className="mt-3" style={{textAlign:'left'}}>
        <div><h3>User List :{value.length}</h3></div>
        
       {
         value.map((pd,index) =>{
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