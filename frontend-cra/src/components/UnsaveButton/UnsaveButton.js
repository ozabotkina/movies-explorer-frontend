function UnsaveButton(props) {
  const handleDeleteClick = (e) => {
    console.log(props.card._id);
    props.toDelete(props.card._id);
  };

  return (
    <div className="save-status">
      <button
        onClick={handleDeleteClick}
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
