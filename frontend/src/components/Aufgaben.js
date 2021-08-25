import { useEffect, useState } from "react";
import axios from 'axios'
import {
    Link
} from "react-router-dom";

const Aufgaben = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get('/api/aufgabe')
            .then(result => setData(result.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>Aufgaben</h1>
            {data && (data.map(aufgabe => <div key={aufgabe._id}>
                <Link to={`/aufgaben/${aufgabe._id}`}>
                    {aufgabe.name}
                </Link>
                <p>{aufgabe.name}</p>
            </div>))}
        </div>
    );
}

export default Aufgaben;