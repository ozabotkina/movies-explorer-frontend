function Switch(props) {
  return (
    <div className="switch" onClick={props.handleClick}>
      <div
        className={
          props.isOn ? "switch__area" : "switch__area switch__area_off"
        }
      >
        <div className="switch__button"></div>
      </div>
      <div className="switch__label">Короткометражки</div>
    </div>
  );
}

export default Switch;
