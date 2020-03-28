import React from 'react';
import styles from './App.module.scss';
import { Layout } from './components';

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <div className={styles.myApp}>THIS IS MY APP</div>
      </Layout>
    </>
  );
};

export default App;
