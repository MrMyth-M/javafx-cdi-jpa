import store from "../store.js"
import {SET_CURRENT_SCHOOL_ID, SET_SCHOOLS} from "./school-action"

/** action creator to set schools */
export function setSchools(schools) {
    return store.dispatch(async dispatch => {
        dispatch({type: SET_SCHOOLS, schools})
    })
}
export function setCurrentSchoolId(currentSchoolId) {
    return store.dispatch(async dispatch => {
        dispatch({type: SET_CURRENT_SCHOOL_ID, currentSchoolId})
    })
}
export function findSchoolById(schoolId) {
    const school = store.getState().school.schools.find(school => school.id == schoolId)
    return school
}
