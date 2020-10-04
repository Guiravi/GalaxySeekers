var aladin = A.aladin('#aladin-lite-div', { fov: 180, cooFrame: 'galactic', target: 'galactic center', survey: 'P/XMM/PN/color', showLayersControl: false, reticleColor: "rgb(248, 34, 73)" });

function addFITSImagesToAladin(link_list) {
    for (let i = 0; i < link_list.length; i++) {
        aladin.displayFITS(list[i]);
    }
}

aladin.showLayersControl = false;

let micro_imgs = {{ micro_imgs|safe }};

addFITSImagesToAladin(micro_imgs);

//let opt_imgs;

var cat = A.catalog({name: 'Telescopes', sourceSize: 18});
aladin.addCatalog(cat);
cat.addSources([A.marker(208.474, 53.997, { popupTitle: 'NICER', popupDesc: 'Neutron Star Interior Composition Explorer<br/>Most recent position<br/>Target ID: 5165<br/>Target Name: AT2020ocn' })]);