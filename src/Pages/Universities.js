import { FormControl, TextField, Button, Stack, List, ListItemButton, ListItemIcon, ListItemText, Container, Grid, Pagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import React, {  useState } from 'react';
import { NavLink } from 'react-router-dom';

const Universities = () => {

    const [name, setName] = useState('');
    const [pageCount, setPageCount] = useState(1);
    const [universities, setUniversities] = useState([]);
    let country = []
    const handleInput = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleSearch = () =>{
        if(name){
            fetch(`http://universities.hipolabs.com/search?country=${name}`)
            .then(res => res.json())
            .then(data => {
                country.push(name)
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

    return (
        <div>
            <h1>Search By University Name</h1>

            <form>
            <FormControl sx={{width: 'auto'}}>
            <Stack direction="row" spacing={2}>
                <TextField sx={{width: 400}} value={name} onChange={handleInput} id="outlined-basic" label="Search (Ex. United States)" variant="outlined" />
                <Button variant="contained" onClick={handleSearch} sx={{width: 1/4}} startIcon={<SearchIcon />}>Search</Button>
            </Stack>
            </FormControl>
            </form>

            {
                universities.length > 0 && <h1>Universities in {country[0]}</h1>
            }
        
            
            <Container sx={{margin: '50px auto 20px auto'}}>
            <Grid container spacing={2}>

                   {
                        loadOnPage(pageCount).map(university => {
                            return (
                                <Grid item xs={4} key={university.name}>
                                <NavLink to={`/universities/${university.name}`} style={{color: 'black', textDecoration: 'none'}}>
                                    <List>
                                        <ListItemButton>
                                          <ListItemIcon>
                                            <SendIcon />
                                          </ListItemIcon>
                                          <ListItemText primary={university.name} />
                                        </ListItemButton>
                                    </List>
                                </NavLink>
                                </Grid>  
                            )
                        })
                    }
                </Grid>
            </Container>
            <Stack sx={{justifyContent: 'center', alignItems: 'center', margin: '20px auto'}} spacing={2}>
                {
                    universities.length > 10 && <Pagination count={totalPage} onChange={handlePagination} color="primary"/>
                }
            </Stack>
        </div>
    );
};

export default Universities;