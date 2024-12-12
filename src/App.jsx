import CardComponent from "./components/CardComponent"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <header className="text-center mt-2 mb-5">
        <h1>Il mio blog</h1>
      </header>
      <main className="container mx-auto w-50 ">
        <CardComponent />
      </main>
    </>
  )
}

export default App;
