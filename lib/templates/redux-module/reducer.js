import {
    $(upper)_$(actionUpper)_START,
    $(upper)_$(actionUpper)_SUCCESS,
    $(upper)_$(actionUpper)_ERROR,
} from './const';

const initialState = {
    data: null, // or [] or {},
    loading: false,
    errorMessage: '',
    error: false,
    success: null,
};

const $(kebab)Reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case $(upper)_$(actionUpper)_START:
            return {
                ...prevState,
                loading: true,
            };
        case $(upper)_$(actionUpper)_SUCCESS:
            return {
                ...prevState,
                loading: false,
                data: action.payload,
                error: false,
                success: true,
            };
        case $(upper)_$(actionUpper)_ERROR:
            return {
                ...prevState,
                loading: false,
                errorMessage: action.payload,
                error: true,
                success: false,
            };

        default:
            return prevState;
    }
};

export default $(kebab)Reducer;