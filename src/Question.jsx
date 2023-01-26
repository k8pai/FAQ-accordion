import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	// add a state variable here
    const [visible, setVisible] = useState(false);


	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
                
				<button onClick={() => setVisible(pres => !pres)} className="btn">{visible? '-' : '+'}</button>
			</header>
			{/* make this render conditionally */}
            {visible? <p>{info}</p> : null}			
		</article>
	)
}

export default Question
