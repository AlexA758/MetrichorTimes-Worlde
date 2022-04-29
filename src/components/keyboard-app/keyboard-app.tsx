import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'keyboard-app',
    styleUrl: 'keyboard-app.scss'
})

export class KeyBoardApp {

    render() {

        return(
            <keyboard-tag>
                <keys-tag>
                    <key-app keyChar='Q'></key-app>
                    <key-app keyChar='W'></key-app>
                    <key-app keyChar='E'></key-app>
                    <key-app keyChar='R'></key-app>
                    <key-app keyChar='T'></key-app>
                    <key-app keyChar='Y'></key-app>
                    <key-app keyChar='U'></key-app>
                    <key-app keyChar='I'></key-app>
                    <key-app keyChar='O'></key-app>
                    <key-app keyChar='P'></key-app>
                </keys-tag>
                <keys-tag>
                    <key-app keyChar='A'></key-app>
                    <key-app keyChar='S'></key-app>
                    <key-app keyChar='D'></key-app>
                    <key-app keyChar='F'></key-app>
                    <key-app keyChar='G'></key-app>
                    <key-app keyChar='H'></key-app>
                    <key-app keyChar='J'></key-app>
                    <key-app keyChar='K'></key-app>
                    <key-app keyChar='L'></key-app>
                </keys-tag>
                <keys-tag>
                    <key-app keyChar='Enter'></key-app>
                    <key-app keyChar='Z'></key-app>
                    <key-app keyChar='X'></key-app>
                    <key-app keyChar='C'></key-app>
                    <key-app keyChar='V'></key-app>
                    <key-app keyChar='B'></key-app>
                    <key-app keyChar='N'></key-app>
                    <key-app keyChar='N'></key-app>
                    <key-app keyChar='M'></key-app>
                    <key-app keyChar='DEL'></key-app>
                </keys-tag>
            </keyboard-tag>
        );
    }
}
