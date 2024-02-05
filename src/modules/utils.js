import * as convert from "color-convert";

const COLORNUMBER = 15;

function converter(hexa) {
    const color = convert.hex.hsl(hexa);
    const colorTab = [];
    for(let i=0; i<=COLORNUMBER; i++) {
        const singleColor = [...color];
        singleColor[2] = 100/COLORNUMBER*i;
        colorTab.push(singleColor);
    }
    return colorTab;
}

export default converter;