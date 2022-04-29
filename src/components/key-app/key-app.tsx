import { Component, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';

export interface PassLetter {
    letter: string;
}

@Component({
    tag: 'key-app',
    styleUrl: 'key-app.scss'
})

export class KeyApp {

    @Prop() keyChar: string;
    @Prop() status: "incorrect" | "correct" | "match";
    @Event() pressed: EventEmitter<PassLetter>;

    @Listen('click')
    handleClick() {
        this.pressed.emit({
            letter: this.keyChar
        });
    }

    render() {

        return(
            <key-tag id={this.keyChar} class={this.status}>{this.keyChar}</key-tag>
        );
    }
}