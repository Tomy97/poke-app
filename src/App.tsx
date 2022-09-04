import { Suspense } from "react";
import { Provider } from "react-redux";

import { store } from "./redux/store";

import { router } from "./routes";

import { SpinnerComponent } from "./components/SpinnerComponent";
import "./App.scss";

function App() {
  return (
    <Suspense fallback={<SpinnerComponent />}>
      <Provider store={store}>{router()}</Provider>
    </Suspense>
  );
}

export default App;
