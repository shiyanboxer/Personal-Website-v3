import React, {Component} from 'react';
import Emoji from "../features/Emoji";

class About extends Component {
    render() {
        return (
            <div className="section">
                <h4>
                    <Emoji symbol="👋"/> Hi, my name is
                </h4>
                <h1>
                    Shiyan Boxer.
                </h1>
                <h1>
                    I make . . .
                </h1>
            </div>
        );
    }
}

export default About;