import { Route, Routes } from 'react-router-dom'
import './App.css'
import { adminlayout, privateRouter, publicRouter } from './routes/routes'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'
import AdminLayout from './layouts/AdminLayout/AdminLayout'


function App() {

  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        {adminlayout.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
      </Route>

      <Route path="/" element={<DefaultLayout />}>
        {publicRouter.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

        {privateRouter.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
      </Route>
    </Routes>
  )
}

export default App
