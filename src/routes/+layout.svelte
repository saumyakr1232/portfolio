<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { initAnalytics, trackPageView } from '$lib/firebase';

	let { children } = $props();

	onMount(async () => {
		// Initialize Firebase Analytics
		await initAnalytics();
		// Track initial page view
		trackPageView('Portfolio Home');
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
