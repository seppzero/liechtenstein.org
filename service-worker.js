!function(){"use strict";const e=["client/index.36b32a7f.js","client/index.5ad94a7d.js","client/Text.24814ad8.js","client/index.1fd7ce40.js","client/Section.31f7c17f.js","client/index.5e27a7ca.js","client/_layout.aba1fd03.js","client/Layout.cb1c26a7.js","client/Button.84bdd848.js","client/List.0bfe85fb.js","client/products.a82f5d47.js","client/Menu.49ea2332.js","client/schools.fa2c1aef.js","client/history.6474380e.js","client/en.c7460c25.js","client/events.fe262969.js","client/client.9ce4c17d.js","client/de.b76f4466.js","client/index.28e440cb.js","client/contact.7d8cb6bc.js","client/about.61677675.js","client/calendar.a425df3b.js","client/client.8e8329a4.js"].concat(["service-worker-index.html",".DS_Store","ICZ.pdf","arrow_down.svg","arrow_right.svg","build/.DS_Store","build/pdf.js","build/pdf.js.map","build/pdf.worker.js","build/pdf.worker.js.map","favicon.png","files/ICZ_Luach_5780.pdf","files/Koscherliste_-aktualisiert_20191223.pdf","gallery/.DS_Store","gallery/full/.DS_Store","gallery/full/home_img1.jpg","gallery/full/home_img2.jpg","gallery/full/home_img3.jpg","gallery/thumb/.DS_Store","gallery/thumb/home_img1.jpg","gallery/thumb/home_img2.jpg","gallery/thumb/home_img3.jpg","gallery/thumb/mobile_home_img1.jpg","gallery/thumb/mobile_home_img2.jpg","gallery/thumb/mobile_home_img3.jpg","images/jpg/calendar_preview-10.jpg","images/jpg/calendar_preview-100.jpg","images/jpg/calendar_preview-1020.jpg","images/jpg/calendar_preview-1220.jpg","images/jpg/calendar_preview-1420.jpg","images/jpg/calendar_preview-1920.jpg","images/jpg/calendar_preview-200.jpg","images/jpg/calendar_preview-25.jpg","images/jpg/calendar_preview-320.jpg","images/jpg/calendar_preview-420.jpg","images/jpg/calendar_preview-50.jpg","images/jpg/calendar_preview-520.jpg","images/jpg/calendar_preview-620.jpg","images/jpg/calendar_preview-720.jpg","images/jpg/calendar_preview-920.jpg","images/jpg/candle-10.jpg","images/jpg/candle-100.jpg","images/jpg/candle-1020.jpg","images/jpg/candle-1220.jpg","images/jpg/candle-1420.jpg","images/jpg/candle-1920.jpg","images/jpg/candle-200.jpg","images/jpg/candle-25.jpg","images/jpg/candle-320.jpg","images/jpg/candle-420.jpg","images/jpg/candle-50.jpg","images/jpg/candle-520.jpg","images/jpg/candle-620.jpg","images/jpg/candle-720.jpg","images/jpg/candle-920.jpg","images/jpg/history_img-10.jpg","images/jpg/history_img-100.jpg","images/jpg/history_img-1020.jpg","images/jpg/history_img-1220.jpg","images/jpg/history_img-1420.jpg","images/jpg/history_img-1920.jpg","images/jpg/history_img-200.jpg","images/jpg/history_img-25.jpg","images/jpg/history_img-320.jpg","images/jpg/history_img-420.jpg","images/jpg/history_img-50.jpg","images/jpg/history_img-520.jpg","images/jpg/history_img-620.jpg","images/jpg/history_img-720.jpg","images/jpg/history_img-920.jpg","images/jpg/home_section2-10.jpg","images/jpg/home_section2-100.jpg","images/jpg/home_section2-1020.jpg","images/jpg/home_section2-1220.jpg","images/jpg/home_section2-1420.jpg","images/jpg/home_section2-1920.jpg","images/jpg/home_section2-200.jpg","images/jpg/home_section2-25.jpg","images/jpg/home_section2-320.jpg","images/jpg/home_section2-420.jpg","images/jpg/home_section2-50.jpg","images/jpg/home_section2-520.jpg","images/jpg/home_section2-620.jpg","images/jpg/home_section2-720.jpg","images/jpg/home_section2-920.jpg","images/jpg/mobile_top_section_home-10.jpg","images/jpg/mobile_top_section_home-100.jpg","images/jpg/mobile_top_section_home-1020.jpg","images/jpg/mobile_top_section_home-1220.jpg","images/jpg/mobile_top_section_home-1420.jpg","images/jpg/mobile_top_section_home-1920.jpg","images/jpg/mobile_top_section_home-200.jpg","images/jpg/mobile_top_section_home-25.jpg","images/jpg/mobile_top_section_home-320.jpg","images/jpg/mobile_top_section_home-420.jpg","images/jpg/mobile_top_section_home-50.jpg","images/jpg/mobile_top_section_home-520.jpg","images/jpg/mobile_top_section_home-620.jpg","images/jpg/mobile_top_section_home-720.jpg","images/jpg/mobile_top_section_home-920.jpg","images/jpg/top_section_home-10.jpg","images/jpg/top_section_home-100.jpg","images/jpg/top_section_home-1020.jpg","images/jpg/top_section_home-1220.jpg","images/jpg/top_section_home-1420.jpg","images/jpg/top_section_home-1920.jpg","images/jpg/top_section_home-200.jpg","images/jpg/top_section_home-25.jpg","images/jpg/top_section_home-320.jpg","images/jpg/top_section_home-420.jpg","images/jpg/top_section_home-50.jpg","images/jpg/top_section_home-520.jpg","images/jpg/top_section_home-620.jpg","images/jpg/top_section_home-720.jpg","images/jpg/top_section_home-920.jpg","images/webp/calendar_preview-10.webp","images/webp/calendar_preview-100.webp","images/webp/calendar_preview-1020.webp","images/webp/calendar_preview-1220.webp","images/webp/calendar_preview-1420.webp","images/webp/calendar_preview-1920.webp","images/webp/calendar_preview-200.webp","images/webp/calendar_preview-25.webp","images/webp/calendar_preview-320.webp","images/webp/calendar_preview-420.webp","images/webp/calendar_preview-50.webp","images/webp/calendar_preview-520.webp","images/webp/calendar_preview-620.webp","images/webp/calendar_preview-720.webp","images/webp/calendar_preview-920.webp","images/webp/candle-10.webp","images/webp/candle-100.webp","images/webp/candle-1020.webp","images/webp/candle-1220.webp","images/webp/candle-1420.webp","images/webp/candle-1920.webp","images/webp/candle-200.webp","images/webp/candle-25.webp","images/webp/candle-320.webp","images/webp/candle-420.webp","images/webp/candle-50.webp","images/webp/candle-520.webp","images/webp/candle-620.webp","images/webp/candle-720.webp","images/webp/candle-920.webp","images/webp/history_img-10.webp","images/webp/history_img-100.webp","images/webp/history_img-1020.webp","images/webp/history_img-1220.webp","images/webp/history_img-1420.webp","images/webp/history_img-1920.webp","images/webp/history_img-200.webp","images/webp/history_img-25.webp","images/webp/history_img-320.webp","images/webp/history_img-420.webp","images/webp/history_img-50.webp","images/webp/history_img-520.webp","images/webp/history_img-620.webp","images/webp/history_img-720.webp","images/webp/history_img-920.webp","images/webp/home_section2-10.webp","images/webp/home_section2-100.webp","images/webp/home_section2-1020.webp","images/webp/home_section2-1220.webp","images/webp/home_section2-1420.webp","images/webp/home_section2-1920.webp","images/webp/home_section2-200.webp","images/webp/home_section2-25.webp","images/webp/home_section2-320.webp","images/webp/home_section2-420.webp","images/webp/home_section2-50.webp","images/webp/home_section2-520.webp","images/webp/home_section2-620.webp","images/webp/home_section2-720.webp","images/webp/home_section2-920.webp","images/webp/mobile_top_section_home-10.webp","images/webp/mobile_top_section_home-100.webp","images/webp/mobile_top_section_home-1020.webp","images/webp/mobile_top_section_home-1220.webp","images/webp/mobile_top_section_home-1420.webp","images/webp/mobile_top_section_home-1920.webp","images/webp/mobile_top_section_home-200.webp","images/webp/mobile_top_section_home-25.webp","images/webp/mobile_top_section_home-320.webp","images/webp/mobile_top_section_home-420.webp","images/webp/mobile_top_section_home-50.webp","images/webp/mobile_top_section_home-520.webp","images/webp/mobile_top_section_home-620.webp","images/webp/mobile_top_section_home-720.webp","images/webp/mobile_top_section_home-920.webp","images/webp/top_section_home-10.webp","images/webp/top_section_home-100.webp","images/webp/top_section_home-1020.webp","images/webp/top_section_home-1220.webp","images/webp/top_section_home-1420.webp","images/webp/top_section_home-1920.webp","images/webp/top_section_home-200.webp","images/webp/top_section_home-25.webp","images/webp/top_section_home-320.webp","images/webp/top_section_home-420.webp","images/webp/top_section_home-50.webp","images/webp/top_section_home-520.webp","images/webp/top_section_home-620.webp","images/webp/top_section_home-720.webp","images/webp/top_section_home-920.webp","imagesSrc/.DS_Store","imagesSrc/calendar_preview.jpg","imagesSrc/candle.jpg","imagesSrc/history_img.jpg","imagesSrc/mobile_top_section_home.jpg","imagesSrc/top_section_home.jpg","logo-192.png","logo-512.png","logo.svg","logo_mobile_implementation.svg","logo_original.svg","manifest.json"]),i=new Set(e);self.addEventListener("install",i=>{i.waitUntil(caches.open("cache1609705869014").then(i=>i.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const i of e)"cache1609705869014"!==i&&await caches.delete(i);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const p=new URL(e.request.url);p.protocol.startsWith("http")&&(p.hostname===self.location.hostname&&p.port!==self.location.port||(p.host===self.location.host&&i.has(p.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1609705869014").then(async i=>{try{const p=await fetch(e.request);return i.put(e.request,p.clone()),p}catch(p){const g=await i.match(e.request);if(g)return g;throw p}}))))})}();
