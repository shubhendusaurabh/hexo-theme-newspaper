$(document).ready(function(e) {
  if ($().rwdImageMaps) {
    $('img[usemap]').rwdImageMaps();
    var maphilight = function() {
      $('img[usemap]').maphilight({
        fillOpacity: 0.05,
        strokeColor: '#00f',
      });
    }
    maphilight()
    $(window).on('resize', maphilight);
  }

  function checkPromo() {
    if ($('.promo').height() == 0) {
      let keyword = location.pathname.replace(/\/|-/g, ' ').trim()
      $.get(`https://filleritem.herokuapp.com/api/getItems?keywords=${keyword}`, (data) => {
        if (data.length) {
          let html = `<section>
          <h3 class="f3 fw4 pa3 mv0">Shop Related Products</h3>
          <div class="cf pa2 items">`
          let ending = `</div>
          </section>`
          html += data.slice(0,4).map((item) => {
            let template = `
            <div class="fl w-50 w-25-m w-25-l pa2">
              <a href="${item.DetailPageURL}" class="db link dim tc" title="${item.ItemAttributes[0].Title}">
                <img src="${item.MediumImage[0].URL}" alt="${item.ItemAttributes[0].Title}" class="db black-10 center" />
                <dl class="mt2 f6 lh-copy">
                  <dt class="clip">Title</dt>
                  <dd class="ml0 black truncate w-100">${item.ItemAttributes[0].Title}</dd>
                  <dt class="clip">Category</dt>
                  <dd class="ml0 gray truncate w-100">${item.ItemAttributes[0].Binding || item.ItemAttributes[0].Brand}</dd>
                </dl>
              </a>
            </div>`
            return template
          })
          html += ending;
          html = html.replace(/,/g, '').replace(/goog-20/g, tag)
          $('.promo').html(html)
        }
      })
    }
  }
  setTimeout(checkPromo, 2000)
});
