import AppButton from "../AppButton/AppButton";

import styles from "./PercentageButtons.module.css";

interface PercentageButtonsProps {
  onClick: (percentage: number) => void;
}

export default function PercentageButtons({ onClick }: PercentageButtonsProps) {
  const percentageValues = [5, 10, 15, 25, 50];
  return (
    <>
      <fieldset className={styles.percentageButtonsContainer}>
        <legend>Select Tip %</legend>
        {percentageValues.map((percentage) => {
          return (
            <AppButton
              key={percentage}
              type="button"
              className="primary"
              label={`${percentage}%`}
              onClick={() => onClick(percentage)}
            />
          );
        })}
      </fieldset>
    </>
  );
}
