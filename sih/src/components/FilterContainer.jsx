import React from 'react'
import styled from 'styled-components'
import {useLocation} from 'react-router-dom';
import Images from './Images';
import Pagination from './Pagination';


const Container =styled.div`
display:flex;
min-width:70%;
background-color:gray;
border-radius:30px;
margin-top:20px;
background: rgba(217, 217, 217, 0.52);


`
const Wrapper = styled.div`

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const Left =styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`

const Desc = styled.p`

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 15px;
color:gray;


`
const SocialContainer = styled.h1`
display:flex;
`

const Center =styled.div`
// flex:1;
padding:20px;



`
const Title = styled.p`
margin-bottom:30px;
font-size:18px;
font-family:'Roboto';
font-weight:300;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`
const Right =styled.div`
flex:1;
padding:20px;
display:flex;
align-items:center;
juatify-content:center;


`
const Filter = styled.div`
display:flex;
align-items:center;
`
const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`
const FilterClass = styled.select`

height:100%;
padding:4px 100px;
border-radius:5px;

`
const FilterCountry = styled.select`

height:100%;
padding:4px 10px;
border-radius:5px;
margin:0px 5px;

`
const FilterSizeOption = styled.option`

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
const MoreFilters = styled.a`
margin:20px;
font-style:normal;

`
const Heading = styled.p`
font-family: 'DM Serif Display';
font-style: normal;
font-weight: 400;
font-size: 40px;

`
const HeadingContainer=styled.div`
padding:20px 0px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:Center;
`

function FilterContainer() {

    


  return (
    <Wrapper>
        <HeadingContainer>
        <Heading>Scholarships for Post-Matric(Class 11-12)</Heading>
        <Desc>Gateway to Scholarship World</Desc>
        </HeadingContainer>
    <Container>
    <Left>
        <Title>Select class to see relevant result</Title>
        
        <SocialContainer>
        <Filter>
                           
                            <FilterClass>
                                <FilterSizeOption>Class 10th</FilterSizeOption>
                                <FilterSizeOption>Class 11th</FilterSizeOption>
                                <FilterSizeOption>Class 12th</FilterSizeOption>
                                
                            </FilterClass>
                        </Filter>
            
        </SocialContainer>
    </Left>
    <Center>
        <Title>Select Scholorship Country</Title>
        <Filter>
                           
                            <FilterCountry>
                                <FilterSizeOption>India</FilterSizeOption>
                                <FilterSizeOption>USA</FilterSizeOption>
                                <FilterSizeOption>UK</FilterSizeOption>
                                
                            </FilterCountry>
                            <FilterCountry>
                                <FilterSizeOption selected> state</FilterSizeOption>
                                <FilterSizeOption>Delhi</FilterSizeOption>
                                <FilterSizeOption>Himachal Pradesh</FilterSizeOption>
                                
                            </FilterCountry>
                            
                        </Filter>

    </Center>
    <Right>
    <MoreFilters href=''>
            More Filters
        </MoreFilters>
   <Button>Apply</Button>
   
    </Right>
    </Container>
    <Pagination />
    </Wrapper>
  )
}

export default FilterContainer;