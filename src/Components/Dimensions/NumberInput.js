const NumberInput = (props) => {
  return (
    <div className="number-input">
      <div className="number-input__value">
        {props.value}
      </div>
      <div className="number-input__buttons">
        <button className="number-input__add" onClick={()=> {props.onChange('add')}}>
          +
        </button>
        <button className="number-input__remove" onClick={()=> {props.onChange('remove')}}>
          -
        </button>
      </div>
    </div>
  )
}

export default NumberInput 