import React from 'react';
import { FormControl, TextField, Button, Stack,Box,  Container, Grid, Pagination, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Card from './Card';
import useStates from './useStates';

const Universities = () => {

    const { name,  pageCount,  universities, isLoading,  handleInput, handleSearch, totalPage, loadOnPage, handlePagination } = useStates();

    console.log(isLoading)

    return (
        <div>
            <h1>Search By University Name</h1>

            <form onSubmit={handleSearch}>
            <FormControl sx={{width: 'auto'}}>
            <Stack direction="row" spacing={2}>
                <TextField sx={{width: 400}} value={name} onChange={handleInput} id="outlined-basic" label="Search (Ex. United States)" variant="outlined" />
                <Button variant="contained" onClick={handleSearch} sx={{width: 1/4}} startIcon={<SearchIcon />}>Search</Button>
            </Stack>

            {/* <Grid container spacing={2}>
                <Grid item xs={12} md={12} sm={12}>
                    <TextField sx={{maxWidth: 350}} value={name} onChange={handleInput} id="outlined-basic" label="Search (Ex. United States)" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                    <Button variant="contained" onClick={handleSearch} sx={{width: 1/4}} startIcon={<SearchIcon />}>Search</Button>
                </Grid>
            </Grid> */}
            </FormControl>
            </form>
            
            { 
                isLoading ? 
                <Box sx={{ display: 'flex' }}> 
                    <CircularProgress />
                </Box> 
                :
                <div>
                    {
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
                    }
                </div>
            }

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