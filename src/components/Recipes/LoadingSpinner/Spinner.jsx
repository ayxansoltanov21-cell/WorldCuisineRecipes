// import Spinner from 'react-bootstrap/Spinner';

// function LoadingSpinner() {
//   return (
//     <Spinner animation="border" role="status">
//       <span className="visually-hidden">Loading...</span>
//     </Spinner>
//   );
// }

// export default LoadingSpinner;

import Spinner from "react-bootstrap/Spinner";
import styles from './Spinner.module.css'
function LoadingSpinner() {
  return <Spinner animation="grow" className={styles.loadingSpinner}/>;
}

export default LoadingSpinner;