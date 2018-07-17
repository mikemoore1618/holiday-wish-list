import React from 'react'
import Item from './Item'

const WishList = (props) => {
  const {gifts, onRemoveClick } = props
    return (
      <ul>
        {gifts.map((g, iForIndex) => {
          return (
            <Item onRemoveClick={onRemoveClick} 
            key={iForIndex} gift={g} 
            />
          )
        })}
      </ul>
    )
  }

export default WishList