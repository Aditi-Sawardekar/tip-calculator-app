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
    <div>
      <label htmlFor={id}>{label}</label>
      <div>
        {value !== null ? icon : " "}
        <input id={id} type={type} value={value ?? ""} onChange={onChange} />
      </div>
    </div>
  );
}
