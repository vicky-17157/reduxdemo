// Create Redux action types
export const GET_DEMOS = 'GET_DEMOS'
export const GET_DEMOS_SUCCESS = 'GET_DEMOS_SUCCESS'
export const GET_DEMOS_FAILURE = 'GET_DEMOS_FAILURE'

// Create Redux action creators that return an action
export const getDemos = () => ({
    type: GET_DEMOS,
  })
  
  export const getDemosSuccess = (demos) => ({
    type: GET_DEMOS_SUCCESS,
    payload: demos,
  })
  
  export const getDemosFailure = () => ({
    type: GET_DEMOS_FAILURE,
  })

  // Combine them all in an asynchronous thunk
export function fetchDemos() {
    return async (dispatch) => {
      dispatch(getDemos())
  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await response.json()
  
        dispatch(getDemosSuccess(data))
      } catch (error) {
        dispatch(getDemosFailure())
      }
    }
  }