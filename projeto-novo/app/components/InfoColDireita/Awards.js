var React = require('react');


var Awards = React.createClass({
    render: function() {
        return (
            <ul className="lista">
                <li>
                    <div>
                        <p>November</p>
                        <p>2007</p>
                    </div>
                    <div>
                        <p>master of computer application</p>
                        <p>Simpson University, London.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </li>
            </ul>
        );
    }
});



module.exports = Awards;