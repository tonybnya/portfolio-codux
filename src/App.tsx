import { useState } from 'react';
import styles from './App.module.scss';

function App() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((count) => count + 1);
    }

    return (
        <div className={styles.App}>
            <button onClick={handleIncrement}>Counter: { count }</button>
            <p>Hello</p>
        </div>
    );
}

export default App;
