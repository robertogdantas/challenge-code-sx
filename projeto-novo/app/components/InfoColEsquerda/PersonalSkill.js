var React = require('react');


var PersonalSkill = React.createClass({
    render: function() {
        return (
         	<ul className="personal">
         		<li>
         			<div>
         				<p><img src="../app/img/icone3.jpg"/></p>
         				<p>personal skill</p>
     				</div>
     				<div>
     					<ul>
                            <li>management</li>
                            <li>teamwork</li>
                            <li>creative</li>
                            <li>communication</li>
                        </ul>
                        <ul>
                            <li><span></span></li>
                            <li><span></span></li>
                            <li><span></span></li>
                            <li><span></span></li>
                        </ul>
 					</div>
				</li>
         	</ul>
        );
    }
});



module.exports = PersonalSkill;