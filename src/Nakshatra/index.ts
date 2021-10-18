import { TNakshatra, TDMS } from "../types/global";
import NAKSHATRAS from "./nakshatras";
import { UtilsDegree } from "../utils/degree";

export class Nakshatra {

    nakshatra: TNakshatra;

    constructor(public input: number | TDMS) {
        if (typeof input === 'number') {
            this.nakshatra = this.getNakshatraFromDegree(input);
        } else if (Array.isArray(input)) {
            this.nakshatra = this.getNakshatraFromDMS(input);
        }
    }

    static getNames() {
        return NAKSHATRAS;
    }

    getNakshatra() {
        return this.nakshatra;
    }

    getNakshatraFromDMS(DMS: TDMS): TNakshatra{
        DMS[0] = UtilsDegree.getBoundDegree(DMS[0]);
        let seconds = UtilsDegree.convertDMSToSec(DMS);
        let absolutePada = seconds / 12000;
        let nakshatra = NAKSHATRAS[Math.floor(absolutePada / 4)];
        let pada = Math.floor(absolutePada % 4) + 1;
    
        return {name: nakshatra, pada};
    }
    
    getNakshatraFromDegree(degree: number): TNakshatra {
        let DMS = UtilsDegree.convertDegreeToDMS(degree);
        return this.getNakshatraFromDMS(DMS);
    }
}