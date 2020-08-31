import React, {useState} from 'react'

import SmoothCounter from './SmoothCounter';

const App: React.FC = () => {

    const [counterTo, setCounterTo] = useState(0)

    return (
        <div style={
            {
                display: 'flex',
                textAlign: 'center',
                flexWrap: "wrap",
                height: '50vh',
                alignItems: 'center',
                alignContent: 'center'
            }
        }>
            <SmoothCounter
                delay={0}
                startNumber={0}
                to={counterTo}
                style={{color: 'grey', fontSize: 50, fontWeight: 'bold', width: '100%'}}
                className={'randomClass'}
            />
            <div style={{width:"100%"}}>
                <button
                    style={buttonStyle}
                    onClick={()=>setCounterTo(
                    state => {
                        return state - 213
                        }
                    )}
                >
                    Reverse
                </button>
                <button
                    style={buttonStyle}
                    onClick={()=>setCounterTo(
                    state => {
                            return state + 213
                        }
                    )}
                >
                    Start
                </button>
            </div>
        </div>
    )
}

const buttonStyle = {
    padding: 10,
    margin: 10,
    width: '100px'
}

export default App