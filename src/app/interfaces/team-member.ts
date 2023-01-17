import { PokeType } from "./poke-type";
export interface TeamMember {
    name: string;
    // types: Array<string>;
    types: Array<PokeType>;
    image?: string;
}