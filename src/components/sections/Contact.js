import React, {Component} from 'react';
import Emoji from "../features/Emoji";

class Contact extends Component {
    render() {
        return (
            <div className="section">
                <h3>
                    Feel free to reach out, I love to chat! <Emoji symbol="☕"/>
                </h3>
                <h3>


                </h3>
                <a
                    href="https://github.com/shiyanboxer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Built with <Emoji symbol="❤"/> by Shiyan Boxer
                </a>


            </div>
        );
    }
}

export default Contact;