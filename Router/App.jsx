import Header from "../Comp/Header"
import Footer from "../Comp/Footer"
import HomeItem from "./HomeItem"
import Fetch from "../Comp/Fetch"
import Bag from "./Bag"
import { Outlet } from "react-router-dom"
function App() {
  
  return (<>
        <Header></Header>
        <Fetch></Fetch>
            <div className="items-container">
            <Outlet/>
            </div>
        <Footer></Footer>
    </>
  )
}
export default App
