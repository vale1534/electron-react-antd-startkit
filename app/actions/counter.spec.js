import * as actions from './counter';

describe('counter actions', () => {
  it('t01 - snapshot testing', () => {
    expect(actions.increment()).toMatchSnapshot();
    expect(actions.decrement()).toMatchSnapshot();
    expect(actions.incrementIfOdd()).toMatchSnapshot();
    expect(actions.incrementAsync()).toMatchSnapshot();
  });

  it('t02', () => {
    expect(1).toBe(1);
  });
});
