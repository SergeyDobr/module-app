import styles from "./ProductDetail.module.css";
function Counter({ minValue, maxValue, value, onChange }) {
  const handleDecrement = () => {
    if (value > minValue) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < maxValue) {
      onChange(value + 1);
    }
  };
  
  return (
    <div className={styles.counter}>
      <button disabled={value === minValue} type="button" onClick={handleDecrement}>
        -
      </button>
      {value}
      <button disabled={value === maxValue} type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default Counter;
