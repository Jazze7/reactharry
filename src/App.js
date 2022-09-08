import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'

function App() {
  return (
    <>
      <Navbar Heading="Find Your Kart" price="Pricing" />
      <div className="container">
        <Form />
      </div>
    </>
  )
}

export default App
