import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form action="">
          <h2>Tipos de Inputs</h2>
          <label htmlFor="">
            Text: <input type="text" />
          </label>
          <label htmlFor="">
            Search: <input type="search" />
          </label>
          <label htmlFor="">
            Number: <input type="number" />
          </label>
          <label htmlFor="">
            Tel: <input type="tel" />
          </label>
          <label htmlFor="">
            Password: <input type="password" />
          </label>
          <br />
          <label htmlFor="">
            Date: <input type="date" />
          </label>
          <label htmlFor="">
            DateTimeLocal: <input type="datetime-local" />
          </label>
          <label htmlFor="">
            Month: <input type="month" />
          </label>
          <label htmlFor="">
            Week: <input type="week" />
          </label>
          <label htmlFor="">
            Time: <input type="time" />
          </label>
          <br />
          <label htmlFor="">
            Email: <input type="email" />
          </label>
          <label htmlFor="">
            Url: <input type="url" />
          </label>
          <br />
          <label htmlFor="">
            Color: <input type="color" />
          </label>
          <label htmlFor="">
            File: <input type="file" />
          </label>
          <br />
          <label htmlFor="">
            Checkbox: <input type="checkbox" />
          </label>
          <label htmlFor="">
            Radio: <input type="radio" />
          </label>
          <label htmlFor="">
            Range: <input type="range" />
          </label>
          <br />
          <label htmlFor="input">
            Select:{" "}
            <select name="input" id="input">
              <option value="">-- Selecciona --</option>
              <option value="">React</option>
              <option value="">Angular</option>
              <option value="">Vue</option>
              <option value="">Javascript</option>
            </select>
          </label>
          <br />
          <label htmlFor="">
            Reset: <input type="reset" />
          </label>
          <label htmlFor="">
            Submit: <input type="submit" />
          </label>
        </form>
      </header>
    </div>
  );
}

export default App;
