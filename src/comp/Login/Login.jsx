import React, { useRef } from 'react'
import "./Login.css"
import { Card, Container, Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Home from '../Home/Home';


const Login = () => {
  const navigate = useNavigate()

  const name=useRef()
  const password=useRef()
  const email=useRef()

  const localSignUp=localStorage.getItem("signUp")
  const localEmail=localStorage.getItem("email")
  const localPassword=localStorage.getItem("password")
  const localName=localStorage.getItem("name")


  const [show,setShow]=useState(false)

  useEffect(()=>{
    if(localEmail){
        setShow(true)
    }
  })

  const handleClick  = () =>{

    if (name.current.value&&email.current.value&&password.current.value) {

      localStorage.setItem("name",name.current.value)
      localStorage.setItem("email",email.current.value)
      localStorage.setItem("password",password.current.value)
      localStorage.setItem("signUp",email.current.value)
      alert("Account created successfully!!")
      window.location.reload()
      
    }
  }
  
  return (
    
    <div style={{height:"100vh"}}>
      
      <div className="login">
      
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>

      <Card className='w-100' style={{ maxWidth: '400px' , padding:"20px 20px", boxShadow: "-2px 5px 20px 5px #dcd8d8"}}>
      
        <Card.Body style={{padding:"20px 20xp" }}>
          <h1 className="text-center mb-4">Sign up</h1>
      
          <Form >
            <Form.Group  style={{ marginBottom: "20px", fontWeight: 'bold' }} controlId="formBasicEmail">
              <Form.Label htmlFor='name'>Name</Form.Label>
              <Form.Control id='name' type="text" placeholder="your Name" ref={name}/>
            </Form.Group>
      
            <Form.Group  style={{ marginBottom: "20px", fontWeight: 'bold' }} controlId="formBasicEmail">
              <Form.Label htmlFor='email'>Email address</Form.Label>
              <Form.Control id='email' type="email" placeholder="Enter email" ref={email}/>
            </Form.Group>
      
            <Form.Group style={{ marginBottom: "20px", fontWeight: 'bold' }} id='email'>
              <Form.Label htmlFor='password'>Password</Form.Label>
              <Form.Control type='password' id='password' placeholder="Password" ref={password}/>
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
      
            <Button className="w-100" 
            style={{backgroundColor:"#3F51B5"}} 
            type="submit"
            // onClick={} 
            onClick={() => {
              handleClick();
              navigate("/");
            }}
            >
              Log In
            </Button>
      
          </Form>
      
        </Card.Body>

      </Card>
      
      </Container>
      </div> 
    </div>
  )
}
import "./Login.css"

export default Login
