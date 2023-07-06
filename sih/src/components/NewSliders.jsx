import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NewSlider from './NewSlider';

const Container = styled.div`
background-color:white;
width:100%;
// height:80%;

`
const Wrapper = styled.div`

`
const Image = styled.img`
margin-left:auto;
margin-right:auto;
display:flex;
width: 100%;
//   height: 70%;
  object-fit: cover;
`
const Heading = styled.h1`
background: linear-gradient(186deg, rgba(144,155,132,1) 9%, rgba(138,149,123,1) 14%, rgba(106,115,77,1) 40%, rgba(75,83,32,1) 65%);
;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
font-weight: 700;
font-size: 60.0775px;

text-align:center;
font-family:'syne';
padding:6%;



`
const ImageContainer = styled.div`
height:600px;

`
const NewSliders = () => {
   
    const [products,setProducts] = useState([]);
    // const [filteredProducts,setFilteredProducts] = useState([]);
  
    useEffect(()=>{
      const getProducts = async()=>{
        try{
          const res = await axios.get( `http://localhost:5000/api/images/`)
          
          setProducts(res.data);
          console.log(res);
          
        }catch(err){
          console.log(err);
        }
      }
      getProducts();
    },[]);
  
  
  
  return (
    <Wrapper>
    <Container>
      <AliceCarousel autoPlay
        
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={3000}
        animationType="slideleft"
        infinite
        mouseTracking={true}
        disableDotsControls
        ArrowLeft={true}
        ArrowRight={true}
        
        disableButtonsControls>
            
        <a href="https://www.buddy4study.com/page/virchow-scholarship-program?ref=HomePageBanner"><Image src='https://d2w7l1p59qkl0r.cloudfront.net/static/scholarships/banners/document_1656934375.jpg'/></a>
        <a href="https://www.buddy4study.com/page/hdfc-ltds-badhte-kadam-scholarship?ref=HomePageBanner" target={"_blank"}><Image src='https://d2w7l1p59qkl0r.cloudfront.net/static/Files/banner/Website-banner-hdfc-badhte-kadam-scholarship-2022-23_UGKbPY.webp'/></a>
        <a href="https://www.buddy4study.com/page/the-tata-capital-pankh-scholarship-programme?ref=HomePageBanner"><Image src='https://d2w7l1p59qkl0r.cloudfront.net/static/Files/banner/Website-banner-the-tata-capital-pankh-scholarship_aGofzC.webp'/></a>
       <a href="https://www.buddy4study.com/page/keep-india-smiling-foundational-scholarship-programme?ref=HomePageBanner"><Image src= 'https://d2w7l1p59qkl0r.cloudfront.net/static/Files/banner/Website-banner-colgate-banner_cohayN.webp'/></a> 

      </AliceCarousel>
    </Container>
    </Wrapper>
  )
}

export default NewSliders