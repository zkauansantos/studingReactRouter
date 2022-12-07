import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function Post( ) {
    const { id } = useParams();
    const { search } = useLocation();
    const queryParams = useMemo(() => new URLSearchParams(search), [search])


    console.log(queryParams.get('meuqueryparam'));
 
    return <h1> Post Page {id}</h1>
}