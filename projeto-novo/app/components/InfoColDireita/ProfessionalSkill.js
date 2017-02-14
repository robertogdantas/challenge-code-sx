var React = require('react');


var ProfessionalSkill = React.createClass({
    render: function() {
        return (
            <ul className="professional">
                <li>
                    <div>
                        <p><img src="../app/img/icone7.jpg"/></p>
                        <p>professional skill</p>
                    </div>
                    <div>
                        <ul>
                            <li>photoshop</li>
                            <li>illustrator</li>
                            <li>in design</li>
                            <li>premiere pro</li>
                            <li>lightroom</li>
                        </ul>
                        <ul>
                            <li><span></span></li>
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



module.exports = ProfessionalSkill;