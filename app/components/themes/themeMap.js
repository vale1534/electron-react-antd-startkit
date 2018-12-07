import themeDefs from './themeDefs';

const presetThemes = {};

themeDefs.name.forEach((name, idx) => {
  const theme = {};
  Object.keys(themeDefs).forEach(key => {
    theme[key] = themeDefs[key][idx];
  });
  presetThemes[name] = theme;
});

export default presetThemes;
