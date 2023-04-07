import React, { FC } from "react";
import Home from "./pages/home";

interface IProps {
  componentTitle: string;
  sampleList: string[];
}

const App: FC<IProps> = (props) => <Home />;

App.defaultProps = {
  componentTitle: "Plugin Component",
  sampleList: [
    "Create with React",
    "Build as Web Component",
    "Use it anywhere!",
  ],
};

export default App;
