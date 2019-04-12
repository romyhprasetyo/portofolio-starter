import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
	render(){
		return(
			<div style={{ width: '100%', margin: '0 auto'}}>
				<Grid className="landing-grid">
					<Cell col={1}>12</Cell>
				</Grid>
			</div>
		)
	}
}

export default LandingPage;