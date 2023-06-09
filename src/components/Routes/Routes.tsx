import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from '../../pages/Dashboard';
import { useNavigation, prefixRoute } from '../../utils/utils.routing';
import { usePluginMeta } from 'utils/utils.plugin';
import { ROUTES } from '../../constants';

export const Routes = () => {
	useNavigation();
	const meta = usePluginMeta();
	if (!(meta && meta.jsonData && meta.jsonData.apiUrl && meta.jsonData.mainProductUrl)) {
		alert('Please set api url in plugin config');
		return <div>Set API Url and Main product url</div>;
	}
	return (
		<Switch>
			<Route
				exact
				path={prefixRoute(ROUTES.Dashboard)}
				component={(props: any) => <Dashboard {...props} meta={meta} />}
			/>
		</Switch>
	);
};
