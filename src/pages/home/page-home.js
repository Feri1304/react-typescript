import React from 'react'
import {Link} from 'react-router-dom'
import urls from '../../enums/urls'

const Home = () => {
    const navigateTo = (path) =>
	window.location.replace(`${window.location.origin}/#${path}`)
    return (
        <div>
            ini home
            <button onClick={()=>navigateTo(urls.ABOUT)}>
            go to about
            </button>
        </div>
    )
}
export default Home