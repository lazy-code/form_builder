import { CREATE_FORM, UPDATE_FIELD_ERROR } from '../constatnts';
import { browserHistory } from 'react-router'

export default store => next => action => {
    const { type, ...rest } = action;
    if (type !== CREATE_FORM){
        return next(action);
    }

    let count = 0;
    const errors = store.getState().fields.map(field => {
        if (field.fieldType === 'none') {
            count++;
            return field.id;
        }
    });

    if (count > 0) {
        next({ ...rest, type: UPDATE_FIELD_ERROR, payload: {errors} });
    } else {
        browserHistory.push('/form');
    }
}