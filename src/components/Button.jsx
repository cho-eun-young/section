// props는 부모 컴포넌트에서 자식 컴포넌트로만 전달할 수 있다.
const Button = ({text, color, children}) => {
  return (<button style={{color: color}}>{text} - {color.toUpperCase()}
  {children}
  </button>)
}

Button.defaultProps = {
  color: "black",
}

export default Button;