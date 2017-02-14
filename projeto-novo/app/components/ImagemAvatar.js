var React = require('react');


var ImagemAvatar = React.createClass({
	render: function() {
		return (
			<figure>
				<img className='picture' src='../app/img/foto-user.png' />
				<figcaption>
					<h1>bin burhan</h1>
					<h2>Graphics Designer</h2>
				</figcaption>
			</figure>
		);
	}
});


module.exports = ImagemAvatar;


