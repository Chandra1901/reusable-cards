import React from 'react'
import Vector from './Vector'
import Question from './Question'
import './CardUI.css'

const CardUI1 = () => {
  return (
    <div className='card-container'>
        <div className='Innner-container'>
            <div className='Img'>
               <Vector />
            </div>
            <br />
            <div className='head-div'>
                <h4>User Licence</h4>
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
                    <h4>500</h4>
                    <p>Available</p>
                </div>
                <div>
                    <h4>12</h4>
                    <p>Invited</p>
                </div>
                <div>
                   <h4>16</h4>
                   <p>Activated</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardUI1