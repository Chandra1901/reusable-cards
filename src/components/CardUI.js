import React from 'react'
import Vector from './Vector'
import Question from './Question'
import './CardUI.css'

const CardUI1 = (props) => {

    const { title, para, num1, para1, num2, para2, num3, para3 } = props;
  return (
    <div className='card-container'>
        <div className='Innner-container'>
            <div className='Img'>
               <Vector />
            </div>
            <br />
            <div className='head-div'>
                <h4>{title}</h4>
                &nbsp;
                &nbsp;
                <Question />
            </div>
            <div>
                <p>{para}</p>
            </div>
            <br />
            <br />
            <div className='bottom-conatainer'>
                <div>
                    <h4>{num1}</h4>
                    <p>{para1}</p>
                </div>
                <div>
                    <h4>{num2}</h4>
                    <p>{para2}</p>
                </div>
                <div>
                   <h4>{num3}</h4>
                   <p>{para3}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardUI1