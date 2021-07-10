import { sum, subtract, Person } from "./main";

describe('math operations', () => {
    test('sum 5 + 6 = 11', () => {
        expect(sum(5, 6)).toEqual(11);
    });

    test('subtraction is valid', () => {
        expect(subtract(5, 10)).toEqual(-5);
    });
});

describe('a person walks by', () => {

    describe('saysHi(name)', () => {
        it('should wave hand', () => {
            let someone = new Person();
            const log = jest.spyOn(console, 'log');
            const method = jest.spyOn(someone, 'wavesHand').mockImplementation();

            someone.saysHi('John');
            expect(log).toHaveBeenCalledWith('Hi John');
            expect(method).toHaveBeenCalled();

        });
    });

    describe('wavesHand()', () => {
        it('should throw error when holding something', () => {
            let someone = new Person();
            const method = jest.spyOn(someone, 'wavesHand');

            try {
                someone.wavesHand();
            } catch (err) { }

            expect(method).toThrow('holding something');

            // this works too!
            // expect(() => {
            //     someone.wavesHand();
            // }).toThrow('holding something');
        });
    });
});