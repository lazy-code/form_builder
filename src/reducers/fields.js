import {
    CREATE_FIELD,
    REMOVE_FIELD,
    UPDATE_FIELD_TYPE,
    UPDATE_FIELD_VALUE,
    UPDATE_FIELD_ERROR,
    CLEAR_ALL_FIELDS
} from '../constatnts'

export default (fields = [], action) => {
    const { type, generatedId, payload } = action;

    switch(type) {
        case CREATE_FIELD:
            return [...fields, {id: generatedId, error: false, fieldType: 'none'}];

        case REMOVE_FIELD:
            return fields.filter(field => field.id !== payload.id);

        case UPDATE_FIELD_TYPE:
            return fields.map(field => {
                if (field.id === payload.id) {
                    field.fieldType = payload.fieldType;
                    field.fieldValue = '';
                    field.error = false;
                }
                return field;
            });

        case UPDATE_FIELD_VALUE:
            return fields.map(field => {
                if (field.id === payload.id) {
                    field.fieldValue = payload.fieldValue
                }
                return field;
            });

        case UPDATE_FIELD_ERROR:
            return fields.map(field => {
                if (payload.errors.indexOf(field.id) !== -1) {
                    field.error = true;
                }
                return field;
            });

        case CLEAR_ALL_FIELDS:
            return fields = [];
    }
    return fields;
};