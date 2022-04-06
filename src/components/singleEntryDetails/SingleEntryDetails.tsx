import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { AppItem } from "../state/State";
type propsType = {
  state: AppItem[];
  setEditItem: (id: string) => void;
  DeleteItem: (id: string) => void;
};
const SingleEntryDetails = (props: propsType) => {
  const { id } = useParams();
  const entryFromId = props.state.filter((entry) => entry.id === id);
  if (entryFromId.length > 0) {
    return (
      <div>
        <h2>Details of entry</h2>
        <p>Description:{entryFromId[0].description}</p>
        <p>Category:{entryFromId[0].category}</p>
        <p>Date:{entryFromId[0].date}</p>
        <p>Note:{entryFromId[0].note}</p>
        <p>Amount:{entryFromId[0].amount}</p>
        <button onClick={() => props.setEditItem(entryFromId[0].id)}>
          Edit
        </button>
        <button onClick={() => props.DeleteItem(entryFromId[0].id)}>
          Delete
        </button>
      </div>
    );
  } else {
    return (
      <div>
        There is no user with that id
        <p>
          Go To <Link to={`/`}>Home</Link>
        </p>
      </div>
    );
  }
};

export default SingleEntryDetails;
