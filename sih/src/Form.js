import React, { useState } from "react";
import styled from "styled-components";
// import { Mailer } from 'nodemailer-react'

// var smtpTransport = require('nodemailer-smtp-transport');

const Container = styled.div`
display:flex;
height:100vh;
align-items:center;
flex-direction:column;
justify-content:center;
// backdrop-filter: blur(70px);
// background-color:black;
// background: linear-gradient(0deg, rgba(151,216,231,1) 0%, rgba(253,187,45,1) 100%);
// background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(253,187,45,1) 62%);
// background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(253,187,45,1) 100%);
// background: linear-gradient(0deg, rgba(110,197,217,1) 0%, rgba(253,187,45,1) 100%);
`
const Img = styled.img`
width:100%;
height:100vh;
`
const Formm = styled.form`
position: absolute;  
border-radius: 10px;  
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
backdrop-filter: blur(5px);  
background: rgba(255, 255, 255, 0.1);  
// animation-delay: calc(-1s * var(--i));  
// animation: animate 10s linear infinite;  
box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);  
border: 1px solid rgba(255, 255, 255, 0.5);  
border-right: 1px solid rgba(255, 255, 255, 0.2);  
border-bottom: 1px solid rgba(255, 255, 255, 0.2);  
`
const Box = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:35px;
`
const Label1 = styled.label`
font-size:24px;
color:black;
font-weight:500;
margin-right:6px;`
const Label2 = styled.label`
font-size:24px;
font-weight:500;
color:black;
margin-right:6px;`
const Label3 = styled.label`
font-size:24px;
font-weight:500;
color:black;
margin-right:6px;`
const Label4 = styled.label`
font-size:24px;
font-weight:500;
color:black;
margin-right:6px;`
const Label5 = styled.label`
font-size:24px;
font-weight:500;
color:black;
margin-right:6px;`
const Label6 = styled.label`
font-size:24px;
font-weight:500;
margin-right:6px;`
const Label7 = styled.label`
font-size:24px;
color:black;

font-weight:500;
margin-right:6px;`
const Label8 = styled.label`
font-size:24px;
font-weight:500;
color:black;

margin-right:6px;`
const Label9 = styled.label`
font-size:24px;
color:black;
font-weight:500;
margin-right:6px;`
const Label10 = styled.label`
font-size:24px;
color:black;
font-weight:500;
margin-right:6px;`
const Label11 = styled.label`
font-size:24px;
font-weight:500;
color:black;
margin-right:6px;`
const Label12 = styled.label`
font-size:24px;
color:black;
font-weight:500;
margin-right:6px;`

const Column= styled.div`
display:flex;`

const Button = styled.button`
padding:5px;
font-size:15px;
border-radius:6px;
background-color:#090979;
color:white;
cursor:pointer;
border:0px;
margin-bottom:15px;
`

export const Form = () => {
  const defaultValue = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    gender: "",
    nationality: "",
    category: "",
    state: "",
    income: 0,
    qualification: "",
    marks_tenth: "",
    marks_twelfth: "",
  };
  const [userInfo, setUserInfo] = useState(defaultValue);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:5000/api/userinfos/";
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        // if no id is returned from backend throw error
        if (data._id) {
          setUserInfo(defaultValue);
          console.log("success");
        } else {
          throw Error("No data returned");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  //node mailer code
  
// var transporter = nodemailer.createTransport(smtpTransport({
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   port:587,
//   auth: {
//     user: 'hrsh0412@gmail.com',
//     pass: 'dgkzuyenftfkbqkx'
//   }
// }));


// const transport = {
//   host: 'smtp.gmail.com',
//   auth: {
//         user: 'hrsh0412@gmail.com',
//         pass: 'dgkzuyenftfkbqkx'
//       }

// }
// var studentCollection = []

// var arrayStudent = {
//   Name: "Nivesh Rawat",
//   EmailAddress : "niveshrawat2002@gmail.com",
//   PhoneNumber:"+919650703945"
// }


// var arrayStudent2 = {
//   Name: "Devesh",
//   EmailAddress : "devesh10tripathi@gmail.com",
//   PhoneNumber:"+919711071869"
// }

// studentCollection.push(arrayStudent);
// studentCollection.push(arrayStudent2);

// console.log(studentCollection);


// studentCollection.forEach(element => {
  
//   var mailOptions = {
//       from: "hrsh0412@gmail.com",
//       to: element.EmailAddress, 
//       subject: "Test Email From Harshu to " + element.Name,
//       text: "Hi dost " + element.Name
//   }

//   transporter.sendMail(mailOptions, function(error, info){
//       if (error) {
//         console.log(error);
//       } else {
//         console.log('Email sent: ' + info.response);
//       }
//     }); 

    // client.messages 
    // .create({ 
    //    body: 'Test SMS to ' + element.Name,  
    //    messagingServiceSid: 'MGab0f9b801c75b348b64f183def17ad5d',      
    //    to: element.PhoneNumber 
    //  }) 
    // .then(message => console.log(message.sid)) 
    // .done();

// });

  return (
    <Container>
      <Img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"/>
      {/* <h2>Form</h2> */}
      <Formm onSubmit={handleSubmit}>
        <Column>
          <Box>
            <Label1>First Name</Label1>
            <input
              name="first_name"
              id="first_name"
              type="text"
              value={userInfo.first_name}
              onChange={handleChange}
              required
            />
          </Box>
          <Box>
            <Label2>Last Name</Label2>
            <input
              name="last_name"
              id="last_name"
              type="text"
              value={userInfo.last_name}
              onChange={handleChange}
            />
          </Box>
        </Column> 

        <Column>
          <Box>
            <Label3>Email</Label3>
            <input
              name="email"
              id="email"
              type="email"
              value={userInfo.email}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <Label4>Phone Number</Label4>
            <input
              name="phone_number"
              id="phone_number"
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              value={userInfo.phone_number}
              onChange={handleChange}
            />
          </Box>
        </Column>


        <Column>
          <Box>
            <Label5>Gender</Label5>
            <input
              name="gender"
              id="gender"
              type="text"
              value={userInfo.gender}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <Label6>Nationality</Label6>
            <input
              name="nationality"
              id="nationality"
              type="text"
              value={userInfo.nationality}
              onChange={handleChange}
            />
          </Box>
        </Column> 


        <Column>

          <Box>
            <Label8>State</Label8>
            <input
              name="state"
              id="state"
              type="text"
              value={userInfo.state}
              onChange={handleChange}
            />
          </Box>

          <Box>
            <Label7>Category</Label7>
            <input
              name="category"
              id="category"
              type="text"
              value={userInfo.category}
              onChange={handleChange}
            />
          </Box>
        </Column>
        <Column>
          <Box>
            <Label9>Income</Label9>
            <input
              name="income"
              id="income"
              type="number"
              value={userInfo.income}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <Label10>Qualification</Label10>
            <input
              name="qualification"
              id="qualification"
              type="text"
              value={userInfo.qualification}
              onChange={handleChange}
            />
          </Box>
        </Column>


        <Column>
          <Box>
            <Label11>10th Marks</Label11>
            <input
              name="marks_tenth"
              id="marks_tenth"
              type="text"
              value={userInfo.marks_tenth}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <Label12>12th Marks</Label12>
            <input
              name="marks_twelfth"
              id="marks_twelfth"
              type="text"
              value={userInfo.marks_twelfth}
              onChange={handleChange}
            />
          </Box>
        </Column>
        <Button type="submit">Submit</Button>
      </Formm>
    </Container>
  );
};