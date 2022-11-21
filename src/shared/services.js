import Spinner from '../widgets/Spinner';
import ErrorMesage from '../widgets/errorMessage/ErrorMesage';

export const setContent = (process, Component) => {
    switch (process) {
        case 'loading':
            return <Spinner />;
        case 'confirmed':
            return <Component />;
        case 'error':
            return <ErrorMesage />;
        default:
            throw new Error('Unexpected process state')
    }
}

