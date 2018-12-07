import React, { Component } from 'react';
import { Button, Collapse } from 'antd';

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 8,
  border: 0,
  overflow: 'hidden'
};

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class MockSection1 extends Component {
  render() {
    return (
      <section>
        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Collapse.Panel
            header={<Button>Hello</Button>}
            key="1"
            style={customPanelStyle}
          >
            <p>{text}</p>
          </Collapse.Panel>
          <Collapse.Panel
            header="This is panel header 2"
            key="2"
            style={customPanelStyle}
          >
            <p>{text}</p>
          </Collapse.Panel>
          <Collapse.Panel
            header="This is panel header 3"
            key="3"
            style={customPanelStyle}
          >
            <p>{text}</p>
          </Collapse.Panel>
        </Collapse>
      </section>
    );
  }
}

export default MockSection1;
