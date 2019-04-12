import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
	render(){
		return(
			<div style={{ width: '100%', margin: '0 auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<div className="avatar-box">
							<img 
								src="http://profilepicturesdp.com/wp-content/uploads/2018/06/best-profile-avatar-pictures-5.png"
								alt="avatar"
								className="avatar-img"
							/>
						</div>
						<div className="banner-text">
							<h2>FullStack Web Developer</h2>
							<hr/>
							<div className="tagline">
								<p>HTML/CSS | Bootstrap | JavaScript | React | Node Js | PHP/Framework | MySql DB</p>
							</div>
							<div className="social-links">
								{/* LinkedIn */}
								<a href="http://google.com" target="_blank" rel="noopener noreferrer">
									<i class="fa fa-linkedin-square" aria-hidden="true"></i>
								</a>
								{/* Instagram */}
								<a href="http://google.com" target="_blank" rel="noopener noreferrer">
									<i class="fa fa-instagram" aria-hidden="true"></i>
								</a>
								{/* Github */}
								<a href="http://google.com" target="_blank" rel="noopener noreferrer">
									<i class="fa fa-github-square" aria-hidden="true"></i>
								</a>
								{/* Youtube */}
								<a href="http://google.com" target="_blank" rel="noopener noreferrer">
									<i class="fa fa-youtube-square" aria-hidden="true"></i>
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default LandingPage;