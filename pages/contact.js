import React,{useState} from 'react'
import styles from '../styles/contact.module.css' ;
const Contact = () => {
  const [name,setName]= useState('');
  const [phone,setPhone]= useState('');
  const [email,setEmail]= useState('');
  const [desc,setDesc]= useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={name,email,phone,desc};
  fetch("http://localhost:3000/api/postcontact", {
     
    method: "POST",

    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body:JSON.stringify(data)
})
 
.then(response => response.text())
 
// Displaying results to console
.then(data =>{ 
  
  console.log("Success",data);
alert("success")});
setPhone('');setName('');setDesc('');setEmail('');

  }
  
  
const handleChange=(e)=>{
  if(e.target.name=='phone'){
   setPhone(e.target.value);
  }
  else if(e.target.name=='name'){
   setName(e.target.value);
  }
  else if(e.target.name=='desc'){
   setDesc(e.target.value);
  }
 else if(e.target.name=='email'){
   setEmail(e.target.value);
  }
}


  return (

<div className={styles.container}>
  
    <form action="#" className="contact-form" onSubmit={handleSubmit}>
      <h5 className={styles.title}>Contact us</h5>
      <p className="description">Feel free to contact us if you need any assistance, any help or another question.
      </p>
      <div className={styles.mb3}>
        Name :<input type="text"  name='name' onChange={handleChange} id="name" value={name} placeholder="Name" required/>
      </div>
      <div className={styles.mb3}>
        Phone Number :<input type="text" name='phone' onChange={handleChange} id="phone" value={phone} placeholder="phone number" required/>
      </div>
      <div className={styles.mb3}>
       Email : <input type="email" name='email' onChange={handleChange} id='email' value={email} placeholder="Email" required/>
      </div>
      <div className={styles.mb3}>
       Write your Concern: <textarea id="desc" value={desc} onChange={handleChange} name='desc'  rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div className={styles.submit}>
        <input type="submit"  value="Send"/>
      </div>
    </form>
  
</div>
  )
}

export default Contact
