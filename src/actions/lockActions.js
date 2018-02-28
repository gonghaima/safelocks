import * as types from './actionTypes';

export function updateCurrentInput(inputNumber) {
    return { type: types.UPDATE_CURRENT_INPUT, newInputData: inputNumber };
}

export function clearCurrentInput() {
  return { type: types.CLEAR_CURRENT_INPUT};
}
export function validateCurrentInput(inputNumber) {
  return { type: types.VALIDATE_CURRENT_INPUT, inputData: inputNumber};
}
export function updateLockStatus(status) {
    return { type: types.UPDATE_LOCKSTATUS, newStatus: status};
}

export function updateCurrentPin(inputNumber) {
    return { type: types.UPDATE_CURRENT_PIN, newPin: inputNumber };
}

export function InitStore() {
  return { type: types.INIT_STORE };
}
