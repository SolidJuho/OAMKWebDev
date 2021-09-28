import React from 'react';

export default function AddButtons(props) {
    const addNewItem = (pr) => {
        props.react.addNewItem(pr);
    }
    return (
        <div>
            <button onClick={()=>addNewItem({value:'Carrots',unit:'kg'})}>Add Carrots</button>
            <button onClick={()=>addNewItem({value:'Strawberries',unit:'kg'})}>Add Strawberries</button>
            <button onClick={()=>addNewItem({value:'Yogurt',unit:'ltr'})}>Add Yogurt</button>
            <button onClick={()=>addNewItem({value:'Beer',unit:'ltr'})}>Add Beer</button>

        </div>
    )
}
