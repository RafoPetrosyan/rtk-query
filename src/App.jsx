import {useFetchUserQuery} from "./store/users/index.js";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const { data, error, isLoading } = useFetchUserQuery({city_id: 1, category_id: 1});
    const [users, setUsers] = useState([]);

    console.log(data, 'data')
    console.log(isLoading, 'isLoading')

    console.log(users, 'users')


    useEffect(() => {
        (async () => {
            const {data: {data}} = await axios.get('https://dashboard.ledcoatingsolutions.com/api/products?categories=1')
            setUsers(data)
        })()
    }, []);

  return (
    <>
     dwdwd
    </>
  )
}

export default App
