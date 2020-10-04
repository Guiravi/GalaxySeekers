var aladin = A.aladin('#aladin-lite-div', { fov: 180, cooFrame: 'galactic', target: 'galactic center', survey: 'P/XMM/PN/color', showLayersControl: false, reticleColor: "rgb(248, 34, 73)" });

aladin.showLayersControl = false;

var cat = A.catalog({name: 'Telescopes', sourceSize: 18});
aladin.addCatalog(cat);
cat.addSources([A.marker(208.474, 53.997, { popupTitle: 'NICER', popupDesc: 'Neutron Star Interior Composition Explorer<br/>Most recent position<br/>Target ID: 5165<br/>Target Name: AT2020ocn' })]);
cat.addSources([A.marker(57.29673, 24.13671, {popupTitle: 'Pleione', popupDesc: '<em>Bmag:</em> 4.97<br/><em>Spectral type:</em> B8vne<br/>More info <a target="_blank" href="https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+PLEIONE&NbIdent=1">in Simbad</a>'})]);