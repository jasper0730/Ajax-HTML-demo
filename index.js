
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
  const $btn = $('.btn')
  $btn.on('click', function () {
    const $modal = $('.modal');
    showLightBox(text)
  })
}

function show(text) {
  const $modal = $('.modal');
  $modal.addClass('active');
  $modal.append(text);
  setTimeout(()=>{
    $modal.addClass('show');
  },100)
}


async function promise() {
  const $modal = $('.modal');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ($modal.hasClass('active')) {
        reject()
      }
      else {
        resolve()
      }
    }, 1000)
  })
}

async function showLightBox(text) {

  try {
    await promise();
    show(text);
  }
  catch (e) {
    console.log(e)
  }
}