import { connect } from 'react-redux'
import { toggleItem } from '../actions'
import ItemList from '../components/ItemList'
import { VisibilityFilters } from '../actions'

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return items
    case VisibilityFilters.SHOW_COMPLETED:
      return items.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return items.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  items: getVisibleItems(state.items, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleItem: id => dispatch(toggleItem(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)
