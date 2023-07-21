// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import Login from './components/Login';
import Register from './components/Register';
import DetailNews from './components/DetailNews';
import UserProfile from './components/UserProfile';
import PasswordChange from './components/PasswordChange';
import EditProfile from './components/EditProfile';
import LoadingBar from 'react-top-loading-bar';
import { useContext } from 'react';
import NewsContext from './context/NewsContext';

function App() {
  const context = useContext(NewsContext);
  const { progress, setProgress } = context;
  return (
    <div className='main-container'>
      <LoadingBar progress={progress} onLoaderFinished={() => { setProgress(0) }} color='#f57a38' />
      <Router>
        <Header />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<News key="/" load_topic="general" />} />
            <Route exact path='/general' element={<News key="general" load_topic="general" />} />
            <Route exact path='/entertainment' element={<News key="entertainment" load_topic="entertainment" />} />
            <Route exact path='/science' element={<News key="science" load_topic="science" />} />
            <Route exact path='/sports' element={<News key="sports" load_topic="sports" />} />
            <Route exact path='/technology' element={<News key="technology" load_topic="technology" />} />
            <Route exact path='/business' element={<News key="business" load_topic="business" />} />
            <Route exact path='/health' element={<News key="health" load_topic="health" />} />
            <Route exact path='/crypto' element={<News key="crypto" load_topic="crypto" />} />
            <Route exact path='/loan' element={<News key="loan" load_topic="loan" />} />
            <Route exact path='/student' element={<News key="student" load_topic="studentLoan" />} />
            <Route exact path='/hackers-hacking' element={<News key="hackers-hacking" load_topic="hackers-hacking" />} />
            <Route exact path='/anonymous-hacking' element={<News key="anonymous-hacking" load_topic="anonymous-hacking" />} />

            {/* <Route exact path='/logout' /> */}
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/password-change' element={<PasswordChange />} />
            <Route exact path='/register' element={<Register />} />

            <Route exact path='/user-account' element={<UserProfile />} />
            <Route exact path='/edit-profile' element={<EditProfile />} />

            <Route exact path='/detail-news' element={<DetailNews />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
