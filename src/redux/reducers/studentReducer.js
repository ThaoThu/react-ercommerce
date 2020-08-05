import { GET_HS_INFO } from "../actions/types"

let initial = {
    activeStudentInfo : {}
}
export const studentReducer = (state = initial,action) => {
    switch(action.type){
        case GET_HS_INFO : return {...state, activeStudentInfo : action.payload}
        default : return state
    }
}