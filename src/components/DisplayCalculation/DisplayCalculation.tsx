import AmountDisplay from "../AmountDisplay/AmountDisplay";
import AppButton from "../AppButton/AppButton";

import styles from "./DisplayCalculation.module.css";

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
    <section className={styles.displayCalculationContainer}>
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

      <AppButton
        type="reset"
        className="reset"
        label="reset"
        onClick={onClick}
      />
    </section>
  );
}
