import { sum, subtract, Person } from "./main";

describe('math operations', () => {
    test('sum 5 + 5 = 10', () => {
        expect(sum(5, 6)).toEqual(11);
    });

    test('subtraction is valid', () => {
        expect(subtract(5, 10)).toEqual(-5);
    });
});

describe('a person should live', () => {
    it('should say hi and bye', () => {
        let someone = new Person();
        const spy = jest.spyOn(someone, 'wavesHand');
        const spyLog = jest.spyOn(console, 'log');

        someone.saysHi('John');
        expect(spy).toHaveBeenCalled();
        expect(spyLog).toHaveBeenCalledWith('Waves hand');
    });
});