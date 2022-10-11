import { createApp } from 'vue';
import { App } from './App';
import { routes } from './config/routes';
import { history } from './shared/history';
import { createRouter } from 'vue-router';
import '@svgstore';
import { http } from './shared/Http';
import { fetchMe, mePromise } from './shared/me';

const router = createRouter({
	history,
	routes,
});

const whiteList: Record<string, 'exact' | 'startsWith'> = {
	'/': 'exact',
	'/start': 'exact',
	'/welcome': 'startsWith',
	'/sign_in': 'startsWith',
};

fetchMe();
router.beforeEach((to, from) => {
	for (const key in whiteList) {
		const value = whiteList[key];
		if (value === 'exact' && to.path === key) {
			return true;
		}
		if (value === 'startsWith' && to.path.startsWith(key)) {
			return true;
		}
	}
	return mePromise!.then(
		() => true,
		() => '/sign_in?return_to=' + to.path
	);
});

const app = createApp(App);
app.use(router);
app.mount('#app');
