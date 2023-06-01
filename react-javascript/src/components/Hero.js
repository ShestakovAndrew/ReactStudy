import React from 'react';

function Hero({heroName}) {
	if (heroName === 'Джокер')
	{
		throw new Error('Он не герой')
	}
	return (<div>{heroName}</div>);
}

export default Hero;