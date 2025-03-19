import AppButton from "../AppButton/AppButton";

interface PercentageButtonsProps {
  onClick: (percentage: number) => void;
}

export default function PercentageButtons({ onClick }: PercentageButtonsProps) {
  const percentageValues = [5, 10, 15, 25, 50];
  return (
    <>
      <fieldset>
        <legend>Select Tip %</legend>
        {percentageValues.map((percentage) => {
          return (
            <AppButton
              key={percentage}
              type="button"
              label={`${percentage}%`}
              onClick={() => onClick(percentage)}
            />
          );
        })}
      </fieldset>
    </>
  );
}
