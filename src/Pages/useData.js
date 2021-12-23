import  { useState, useEffect } from "react";


const useData = () => {

    const [name, setName] = useState('');
    const [pageCount, setPageCount] = useState(1);
    const [universities, setUniversities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (e) => {
            e.preventDefault();
            setName(e.target.value);
        }
    
    const handleSearch = () =>{
        if(name){
            setIsLoading(true);
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
        }
        else{
            alert('Please enter a university name');
            setName('')
        }
        setIsLoading(false);
    }
    const totalPage = Number((universities.length / 21 + 1).toFixed(0))

    const handlePagination = (e, value) => {
        e.preventDefault();
        setPageCount(value)
    }

    const loadOnPage = (page) => {
        setIsLoading(true);
        let start = (page - 1) * 21;
        let end = start + 21;
        let data = universities.slice(start, end);
        setIsLoading(false);
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
        handlePagination,
        isLoading
    }
};

export default useData;