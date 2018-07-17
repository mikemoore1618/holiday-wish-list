import React from 'react'

const Item= (props) => {
  const { gift, onRemoveClick } = props
    return (
      <li>
        {gift.name}
        <button onClick={() => { onRemoveClick(gift)}}>Remove</button>
      </li>
    )
  }

export default Item