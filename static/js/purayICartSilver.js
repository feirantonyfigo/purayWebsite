
/*<![CDATA[*/

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'puray.myshopify.com',
      apiKey: '4cd4d5a0a929621514332e3b70cbed47',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [1345338474568],
        variantId: 12354170716232,
        node: document.getElementById('product-component-b19d0ed069e'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "variantId": "12354170716232",
    "width": "240px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "options": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#dae8fd",
        "color": "#141414",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        "padding-left": "70px",
        "padding-right": "70px",
        ":hover": {
          "background-color": "#c4d1e4",
          "color": "#141414"
        },
        "border-radius": "0px",
        ":focus": {
          "background-color": "#c4d1e4"
        },
        "font-weight": "normal"
      },
      "title": {
        "font-size": "26px"
      },
      "price": {
        "font-size": "18px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "compareAt": {
        "font-size": "15px",
        "color": "#4c4c4c"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#dae8fd",
        "color": "#141414",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#c4d1e4",
          "color": "#141414"
        },
        "border-radius": "0px",
        ":focus": {
          "background-color": "#c4d1e4"
        },
        "font-weight": "normal"
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#dae8fd",
        "color": "#141414",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        "padding-left": "70px",
        "padding-right": "70px",
        ":hover": {
          "background-color": "#c4d1e4",
          "color": "#141414"
        },
        "border-radius": "0px",
        ":focus": {
          "background-color": "#c4d1e4"
        },
        "font-weight": "normal"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#dae8fd",
        ":hover": {
          "background-color": "#c4d1e4"
        },
        ":focus": {
          "background-color": "#c4d1e4"
        },
        "font-weight": "normal"
      },
      "count": {
        "font-size": "13px",
        "color": "#141414",
        ":hover": {
          "color": "#141414"
        }
      },
      "iconPath": {
        "fill": "#141414"
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
      });
    });
  }
})();
/*]]>*/
