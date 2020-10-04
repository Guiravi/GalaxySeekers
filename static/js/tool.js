var aladin = A.aladin('#aladin-lite-div', { fov: 180, cooFrame: 'galactic', target: 'galactic center', survey: 'P/XMM/PN/color', showLayersControl: false, reticleColor: "rgb(248, 34, 73)" });

aladin.showLayersControl = false;

var cat = A.catalog({ name: 'Some markers', sourceSize: 18 });
a.addCatalog(cat); cat.addSources([A.marker(56.87115, 24.10514, { popupTitle: 'Alcyone', popupDesc: '<em>Bmag:</em> 2.806<br/><em>Spectral type:</em> B7III<br/>More info <a target="_blank" href="https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME%20ALCYONE&submit=submit">in Simbad</a>' })]);
cat.addSources([A.marker(57.29673, 24.13671, { popupTitle: 'Pleione', popupDesc: '<em>Bmag:</em> 4.97<br/><em>Spectral type:</em> B8vne<br/>More info <a target="_blank" href="https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+PLEIONE&NbIdent=1">in Simbad</a>' })]);
cat.addSources([A.marker(56.58156, 23.94836, { popupTitle: 'Merope', popupDesc: '<em>Bmag:</em> 4.113<br/><em>Spectral type:</em> BVI4e<br/>More info <a target="_blank" href="https://simbad.u-strasbg.fr/simbad/sim-id?Ident=V*+V971+Tau&NbIdent=1">in Simbad</a>' })]);
cat.addSources([A.marker(56.45669, 24.36775, { popupTitle: 'Maia', popupDesc: '<em>Bmag:</em> 3.812<br/><em>Spectral type:</em> B8III<br/>More info <a target="_blank" href="https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+MAIA&NbIdent=1">in Simbad</a>' })]);
cat.addSources([A.marker(56.21890, 24.11334, { popupTitle: 'Electra', popupDesc: '<em>Bmag:</em> 3.612<br/><em>Spectral type:</em> B6IIIe<br/>More info <a target="_blank" href="https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+ELECTRA&NbIdent=1">in Simbad</a>' })]);
cat.addSources([A.marker(57.29059, 24.05342, { popupTitle: 'Atlas', popupDesc: '<em>Bmag:</em> 3.54<br/><em>Spectral type:</em> B8III<br/>More info <a target="_blank" href="https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+ATLAS&NbIdent=1">in Simbad</a>' })]);
cat.addSources([A.marker(56.30207, 24.46728, { popupTitle: 'Taygeta', popupDesc: '<em>Bmag:</em> 4.199<br/><em>Spectral type:</em> B6IV<br/>More info <a target="_blank" href="https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+TAYGETA&NbIdent=1">in Simbad</a>' })]);
