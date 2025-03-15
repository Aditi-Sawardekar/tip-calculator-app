interface InputValueProps {
  id: string;
  label: string;
  type: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputValue({
  id,
  label,
  type,
  value,
  onChange,
}: InputValueProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
}
