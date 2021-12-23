import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStates from './useStates';

const Details = () => {

    const params = useParams();
    const { name } = params;
    const { universities } = useStates();
    
    console.log(universities)

    const filtered = universities.filter(university => university.name === name);

    console.log(filtered)

    const university = filtered[0];

    const { country, alpha_two_code, domains, web_pages} = filtered[0]

    return (
         <div>
             <h1>{ name }</h1>
             <h5>Country: { country },{alpha_two_code}</h5>
             <h5>State: </h5>
             <h5>Domains: {domains.map(a => a)}</h5>
             <h5>WebSites: {web_pages.map(b=> b)}</h5>

         </div>
    );
};

export default Details;