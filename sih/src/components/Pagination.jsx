import React,{useEffect,useState} from 'react'
import Images from './Images';
import styled from 'styled-components';
import './Pagination.css'


import { popularStates} from '../data';


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
padding:50px 0px;

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
color:black;
  background-color: #b6c7c6;
border-radius: 15px;

`








const Container1 =styled.div`
// display:flex;
min-width:70%;
background-color:gray;
border-radius:30px;
margin-top:20px;
box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.25);
background: rgba(217, 217, 217, 0.52);


`
const Wrapper1 = styled.div`

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
const Title1 = styled.h3`
margin-bottom:20px;
font-size:16px;
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

// const Button1= styled.button`

// width: 140px;
// height: 42px;
// color:white;
// border:none;
// /* Yellow Gradient */
// font-family: 'Roboto';
// font-style: normal;
// font-weight: 500;
// font-size: 15px;
// cursor:pointer;
// background: linear-gradient(276.31deg, #EFB506 -25.96%, rgba(255, 193, 7, 0.15) 180.24%);
// border-radius: 15px;
// `
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
padding:0px 0px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:Center;
`

const SearchContainer = styled.div`

height:50px;

margin:20px;
width:80%;
display:flex;
margin-right:auto;
margin-bottom:-5px;
margin-left:auto
// background-color:white;

`
const InputContainer = styled.input`
border-radius:10px;
width:100%;
// background-color:white;
padding:10px;
border :1px solid gray;
`
const NewContainer = styled.div`
display:flex;


`

const Ok = styled.div``















var p;
var q;
var r;
var m;
// const k=0;
function Pagination() {
  
    const [images,setImages]=useState([]);
    const [mohit,setMohit] =useState([]);
    const [test,setTest] =useState([]);
    const [input,setInput]=useState('');

    const [output,setOutput]=useState([])
    // console.log(Images.filter());
   
    const professionFilter =(e)=>{

      if(e.target.value==="India"){
        setImages(q);
        return;
      }
      else if(q==="none"){
        const result = mohit.filter((curDate)=>{
          return curDate.profession===e.target.value
        })
        setImages(result)
      }
      else{const result= q.filter((curDate)=>{
        
        
        return curDate.profession === e.target.value
        
    
    
      })
      
      r=[...result];
      setImages(result);
      
     
    
      
      
    }
    }



    const myHello =(e)=>{

      if(e.target.value==="India"){
        setImages(mohit);
        // p=mohit
        return;
      }
      else{const result= mohit.filter((curDate)=>{
        // console.log(e.target.value)
        
        return curDate.state === e.target.value
        


      })
      
      p=[...result];
    //  m=p;
    console.log(p)
      setImages(result);
     

      
      
    }
}

    // const filterResult = (catItem)=>{
    //   const result = images.filter((curDate) =>{
    //     return curDate.state === catItem;
    //   });
    //   setImages(result)
    // }
    useEffect(()=>{
        fetch("http://localhost:5000/api/products").then(
            response => response.json().then(data=>{
                setMohit(data);
                setImages(data);
                console.log(data)
            })
        )
    },[]);


    useEffect(()=>{
      // setOutput([])
      setImages([])
      

      
      mohit.filter(val=>{
        const c= input.toLowerCase() 
        var m = val.elegibility.toLowerCase()
        var b = val.title.toLowerCase()
        if (b.includes(c)||m.includes(c)){
          setImages(images=>[...images,val])
        }

        let r=images

      });
      
    },[input])






    const categoryFilter =(e)=>{
      const k = 0;
      if(e.target.value==="India"){
        if (p.length===0){
          setImages(mohit)
          
        }
        else{
          setImages(p)
        }
      }
      
      else if(k===0){
        // console.log(p.length)
        var result = p.filter((curDate)=>{
          return curDate.category===e.target.value
        })
        q=[...result]
        
       setImages(result);
      }
      // const p="none";
      // if(p==="none"){
      //   console.log(p)
      //   const result = mohit.filter((curDate)=>{
      //     return curDate.category===e.target.value
      //   })
      //   // q=[...result]
        
      //  setImages(result);
      // }
      else {var result= mohit.filter((curDate)=>{
        
        
        return curDate.category === e.target.value;
        
    
    
      })
      
      q=[...result]
      setImages(result);
    
    }
    
    
    }


    const incomeFilter =(e)=>{

      if(e.target.value==="India" ){
        setImages(mohit);
        return;
      }
      else{const result= mohit.filter((curDate)=>{
        
        
        return parseInt(curDate.income) <= parseInt(e.target.value)
        
    
    
      })
      
     
      setImages(result);
     
    
      
      
    }
    }

    

      
const filterDeadline=()=>{
var result;
  this.setState(this.state.images.deadline.sort(function(a,b){
    return  result=a-b
  }))
  this.setState({ascMsg:"Ok",descMsg:false})
  setImages(result)
}








  return (
    <Wrapper>
      




      <Wrapper1>
        <HeadingContainer>
        <Heading>Scholarships for Post-Matric(Class 11-12)</Heading>
        <Desc>Gateway to Scholarship World</Desc>
        </HeadingContainer>
        
    <Container1>
      <SearchContainer>
        
        <InputContainer placeholder='Search ScholorShips' onChange={e=>setInput(e.target.value)}>
        
        </InputContainer>
        
       

      </SearchContainer>
      

      <NewContainer>
      
    <Left>
      
    <Title1>Select category to see relevant result</Title1>
        <Filter>
                           

        



                           
                            <FilterCountry onChange={categoryFilter}>
                            <FilterSizeOption  value="India">SELECT CATEGORY</FilterSizeOption>
                                <FilterSizeOption  value="SC">SC</FilterSizeOption>
                                <FilterSizeOption value="ST">ST</FilterSizeOption>
                                <FilterSizeOption value="OBC">OBC</FilterSizeOption>

                                
                            </FilterCountry>
                            
                            
                        </Filter>
                        <Filter  style={{margin:"5px 0px"}}>
                           

        



                           
                           <FilterCountry onChange={professionFilter}>
                           <FilterSizeOption  value="India">SELECT QUALIFICATION</FilterSizeOption>
                               <FilterSizeOption  value="School Student">School Student</FilterSizeOption>
                               <FilterSizeOption value="Under Graduation">Under Graduation</FilterSizeOption>
                               <FilterSizeOption value="Post Graduation">Post Graduation</FilterSizeOption>

                               
                           </FilterCountry>
                           
                           
                       </Filter>
                       
    </Left>
    <Center>
      
        <Title1>Select Scholorship State</Title1>
        <Filter>
                           

        



                           
                            <FilterCountry >
                              
                                <FilterSizeOption >India</FilterSizeOption>
                                <FilterSizeOption>UK</FilterSizeOption>
                                
                            </FilterCountry>
                            <FilterCountry  onChange={myHello}>
                            <FilterSizeOption value="India" >Select States</FilterSizeOption>
                              {popularStates.map((item)=>(
                                
                                <FilterSizeOption value={item.value}>{item.state}</FilterSizeOption>
                                ))}
                                
                                
                                {/* <FilterSizeOption value="Kerala">Kerala</FilterSizeOption> */}
                                
                            </FilterCountry>
                            
                        </Filter>
                        

    </Center>
    <Right>
    <MoreFilters >
    <Filter>
                           

        



                           
                           <FilterCountry onChange={incomeFilter}>
                           <FilterSizeOption  value="India">Income Criteria</FilterSizeOption>
                               <FilterSizeOption  value="250000">less than 2.5 lakh</FilterSizeOption>
                               <FilterSizeOption value="500000">less than 5 lakh</FilterSizeOption>
                               <FilterSizeOption value="750000">less than 7.5 lakh</FilterSizeOption>
                               <FilterSizeOption value="1000000">less than 10 lakh</FilterSizeOption>

                               
                           </FilterCountry>
                           
                           
                       </Filter>
        </MoreFilters>
   <Button onClick={()=>this.images } >Sort By Deadline</Button>
   
    </Right>
    </NewContainer>
    </Container1>
    </Wrapper1>


    






    <Container >
      <Images data ={images}  />
    </Container>
    
    </Wrapper>
  )
}

export default Pagination