function SaveButton(props) {
  return (
    <div className="save-status">
      <div
        className={
          props.isSaved
            ? "save-status__saved save-status__saved_active"
            : "save-status__saved "
        }
      ></div>

      <button
        type="button"
        className={
          props.isSaved
            ? "save-status__save-button"
            : props.isMouseOver
            ? "save-status__save-button save-status__save-button_active"
            : "save-status__save-button"
        }
      >
        Сохранить
      </button>
    </div>
  );
}

export default SaveButton;
