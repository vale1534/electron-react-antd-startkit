/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import Color from 'color';

export const grey = { hex: '#808080' };
export const red = { hex: '#f03e3e' };
export const pink = { hex: '#d6336c' };
export const grape = { hex: '#ae3ec9' };
export const violet = { hex: '#7048e8' };
export const indigo = { hex: '#4263eb' };
export const blue = { hex: '#1c7ed6' };
export const cyan = { hex: '#1098ad' };
export const teal = { hex: '#0ca678' };
export const green = { hex: '#37b24d' };
export const lime = { hex: '#74b816' };
export const yellow = { hex: '#f59f00' };
export const orange = { hex: '#f76707' };

export const white = { hex: '#ffffff', obj: Color('#ffffff') };
export const black = { hex: '#000000', obj: Color('#000000') };

export const colors = [
  grey,
  red,
  pink,
  grape,
  violet,
  indigo,
  blue,
  cyan,
  teal,
  green,
  lime,
  yellow,
  orange
];

for (let i = 0; i < 11; ++i) {
  colors.forEach(color => {
    color.obj = Color(color.hex);
    color[`tint${i}`] = color.obj.mix(white.obj, 0.1 * i).hex();
    color[`shade${i}`] = color.obj.mix(black.obj, 0.1 * i).hex();
  });
}

export default colors;
