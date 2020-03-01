import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		time: new Date()
	}
});

export default app;
