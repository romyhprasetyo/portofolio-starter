import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, CardMenu, Button, IconButton } from 'react-mdl';

class Project extends Component{
	constructor(props){
		super(props);
		this.state = { activeTab : 0 }; 
	}
	toogleCategories(){
		if(this.state.activeTab === 0){
			return(
				<div className="project-list">
					<Card shadow={5} className="projects" style={{minWidth: '400px', margin: '0 auto' }}>
						<CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://images.fineartamerica.com/images-medium-large/forest-mist-w8333-wes-and-dotty-weber.jpg) center / cover '}}>
							React Project #1
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</CardText>
						<CardActions style={{ textAlign : 'center', borderTop: '0.5px solid #ddd' }}>
							<Button colored>
								<i className="fa fa-code-fork" aria-hidden="true"></i> &nbsp; Github
							</Button>
							<Button colored>
								<i className="fa fa-codepen" aria-hidden="true"></i> &nbsp; Codepen
							</Button>
							<Button colored>
								<i className="fa fa-play-circle-o" aria-hidden="true"></i> &nbsp; Live Demo
							</Button>
						</CardActions>
						<CardMenu style={{ color :'#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					
					<Card shadow={5} className="projects" style={{minWidth: '400px', margin: '0 auto' }}>
						<CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://imgix.bustle.com/uploads/image/2018/2/6/bcf7f5c3-8e53-4a3d-99a3-997509cbcb50-1x01_winterfell.jpg?w=1020&h=574&fit=crop&crop=faces&auto=format&q=70) center / cover '}}>
							React Project #2
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</CardText>
						<CardActions style={{ textAlign : 'center', borderTop: '0.5px solid #ddd' }}>
							<Button colored>
								<i className="fa fa-code-fork" aria-hidden="true"></i> &nbsp; Github
							</Button>
							<Button colored>
								<i className="fa fa-codepen" aria-hidden="true"></i> &nbsp; Codepen
							</Button>
							<Button colored>
								<i className="fa fa-play-circle-o" aria-hidden="true"></i> &nbsp; Live Demo
							</Button>
						</CardActions>
						<CardMenu style={{ color :'#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					<Card shadow={5} className="projects" style={{minWidth: '400px', margin: '0 auto' }}>
						<CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://vignette.wikia.nocookie.net/gameofthrones/images/a/a4/Breached_wall_s7_finale.png/revision/latest?cb=20170828105429) center / cover '}}>
							React Project #2
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</CardText>
						<CardActions style={{ textAlign : 'center', borderTop: '0.5px solid #ddd' }}>
							<Button colored>
								<i className="fa fa-code-fork" aria-hidden="true"></i> &nbsp; Github
							</Button>
							<Button colored>
								<i className="fa fa-codepen" aria-hidden="true"></i> &nbsp; Codepen
							</Button>
							<Button colored>
								<i className="fa fa-play-circle-o" aria-hidden="true"></i> &nbsp; Live Demo
							</Button>
						</CardActions>
						<CardMenu style={{ color :'#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>

			)
		}else if(this.state.activeTab === 1){
			return(
				<div>
					<h1>This is Vue Js</h1>
				</div>
			)
		}else if(this.state.activeTab === 2){
			return(
				<div>
					<h1>This is HTML</h1>
				</div>
			)
		}
	}
	render(){
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId })} ripple>
					<Tab>React</Tab>
					<Tab>VueJs</Tab>
					<Tab>HTML</Tab>
				</Tabs>
				<section className="project-grid">
					<Grid>
						<Cell col={12}>
							<div className="content">
								{this.toogleCategories()}
							</div>
						</Cell>
					</Grid>
				</section>				
			</div>
		)
	}
}

export default Project;