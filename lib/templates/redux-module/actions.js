import {
    $(upper)_$(actionUpper)_START,
    $(upper)_$(actionUpper)_SUCCESS,
    $(upper)_$(actionUpper)_ERROR,
} from './const';

// Sync Action Creator
const $(actionCamel)StartActionCreator = () => {
    return {
        type: $(upper)_$(actionUpper)_START,
        payload: null,
    };
};

const $(actionCamel)SuccessActionCreator = (data) => {
    return {
        type: $(upper)_$(actionUpper)_SUCCESS,
        payload: data,
    };
};

const $(actionCamel)ErrorActionCreator = (errorMessage) => {
    return {
        type: $(upper)_$(actionUpper)_ERROR,
        payload: errorMessage,
    };
};

// Async Action Creator
export const $(actionCamel)ActionCreatorAsync = () => {
    return (dispath) => {
        dispath($(actionCamel)StartActionCreator());
        // Call Services

        // SUCCESS
        // dispath($(actionCamel)SuccessActionCreator([]));

        // ERROR
        // dispath($(actionCamel)ErrorActionCreator('ERROR'));
    };
};