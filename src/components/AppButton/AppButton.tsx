import styles from "./AppButton.module.css";

interface AppButtonProps {
  type: "button" | "submit" | "reset";
  className: string;
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function AppButton({
  type,
  className,
  label,
  onClick,
}: AppButtonProps) {
  return (
    <button
      className={`${styles.button} ${className ? styles[className] : ""}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
