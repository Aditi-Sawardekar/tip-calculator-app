import styles from "./AmountDisplay.module.css";

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
    <section className={styles.amountDisplayContainer}>
      <p className={styles.amountLabel}>
        {label} <span className={styles.amountUnit}>/ {unit}</span>
      </p>
      <p className={styles.amount}>
        {currency}
        {amount}
      </p>
    </section>
  );
}
