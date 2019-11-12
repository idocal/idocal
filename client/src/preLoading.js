import meezi from './images/meezi-header.jpg';
import rosette from './images/rosette-header.png';
import feel from './images/feelboard-header.png';
import bonariv from './images/bonariv-header.jpg';

const loadImageWithPromise = (url) => {
    const img = new Image ();

    const promise = new Promise((resolve) => {
        img.onload = function () {
            resolve('a');
        };
    });

    img.src = url;
    return promise;
};

const loadBefore = [
    bonariv,
    feel,
    meezi,
    rosette,
];
const loadAsync = [];

export default () => {
    loadAsync.map(src => loadImageWithPromise(src));
    return Promise.all(loadBefore.map(src => loadImageWithPromise((src))));
}