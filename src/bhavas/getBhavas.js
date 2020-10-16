const calculateLagna = (tt, {lat, lng}, lagna_type) => {
    let Houses = swisseph.swe_houses_ex(tt, swisseph.SEFLG_SIDEREAL, lat, lng, lagna_type);
    console.log('Houses', Houses);
    return Houses.ascendant;
}