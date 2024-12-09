import React from 'react'
import { Attributes } from '../types';

interface AttributeProps {
  attributes: Record<string, number>;
  incrementValue: (key: string) => void;
  decrementValue: (key: string) => void;
}

const MAX_ATTRIBUTE = 70

const AttributesSection: React.FC<AttributeProps> = ({ attributes, incrementValue, decrementValue }) => {
  console.log("In attributes component",attributes)
  const totalAttributes = Object.values(attributes).reduce((total, a) => {
    return total += a;
  })
  if (totalAttributes > MAX_ATTRIBUTE) {
    window.alert("Total attributes > 70")
  }
  
  return (
    <div>
      <h1>Attributes</h1>
      <div className='attribute_top'>
        {Object.entries(attributes).map(([key, value]) => (
          <div className='attribute'
            key={key}
          >
            <div>
              <strong>{key}</strong>: {value}
            </div>
            <div>
            <button
                className='button'
                onClick={() => incrementValue(key)}
              >
                <strong>Increment [+]</strong>
              </button>
              <button
              className='button'
               onClick={() => decrementValue(key)}>
                <strong>Decrement [-]</strong>
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default AttributesSection
