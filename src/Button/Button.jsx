import styles from './Button.module.css';

function Button() {
  let count = 0; // 'let' means that might be reassigned - if not, use 'const' 

  const handleClick = (name,e) => {
    count++;
    console.log(`Button clicked ${count} times by ${name}`);
    e.target.textContent = "OUCH!"
  };

  return(
    <>
      <br />
        <button className={styles.button} onDoubleClick={(e) => handleClick("Bro",e)}>Click me!</button>
      <br />
    </>
  );
}

export default Button;