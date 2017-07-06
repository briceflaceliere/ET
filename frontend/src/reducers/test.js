const test = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_TEST':
            return state + 1;
        default:
            return state
    }
}

export default test
