import { ADD_EMPLOYEE, REMOVE_EMPLOYEE, UPDATE_EMPLOYEE } from '../redux/action-types';

export const addEmployee = payload => {
    return { type: ADD_EMPLOYEE, payload }
};

export const removeEmployee = payload => {
    return { type: REMOVE_EMPLOYEE, payload }
};

export const updateEmployee = payload => {
    return { type: UPDATE_EMPLOYEE, payload }
}