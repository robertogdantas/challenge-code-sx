var React = require('react');
var Education = require('./InfoColDireita/Education');
var Experience = require('./InfoColDireita/Experience');
var ProfessionalSkill = require('./InfoColDireita/ProfessionalSkill');
var Awards = require('./InfoColDireita/Awards');



var ColunaDireita = React.createClass({
	render: function() {

		var listData = [
			{mes:'November', ano: '2007', texto1:'master of computer application', texto2: 'Simpson University, London.', texto3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
			{mes:'November', ano: '2007', texto1:'master of computer application', texto2: 'Simpson University, London.', texto3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
			{mes:'November', ano: '2007', texto1:'master of computer application', texto2: 'Simpson University, London.', texto3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
		];

		return (
			<section className="container2">
				<ul>
            		<li>
            			<div>
            				<p><img src="../app/img/icone5.jpg" /></p>
            				<p>education</p>
        				</div>
        			</li>
        		</ul>
				<Education data={listData} />

				<ul>
            		<li>
            			<div>
	            			<p><img src="../app/img/icone6.jpg" /></p>
	            			<p>experience</p>
            			</div>
        			</li>
        		</ul>
				<Experience data={listData} />

				<ProfessionalSkill />

	            <ul>
	                <li>
		                <div>
		                    <p><img src="../app/img/icone8.jpg" /></p>
		                    <p>education</p>
	                    </div>
	                </li>
	            </ul>
				<Awards />


			</section>
		);
	}
});

module.exports = ColunaDireita;