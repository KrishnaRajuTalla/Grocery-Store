import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Footer from './Footer'
import './App.css'
import FruitPage from './FruitPage'
import { BrowserRouter as Router,Routes,Route,BrowserRouter,useParams } from 'react-router-dom';
import VegetablePage from './VegetablePage';
import DairyPage from './DairyPage';
import SnacksPage from './SnacksPage';
import LoginPage from './LoginPage';
import SignUp from './SignUp'

function SearchResults() {
  const { searchTerm } = useParams();

  const renderPage = () => {
    switch (searchTerm.toLowerCase()) {
      case 'fruits':
        return <FruitPage />;
      case 'vegetables':
        return <VegetablePage />;
      case 'dairy':
        return <DairyPage />;
      case 'snacks':
        return <SnacksPage />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className='sidehome'>
      <Sidebar />
      {renderPage()}
    </div>
  );
}
function App() {
  return (
    
    <div className='app'>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/search/:searchTerm' element={<SearchResults />} />
        <Route path='/fruits' element={
          <>
          <div className='sidehome'>
          <Sidebar />
          <FruitPage/>
          </div>
          <div className='Footer'>
            <Footer />
          </div> </>} />
        <Route path='/vegetables' element={
          <>
          <div className='sidehome'>
          <Sidebar />
          <VegetablePage/>
          </div>
        <div className='Footer'>
        <Footer />
      </div> </>} />
        <Route path='/dairy' element={
          <>
          <div className='sidehome'>
          <Sidebar />  
        <DairyPage/>
        </div>
      <div className='Footer'>
      <Footer />
    </div> </>} />
        <Route path='/snacks' element={
          <>
          <div className='sidehome'>
          <Sidebar />
          <SnacksPage/>
          </div>
        <div className='Footer'>
        <Footer />
      </div> </>} />
      <Route path='/login' element={
          <LoginPage/>
           }/>
           <Route path='/signup' element={
          <SignUp/>
           }/>
          {/*<div className='sidehome' >
          <Sidebar />
          <FruitPage />
          </div>*/}
          
        <Route path='/' element={
          <>
          <div className='sidehome' >
          <Sidebar />
          <Home />
          </div>
          <div className='Footer'>
            <Footer />
          </div>

        
        </>}/>
      </Routes>
    </BrowserRouter>
      
      
    </div>
  )
}

export default App