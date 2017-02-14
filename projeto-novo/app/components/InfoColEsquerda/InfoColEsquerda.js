var React = require('react');
 

var InfoColEsquerda = React.createClass({
  render: function() {
    


    var list = this.props.data.map(function(item) {
        return <li key={item.id}><div>{item.icone} {item.titulo}</div><div>{item.conteudo}</div></li>
    });

    return (
        <ul>
            {list}
        </ul>
    );
  }
});




module.exports = InfoColEsquerda;