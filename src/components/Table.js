import '../App.css';
import React from 'react'

export default function Table(props) {
    
    const styles = {
        border:"1px solid "+props.borderColor
      }
    
  return (
    
    <div style={styles} aria-disabled="true" clicked={props.clickTest} onClick={props.ClickItem} className='item' >{props.value}</div>
        

   
  )
}

