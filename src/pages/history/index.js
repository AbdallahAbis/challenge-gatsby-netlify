import React from 'react';
import History from '../../components/history';

import Layout from '../../components/Layout';

const HistoryPage = () => {
	return (
		<Layout>
			<section className='section'>
				<div className='container'>
					<div className='content'>
						<History />
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default HistoryPage;
