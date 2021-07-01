import React, { useState } from 'react';

const Objects = () => {
    const [input,setInput] = useState(
        {name:'' ,names:'',namez:''}
      );
      const [user,setUser] = useState([])
      const {name,names,namez} = input;
    
      const ChangeInput = (e) =>{
          setInput({...input,[e.target.name]:e.target.value})
      }
      const submit = (e) =>{
        e.preventDefault()
        setUser([...user,input])
      }
    return (
        <div>
            <form onSubmit={e => submit(e)} >
           <input type="text" name="name"  required value={name} onChange={e => ChangeInput(e)} /> <br />
           <input type="text" name="names" required value={names} onChange={e => ChangeInput(e)} /><br />
           <input type="text" name="namez" required value={namez} onChange={e => ChangeInput(e)} /><br />
           <input type="submit" />
         </form>
       {
         user.map((pd,index) =>
          <div key={index}>
          <p>{pd.name}</p>
          <p>{pd.names}</p>
          <p>{pd.namez}</p>
          </div>)
       }
        </div>
    );
};

export default Objects;