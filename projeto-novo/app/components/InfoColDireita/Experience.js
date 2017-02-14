var React = require('react');
 

var Experience = React.createClass({
  render: function() {
    


    var list = this.props.data.map(function(item) {
        return <li key={item.id}>
                    <div>
                        <p>{item.mes}</p>
                        <p>{item.ano}</p>
                    </div>
                    <div>
                        <p>{item.texto1}</p>
                        <p>{item.texto2}</p>
                        <p>{item.texto3}</p>
                    </div>
                </li>
    });

    return (

        <ul className="lista">
            {list}
        </ul>
    );
  }
});




module.exports = Experience;