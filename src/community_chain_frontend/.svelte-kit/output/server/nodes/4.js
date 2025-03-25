

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/create/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.e20f1f97.js","_app/immutable/chunks/scheduler.dd7510fc.js","_app/immutable/chunks/index.0a6f24ed.js","_app/immutable/chunks/navigation.2771c35c.js","_app/immutable/chunks/singletons.5ccfdb68.js","_app/immutable/chunks/index.7d193750.js","_app/immutable/chunks/activities.eaf521bd.js","_app/immutable/chunks/auth.cb16a316.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/4.733cd64c.css"];
export const fonts = [];
