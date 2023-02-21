import React from "react"

const Card = ({ background, children }) => {
  return (
    <div className={`${background} px-[16px] py-[18px] w-full border border-['#D1D5DB'] rounded-[10px]`}>
      { children }
    </div>
  )
}

export default Card;