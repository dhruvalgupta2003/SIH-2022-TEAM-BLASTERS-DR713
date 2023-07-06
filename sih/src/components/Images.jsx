import { useEffect,useState } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate" ;
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

// import { formatDate } from "../Tools";

const Wrapper = styled(motion.div)`
display:flex;
flex-wrap:wrap;
align-items:center;

justify-content:center;
`

const Container = styled(motion.div)`
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

const Page =styled.div`

// display:flex;
// flex-direction:row;
// color:white;
// background-color:blue;
`


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
font-weight: 500;
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
flex-direction-column;
justify-content:space-between;
margin-top:auto;
margin-bottom:auto;
height:40%;
color:white;

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
const OuterWrapper = styled.div`
`
export default function Images(images){
  // AOS.init()
  const {data} = images;

  const formatDate = (date) => {
    const d = new Date(date);
    var month = "" + (d.getMonth() + 1);
    var day = "" + d.getDate();
    var year = d.getFullYear();
  
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
  
    return [year, month, day].join("-");
  };
  // let currentPageRef = useRef(null);

  // const handlePageChange = (pageNo) => {
  //   if (currentPage > pageNo) {
  //     currentPageRef.current.style.animation = "prevPage .5s forwards";
  //   } else {
  //     currentPageRef.current.style.animation = "nextPage .5s forwards";
  //   }
  //   setCurrentPage(pageNo);
  // };



    // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <OuterWrapper >
    
    <Wrapper
  >
      
        {currentItems.map(image=>{
            return(
              <Container 
             >
              <Heading >
            
              {image.title}

          
      </Heading>
      <Desc>
            Deadline: {formatDate(image.deadline)}
        </Desc>
        <Wrapper2>
        <Wrapper1>
        <AwardElig>

            <AwardTitle>Award</AwardTitle>
            <AwardDesc>{image.award}</AwardDesc>

        </AwardElig>

        <AwardElig>

            <AwardTitle>Eligibility</AwardTitle>
            <AwardDesc>{image.elegibility}</AwardDesc>

        </AwardElig>
        {/* <Link to={/product/${item._id}} style={{ textDecoration: 'none' }}> */}
        </Wrapper1>
        <Button><Link to={`/product/${image._id}`} style={{textDecoration:"none",color:"black"}}>View Scholorship</Link></Button>
        </Wrapper2>
      </Container>
            )
        })}
      
      
      
    </Wrapper>
    <ReactPaginate
      
        
    breakLabel={"..."}
    nextLabel="next"
    onPageChange={handlePageClick}
    pageRangeDisplayed={1}
    pageCount={pageCount}
    previousLabel="previous"
    renderOnZeroPageCount={null}
    containerClassName={"pagination"}
    pageLinkClassName={"page-num"}
    nextLinkClassName={"page-num"}
    activeClassName={"active"}
    previousLinkClassName={"page-num"}
    
    
  /></OuterWrapper>
    
    
  );
}