import React, {useState, useEffect} from 'react'

export default function GetApiData({active}) {
    const url = 'https://stage.actie.ru/api/v1/checks/winners/';
    let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Actie-Promo-Action", "0a3cfda0-21fb-4510-878a-8016a0c18e15");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch(url, requestOptions)
          .then(res => res.json())
          .then(
            (result) => {
            setIsLoaded(true);
            setItems(result.checks);

            console.log(result.checks);

            
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, [])


      
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
            return <div>Загрузка...</div>;
    } else {
        
        return (
            <div className="winner__list">
                {
                    items.map(item => (
                        <div className="winners__list-item" key={item.fd}>
                            <div className="winners__prise">{item.prise}</div>
                            <div className="winners__tel">{item.phone}</div>
                            <div className="winners__data">{item.draw_period}</div>
                        </div>
                    ))
                }
            </div> 
        );
    }
}
