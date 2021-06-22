import { Bending } from './enums/bending.enum';
import { Character } from './enums/character.enum';

export type BendingMap = Record<Character, Bending>;

function getBending(character: Character) {
    const enumMap: Partial<BendingMap> = {
        [Character.AANG]: Bending.AIR,
        [Character.APPA]: Bending.AIR,
        [Character.KATARA]: Bending.WATER,
        [Character.ZUKO]: Bending.FIRE,
        [Character.IROH]: Bending.FIRE,
    };
    return enumMap[character] || 'NOTHING';
}

function log(str: string): void {
    console.log(str);
}

log('============================================================\n');

log('Avatar: The Last Airbender\n');
log(`Main protagonist is ${Character.AANG} and his main bending is ${getBending(Character.AANG)}.`);
log(`His beloved ${Character.KATARA} can do ${getBending(Character.KATARA)} bending and healing.`);
log(`${Character.KATARA}'s brother ${Character.SOKKA} can bend ${getBending(Character.SOKKA)} but is a skilled swordsman and strategist.`);

log('\n============================================================');
