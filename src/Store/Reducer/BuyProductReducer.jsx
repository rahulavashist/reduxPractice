
export default (state = 0, {  action}) => {
    if(action.type =='buy'){
        return state + action.type
     }
     else if(action.type =='cancel'){
        return state - action.type
     }
     else{
        return state
     }
}
