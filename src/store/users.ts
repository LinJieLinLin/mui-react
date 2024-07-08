const initialState = {
  name: 'linj',
  age: 1,
}
export default function userReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state }
    case 'addAge':
      console.log('addAge', action)
      return { ...state, age: state.age + 1 }
    default:
      return state
  }
}
