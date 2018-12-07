import { Icon } from 'antd';
import styled from 'styled-components';

import tv from '../themes/themeVars';

const SettingIcon = styled(Icon)`
  cursor: pointer;
  user-select: none;
  padding: 12px 16px;
  font-size: 16px;
  background-color: ${tv.siderMenuBackColor};
  color: ${tv.siderMenuForeColor};
  &:hover {
    background-color: ${tv.siderMenuActiveBackColor};
    color: ${tv.siderMenuActiveForeColor};
  }
  &:active {
    background-color: ${tv.siderMenuSelectedBackColor};
    color: ${tv.siderMenuSelectedForeColor};
  }
`;

export default SettingIcon;
