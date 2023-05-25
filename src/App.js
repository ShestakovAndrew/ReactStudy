import './App.css';
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";

import './appStyles.css'
import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">
        <h1 className='error'> Error</h1>
        <h1 className={styles.success}> Success</h1>

        <Stylesheet primary={true} />
        <Inline/>
    </div>
  );
}

export default App;
