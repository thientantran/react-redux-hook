import { ADD_COMMENT } from "../types/ProjectType";


export const addCommentAction = (userComment) => ({
    type: ADD_COMMENT,
    userComment
})