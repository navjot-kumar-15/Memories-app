import Addnote from "../Add Note/Addnote";
import "./Home.css";
import Notes from "../Notes/Notes";

function Home(props) {
  const { showAlert } = props;
  return (
    <>
      <div>
        <Addnote showAlert={showAlert} />
        <Notes showAlert={showAlert} />
      </div>
    </>
  );
}

export default Home;
