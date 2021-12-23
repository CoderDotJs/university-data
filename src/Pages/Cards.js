import React from 'react';
import { useParams } from 'react-router-dom';

const Cards = (props) => {

    const params = useParams();

    console.log(params.universitiesId)

    return (
         <div>
             {params.universitiesId}
         </div>
    );
};

export default Cards;