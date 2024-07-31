const compra = {
    element1: {
      description: '1-pestaña women ',
      seccionWomen: '.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]',
    },
    element2: {
      description: '2-boton añadir al carro',
      botonAddToCart: '.exclusive > span',
    },
    element3: {
        description: '3-texto producto agregado correctamente',
       labelProductoAgregado: '.layer_cart_product > h2',
      },     
    element4: {
        description: '4-Boton proceed to checkout',
        botonProceedToCheckout: '.button-medium > span',
      },    
    element5: {
        description: '5-Boton proceed to checkout en Shopping-cart summary',
        botonProceedToCheckoutSummary: '.cart_navigation > .button > span',
        } ,    
    element6: {
        description: '6-popup mensaje se necesita aceptacion de terminos y condiciones',
        popupAceptacionTerminos: '.fancybox-error',
        } ,    
    element7: {
        description: '7-boton x para cerrar popup aceptacion terminos y condiciones',
        botonCerrarAceptacionTerminos: '.fancybox-item',
        } ,    
    element8: {
        description: '8-checkbox terminos y condiciones',
        checkboxTerminosCondiciones: '#cgv',
            },    
    element9: {
        description: '9-metodo de pago by bank wire',
        botonMetodoBank: '.bankwire',
            },    
    element10: {
        description: '10-label mensaje de compra completada',
        labelCompraCompletada: '.alert',
            },    
    element11: {
        description: '11-boton seccion Dresses',
        seccionDresses: '.sf-menu > :nth-child(2) > .sf-with-ul',
        },    
    element12: {
        description: '12-prenda printed summer Dress ',
        prendaSummerDress: '.first-in-line.last-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x',
            }
            ,    
    element13: {
        description: '13-color primera prenda no disponible',
        colorSinDisponibilidad: '#color_20',
            }           
            ,    
    element14: {
        description: '13-color primera prenda si disponible',
        colorDisponible: '#color_14',
            } 
            ,    
    element15: {
        description: '15-color segunda prenda',
        colorDisponibleSegunda: '#color_8',
            } 
            ,    
    element16: {
        description: '16-precio primera prenda',
        precioPrimeraPrenda: '#total_product_price_5_20_7178',
            }  
            ,    
    element17: {
        description: '17-precio segunda prenda',
        precioSegundaPrenda: '#total_product_price_6_40_7178',
          },
    element18: {
        description: '18-label informativo, metodo de pago',
        labelByCheck: '.cheque-indent > .dark',
          }                        
        
  };
  
module.exports=compra