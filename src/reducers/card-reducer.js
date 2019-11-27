let initState = {
    users_score: 3214,
    notifications_score: 9845,
    comments_score: 1249,
    views_score: 321469
}


const cardReducer = (state = initState, action) => {
    switch (action.type) {
        case 'READ_CARD_SCORES':
            return state;
        default:
            return state;
    }
}

export default cardReducer;