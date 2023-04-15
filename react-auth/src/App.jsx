import { Routes,Route } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/login" element={<div>Home</div>} />
      <Route path="/dashboard" element={<div>Home</div>} />
      <Route path="/settings" element={<div>Home</div>} />
    </Routes>
  )
}

export default App
