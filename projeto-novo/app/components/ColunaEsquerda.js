var React = require('react');
var ImagemAvatar = require('./ImagemAvatar');
var InfoColEsquerda = require('./InfoColEsquerda/InfoColEsquerda');
var PersonalSkill = require('./InfoColEsquerda/PersonalSkill');
var ContactMe = require('./InfoColEsquerda/ContactMe');



var ColunaEsquerda = React.createClass({
	render: function() {
			
		var listData = [
			{icone:<p><img src="../app/img/icone1.jpg" /></p>,titulo:<p>profile</p>, conteudo:<p>issimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. '</p>},
			{icone:<p><img src="../app/img/icone2.jpg" /></p>,titulo:<p>objective</p>, conteudo:<p>issimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. '</p>}
		];


		return (
			<section className="container1">
				<ImagemAvatar />
				<InfoColEsquerda data={listData} />
				<PersonalSkill />
				<ContactMe />
			</section>


		);
	}
});

module.exports = ColunaEsquerda;