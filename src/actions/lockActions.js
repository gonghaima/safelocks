import * as types from './actionTypes';

export function updateCurrentInput(inputNumber) {
    return { type: types.UPDATE_CURRENT_INPUT, newInputData: inputNumber };
}

export function updateLockStatus(status) {
    return { type: types.UPDATE_LOCKSTATUS, newStatus: status};
}

export function UPDATE_CURRENT_PIN(inputNumber) {
    return { type: types.UPDATE_CURRENT_PIN, newPin: inputNumber };
}
