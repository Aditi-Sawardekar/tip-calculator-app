import { useState } from "react";

import DisplayCalculation from "../components/DisplayCalculation/DisplayCalculation";
import Header from "../components/Header/Header";
import InputValue from "../components/InputValue/InputValue";
import PercentageButtons from "../components/PercentageButtons/PercentageButtons";

export default function TipCalculatorPage() {
  const [billAmount, setBillAmount] = useState<number | null>(null);
  const [numberOfPeople, setNumberOfPeople] = useState<number | null>(null);

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

        <PercentageButtons onClick={(percentage) => console.log(percentage)} />

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

        <DisplayCalculation onClick={() => console.log("Reset")} />
      </section>
    </main>
  );
}
