import React, { useState } from 'react'

const Checkbox = () => {

const [value,setvalues] = useState({even: false});

    const checkAccount =(e)=>{
        setvalues({even: !value.even})
    } 
    console.log(value) 
     
     const submit =(e)=>{
          e.preventDefault();
           if (value.even == true) {
          alert("account succesfully created");
            
           }
     }



  return (


    <div>
        Baldev
        <form action="" onSubmit={submit}>
        <input type="checkbox" name="checkbox" id="" value={value} onChange={checkAccount} checked={value.even} />
          <button type="submit">click</button>
        </form>
    </div>
  )
}

export default Checkbox
