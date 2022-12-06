function UnsaveButton(props) {
  return (
    <div className="save-status">
      <button
        type="button"
        className={
          props.isMouseOver
            ? "save-status__unsave-button save-status__unsave-button_active"
            : "save-status__unsave-button"
        }
      />
    </div>
  );
}

export default UnsaveButton;
