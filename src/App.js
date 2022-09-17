import React, {Suspense} from 'react'
import './App.css'
import RouteService from './routes/RouteService'

export default function App() {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <RouteService />
        </Suspense>
    )
}