import * as types from './actionTypes.js';

export function addvalue() {
  return {
    type: types.ADD_VALUE
  }
}

export function subtractvalue()() {
  return {
    type: types.SUBTRACT_VALUE
  }
}

export function multiplyvalue() {
  return {
    type: types.MULTIPLY_VALUE
  }
}


export function dividevalue() {
  return {
    type: types.DIVIDE_VALUE
  }
}

export function reset() {
  return {
    type: types.RESET
  }
}
