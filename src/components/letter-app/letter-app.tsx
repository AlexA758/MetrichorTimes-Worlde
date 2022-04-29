import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'letter-app',
    styleUrl: 'letter-app.scss'
})

export class LetterApp {

    @Prop() wordChar: string;
    @Prop() status: "focus" | "incorrect" | "correct" | "match";

    render() {

        return(
            <letter-tag class={this.status}>{this.wordChar}</letter-tag>
        );
    }
}