import Header from "../components/Header/Header";
import InputValue from "../components/InputValue";

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

        <fieldset>
          <legend>Select Tip %</legend>
          <button type="button" onClick={() => console.log("5%")}>
            5%
          </button>
          <button type="button" onClick={() => console.log("10%")}>
            10%
          </button>
          <button type="button" onClick={() => console.log("15%")}>
            15%
          </button>
          <button type="button" onClick={() => console.log("25%")}>
            25%
          </button>
          <button type="button" onClick={() => console.log("50%")}>
            50%
          </button>
          <button type="button" onClick={() => console.log("Custom")}>
            custom
          </button>
        </fieldset>

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
