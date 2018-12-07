import styled, { createGlobalStyle } from 'styled-components';
import { Layout } from 'antd';

import tv from '../themes/themeVars';

export const StyledLayout = styled(Layout)`
  border: 1px solid ${tv.frameBorderColor};
  height: 100vh;
  && {
    .ant-layout-sider-children {
      border-right: ${tv.siderRightBorder};
      background-color: ${tv.siderMenuBackColor};
      box-shadow: ${tv.siderBoxShadow};
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      padding-top: 36px;
    }
    .ant-layout-content {
      background-color: ${tv.contentBackColor};
      color: ${tv.contentForeColor};
      overflow: hidden;
    }
  }
`;

export const StyledContent = styled.div`
  margin-top: 16px;
  padding: 32px 16px;
  height: 100%;
  overflow-y: auto;
  > div.content {
    max-width: 900px;
    margin: auto;
    > section {
      background-color: ${tv.contentSectionBackColor};
      color: ${tv.contentSectionForeColor};
      padding: 16px 20px;
      border-radius: 4px;
      margin: 16px 0;
      overflow: none;
    }
  }
`;

export const SiderIcon = styled.i`
  cursor: pointer;
  user-select: none;
  padding: 8px 16px;
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

export const ScrollbarGlobalStyle = createGlobalStyle`
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background-color: ${tv.scrollbarTrackBackColor};
  box-shadow: none;
}

*::-webkit-scrollbar-thumb {
  background-color: ${tv.scrollbarThumbBackColor};
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  outline: none;
  border-radius: 8px;
  min-height: 80px;
  max-height: 200px;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: ${tv.scrollbarThumbActiveBackColor};
}`;
