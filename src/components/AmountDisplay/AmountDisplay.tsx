interface AmountDisplayProps {
  label: string;
  unit: string;
  currency: string;
  amount: number;
}

export default function AmountDisplay({
  label,
  unit,
  currency,
  amount,
}: AmountDisplayProps) {
  return (
    <div>
      <p>
        {label} <span>/ {unit}</span>
      </p>
      <p>{currency} </p>
      <strong>{amount}</strong>
    </div>
  );
}
