# DJ Aler — sitio web

Sitio estático: una página de verificación de edad y la página principal (exportada de Webflow).

```
├── index.html              # Verificación de edad (+18)
├── pages/
│   └── login.html          # Sitio principal
├── favicon.ico
└── assets/
    ├── css/
    │   ├── age-gate.css    # Estilos de index.html
    │   ├── style.css       # Estilos base de Webflow
    │   ├── player.css      # Reproductor de audio (compacto y grande)
    │   ├── countdown.css   # Cuenta regresiva
    │   ├── sections.css    # Barra fija, secciones Música, Tienda, Videos y Booking
    │   └── shop.css        # Ficha de producto, carrito, formularios, diálogo y avisos
    ├── js/
    │   ├── age-gate.js     # Validación de fecha y redirección
    │   ├── tracks.js       # Catálogo de mixes y canciones
    │   ├── player.js       # Reproductor (se construye desde tracks.js)
    │   ├── ui.js           # Barra fija, menú móvil y animaciones al hacer scroll
    │   ├── countdown.js    # Cuenta regresiva (fecha en data-date)
    │   ├── contact.js      # Envío por Instagram, avisos y validación (compartido)
    │   ├── products.js     # Catálogo de la tienda
    │   ├── shop.js         # Ficha de producto (#tienda/<id>), carrito y pedido
    │   ├── forms.js        # Formulario de booking y "Agregar al calendario"
    │   ├── drop.js         # Vista "Próximo drop" (#drop/avisame) con aviso por Instagram
    │   └── logout.js       # Enlaces .js-logout
    ├── audio/              # Pistas .mp3
    └── images/
        ├── brand/          # Logos
        ├── covers/         # Portadas de los mixes
        ├── merch/          # Productos
        ├── partners/       # Logos de marcas
        └── backgrounds/    # Fondos
```

## Desarrollo

Las rutas son absolutas (`/assets/...`), así que hay que servir la carpeta desde la raíz:

```sh
npx serve .
```

## Configuración rápida

- **Fecha del próximo drop:** atributo `data-date` de `#countdown-timer` en `pages/login.html`. La usan la cuenta regresiva, la vista "Próximo drop" y el archivo de calendario.
- **Canciones:** copia el `.mp3` en `assets/audio/` y añade `{ title, src, duration }` al mix en `assets/js/tracks.js`. Aparece en su pestaña del hero y en "Todos los mixes".
- **Productos:** edita `assets/js/products.js` (nombre, precio, imagen, descripción, detalles y tallas). Cada producto tiene su ficha en `pages/login.html#tienda/<id>`.
- **Pedidos y booking:** no hay pasarela de pago. El pedido o la solicitud se arma como texto, se copia al portapapeles y se abre el chat de Instagram (`https://ig.me/m/lilalerr`) para pegarlo. La cuenta se cambia en `IG_HANDLE` de `assets/js/contact.js`.
