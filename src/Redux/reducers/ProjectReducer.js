import { ADD_COMMENT } from "../types/ProjectType";
const stateDefault = {
    comments: [
        { name: 'Yone', content: 'Hi ! yasuo !', avatar: `https://i.pravatar.cc/150?u=yone` },
        { name: 'Yasuo', content: 'Hi ! brother !', avatar: `https://i.pravatar.cc/150?u=yasuo` }
    ]
}

const FakeBookReducer = (state = stateDefault, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_COMMENT: {
            state.comments = [...state.comments, action.userComment];
            return { ...state }
        }
    }
    return { ...state }
}


export default FakeBookReducer;