import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    <>
      <li className={`${styles["cm-item"]} list-group-item`}>
        <span className={styles["cm-span"]}>{foodItem}</span>
      </li>
    </>
  );
};

export default Item;
