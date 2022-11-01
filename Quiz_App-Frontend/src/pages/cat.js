import '../Answer.css';
import { useParams } from 'react-router-dom';

export function Cat () {
    let { id } = useParams();
    return(
        <h1 className="Answer"> {id}, You are a Cat!</h1>
    )
}