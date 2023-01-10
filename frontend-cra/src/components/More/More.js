function More(props) {
  return (
    <div className="more">
      <button
        type="submit"
        className="more__button link"
        onClick={props.onClick}
      >
        Ещё
      </button>
    </div>
  );
}

export default More;
