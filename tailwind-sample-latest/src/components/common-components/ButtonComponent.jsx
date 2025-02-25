/* eslint-disable react/prop-types */

function ButtonComponent({ onClick, btnName, isDisabled, btnType }) {
  return (
    <button
      disabled={isDisabled}
      type={btnType}
      style={{
        border: "2px solid black",
        borderRadius: 0,
        backgroundColor: isDisabled ? "lightgrey" : "lightgrey",
        color: isDisabled ? "darkgrey" : "black",
        fontSize: "15px",
        minWidth: "150px",
        fontWeight: "bold",
        cursor: isDisabled ? "default" : "pointer",
      }}
      className="btn self-end border-2 border-black h-10 m-auto flex items-center justify-center text-center"
      onClick={onClick}
    >
      {btnName}
    </button>
  );
}

export default ButtonComponent;
