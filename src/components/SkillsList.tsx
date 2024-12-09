import React from 'react'
import { SKILL_LIST } from '../consts'

// export interface Skills {
//     name: string,
//     attributeModifier: string
// }

// export interface SkillsProps {
//     skillsList: Skills[]
// }

const SkillsList: React.FC<any> = ({}) => {
    
  return (
    <div>
      <h3>Skills List</h3>
      <ul>
        {SKILL_LIST.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong>: {item.attributeModifier}
          </li>
        ))}
        </ul>
    </div>
  )
}

export default SkillsList
