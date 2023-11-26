import css from "./contactItem.module.css";

export default function contactItem({name, number, onDelete }) {
  return (
    <>
      <span className={css.contact}>{name} {number} </span> <button className={css.button} onClick={onDelete}>Delete</button>
    </>
  );
}