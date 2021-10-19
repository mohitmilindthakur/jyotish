import { Graha } from "../Grahas/Graha"

export type TDMS = [number, number, number]

export interface TNakshatra {
    name: string;
    pada: number;
}

export interface TRashi {
    name: string;
}
export type TZodiacType = 'T' | 'S'

export type THouseType = 'E'

export interface TKundaliSettings {
    zodiacType: TZodiacType;
    ayanamsha: number;
    houseType: THouseType;
}

export type TBhavas = Graha[][]