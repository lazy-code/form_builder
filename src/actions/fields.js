import {
    CREATE_FIELD,
    REMOVE_FIELD,
    UPDATE_FIELD_TYPE,
    UPDATE_FIELD_VALUE,
    CLEAR_ALL_FIELDS
} from '../constatnts';

export function createField() {
    return {
        type: CREATE_FIELD,
        generateId: true
    }
}

export function removeField(id) {
    return {
        type: REMOVE_FIELD,
        payload: { id }
    }
}

export function updateFieldType(id, fieldType) {
    return {
        type: UPDATE_FIELD_TYPE,
        payload: { id, fieldType }
    }
}

export function updateFieldValue(id, fieldValue) {
    return {
        type: UPDATE_FIELD_VALUE,
        payload: { id, fieldValue }
    }
}

export function clearAllFields() {
    return {
        type: CLEAR_ALL_FIELDS
    }
}
