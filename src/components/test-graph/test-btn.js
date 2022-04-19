import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../../redux/actions/actions";

const TestGraph = () => {
    const dispatch = useDispatch();

    const handleUsers = () => {
        dispatch(getRequest())
    }

    return (
        <button className="test"
        onClick={handleUsers}>
            Тест GraphQL
        </button>
    )
}

export default TestGraph;