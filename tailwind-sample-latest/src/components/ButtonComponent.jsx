/* eslint-disable react/prop-types */

function ButtonComponent({onClick, btnName, isDisabled, btnType}) {
  return (
    <button disabled={isDisabled} type={btnType} className="btn self-end" onClick={onClick}>{btnName}</button>
  )
}

export default ButtonComponent