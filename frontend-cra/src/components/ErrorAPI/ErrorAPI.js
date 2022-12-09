
import { Link } from "react-router-dom";

function ErrorAPI(props) {
    return(

<div
 className =
 {props.isOpen
    ? "error-page error-page_opened"
    : "error-page "}>
    <h2 className = "error-page__title">
        404
    {/* {props.error.code} */}
    </h2>
    <h3 className="error-page__subtitle">
        Страница не найдена
    {/* {props.error.message} */}
    </h3>
    <Link 
        to="/" 
        className="error-page__back link">
            Назад
    </Link>
</div>

    )
}

export default ErrorAPI;