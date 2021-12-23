import React from 'react';
import { FormControl, TextField, Button, Stack,  Container, Grid, Pagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Card from './Card';
import useStates from './useStates';

const Universities = () => {

    const { name,  pageCount,  universities,  handleInput, handleSearch, totalPage, loadOnPage, handlePagination } = useStates();

    return (
        <div>
            <h1>Search By University Name</h1>

            <form onSubmit={handleSearch}>
            <FormControl sx={{width: 'auto'}}>
            <Stack direction="row" spacing={2}>
                <TextField sx={{width: 400}} value={name} onChange={handleInput} id="outlined-basic" label="Search (Ex. United States)" variant="outlined" />
                <Button variant="contained" onClick={handleSearch} sx={{width: 1/4}} startIcon={<SearchIcon />}>Search</Button>
            </Stack>
            </FormControl>
            </form>
            
            <Container sx={{margin: '50px auto 20px auto'}}>
            <Grid container spacing={2}>

                   {
                        loadOnPage(pageCount).map(university => {
                            return (
                                <Card data={university} key={university.name}></Card> 
                            )
                        })
                    }
                </Grid>
            </Container>

                        {/* pagination  */}


            <Stack sx={{justifyContent: 'center', alignItems: 'center', margin: '20px auto'}} spacing={2}>
                {
                    universities.length > 10 && <Pagination count={totalPage} onChange={handlePagination} color="primary"/>
                }
            </Stack>
        </div>
    );
};

export default Universities;