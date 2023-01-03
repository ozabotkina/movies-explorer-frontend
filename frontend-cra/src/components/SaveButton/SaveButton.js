import React from "react";

function SaveButton(props) {
  const [buttonText, setText] = React.useState("");

  const handleSaveClick = (e) => {
    console.log(props.isSaved);

    props.isSaved ? props.toDelete(props.myCard._id) : props.toSave(props.card);
  };

  // вот тут остановилась, надо проверить всю цепочку
  React.useEffect(() => {
    if (props.isSaved) {
      setText("");
    } else {
      setText("Сохранить");
    }
  }, [props.isSaved]);

  return (
    <div className="save-status">
      <button
        type="button"
        onClick={handleSaveClick}
        className={
          props.isSaved
            ? "save-status__saved"
            : props.isMouseOver
            ? "save-status__save-button save-status__save-button_active"
            : "save-status__save-button"
        }
      >
        {buttonText}
      </button>
    </div>
  );
}

export default SaveButton;
