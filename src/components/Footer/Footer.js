import s from './Footer.module.css';

export function Footer() {
  return (
    <footer className={s.footer}>
      <p className={s.border}>&#169; 2022 Phonebook</p>
    </footer>
  );
}
