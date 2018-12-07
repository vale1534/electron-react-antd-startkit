import { grey } from './colors';

console.log(grey);

const themeDefs = {
  name: ['light', 'dark'],
  frameBorderColor: [grey.tint5, 'black'],
  siderRightBorder: [`none`, `none`],
  siderMenuBackColor: [grey.tint8, grey.shade7],
  siderMenuForeColor: [grey.shade2, grey.tint2],
  siderMenuSelectedBackColor: [grey.tint4, grey.shade4],
  siderMenuSelectedForeColor: [grey.shade9, grey.tint9],
  siderMenuActiveBackColor: [grey.tint6, grey.shade6],
  siderMenuActiveForeColor: [grey.shade7, grey.tint7],
  siderMenuDisableForeColor: [grey.tint2, grey.shade2],
  siderBoxShadow: ['2px 0px 4px 0px rgba(210,210,210,1)', 'none'],
  scrollbarTrackBackColor: [grey.tint8, grey.shade7],
  scrollbarThumbBackColor: [grey.tint8, grey.shade4],
  scrollbarThumbActiveBackColor: [grey.tint6, grey.shade0],
  contentBackColor: [grey.tint8, grey.shade8],
  contentForeColor: [grey.shade4, grey.tint4],
  contentSectionBackColor: [grey.tint10, grey.shade9],
  contentSectionForeColor: [grey.shade4, grey.tint4],
  topbarBackColor: [grey.tint8, grey.shade7],
  topbarForeColor: [grey.shade6, grey.tint6],
  topbarBoxShadow: ['0px 2px 4px 0px rgba(190,190,190,1)', 'none'],
  searchInputBackColor: [grey.tint10, grey.shade10],
  searchInputForeColor: [grey.shade4, grey.tint2],
};

export default themeDefs;
