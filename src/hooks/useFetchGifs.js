import { useState, useEffect } from 'react';
import getGifs from '../helpers/GetGifs';

const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {

                setTimeout(() => {

                    console.log(imgs)

                    setstate({
                        data: imgs,
                        loading: false
                    });
                }, 2000);
            })
    }, [category])


    return state; //   data: [], loading: true};
}

export default useFetchGifs;