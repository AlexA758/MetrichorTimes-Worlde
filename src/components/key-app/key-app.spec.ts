import { KeyApp } from "./key-app";

describe('KeyApp', () => {
    it('Populates Text Content', () => {
        const component = new KeyApp();
        expect(component.keyChar='A').toEqualText('A');
    });

    it('Sets Class', () => {
        const component = new KeyApp();
        expect(component.status= 'match').toHaveClass('match');
    });

    it('Handle Click Event', () => {
        const component = new KeyApp();
        expect(component.pressed).toHaveReceivedEvent
    });
});