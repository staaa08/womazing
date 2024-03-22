import React from 'react'
import Card from '../components/card/Card'


const Shop = (props) => {
    const [categoryData, setCategoryData]=React.useState(props.products)
    const newCategories=[]
    const categories=props.products.map((el)=>{
        if(el.kategory && !newCategories.includes(el.kategory)){
            newCategories.push(el.kategory)
        }
    })
    const filterTitle=(title)=>{
        const filterProducts=props.products.filter(el=>el.kategory===title)
        setCategoryData(filterProducts)
    }
    console.log(newCategories);
  return (
    <div>
        <div className='categories'>
            <h1>Магазин</h1>
            {newCategories.map((el)=>(
                <button className='buttons' onClick={(e)=>filterTitle(e.target.innerText)}>{el}</button>
            ))}
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 30 }}>
            {categoryData.map((el)=> <Card {...el}/>)}
        </div>
    </div>
  )
}

export default Shop
