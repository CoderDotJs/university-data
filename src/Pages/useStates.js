import { useContext } from 'react';
import { AuthContext } from './DataProvider';

const useStates = () => {
    return useContext(AuthContext);
};

export default useStates;