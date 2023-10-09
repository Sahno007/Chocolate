window.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.video');

  video.addEventListener('click', function () {

    if (video.classList.contains('ready')) {
      return;
    }

    video.classList.add('ready');

    const src = video.dataset.src;

    video.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  });

});