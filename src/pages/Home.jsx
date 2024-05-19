import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../component/Navbar";

const Home = () => {
    const [data, setData] = useState([]); //tahap 1

    const getMenu = () => { //tahap 2
        axios
            .get("https://api.mudoapi.tech/menus?perPage=5&page")
            .then((res) => {
                console.log(res);
                const response = res?.data.data.Data;
                setData(response);
        })
        .catch((err) => console.log(err.response));

    };  

    useEffect(() => { //tahap 3
        getMenu();
    }, []);


    return (
      <div>
        
        <Navbar/>
        <h1>Daftar Menu</h1>
        {data.map(list => ( //looping menu list
          <div className="card-container">
            <img src={list?.imageUrl} alt="" />
            <div className="item">
              <p> {list?.name}</p>
              <p>price ${list?.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
};


export default Home;