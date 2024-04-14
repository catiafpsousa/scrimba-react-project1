import photo from './assets/photo.jpg'
import './App.css'
import './components/Header.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Profile from './components/Profile.jsx'

function App() {
  return (
      <div className = "container">
      <Profile />
      <Header />
      <Footer />
      </div>
  )
}

export default App
