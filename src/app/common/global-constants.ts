import { PokeType } from "../interfaces/poke-type"
export class GlobalConstant {
    public static allTypes: PokeType[] = [
        { name: 'normal',},
        { name: 'fighting', advantages: ['normal', 'rock'] },
        { name: 'flying', advantages: ['fighting', 'bug', 'grass']},
        { name: 'poison', advantages: ['bug', 'grass']},
        { name: 'ground', advantages: ['poison', 'rock', 'fire', 'electric']},
        { name: 'rock', advantages: ['flying', 'bug', 'fire', 'ice']},
        { name: 'bug', advantages: ['poison', 'grass', 'psychic']},
        { name: 'ghost', advantages: ['ghost']},
        { name: 'fire', advantages: ['bug', 'grass', 'ice']},
        { name: 'water', advantages: ['ground', 'rock', 'fire']},
        { name: 'grass', advantages: ['ground', 'rock', 'water']},
        { name: 'electric', advantages: ['flying', 'water']},
        { name: 'psychic', advantages: ['fighting', 'poison']},
        { name: 'ice', advantages: ['flying', 'ground', 'grass', 'dragon']},
        { name: 'dragon', advantages: ['dragon']},
    ];
}