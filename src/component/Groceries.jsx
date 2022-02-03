import React, { useState } from 'react'

const groceries = [
    {
      item: 'Flour',
      brand: 'Golden Start',
      price: 12,
      quantity: '1lb',
      isPurchased: false
    },
    {
        item: 'Salt',
        brand: 'Diamond',
        price: 3,
        quantity: '11lb',
        isPurchased: false
      },
      {
        item: 'Eggs',
        brand: 'Maple Orchards',
        price: 3,
        quantity: '1dz',
        isPurchased: false
      },
      {
        item: 'Chocolate Chips',
        brand: 'Hershey',
        price: 6,
        quantity: '.5lb',
        isPurchased: false
      },
      {
        item: 'Butter',
        brand: 'Tillamook',
        price: 2,
        quantity: '1lb',
        isPurchased: false
      },
]

function GroceryList(){
    const [items, itemList] = useState(groceries)

    const price =groceries.map((Groceries,index)=>{
        return Groceries.price
    })
    let total = 0
    for(let i=0; i<price.length; i++) {
        total+=price[i]
    }
    return(
        <div>
            {items.map(itemList=>{
                return(
                    <div className="food">
                       <p>{itemList.item} </p>
                        
                       <p>{itemList.brand}</p>
                        
                       <p>{itemList.quantity}  </p>
                        
                         <p>{itemList.price}</p>
                         
                    </div>
                )
            })}
            <div>Total: {total}</div>
        </div>
    )
}



export default GroceryList
