import ScopedStyle from './index.module.scss'
const Hello = () => {
    return <div className={ScopedStyle['hello']}>Hello World</div>;
  };
  
  export default Hello;
  