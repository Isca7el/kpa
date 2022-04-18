import { fetchRequest } from "../reducer/saga reducer";
import { useDispatch, useSelector } from "react-redux";

const TestGraph = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.fetch);
    
    function onTest(){
        dispatch(fetchRequest());
        console.log(user)
    }
    return (
        <button className="test"
        onClick={onTest}>
            Тест GraphQL
        </button>
    )
}

export default TestGraph;