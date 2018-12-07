import themeDefs from './themeDefs';

const themeVars = {};

Object.keys(themeDefs).forEach(key => {
  themeVars[key] = props => (props.theme)[key];
});

export default themeVars;
