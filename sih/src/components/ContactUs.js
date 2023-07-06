import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Container = styled.div`
background-color:white;
padding:20px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column


`

const Wrapper = styled.div`
// background-color:rgba: (255, 255, 255, 100);
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background: white;
padding:20px;
width:48%;
height:49vh;
margin-right:40px;
border-radius:30px;


`
const Heading = styled.h2`
font-size:60px;
// margin-left:auto;
// margin-right:auto;
// margin-top:5%;
// color:#8946a6;
color:black;
// background: linear-gradient(186deg, rgba(144,155,132,1) 9%, rgba(138,149,123,1) 14%, rgba(106,115,77,1) 40%, rgba(75,83,32,1) 65%);
// ;
// 	-webkit-background-clip: text;
// 	-webkit-text-fill-color: transparent;


`


const Form = styled.form`
margin:40px 0px;
display:flex;
align-items:center;
justify-content:center;
// flex-direction:column;
// background-color:white;
// background: #d9d1f7;
background:#24A19c;
height:65vh;
width:70vw;
border-radius:17px;



`
const Image2 = styled.img`
  // height:55%;
  width:35%;
  margin:0px 35px;
  // margin-left:-4%;
  border-radius:15px;
  // position:absolute; 
  
`
const Input = styled.input`
  font-size: 18px;
  padding: 8px 20px;
  margin:10px 0px;
  display:flex;
  width:80%;
  margin-left:auto;
  margin-right:auto;
  background: #C4C4C4;
  // background-color:#1e1e1e;
  border: none;
  border-radius: 25px;
  ::placeholder {
    color: white;
  }
 
`
const Input2 = styled.input`
  font-size: 18px;
  
  padding: 50px 20px;
  margin:10px 0px;
  background: #C4C4C4;
  // background-color:#1e1e1e;
  border: none;
  width:80%;
  display:flex;
  margin-left:auto;
  margin-right:auto;
  border-radius: 22px;
  ::placeholder {
    color: white;
  }

`
const Button = styled.button`
  width:60px;
  height:30px;
  color:white;
  background-color: #24A19c;
  // background-color:white;
  font-weight:500;
  border:0px;
  border-radius:25px;
  display:flex;
  // margin-top:10px;
  padding:8px 7px;
  // align-items:center;
  // justify-content:center;
  cursor:pointer;
  margin-left:auto;
  margin-right:auto;
  text-align:center;
`

const ContactUs = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_w1uu05p', 'template_fchiugh', form.current, 'Af3_0D0-0Avq-mRps')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
  return (
        <Container>
          
            <Heading>Feedback</Heading>
                
           
            <Form ref={form} onSubmit={sendEmail}>
                <Image2 src='https://cdn.discordapp.com/attachments/885108791610322964/969512290049216542/gr.png'/>
                <Wrapper>
                <Input type="text" placeholder='Full Name' name='user_name' required/>
                <Input type="email" placeholder='Email' name='user_email' required/>
                <Input2 type="text-area" placeholder='Feedback' name='user_message' required/>
                <Button>SUBMIT</Button>
                </Wrapper>
            </Form>
            
        </Container>
  )
}

export default ContactUs