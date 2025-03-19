interface AppButtonProps {
  type: "button" | "submit" | "reset";
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function AppButton({ type, label, onClick }: AppButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
}
