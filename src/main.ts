export function sum(x: number, y: number) {
    return x + y;
}

export function subtract(x: number, y: number) {
    return x - y;
}

export class Person {
    wavesHand() {
        throw new Error('holding something');
        console.log('somemone is waving a hand');
    }
    saysHi(name: string) {
        console.log('Hi ' + name);
        this.wavesHand();
    }
}