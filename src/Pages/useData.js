import  { useState, useEffect } from "react";


const useData = () => {

    const [name, setName] = useState('');
    const [pageCount, setPageCount] = useState(1);
    const [universities, setUniversities] = useState([]);

    const handleInput = (e) => {
            e.preventDefault();
            setName(e.target.value);
        }
    
    const handleSearch = () =>{
        if(name){
            fetch(`http://universities.hipolabs.com/search?country=${name}`)
            .then(res => res.json())
            .then(data => {
                setName('');
                setUniversities(data)
            })
            .catch(err => {
                console.log(err);
                setUniversities([]);
                setName('');
            });
        }else{
            alert('Input')
            setName('')
        }
    }
    const totalPage = Number((universities.length / 21 + 1).toFixed(0))

    const handlePagination = (e, value) => {
        e.preventDefault();
        setPageCount(value)
    }

    const loadOnPage = (page) => {
        let start = (page - 1) * 21;
        let end = start + 21;
        let data = universities.slice(start, end);
        return data;
    }


    return {
        name,
        setName,
        pageCount,
        setPageCount,
        universities,
        setUniversities,
        handleInput,
        handleSearch,
        totalPage,
        loadOnPage,
        handlePagination
    }
};

export default useData;