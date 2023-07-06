import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
const Container = styled.div`
    
    background-color:#24A19C;
    color:white;
    border-bottom:
    // border:2px solid black;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
`
const Wrapper = styled.div`

padding: 10px 20px;
border-bottom:2px solid lightgray;
display:flex;
justify-content:space-between;
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
align-items:center;
`
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`
;


;
const Center = styled.div`
text-align:center;
flex:1;



`;


;
const Button = styled.button`
font-weight: bold;
border:none;
margin:10px 5px;
color:white;
padding:0px 5px;
background-color:#24A19C;
font-size:17px;
cursor:pointer;
&:hover{
    color:rgba(355, 193, 70, 5.15) ;
}


`
const Image2 = styled.img`
  height:6vh;

  
`
const Right = styled.div`
flex:1;
display:flex;
align-items: center;
justify-content:flex-end;

`
;
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left:25px;

`
const Image = styled.img`
height:2vh;
margin-left:10px;

`
const Hemburger = styled.div`
display:none;
cursor:pointer;

`
const Bar = styled.div`
display:block;
width:25px;
height:3px;
margin: 5px auto;
-webkit-transition: all 0.3s ease-in-out;
transition: all 0.3s ease-in-out;
background-color:white;

`;
const Button1=styled.div`
height:40px;
color:black;
width:150px;
display:flex;
cursor:pointer;
align-items:center;
justify-content:center;
background-color:white;
border-radius:10px;
// border: 1.8px solid #000000;
&:hover{
    color:rgba(355, 193, 70, 5.15) ;
    border-color:rgba(355, 193, 70, 5.15)
}
`

const Navbar = () => {
 
  return (
    <Container data-aos={"fade"}>
     <Wrapper>
      <Left>
        <Image2 src="https://cdn.discordapp.com/attachments/891025496601661504/1012395361404473444/unknown.png" />
        </Left>
      <Center>
        <Link to="/"><Button>Home</Button></Link>
        <Link to="/applypage"><Button>Apply</Button></Link>
        <Link to='/aboutus'><Button>About</Button></Link>
        <Link to="/help"><Button>Help</Button></Link>
        <Link to='contactus'><Button>Feedback</Button></Link>
      
      </Center>
      <Right>
        {/* <MenuItem>Made In India</MenuItem> */}
        <Link to="/login" style={{textDecoration:"none"}}><Button1>Log In</Button1></Link>
        <Hemburger ><Bar></Bar>
        <Bar></Bar>
        <Bar></Bar></Hemburger>
      </Right>
     </Wrapper>
    </Container>
  )
}

export default Navbar;