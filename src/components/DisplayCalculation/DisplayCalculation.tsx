import AmountDisplay from "../AmountDisplay/AmountDisplay";
import AppButton from "../AppButton/AppButton";

interface DisplayCalculationProps {
  tipAmountPerPerson: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function DisplayCalculation({
  tipAmountPerPerson,
  onClick,
}: DisplayCalculationProps) {
  return (
    <section>
      <AmountDisplay
        label="Tip Amount"
        unit="person"
        currency="$"
        amount={Number(tipAmountPerPerson.toFixed(2))}
      />

      <AmountDisplay label="Total" unit="person" currency="$" amount={32.79} />

      <AppButton type="reset" label="reset" onClick={onClick} />
    </section>
  );
}
