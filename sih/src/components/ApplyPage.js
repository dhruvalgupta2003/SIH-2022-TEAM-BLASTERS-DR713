import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import ss from '../Images/ss.jpg'
import tt from '../Images/tt.jpg'

import fill from '../Images/fill.jpg'
import submit from '../Images/submit.jpg'
import '../styles/apply.css'
import NewSliders from './NewSliders'
import { popularProducts } from '../data'
import { Link } from 'react-router-dom';
import MatricScholorship from './MatricScholorship'
import Chatzot from './Chatzot'

const Container=styled.div`
    padding:0px;
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
    background-color:white;
    padding-bottom:30px;
`
;
const Title = styled.p`
font-size:48px;
font-weight:500;
padding:50px ;
color:black;
text-align:center;
font-family:;
`

const Wrapper = styled.div`
background-color:white;
`
const Button = styled.div`
background-color:black;
margin-left:auto;
margin-right:auto;
border-radius:5px;
display:flex;
align-items:center;
justify-content:center;
height:40px;
color:white;
font-size:20px;
cursor:pointer;
width:40%;
`

export default function ApplyPage() {
    return (
        <>
        <NewSliders />
        <Wrapper>
        <Title>Scholorships</Title>
        </Wrapper>
        <Container>
        <Chatzot/>
        {popularProducts.map((item) => (

        <MatricScholorship item ={item} key={item.id} />
        
    ))}
    <Button ><a href='http://127.0.0.1:5000/recommend' style={{textDecoration:"none",color:"white"}}>Recommend me a scholarship</a></Button>
</Container>

            <h2 className='apply-heading'>How To Apply</h2>
            <div className="card-container">
                <Card number="01" cardHeading="Click on Apply" para="Click on the apply button to start the application process" image={ss} />

               <Link to='/signup' style={{textDecoration:"none",color:"black"}}> <Card number="02" cardHeading="Sign Up" para="If you don’t have an account sign up to create one." image={tt} /></Link>

               <Link to='/form' style={{textDecoration:"none",color:"black"}}><Card number="03" cardHeading="Fill the Forms" para="Fill all the forms presented with precise and credible information" image={fill}/></Link> 

                <Link to='/loginuser' style={{textDecoration:"none",color:"black"}}><Card number="04" cardHeading="Log In" para="Log In, If you have an account & Click on the submit button after filling the form." image={submit} /></Link>
                
            </div>
            
        </>
    )
}

