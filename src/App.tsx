import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Lhs from "./layouts/lhs";
import Rhs from "./layouts/rhs";

function App() {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-1">
        <Lhs></Lhs>
      </div>
      <div className="col-span-6">
        <h1>Twitter Clone</h1>
      </div>
      <div className="col-span-3">
        <Rhs></Rhs>
      </div>
    </div>
  );
}

export default App;
