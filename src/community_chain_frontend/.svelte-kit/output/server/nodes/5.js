

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.36386f7a.js","_app/immutable/chunks/scheduler.0efe6932.js","_app/immutable/chunks/index.4ebdcf9a.js","_app/immutable/chunks/ActivityCard.c09a1b52.js","_app/immutable/chunks/navigation.054851dc.js","_app/immutable/chunks/singletons.f79f50c5.js","_app/immutable/chunks/index.deca2d01.js","_app/immutable/chunks/activities.17d0eb69.js","_app/immutable/chunks/auth.3feb8397.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/LoadingSpinner.cd21ff20.js"];
export const stylesheets = ["_app/immutable/assets/ActivityCard.1219333a.css","_app/immutable/assets/LoadingSpinner.d6d2de06.css"];
export const fonts = [];
