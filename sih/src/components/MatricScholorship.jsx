import React from 'react'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { popularProducts } from '../data';
const Wrapper = styled.div`
// display:flex;
justify-content:space-between;
`

const Container = styled.div`
    border: 1px solid #B5B5B5;
    margin:20px 25px;
    width:460px;
    height:340px;
    // display:flex;
    transition: all 0.5s ease;
    // justify-content:center;
    background-color: white;
    position:relative;
    border-radius:10px;
    &:hover{
      transition: all 0.5s ease;
      transform: scale(1.05);
  }
    
    
`;



const Button = styled.div`
background-color: #b6c7c6;
margin-left:auto;
margin-right:auto;
border-radius:5px;
display:flex;
align-items:center;
justify-content:center;
height:20%;

width:92%;
`

const Heading = styled.div`

font-weight: 700;
color:black;
text-align:left;
margin:7% 5%;
font-family: 'Roboto';

display:flex;
flex-direction:column;
height:10%;
transition: all 0.5s ease;

font-size: 16px;
line-height: 150%;

`

;
const Desc = styled.p`

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
margin:5% 5%;
color: #000000;
`
const AwardElig = styled.div`
margin:0px 20px;

`
const AwardTitle = styled.p`
font-weight:700;
`

const AwardDesc = styled.p`
margin:5px 0px;
font-size:13px;
width:100%;
font-weight:500;
`
const Wrapper1 = styled.p`
background-color: #24A19C;
margin:50px 0px;
display:flex;
color:white;
flex-direction-column;
justify-content:space-between;
margin-top:auto;
margin-bottom:auto;
height:40%;

`
const HeadingContainer = styled.div`
width:50%;
`

const Wrapper2 = styled.div`
height:50%;
display:flex;
flex-direction:column;
justify-content:space-between;

`

const MatricScholorship = ({item}) => {
  return (
    <Wrapper >
    <Container >
        
        
        <Heading >
            
                {item.title}

            
        </Heading>
        

        <Desc>
            Deadline: {item.deadline}
        </Desc>
        <Wrapper2>
        <Wrapper1>
        <AwardElig>

            <AwardTitle>Award</AwardTitle>
            <AwardDesc>{item.award}</AwardDesc>

        </AwardElig>

        <AwardElig>

            <AwardTitle>Eligibility</AwardTitle>
            <AwardDesc>{item.eligibility}</AwardDesc>

        </AwardElig>

        </Wrapper1>
        <Button><a href={item.view} style={{textDecoration:"none",color:"black"}}>View Scholarship</a></Button>
        </Wrapper2>

    </Container>
    
   
    </Wrapper>
  )
}

export default MatricScholorship