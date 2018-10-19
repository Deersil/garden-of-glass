import { createAction } from 'redux-act';

const createApiAction = (name: string) => ({
  cancel: createAction(`${name}::CANCEL`),
  failure: createAction(`${name}::FAILURE`),
  fromState: createAction(`${name}::FROM_STATE`),
  request: createAction(`${name}::REQUEST`),
  success: createAction(`${name}::SUCCESS`),
  throttle: createAction(`${name}::THROTTLE`)
});

export default createApiAction;
