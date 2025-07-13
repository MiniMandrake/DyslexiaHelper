function Button() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  };

  const hoverStyle = {
    backgroundColor: "#45a049",
  };

  return (
    <button
      style={buttonStyle}
      onMouseOver={(e) =>
        (e.target.style.backgroundColor = hoverStyle.backgroundColor)
      }
      onMouseOut={(e) =>
        (e.target.style.backgroundColor = buttonStyle.backgroundColor)
      }
      onClick={handleClick}
    >
      Click Me
    </button>
  );
}

export default Button;
