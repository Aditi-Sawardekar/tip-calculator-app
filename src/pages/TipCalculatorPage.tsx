import Header from "../components/Header/Header";
import InputValue from "../components/InputValue/InputValue";
import PercentageButtons from "../components/PercentageButtons/PercentageButtons";

export default function TipCalculatorPage() {
  return (
    <main>
      <Header title="SPLITTER" />

      <section>
        <InputValue
          id="amount"
          label="Bill"
          type="number"
          value={142.55}
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />

        <PercentageButtons onClick={(percentage) => console.log(percentage)} />

        <InputValue
          id="person"
          label="Number of People"
          type="number"
          value={5}
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />

        <section>
          <h5>
            Tip Amount /<span>per person</span> : ${4.27}
          </h5>
          <h5>
            Total /<span>per person</span> : ${32.79}
          </h5>
        </section>
      </section>
    </main>
  );
}
