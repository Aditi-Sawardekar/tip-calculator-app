interface InputValueProps {
  id: string;
  label: string;
  type: string;
  currency?: string;
  value: number | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputValue({
  id,
  label,
  type,
  currency = " ",
  value,
  onChange,
}: InputValueProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div>
        {value !== null ? currency : " "}
        <input id={id} type={type} value={value ?? ""} onChange={onChange} />
      </div>
    </div>
  );
}
