import AmountDisplay from "../AmountDisplay/AmountDisplay";
import AppButton from "../AppButton/AppButton";

interface DisplayCalculationProps {
  tipAmountPerPerson: number;
  totalPerPerson: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function DisplayCalculation({
  tipAmountPerPerson,
  totalPerPerson,
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

      <AmountDisplay
        label="Total"
        unit="person"
        currency="$"
        amount={Number(totalPerPerson.toFixed(2))}
      />

      <AppButton type="reset" label="reset" onClick={onClick} />
    </section>
  );
}
