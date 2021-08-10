import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from '../style/theme'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import AdopcionHome from '../container/AdopcionHome'
import AddPets from '../components/AddPets'
import Navbar from '../components/Navbar'
import PublicRoute from './PublicRoute'
import AuthRouter from './AuthRouter'
import PrivateRoute from './PrivateRoute'


const AppRouter = () => {
    const [checking, setCheking] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    useEffect(() => {
        setCheking(false)

    }, [])
    
    if (cheking) {
        return (
            <h1>Cargando ...</h1>
        )
    }

    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Navbar />
                <Switch>
                    <PublicRoute 
                        path="/login"
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={AdopcionHome}
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRoute 
                        exact 
                        path="/new" 
                        component={AddPets}
                        isAuthenticated={isLoggedIn}
                        />
                    <Redirect to="/auth/login" />
                </Switch>
                
            </Router>
        </ChakraProvider>
    )
}

export default AppRouter
