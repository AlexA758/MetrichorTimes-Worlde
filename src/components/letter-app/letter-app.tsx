import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'letter-app',
    styleUrl: 'letter-app.scss'
})

export class LetterApp {

    render() {

        return(
            <letter-tag></letter-tag>
        );

    }
}