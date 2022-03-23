import React, { Suspense } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import { HeaderContainer } from '../src/components/header/HeaderContainer'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { AppRootStateType, store } from './redux/reduxStore';
// import { DialogsContainer } from './components/dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import { connect, Provider } from 'react-redux';
import ProfileContainer from './components/profile/ProfileContainer';
import Login from './components/Login/Login'
import { initioliseAppTC } from './redux/App-reducer';
import { Preloader } from './components/preloader/preloader';
import { WithSuspense } from './hoc/WithSusoense';
const DialogsContainer = React.lazy(() => import ('./components/dialogs/DialogsContainer'))


export type AppPropsType = {
  intialized?: boolean
  initioliseAppTC?: () => void
}

//Colling Hock WithSuspense
 const DialogsWithSupense = WithSuspense(DialogsContainer)

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initioliseAppTC && this.props.initioliseAppTC()
  }
  render() {
    if (!this.props.intialized) {
      return <Preloader />
    }


    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Nav />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/Dialogs' element= {<DialogsWithSupense />}/>
              <Route path='/Login' element={<Login />} />
              <Route path='/Profile' element={<ProfileContainer />} >
                <Route path=':userId' element={<ProfileContainer />} />
              </Route>
              <Route path='/Users' element={<UsersContainer />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }


}

type MSTP = {
  intialized: boolean
}

const mapStateToProps = (state: AppRootStateType): MSTP => ({
  intialized: state.appReducer.intialized
});


export const AppContainer = connect(mapStateToProps, { initioliseAppTC })(App);

const SamuraiTSApp = () => {
  return <Provider store={store}>
  <AppContainer />
</Provider>
  
    
  
 
}

export default SamuraiTSApp