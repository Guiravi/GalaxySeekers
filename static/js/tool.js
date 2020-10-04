var aladin = A.aladin('#aladin-lite-div', { fov: 180, cooFrame: 'galactic', target: 'galactic center', survey: 'P/XMM/PN/color', showLayersControl: false, reticleColor: "rgb(248, 34, 73)" });

aladin.showLayersControl = false;

var cat = A.catalog({ name: 'CURRENT', sourceSize: 1 });
aladin.addCatalog(cat);
cat.addSources([A.marker(208.474, 53.997, { popupTitle: 'NICER', popupDesc: 'Neutron Star Interior Composition Explorer<br/>Target ID: 5165<br/>Target Name: AT2020ocn' })]);