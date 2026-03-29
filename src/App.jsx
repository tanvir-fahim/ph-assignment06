import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'

const getCardsData = async() => {
  const res = await fetch("/cardData.json")
  return res.json();
}

const cardPromise = getCardsData();

function App() {


  return (
    <>
      <Navbar/>
      <Stats/>
      <Banner/>
      <Cards cardPromise={cardPromise}/>
    </>
  )
}

export default App
