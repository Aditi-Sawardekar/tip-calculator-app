import { useState, useEffect } from "react";

import DisplayCalculation from "../components/DisplayCalculation/DisplayCalculation";
import Header from "../components/Header/Header";
import InputValue from "../components/InputValue/InputValue";
import PercentageButtons from "../components/PercentageButtons/PercentageButtons";

export default function TipCalculatorPage() {
  const [billAmount, setBillAmount] = useState<number | null>(null);
  const [numberOfPeople, setNumberOfPeople] = useState<number | null>(null);

  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  function handleCalculateTipAmount(percentage: number) {
    if (billAmount === null || numberOfPeople === null) {
      console.log("Invalid input");
      return;
    }

    const calculatedTipPerPerson =
      (billAmount * (percentage / 100)) / numberOfPeople;
    setTipAmountPerPerson(calculatedTipPerPerson);
  }

  useEffect(() => {
    if (billAmount != null && numberOfPeople != null) {
      const totalAmount = billAmount / numberOfPeople + tipAmountPerPerson;
      setTotalPerPerson(totalAmount);
    }
  }, [tipAmountPerPerson]);

  return (
    <main>
      <Header title="SPLITTER" />

      <section>
        <InputValue
          id="amount"
          label="Bill"
          type="number"
          value={billAmount}
          onChange={(event) => {
            setBillAmount(
              event.target.value === "" ? null : Number(event.target.value)
            );
          }}
        />

        <PercentageButtons onClick={handleCalculateTipAmount} />

        <InputValue
          id="person"
          label="Number of People"
          type="number"
          value={numberOfPeople}
          onChange={(event) => {
            setNumberOfPeople(
              event.target.value === "" ? null : Number(event.target.value)
            );
          }}
        />

        <DisplayCalculation
          tipAmountPerPerson={tipAmountPerPerson}
          totalPerPerson={totalPerPerson}
          onClick={() => console.log("Reset")}
        />
      </section>
    </main>
  );
}
