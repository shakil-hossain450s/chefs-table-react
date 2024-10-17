import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Recipes from "./components/Main/Recipes/Recipes"

function App() {

  return (
    <div className="max-w-[1600px] mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="container mx-auto px-4 md:px-6 lg:px-10 py-4 lg:py-8 my-5 md:my-10">
        <Recipes></Recipes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
