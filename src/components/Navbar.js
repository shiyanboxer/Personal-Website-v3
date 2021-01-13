import React from "react"
import Toggle from "./Toggle";

class Navbar extends React.Component {
    // State for toggle button when screen gets too small
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen}
        );
    }


    render() {
        return (
            <h3>Shiyan Boxer</h3>
             // <Toggle theme={theme} toggleTheme={toggleTheme}/>
        );
    }
}
export default Navbar;