import { Provider } from 'react-redux'
import './App.css'
import Bookings from './Components/Bookings'
import Destination from './Components/Destination'
import Header from './Components/Header'
import store from './assets/redux/store'

function App() {

  return (

    <Provider store={store}>
      <Header></Header>
      <Destination></Destination>
      <Bookings></Bookings>
    </Provider>


  )
}

export default App
