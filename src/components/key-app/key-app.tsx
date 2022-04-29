import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'key-app',
    styleUrl: 'key-app.scss'
})

export class KeyApp {

    @Prop() keyChar: string;
    @Prop() kind: "unselected" | "selected" | "correct" | "match";

    handleClick = () => {
        this.kind = 'selected';
        console.log(this.keyChar);
    }

    render() {

        return(
            <key-tag onClick={this.handleClick} class={this.kind}>{this.keyChar}</key-tag>
        );
    }
}