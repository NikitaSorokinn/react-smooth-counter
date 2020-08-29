import React from 'react'

import SmoothCounter from "./SmoothCounter";

const App: React.FC = () => {

    return (
        <SmoothCounter from={0} to={0} style={{color: 'red'}} delay={100} className={"randomClass"}/>
    )
}

export default App