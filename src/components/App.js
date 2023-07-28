import React, {useEffect, useState} from "react";

function App() {
    const [dogImg, setdogImg] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => setdogImg(data.message))
    },[])

    return (
        <div className="App">
            {dogImg ? <img src={dogImg} alt="A Random Dog"/> : <p>Loading...</p>}
        </div>
    )
}

export default App