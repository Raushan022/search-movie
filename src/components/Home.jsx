import Movies from "./Movies";
import SearchMovie from "./SearchMovie";
// import { AppContext } from "../context";

const Home = () => {
  // const name = useContext(AppContext);
  return (
    <>
      <SearchMovie />
      <Movies />
    </>
  );
};

export default Home;
