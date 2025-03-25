

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/activity/_id_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.85b56195.js","_app/immutable/chunks/scheduler.0efe6932.js","_app/immutable/chunks/index.4ebdcf9a.js","_app/immutable/chunks/stores.0dad99b6.js","_app/immutable/chunks/singletons.f79f50c5.js","_app/immutable/chunks/index.deca2d01.js","_app/immutable/chunks/activities.17d0eb69.js","_app/immutable/chunks/auth.3feb8397.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/LoadingSpinner.cd21ff20.js"];
export const stylesheets = ["_app/immutable/assets/3.4db0454b.css","_app/immutable/assets/LoadingSpinner.d6d2de06.css"];
export const fonts = [];
