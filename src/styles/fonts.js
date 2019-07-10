// Fonts
// import msSansW2 from "./../assets/fonts/MS-Sans-Serif.woff2";
import msSansW from "./../assets/fonts/MS-Sans-Serif.woff";
import msSansEOT from "./../assets/fonts/MS-Sans-Serif.eot";
import msSansTT from "./../assets/fonts/MS-Sans-Serif.ttf";
import msSansSVG from "./../assets/fonts/MS-Sans-Serif.svg";

export const MsSansSerif = `
@font-face {
    font-family: 'MS Sans Serif';
    src: url('${msSansEOT}.eot');
    src: url('${msSansEOT}?#iefix') format('embedded-opentype'),
        url('${msSansW}') format('woff'),
        url('${msSansTT}') format('truetype'),
        url('${msSansSVG}#MS-Sans-Serif') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`;
