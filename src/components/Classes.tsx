import React from 'react'
import { CLASS_LIST } from '../consts'
import { Attributes, Class } from '../types';

interface ClassProps {
    classes: Record<Class, Attributes>;
    selectedClass: string | null
    handleClassClick: (className: string) => void
    isMatchingClass: (classAttributes: Attributes) => boolean
    
  }
const Classes: React.FC<ClassProps> = ({ classes, selectedClass, handleClassClick, isMatchingClass }) => {
    console.log("Classes", classes)
  return (
    <div>
      {Object.keys(classes).map((className) => (
        <div key={className} style={{ marginBottom: '10px' }}>
          <h2
            style={{ cursor: 'pointer', color: isMatchingClass(classes[className] as Attributes) ? 'red' : 'white', display: 'flex', justifyContent: 'flex-start', padding: '20px' }}
            onClick={() => handleClassClick(className)}
          >
            {className}
          </h2>
          {selectedClass === className && (
            <ul>
              {Object.entries(classes[className] as Attributes).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default Classes
