import React from 'react';

class BaseAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.icon = null;
        this.cry = null;
    }

    renderIcon() {
        return this.icon;
    }

    renderCry() {
        return this.cry;
    }

    renderRow() {
        let icon = this.renderIcon(),
        cry = this.renderCry();

        return `${icon} : ${cry}`;
    }

    render() {
        return (
            <span>
            {this.renderRow()}
            </span>
        );
    }
}
export default BaseAnimal;
