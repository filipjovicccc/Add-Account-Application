import { createBrowserRouter } from 'react-router-dom'
import RouterLayouts from './RouterLayouts'
import App from '../App'
import { appChildren } from './appChildren'


export  const router = createBrowserRouter([
    {
        path: "/",
        element: <RouterLayouts/>,

        children: [{
           path: "/", 
           element: <App />,
           children: appChildren

        },
        {
            path: "dashbord",
            element: <h1>Hello from dashboard</h1>
        }
    
    ]

    }
])