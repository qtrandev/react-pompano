import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ItemList = ({ items, toggleItem }) => (
  <ul>
    {items.map(item =>
      <Item
        key={item.id}
        {...item}
        onClick={() => toggleItem(item.id)}
      />
    )}
  </ul>
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleItem: PropTypes.func.isRequired
}

export default ItemList