!function(){fetch("./light_box.html",{method:"get"}).then((function(n){return n.text()})).then((function(n){!function(n){var t=$(".wrap"),o=$(".btn");t.append(n),o.on("click",(function(){var n;(n=$(".modal")).addClass("active"),setTimeout((function(){n.addClass("show")}),100)}))}(n)})).catch((function(){alert("error")}));var n={lightBox:function(){new Swiper(".swiper",{on:{init:function(){console.log("123")}},loop:!0,preloadImages:!1,pagination:{el:".swiper-pagination"},speed:1200})}};n.lightBox()}();
//# sourceMappingURL=index.js.map