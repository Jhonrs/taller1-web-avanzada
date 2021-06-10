import React from 'react'
import { Route,HashRouter as Router } from 'react-router-dom'
import { Composition } from '../Composition/Composition'
import { Viewer } from '../Viewer/Viewer'
import { ViewerOptions } from '../ViewerOptions/ViewerOptions'
import { ViewerPlanet } from '../ViewerPlanet/ViewerPlanet'


export const App = () => {
    return (<main>
        <Router>
            <Route path='/'>
                <Viewer></Viewer>
            </Route>
        </Router>
    </main>);
}