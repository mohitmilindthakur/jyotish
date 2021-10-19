import { Grahas } from "../Grahas";
import { BirthDetails } from "../types/BirthDetails";

export class Kundali {
    private _grahas: Grahas;

    constructor(bd: BirthDetails) {
        this._grahas = new Grahas(bd);
    }

    get grahas(): Grahas {
        return this._grahas
    }
}
