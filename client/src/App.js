import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RootInterface } from './components/global-style/global-style';
// import { Web3ReactProvider } from '@web3-react/core'
import MainLayout from './components/main-layout/main-layout.component';
import Navbar from './components/Navbar/Navbar.components';


const App = () => {



  return (
    <RootInterface>
      <Router>
        {/* <Web3ReactProvider getLibrary={getLibrary}> */}
          <Navbar />
          <Switch>
           
            <Route  path='/' component={ MainLayout }  />
          </Switch>

        {/* </Web3ReactProvider> */}
      </Router>
    </RootInterface>
  )
}

export default App;
