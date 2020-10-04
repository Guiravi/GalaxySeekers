var aladin = A.aladin('#aladin-lite-div', { fov: 180, cooFrame: 'galactic', target: 'galactic center', survey: 'P/XMM/PN/color', showLayersControl: false, reticleColor: "rgb(248, 34, 73)" });

aladin.showLayersControl = false;

var cat = A.catalog({ name: 'Nicer', sourceSize: 1 });
aladin.addCatalog(cat);
cat.addSources([A.marker(69.297, -47.273, { popupTitle: 'NICER', popupDesc: 'Neutron Star Interior Composition Explorer<br/>Currenty pointing<br/>Target ID: 11<br/>Target Name: PSR_J0437-4715_opt1' })]);