import PropTypes from 'prop-types'

function Header({text,bgColor, textColor}) {
  const headerStyles={
    backgroundColor: bgColor,
    color:textColor
  }

  return (
      <div className="container" style={headerStyles}>
        <h1>{text}</h1>
      </div>
  )
}

// Dynamic value of Prop
Header.defaultProps = {
    text: "Feedback UI",
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95'

}

// For type checking Header
Header.propTypes={
    text: PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,
}

export default Header
