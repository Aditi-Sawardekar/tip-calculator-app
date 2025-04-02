import styles from "./InputValue.module.css";

interface InputValueProps {
  id: string;
  label: string;
  type: string;
  icon?: React.ReactNode;
  value: number | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputValue({
  id,
  label,
  type,
  icon = " ",
  value,
  onChange,
}: InputValueProps) {
  return (
    <div className={styles.inputValueContainer}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.inputWrapper}>
        <span className={styles.icon}>{icon}</span>
        <input
          id={id}
          type={type}
          placeholder="0"
          value={value ?? ""}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
