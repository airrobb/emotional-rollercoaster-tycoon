const INITIAL_STATE = {
  resources: {
    health: 100,
    money: 100,
    projections: 100,
    legal: 100,
    morale: 100,
    productivity: 100
  },
  equity: {
    you: 25,
    wife: 75
  },
  time: {
    day: 0,
    hours: 8
  },
  event: {
    active: 1
  },
  actionCount: {}
};

export default INITIAL_STATE;
