var React = require('react');
var ColunaEsquerda = require('./ColunaEsquerda');
var ColunaDireita = require('./ColunaDireita');





var Esqueleto = React.createClass({

	render: function(){
		return (
			<div className="container">
				<ColunaEsquerda />
				<ColunaDireita />
			</div>
		);
	}

});




module.exports = Esqueleto;