import React from 'react'
import Vector from './Vector'
import Question from './Question'
import './CardUI.css'

const CardUI3 = () => {
  return (
    <div className='card-container'>
        <div className='Innner-container'>
            <div className='Img'>
               <Vector />
            </div>
            <br />
            <div className='head-div'>
                <h4>Guest User Licence</h4>
                &nbsp;
                &nbsp;
                <Question />
            </div>
            <div>
                <p>All the users in your licence, active, Invited and available. </p>
            </div>
            <br />
            <br />
            <div className='bottom-conatainer'>
                <div>
                    <h4>1000</h4>
                    <p>Available</p>
                </div>
                <div>
                    <h4>45</h4>
                    <p>Invited</p>
                </div>
                <div>
                   <h4>15</h4>
                   <p>Activated</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardUI3