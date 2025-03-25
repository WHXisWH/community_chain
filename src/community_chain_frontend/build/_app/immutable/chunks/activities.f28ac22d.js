import{h as i}from"./scheduler.0efe6932.js";import{d as e}from"./auth.212dabd5.js";const l=async()=>{const t=i(e);if(!t)throw new Error("Actor not initialized");try{return await t.listActivities()}catch(r){throw console.error("Failed to fetch activities:",r),r}},w=async t=>{const r=i(e);if(!r)throw new Error("Actor not initialized");try{return await r.getActivity(t)}catch(o){throw console.error(`Failed to fetch activity ${t}:`,o),o}},h=async(t,r,o,n)=>{const c=i(e);if(!c)throw new Error("Actor not initialized");try{return await c.createActivity(t,r,o,Number(n))}catch(a){throw console.error("Failed to create activity:",a),a}},A=async t=>{const r=i(e);if(!r)throw new Error("Actor not initialized");try{return await r.applyForActivity(t)}catch(o){throw console.error(`Failed to apply for activity ${t}:`,o),o}},v=async t=>{const r=i(e);if(!r)throw new Error("Actor not initialized");try{return await r.completeActivity(t)}catch(o){throw console.error(`Failed to complete activity ${t}:`,o),o}},d=async()=>{const t=i(e);if(!t)throw new Error("Actor not initialized");try{return await t.getMyCreatedActivities()}catch(r){throw console.error("Failed to fetch created activities:",r),r}},f=async()=>{const t=i(e);if(!t)throw new Error("Actor not initialized");try{return await t.getMyAssignedActivities()}catch(r){throw console.error("Failed to fetch assigned activities:",r),r}};export{w as a,A as b,v as c,h as d,d as e,f,l as g};
