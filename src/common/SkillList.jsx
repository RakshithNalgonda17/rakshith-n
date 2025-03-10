import React from 'react'

export default function SkillList({src, skill}) {
  return (
    <span>
        <img src={src} alt="CheckMark-Icon" />
            <p>{skill}</p>
    </span>
  )
}
