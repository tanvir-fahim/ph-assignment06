import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'
import Steps from './components/Steps/Steps'
import PricingCard from './components/PricingCard/PricingCard'
import WorkflowSection from './components/WorkflowSection/WorkflowSection'
import Footer from './components/Footer/Footer'

const getCardsData = async () => {
  const res = await fetch("/cardData.json")
  return res.json();
}

const cardPromise = getCardsData();

function App() {

  const [activeTab, setActiveTab] = useState("Products");
  // console.log(activeTab);

  const [carts, setCarts] = useState([]);
  // console.log(carts);

  return (
    <>
      <Navbar carts = {carts}/>
      <Stats />
      <Banner />
      <div className='text-center mb-10'>
        <h2 className='text-4xl font-bold mb-3'>Premium Digital Tools</h2>
        <p className='opacity-80 max-w-2xl mx-auto'>
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input type="radio" name="my_tabs_1" className={`${activeTab === "Products" ? "tab rounded-full px-10 font-semibold bg-indigo-500 text-white w-40" : "tab w-40 font-semibold"}`} aria-label="Products" defaultChecked onClick={() => setActiveTab("Products")} />
        <input type="radio" name="my_tabs_1" className={`${activeTab === "Cart" ? "tab rounded-full px-10 font-semibold bg-indigo-500 text-white w-40" : "tab w-40 font-semibold"}`} aria-label={`Carts(${carts.length})`} onClick={() => setActiveTab("Cart")} />
      </div>
      {activeTab === "Products" && <Cards cardPromise={cardPromise} carts = {carts} setCarts ={setCarts} />}
      {activeTab === "Cart" && <Cart carts = {carts} setCarts ={setCarts} />}

      <Steps/>
      <PricingCard/>
      <WorkflowSection/>
      <Footer/>
    </>
  )
}

export default App
