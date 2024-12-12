import CardComponent from "./components/CardComponent"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <header className="text-center mt-2 mb-5">
        <h1>Il mio blog</h1>
      </header>
      <main className="container mx-auto w-50 mb-5">
        <CardComponent />
      </main>
      <footer className="text-bg-dark text-center p-3">
        <div className="container">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quae recusandae autem suscipit tempora dolore omnis aliquid commodi, ipsam eveniet, reiciendis quod quidem nam amet? Impedit reiciendis illum ratione ullam.</p>
        </div>
      </footer>
    </>
  )
}

export default App;
