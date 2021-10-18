import RASHIS from './rashis';
import { UtilsDegree } from '../utils/degree';
import { TDMS, TRashi } from '../types/global';

export class Rashi {
  rashi: TRashi;
  constructor(input: number | TDMS) {
    if (typeof input === 'number') {
      this.rashi = this.getRashiFromDegree(input);
    } else if (Array.isArray(input)) {
      this.rashi = this.getRashiFromDMS(input);
    }
  }

  static getNames() {
    return RASHIS;
  }

  getRashi() {
    return this.rashi;
  }

  getRashiFromDMS(DMS: TDMS): TRashi {
    let rashiIndex = Math.floor(UtilsDegree.getBoundDegree(DMS[0]) / 30);
    return { name: RASHIS[rashiIndex] };
  }

  getRashiFromDegree(degree: number): TRashi {
    let rashiIndex = Math.floor(UtilsDegree.getBoundDegree(degree) / 30);
    return { name: RASHIS[rashiIndex] };
  }
}
