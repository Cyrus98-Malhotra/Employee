const Reducer = ( state=[] , action ) => {
    switch(action.type){
        case 'ADD_EMP':
            var newState = {...state};
            let formInput = action.payload;
            return(
              newState = {...newState, formInput }
            );

        case 'DEL_EMP':
            return null

        default: return null;
    }
}
export default Reducer;
