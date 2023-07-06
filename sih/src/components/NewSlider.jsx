import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import styled from 'styled-components';
import React from 'react'

const Container = styled.div`
display:flex;
margin-left:auto;
margin-right:auto;


  
  
`
const Image = styled.img`

width: 80%;
  height: 70%;
  object-fit: cover;
`
const Wrapper = styled.div`
background-color:#1e1e1e;
`

function NewSlider({item}) {
  return (
    <Wrapper>
    <Container>
      {/* <AliceCarousel autoPlay
        
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={3000}
        animationType="slideleft"
        infinite
        mouseTracking={true}
        disableDotsControls
        ArrowLeft={true}
        ArrowRight={true}
        
        
        > */}
        
         {/* <Image src="https://media.discordapp.net/attachments/891025496601661504/1009876471243866223/unknown.png"/> */}
         
        
    </Container>
    </Wrapper>
  )
}

export default NewSlider