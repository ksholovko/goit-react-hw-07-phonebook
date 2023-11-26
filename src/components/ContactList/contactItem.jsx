import css from "./contactItem.module.css";

export default function contactItem({name, phone, onDelete }) {
  return (
    <>
      <span className={css.contact}>{name} {phone} </span> <button className={css.button} onClick={onDelete}>Delete</button>
    </>
  );
}