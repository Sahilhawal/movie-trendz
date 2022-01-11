import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/errorBoundary";
import LandingPage from "./components/LandingPage/landingPage";

function App() {
  return (
    <ErrorBoundary>
      <LandingPage />
    </ErrorBoundary>
  );
}

export default App;
