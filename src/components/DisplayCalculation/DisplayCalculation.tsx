import AmountDisplay from "../AmountDisplay/AmountDisplay";
import AppButton from "../AppButton/AppButton";

interface DisplayCalculationProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function DisplayCalculation({
  onClick,
}: DisplayCalculationProps) {
  return (
    <section>
      <AmountDisplay
        label="Tip Amount"
        unit="person"
        currency="$"
        amount={4.27}
      />

      <AmountDisplay label="Total" unit="person" currency="$" amount={32.79} />

      <AppButton type="reset" label="reset" onClick={onClick} />
    </section>
  );
}
