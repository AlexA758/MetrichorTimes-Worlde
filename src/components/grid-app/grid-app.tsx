import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'grid-app',
    styleUrl: 'grid-app.scss'
})

export class GridApp {

    render() {

        return(
            <app-grid>
                <app-word>
                    <app-letter></app-letter>
                    <app-letter></app-letter>
                    <app-letter></app-letter>
                    <app-letter></app-letter>
                    <app-letter></app-letter>
                </app-word>
                <app-word>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                </app-word>
                <app-word>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                </app-word>
                <app-word>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                </app-word>
                <app-word>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                </app-word>
                <app-word>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                </app-word>
            </app-grid>
        );
    }
}