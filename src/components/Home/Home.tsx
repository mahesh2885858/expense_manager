import { stateType } from "../state/State";
import "./home.scss";
type propsType = {
  state: stateType;
  goToEntryDetails: (id: string) => void;
  OnSortChange: (data: string) => void;
};

const Home = (props: propsType) => {
  return (
    <div className="home-container">
      <div className="filter-section">
        <label htmlFor="sort">sort by: </label>
        <select
          onChange={(e) => props.OnSortChange(e.target.value)}
          value={props.state.sortBy}
          name="sort"
          id="sort"
        >
          <option value="">select</option>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
      </div>
      <div className="list-container">
        {props.state.MainState.map((entry) => {
          return (
            <div
              onClick={() => props.goToEntryDetails(entry.id)}
              key={entry.id}
              className="each-item"
            >
              <div>
                <p>{entry.category}</p>
                <p>{entry.description}</p>
              </div>
              <div>
                <p>{entry.date}</p>
                <p>{entry.amount}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
