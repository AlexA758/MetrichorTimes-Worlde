import { Component, h } from '@stencil/core';
import WORDLES from '../../assets/wordles.json';
import { dayOfYear } from '../../utils';


@Component({
    tag: 'wordle-app',
    styleUrl: 'wordle-app.scss'
})
export class WordleApp {

    wordOfTheDay = WORDLES[dayOfYear()];

    render() {
        return (
            <div>
                <h1>Wordle of the day: {this.wordOfTheDay}</h1>
                //TODO: Recreate the guts of your Wordle app here
            </div>
        );
    }
}
