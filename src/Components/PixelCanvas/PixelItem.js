

function PixelItem(props) {
  const domStyle = {
    color: 'white',
    backgroundColor: props.color || 'rgb(49, 49, 49)'
  }
  return (
    <div className="pixel-canvas__item" style={domStyle}>
    </div>
  )
}

export default PixelItem