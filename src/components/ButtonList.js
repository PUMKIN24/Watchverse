import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className="flex m-2 p-3 ">
      <Button name={"All"} />
      <Button name={"News"}  />
      <Button name={"2024"}  />
      <Button name={"Sports"}  />
      <Button name={"Politics"}  />
      <Button name={"World"}  />
      <Button name={"Economics"}  />
      <Button name={"Science"}  />
      <Button name={"Wild"}  />
      <Button name={"Cooking"}  />
      <Button name={"Exercise"}  />
    </div>
  )
}

export default ButtonList