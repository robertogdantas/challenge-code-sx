var React = require('react');


var ContactMe = React.createClass({
    render: function() {
        return (
         	<ul className="contact">
         		<li>
         			<div>
         				<p><img src="../app/img/icone4.jpg"/></p>
         				<p>contact me</p>
     				</div>
     				<div>
     					<p><i><img src="../app/img/icone11.png"/></i>East box nagar, sarulia, demra haka-1361</p>
     					<p><i><img src="../app/img/icone22.png"/></i>02-750 1246 , 0176-876 0504</p>
     					<p><i><img src="../app/img/icone33.png"/></i>nasirbinburhan@gmail.com</p>
     					<p><i><img src="../app/img/icone44.png"/></i>www.uniquegraph.com</p>
 					</div>
				</li>
         	</ul>
        );
    }
});



module.exports = ContactMe;