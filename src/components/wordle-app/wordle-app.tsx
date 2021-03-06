import { Component, h} from '@stencil/core';
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
                <word id='wotd'>{this.wordOfTheDay}</word>
                <notice id='info'></notice>
                <grid-app ></grid-app>
                <keyboard-app></keyboard-app>
            </div>
        );
    }
}
