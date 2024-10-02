import { Home } from './home/index'
import { PageSuccess } from './home/pageSuccess/index'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>

      <Route path="/landingPageFitnessTest" element={<Home />} />
      <Route path="/landingPageFitnessTest/success" element={<PageSuccess />} />

    </Routes >
  )
}