import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'grid-app',
    styleUrl: 'grid-app.scss'
})

export class GridApp {

    render() {

        return(
            <grid-tag>
                <word-tag>
                    <app-letter></app-letter>
                    <app-letter></app-letter>
                    <app-letter></app-letter>
                    <app-letter></app-letter>
                    <app-letter></app-letter>
                </word-tag>
                <word-tag>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                </word-tag>
                <word-tag>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                </word-tag>
                <word-tag>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                </word-tag>
                <word-tag>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                </word-tag>
                <word-tag>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                </word-tag>
                <word-tag>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                    <letter-app></letter-app>
                </word-tag>
            </grid-tag>
        );
    }
}