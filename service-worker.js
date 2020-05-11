!function(){"use strict";const e=["client/index.b41283fd.js","client/index.43cd8ccb.js","client/Text.e1fa3f4c.js","client/index.1ef22396.js","client/index.ef2cdc05.js","client/_layout.c0963eb0.js","client/Section.ae2dfc42.js","client/Layout.1af41620.js","client/List.e8adba22.js","client/Button.89bef542.js","client/Menu.525770b9.js","client/products.4ad0c700.js","client/events.9dece720.js","client/en.5688296a.js","client/de.a4357671.js","client/client.f0486855.js","client/history.e61a3d8c.js","client/about.d73f38c6.js","client/index.a043dece.js","client/contact.5d5530a7.js","client/calendar.35e61294.js","client/client.2af62e52.js"].concat(["service-worker-index.html",".DS_Store","ICZ.pdf","arrow_down.svg","arrow_right.svg","build/pdf.js","build/pdf.js.map","build/pdf.worker.js","build/pdf.worker.js.map","es.pdf","favicon.png","files/ICZ_Luach_5780.pdf","files/Koscherliste_-aktualisiert_20191223.pdf","gallery/.DS_Store","gallery/full/.DS_Store","gallery/full/home_img1.jpg","gallery/full/home_img2.jpg","gallery/full/home_img3.jpg","gallery/thumb/.DS_Store","gallery/thumb/home_img1.jpg","gallery/thumb/home_img2.jpg","gallery/thumb/home_img3.jpg","gallery/thumb/mobile_home_img1.jpg","gallery/thumb/mobile_home_img2.jpg","gallery/thumb/mobile_home_img3.jpg","home_section2-200.jpg","images/jpg/calendar_preview-10.jpg","images/jpg/calendar_preview-100.jpg","images/jpg/calendar_preview-1020.jpg","images/jpg/calendar_preview-1220.jpg","images/jpg/calendar_preview-1420.jpg","images/jpg/calendar_preview-1920.jpg","images/jpg/calendar_preview-200.jpg","images/jpg/calendar_preview-25.jpg","images/jpg/calendar_preview-320.jpg","images/jpg/calendar_preview-420.jpg","images/jpg/calendar_preview-50.jpg","images/jpg/calendar_preview-520.jpg","images/jpg/calendar_preview-620.jpg","images/jpg/calendar_preview-720.jpg","images/jpg/calendar_preview-920.jpg","images/jpg/history_img-10.jpg","images/jpg/history_img-100.jpg","images/jpg/history_img-1020.jpg","images/jpg/history_img-1220.jpg","images/jpg/history_img-1420.jpg","images/jpg/history_img-1920.jpg","images/jpg/history_img-200.jpg","images/jpg/history_img-25.jpg","images/jpg/history_img-320.jpg","images/jpg/history_img-420.jpg","images/jpg/history_img-50.jpg","images/jpg/history_img-520.jpg","images/jpg/history_img-620.jpg","images/jpg/history_img-720.jpg","images/jpg/history_img-920.jpg","images/jpg/home_section2-10.jpg","images/jpg/home_section2-100.jpg","images/jpg/home_section2-1020.jpg","images/jpg/home_section2-1220.jpg","images/jpg/home_section2-1420.jpg","images/jpg/home_section2-1920.jpg","images/jpg/home_section2-200.jpg","images/jpg/home_section2-25.jpg","images/jpg/home_section2-320.jpg","images/jpg/home_section2-420.jpg","images/jpg/home_section2-50.jpg","images/jpg/home_section2-520.jpg","images/jpg/home_section2-620.jpg","images/jpg/home_section2-720.jpg","images/jpg/home_section2-920.jpg","images/jpg/mobile_top_section_home-10.jpg","images/jpg/mobile_top_section_home-100.jpg","images/jpg/mobile_top_section_home-1020.jpg","images/jpg/mobile_top_section_home-1220.jpg","images/jpg/mobile_top_section_home-1420.jpg","images/jpg/mobile_top_section_home-1920.jpg","images/jpg/mobile_top_section_home-200.jpg","images/jpg/mobile_top_section_home-25.jpg","images/jpg/mobile_top_section_home-320.jpg","images/jpg/mobile_top_section_home-420.jpg","images/jpg/mobile_top_section_home-50.jpg","images/jpg/mobile_top_section_home-520.jpg","images/jpg/mobile_top_section_home-620.jpg","images/jpg/mobile_top_section_home-720.jpg","images/jpg/mobile_top_section_home-920.jpg","images/jpg/top_section_home-10.jpg","images/jpg/top_section_home-100.jpg","images/jpg/top_section_home-1020.jpg","images/jpg/top_section_home-1220.jpg","images/jpg/top_section_home-1420.jpg","images/jpg/top_section_home-1920.jpg","images/jpg/top_section_home-200.jpg","images/jpg/top_section_home-25.jpg","images/jpg/top_section_home-320.jpg","images/jpg/top_section_home-420.jpg","images/jpg/top_section_home-50.jpg","images/jpg/top_section_home-520.jpg","images/jpg/top_section_home-620.jpg","images/jpg/top_section_home-720.jpg","images/jpg/top_section_home-920.jpg","images/webp/calendar_preview-10.webp","images/webp/calendar_preview-100.webp","images/webp/calendar_preview-1020.webp","images/webp/calendar_preview-1220.webp","images/webp/calendar_preview-1420.webp","images/webp/calendar_preview-1920.webp","images/webp/calendar_preview-200.webp","images/webp/calendar_preview-25.webp","images/webp/calendar_preview-320.webp","images/webp/calendar_preview-420.webp","images/webp/calendar_preview-50.webp","images/webp/calendar_preview-520.webp","images/webp/calendar_preview-620.webp","images/webp/calendar_preview-720.webp","images/webp/calendar_preview-920.webp","images/webp/history_img-10.webp","images/webp/history_img-100.webp","images/webp/history_img-1020.webp","images/webp/history_img-1220.webp","images/webp/history_img-1420.webp","images/webp/history_img-1920.webp","images/webp/history_img-200.webp","images/webp/history_img-25.webp","images/webp/history_img-320.webp","images/webp/history_img-420.webp","images/webp/history_img-50.webp","images/webp/history_img-520.webp","images/webp/history_img-620.webp","images/webp/history_img-720.webp","images/webp/history_img-920.webp","images/webp/home_section2-10.webp","images/webp/home_section2-100.webp","images/webp/home_section2-1020.webp","images/webp/home_section2-1220.webp","images/webp/home_section2-1420.webp","images/webp/home_section2-1920.webp","images/webp/home_section2-200.webp","images/webp/home_section2-25.webp","images/webp/home_section2-320.webp","images/webp/home_section2-420.webp","images/webp/home_section2-50.webp","images/webp/home_section2-520.webp","images/webp/home_section2-620.webp","images/webp/home_section2-720.webp","images/webp/home_section2-920.webp","images/webp/mobile_top_section_home-10.webp","images/webp/mobile_top_section_home-100.webp","images/webp/mobile_top_section_home-1020.webp","images/webp/mobile_top_section_home-1220.webp","images/webp/mobile_top_section_home-1420.webp","images/webp/mobile_top_section_home-1920.webp","images/webp/mobile_top_section_home-200.webp","images/webp/mobile_top_section_home-25.webp","images/webp/mobile_top_section_home-320.webp","images/webp/mobile_top_section_home-420.webp","images/webp/mobile_top_section_home-50.webp","images/webp/mobile_top_section_home-520.webp","images/webp/mobile_top_section_home-620.webp","images/webp/mobile_top_section_home-720.webp","images/webp/mobile_top_section_home-920.webp","images/webp/top_section_home-10.webp","images/webp/top_section_home-100.webp","images/webp/top_section_home-1020.webp","images/webp/top_section_home-1220.webp","images/webp/top_section_home-1420.webp","images/webp/top_section_home-1920.webp","images/webp/top_section_home-200.webp","images/webp/top_section_home-25.webp","images/webp/top_section_home-320.webp","images/webp/top_section_home-420.webp","images/webp/top_section_home-50.webp","images/webp/top_section_home-520.webp","images/webp/top_section_home-620.webp","images/webp/top_section_home-720.webp","images/webp/top_section_home-920.webp","imagesSrc/.DS_Store","imagesSrc/calendar_preview.jpg","imagesSrc/history_img.jpg","imagesSrc/home_section2.jpg","imagesSrc/mobile_top_section_home.jpg","imagesSrc/top_section_home.jpg","logo-192.png","logo-512.png","manifest.json"]),i=new Set(e);self.addEventListener("install",i=>{i.waitUntil(caches.open("cache1589240065033").then(i=>i.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const i of e)"cache1589240065033"!==i&&await caches.delete(i);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const p=new URL(e.request.url);p.protocol.startsWith("http")&&(p.hostname===self.location.hostname&&p.port!==self.location.port||(p.host===self.location.host&&i.has(p.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1589240065033").then(async i=>{try{const p=await fetch(e.request);return i.put(e.request,p.clone()),p}catch(p){const g=await i.match(e.request);if(g)return g;throw p}}))))})}();
