export const styleReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                themeColor: state.themeColor === "#F9FFE2" ? '#2A3C12' : "#F9FFE2",
                textColor: state.textColor === "black" ? "gray" : "black",
            };
        default:
            return state;
    }
};