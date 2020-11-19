
import classnames from 'classnames'

const PaletteItem =  (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const styles = {
    backgroundColor: props.color
  }
  const classname = classnames({
    'palette__item': true,
    'is-active': props.isSelect
  })
  return (
    <button className={classname}  style={styles} onClick={()=> {props.onClick()}}>
    </button>
  )
}

export default PaletteItem