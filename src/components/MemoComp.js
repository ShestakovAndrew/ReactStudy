import React from 'react';

function MemoComp({name}) {
	console.log('Рендеринг мемо компонента')
	return (
		<div>
			{name}
		</div>
	);
}

export default React.memo(MemoComp)