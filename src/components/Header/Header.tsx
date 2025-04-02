import styles from "./Header.module.css";

interface HeaderProps {
  title: React.ReactNode;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  );
}
