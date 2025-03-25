

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.34bea4c8.js","_app/immutable/chunks/scheduler.dd7510fc.js","_app/immutable/chunks/index.0a6f24ed.js","_app/immutable/chunks/stores.aad8a317.js","_app/immutable/chunks/singletons.5ccfdb68.js","_app/immutable/chunks/index.7d193750.js"];
export const stylesheets = [];
export const fonts = [];
