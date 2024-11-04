import './App.scss'
import {Header} from "./template/layout/Header";
import {Menu} from "./components/Menu";
import {OrderCard} from "./components/OrderCard";
import {Footer} from "./template/layout/Footer";

function App() {
    return (
      <>
        <main className='home-container'>
          <Header></Header>
          
          <section className='main-section'>
            <Menu></Menu>
            <OrderCard></OrderCard>
          </section>
          
        </main>
        <Footer></Footer>
      </>
    )
}

export default App
