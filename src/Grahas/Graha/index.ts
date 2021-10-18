import { TNakshatra, TRashi } from "../../types/global";

export class Graha {
  constructor(
    public lat: number,
    public lng: number,
    public bhava: number,
    public nakshatra: TNakshatra,
    public rashi: TRashi,
    public isRetrograde: boolean,
    public graha: string,
    public grahaCode: number,
  ) {

  }
}
