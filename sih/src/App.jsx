import {Route,Routes,Navigate} from 'react-router-dom'


import MatricPage from "./pages/MatricPage";
import NewPage from './pages/NewPage';
// import Chatzot from './components/Chatzot';

function App() {
  const user = localStorage.getItem('token')
  // return (<NewPage />
  //   <Routes>
  //     {user && <Route path="/" exact element ={<Main/>}/>}
  //     <Route path ="/signup" exact element={<Signup/>} />
  //     <Route path ="/login" exact element={<Login/>} />
  //     <Route path ="/" exact element={<Navigate replace to ="/login" />} />
  //   </Routes>
  return (
    <NewPage/>

  )
    

}

export default App