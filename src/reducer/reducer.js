import { ADD_VALUE, SUBTRACT_VALUE, MULTIPLY_VALUE,DIVIDE_VALUE,RESET } from '../action/actionTypes';

export default function expression(state = 0, action) {
	switch(action.type) {
		case ADD_VALUE:
			return   firstNum + secondNum;
			break;
		case SUBTRACT_VALUE:
			return    firstNum - secondNum;
			break;
		case MULTIPLY_VALUE:
			return   firstNum * secondNum;
			break;
		case DIVIDE_VALUE:
			return   firstNum / secondNum;
			break;
		case RESET:
			return  " "
			break;
		default:
			return state;
	}
}
