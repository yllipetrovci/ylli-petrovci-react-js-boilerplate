let initState = [
    { users_scores: 3214 },
    { notifications_scores: 9845 },
    { comments_scores: 1249 },
    { views_scores: 321469 }
];

const cardReducer = (state = initState, action) => {
    switch (action.type) {
        case 'READ_CARD_SCORES':
            return state;
        default:
            return state;
    }
}

export default cardReducer;