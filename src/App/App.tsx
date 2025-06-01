import { useState } from "react";

import styles from "./app.module.css";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <h1>CI/CD Test project</h1>

      <button className={styles.increment} onClick={() => setCount(count + 1)}>count {count}</button>
    </div>
  );
};
