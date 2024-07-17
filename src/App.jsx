import {useFetchUserQuery} from "./store/users/index.js";
import {useEffect, useState} from "react";
import _ from 'lodash'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "./store/users/reducer.js";

function App() {
    const [users, setUsers] = useState([]);
    const {count} = useSelector(state => state.users)
    // const [count, setCount] = useState(0);
    const { data, error, isLoading } = useFetchUserQuery({city_id: count, category_id: 1});
    const dispatch = useDispatch()

    console.log(data, 'data')
    console.log(isLoading, 'isLoading')

    console.log(users, 'users')

    const handleCount = () => {
        dispatch(setCount(count + 1));
    }

    useEffect(() => {
        (async () => {
            const {data: {data}} = await axios.get('https://dashboard.ledcoatingsolutions.com/api/products?categories=1')
            setUsers(data)
        })()
    }, []);

  return (
    <>
        <button onClick={handleCount}>count</button>
        {count}
        {!_.isEmpty(data?.data) && (
            data?.data.map(item => <p key={item.category_id}>{item.category_id}</p>)
        )}
    </>
  )
}

export default App
