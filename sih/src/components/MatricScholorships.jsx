import React from 'react'
import styled from 'styled-components'
// import { popularProducts } from '../data';
import { useEffect,useState } from 'react';
import axios from 'axios'
import MatricScholorship from './MatricScholorship';
const Container=styled.div`
    padding:0px;
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
    background-color:white;
    

`
;


const Title = styled.p`

animation-duration:2s;
color: black;
font-weight: 700;
font-size: 60.0775px;
text-align:center;
font-family:'syne';
padding:20px;



`
const Wrapper = styled.div`
background-color:white;
padding:50px 0px;s


`

const Button= styled.button`

width: 140px;
height: 42px;
color:white;
border:none;
/* Yellow Gradient */
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 15px;
cursor:pointer;
background: linear-gradient(276.31deg, #EFB506 -25.96%, rgba(255, 193, 7, 0.15) 180.24%);
border-radius: 15px;
`
const OuterWrapper = styled.div`

`
const Title1 = styled.p`
// color: #AFAFAF;
// color:#7CB9E8;
// color:#d63e3e;
background: linear-gradient(186deg, rgba(144,155,132,1) 9%, rgba(138,149,123,1) 14%, rgba(106,115,77,1) 40%, rgba(75,83,32,1) 65%);
;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
font-weight: 700;
margin-top:5%;
font-size: 60.0775px;
text-align:center;
font-family:'syne';
padding:20px;



`


function MatricScholorships() {
  const [products,setProducts] = useState([]);
  const filterResult = (catItem)=>{
    const result = MatricScholorship.filter((curDate) =>{
      return curDate.state === catItem;
    });
    setProducts(result)
  }

  useEffect(()=>{
    const getProducts = async()=>{
      try{
        const res = await axios.get( `http://localhost:5000/api/products`)

        setProducts(res.data);
        console.log(res);

      }catch(err){
        console.log(err);
      }
    }
    getProducts();
  },[]);
  return (
    
      
    
    <Wrapper >
      {/* <Title1>Scholorships</Title1> */}
    <Button onClick={()=>filterResult('Delhi')}> Delhi</Button>
    <Container>
     
     {products.map((item) => (
        <MatricScholorship item ={item} key={item.id} />
    ))}


    </Container>
    
    </Wrapper>
    
  )
}

export default MatricScholorships