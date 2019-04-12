import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      	<div className="demo-big-content">
		    <Layout>
		        <Header class="header-color" title="My Portfolio" scroll>
		            <Navigation>
		                <Link to="/about-me">About Me</Link>
		                <Link to="/projects">Projects</Link>
		                <Link to="/resume">Resume</Link>
		                <Link to="/contact">Contact</Link>
		            </Navigation>
		        </Header>
		        <Drawer title="Title">
		            <Navigation>
		                <Link to="/about-me">About Me</Link>
		                <Link to="/projects">Projects</Link>
		                <Link to="/resume">Resume</Link>
		                <Link to="/contact">Contact</Link>
		            </Navigation>
		        </Drawer>
		        <Content>
		            <div className="page-content" />
		            <Main/>
		        </Content>
		    </Layout>
		</div>
    );
  }
}

export default App;
