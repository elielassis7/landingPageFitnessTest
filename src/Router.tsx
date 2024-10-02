import { Home } from './home/index'
import { PageSuccess } from './home/pageSuccess/index'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/success" element={<PageSuccess />} />

    </Routes >
  )
}