let initState = {name:"Hugh",lastname:"Laurie"};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "READ_USER":
            return state;
        default:
            return state;
    }
}

export default userReducer;