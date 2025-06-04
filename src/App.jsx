import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider, createRouter} from '@tanstack/react-router'
import {Provider} from 'react-redux'
import {store} from './store/store'
import {routeTree} from "./routeTree.gen";
import './styles.css'

const router = createRouter({routeTree})

const App = () => {
    return (
        <StrictMode>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </StrictMode>
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)