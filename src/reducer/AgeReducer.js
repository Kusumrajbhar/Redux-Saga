const age = 18

const ageReducer = (state= age, {type, payload}) => {
    switch(type) {
        case 'AGE_UP_ASYNC' : return state + 1
        
        case 'AGE_DOWN' : return state - 1
    
        default : return state
    } 
  } 

  export default ageReducer