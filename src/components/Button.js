import React from "react"

function Button({color, fontColor, size='md', text='Go out'}) {

    const btnSize = size === 'md' ? '5px' : '50px'

    return (
        <React.Fragment>
            <h1>Probando múltiples elementos</h1>
            <button 
                style={{
                    backgroundColor: `${color}`, 
                    color: `${fontColor}`,
                    borderRadius: '5px',
                    padding: `5px ${btnSize}`
                }}
            >
                {text}
            </button>
        </React.Fragment>
    )
}

export default Button