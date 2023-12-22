
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>

          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}

          />
          <Routes>

            {/* <News pageSize="6" / */}
            <Route path='' element={<News setProgress={this.setProgress} pageSize="6" category={"null"}></News>}></Route>
            <Route exact path='/Home' element={<News setProgress={this.setProgress} pageSize="6" key="home" category="null"></News>}></Route>
            <Route path='/Business' element={<News setProgress={this.setProgress} key="business" pageSize="6" category="business"></News>}></Route>
            <Route path='/Entertainment' element={<News setProgress={this.setProgress} key="entertainment" pageSize="6" category="entertainment"></News>}></Route>
            <Route path='/General' element={<News setProgress={this.setProgress} key="general" pageSize="6" category="general"></News>}></Route>
            <Route path='/Health' element={<News setProgress={this.setProgress} key="health" pageSize="6" category="health"></News>}></Route>
            <Route path='/Science' element={<News setProgress={this.setProgress} key="science" pageSize="6" category="science"></News>}></Route>
            <Route path='/Sports' element={<News setProgress={this.setProgress} key="sports" pageSize="6" category="sports"></News>}></Route>
            <Route path='/Technology' element={<News setProgress={this.setProgress} key="technology" pageSize="6" category="technology"></News>}></Route>

          </Routes>
        </Router>
      </div>
    )
  }
}
