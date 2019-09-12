const items = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return [
          {
            id: action.id,
            text: action.text,
            completed: false
          },
          ...state
        ]
      case 'TOGGLE_ITEM':
        return state.map(item =>
          (item.id === action.id)
            ? {...item, completed: !item.completed}
            : item
        )
      default:
        return state
    }
  }
  
export default items