import { configureStore, createSlice } from '@reduxjs/toolkit'
import usersReducer from './users'

const initialState = {
  entities: [],
  status: 1,
}
const todo = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    todoAdded(state: any, action) {
      const todo = action.payload
      state.entities[todo.id] = todo
    },
    setStatus(state: any, action) {
      console.log(action)
      state.status++
    },
    todoToggled(state, action) {
      const todoId = action.payload
      const todo: any = state.entities[todoId]
      todo.completed = !todo.completed
    },
  },
})
export const { todoAdded, todoToggled, setStatus } = todo.actions
// export default todo.reducer

export const store = configureStore({
  reducer: {
    users: usersReducer,
    todo: todo.reducer,
  },
})
export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
