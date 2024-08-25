import './styles/index.scss';
import { AppRouter } from './providers/router';

const App = () => {
    console.log('history');

    return (
        <div className="app">
            <AppRouter />
        </div>
    );
};
export default App;
