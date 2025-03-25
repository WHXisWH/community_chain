

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/activity/_id_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.3ae8799a.js","_app/immutable/chunks/scheduler.dd7510fc.js","_app/immutable/chunks/index.0a6f24ed.js","_app/immutable/chunks/stores.aad8a317.js","_app/immutable/chunks/singletons.5ccfdb68.js","_app/immutable/chunks/index.7d193750.js","_app/immutable/chunks/activities.eaf521bd.js","_app/immutable/chunks/auth.cb16a316.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/LoadingSpinner.93b7a589.js"];
export const stylesheets = ["_app/immutable/assets/3.893279c3.css","_app/immutable/assets/LoadingSpinner.d6d2de06.css"];
export const fonts = [];
