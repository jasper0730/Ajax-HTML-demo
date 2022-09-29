fetch('./light_box.html', { method: 'get' })
  .then((res) => {
    return res.text()
  })
  .then((str) => {
    const text = str
    clickEvent(text)
  })
  .catch(() => {
    alert('error')
  });

function clickEvent(text) {
  const $wrap = $('.wrap');
  const $btn = $('.btn')

  $wrap.append(text);
  $btn.on('click', function () {
    showLightBox()
  })
}

function show() {
  const $modal = $('.modal');
  $modal.addClass('active');
  setTimeout(() => {
    $modal.addClass('show');
  }, 100)
}


function showLightBox() {
  show();
}

const swiper = {}

swiper.lightBox = function () {

  const option = {
    on: {
      init:() => {
        console.log('123');
      },
    },
    loop: true,
    preloadImages: false,
    pagination: {
      el: '.swiper-pagination',
    },
    speed: 1200,

  }
  const swiper = new Swiper('.swiper', option);
}

swiper.lightBox();