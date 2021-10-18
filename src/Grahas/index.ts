import { Graha } from './Graha';
import SE_GRAHAS from './SE_GRAHAS';
import * as swisseph from 'swisseph';
import { BirthDetails } from '../types/BirthDetails';
import { Nakshatra } from '../Nakshatra';
import { Rashi } from '../Rashi';

export class Grahas {
  grahas: Graha[];
  LaDegree: number;

  // JULIAN DAY IN ET
  jd_et: number;

  constructor(public bd: BirthDetails) {
    swisseph.swe_set_sid_mode(1, 0, 0);
    this.LaDegree = 0;
    this.jd_et = 0;
    this.grahas = [];
    this.calculateJdEt();
    this.calculateLagna(bd.lat, bd.lng, 'E');
    this.calculateGrahaPositions();
  }

  // A METHOD TO CALCULATE JULIAN DAY IN ET
  calculateJdEt(): void {
    // GET UTC FROM LOCAL TIME
    let utc = swisseph.swe_utc_time_zone(
      this.bd.year,
      this.bd.month,
      this.bd.date,
      this.bd.hour,
      this.bd.min,
      this.bd.sec,
      this.bd.timezone
    );

    // GET JULIAN DAY FROM UTC
    let julian = swisseph.swe_utc_to_jd(
      utc.year,
      utc.month,
      utc.day,
      utc.hour,
      utc.minute,
      utc.second,
      swisseph.SE_GREG_CAL
    );

    if ('julianDayUT' in julian) {
      this.jd_et = (julian && julian.julianDayUT) || 0;
    }
  }

  calculateLagna(lat: number, lng: number, lagna_type: string) {
    let Houses = swisseph.swe_houses_ex(
      this.jd_et,
      swisseph.SEFLG_SIDEREAL,
      lat,
      lng,
      lagna_type
    );
    if ('ascendant' in Houses) {
      this.LaDegree = Houses.ascendant;
    }
    // return [La, Houses.house];
  }

  getBoundDegree(degree: number): number {
    if (degree >= 0 && degree < 360) return degree;
    if (degree >= 360) return this.getBoundDegree(degree - 360);
    if (degree < 0) return this.getBoundDegree(degree + 360);
    return 0;
  }

  getBhavaOfGraha(degree: number): number {
    let relativeDegree = this.getBoundDegree(degree - this.LaDegree);
    return Math.floor(relativeDegree / 30) + 1;
  }

  // A METHOD TO CALUCLATE GRAHA POSITIONS
  calculateGrahaPositions(): void {
    let flag = swisseph.SEFLG_SPEED;
    flag += swisseph.SEFLG_SIDEREAL;

    Object.keys(SE_GRAHAS).forEach((graha: string) => {
      let g = swisseph.swe_calc_ut(this.jd_et, SE_GRAHAS[graha], flag);
      if ('longitude' in g) {
        let bhava = this.getBhavaOfGraha(g.longitude);
        let nakshatra = new Nakshatra(g.longitude).getNakshatra();
        let rashi = new Rashi(g.longitude).getRashi();
        let isRetrograde = g.longitudeSpeed > 0 ? true : false;

        let grahaObj = new Graha(
          g.latitude,
          g.longitude,
          bhava,
          nakshatra,
          rashi,
          isRetrograde,
          graha,
          SE_GRAHAS[graha]
        );
        this.grahas.push(grahaObj);
      }
    });
  }

  getAllGrahaPositions(): Graha[] {
    return this.grahas;
  }
}
