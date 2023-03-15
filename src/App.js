// this file is for use testing components locally in development and will not be included in compilation of library or final package

// Run the app locally with `npm run dev` and use this as a sandbox to render and test your components before exporing them to 
// ./dist folder using `npm run build:lib`

import { testLog, TestComponent } from "./library";

function App() {
  return (
    <div onClick={testLog} style={{ height: '100vh', width: '100vw'}}>
      <TestComponent />
    </div>
  )
}

export default App;