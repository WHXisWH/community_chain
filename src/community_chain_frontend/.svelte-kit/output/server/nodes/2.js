

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.caa43f13.js","_app/immutable/chunks/scheduler.dd7510fc.js","_app/immutable/chunks/index.0a6f24ed.js","_app/immutable/chunks/ActivityCard.66d61228.js","_app/immutable/chunks/activities.eaf521bd.js","_app/immutable/chunks/auth.cb16a316.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.7d193750.js","_app/immutable/chunks/LoadingSpinner.93b7a589.js"];
export const stylesheets = ["_app/immutable/assets/2.fce57730.css","_app/immutable/assets/ActivityCard.1219333a.css","_app/immutable/assets/LoadingSpinner.d6d2de06.css"];
export const fonts = [];
