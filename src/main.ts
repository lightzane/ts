export function sum(x: number, y: number) {
    return x + y;
}

export function subtract(x: number, y: number) {
    return x - y;
}

export class Person {
    wavesHand() {
        console.log('Waves hand');
    }
    saysHi(name: string) {
        this.wavesHand();
        return "Hi " + name;
    }
}