

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8b07a2e3.js","_app/immutable/chunks/scheduler.0efe6932.js","_app/immutable/chunks/index.4ebdcf9a.js","_app/immutable/chunks/stores.0dad99b6.js","_app/immutable/chunks/singletons.f79f50c5.js","_app/immutable/chunks/index.deca2d01.js"];
export const stylesheets = [];
export const fonts = [];
