# GadgetStyle

GadgetStyle es un ecommerce que vende celulares y fundas. Este proyecto fue creado con Vite, React y CSS.

## Descripción

El proyecto contiene 4 páginas principales:

1. **ItemList**: Muestra los productos almacenados en Firestore. Los productos se muestran en tarjetas de Material UI.
2. **ItemDetail**: Muestra los detalles del producto seleccionado, incluyendo una imagen, una descripción, un contador (que detecta si se supera el stock del producto, haciendo que salte un alert) y un botón para agregar el producto al carrito y salta un alert que confirma que se agrego un producto al carrito.
3. **Cart**: Renderiza una vista diferente dependiendo de si el carrito está vacío o no. Si el carrito está vacío, muestra un mensaje indicando que el carrito está vacío y proporciona un enlace para comenzar a comprar. Si el carrito no está vacío, muestra todos los artículos en el carrito, cada uno con su imagen, título, precio, cantidad, y precio total. También proporciona botones para eliminar cada artículo y para vaciar el carrito completo. Al final, muestra el precio total del carrito y proporciona un botón para finalizar la compra.
4. **Checkout**: Gestiona la visualización de la página de pago, permitiendo al usuario ingresar sus datos de contacto, ver los artículos en su carrito y el precio total, y enviar su orden.

En todas las páginas se encuentra el navbar donde está el logo de la marca GadgetStyle. El navbar incluye 3 enlaces: "Home", "Celulares" y "Fundas", y un icono de un carrito que redirige a la página del carrito.

## Instalación

Para instalar y ejecutar este proyecto, necesitarás Node.js y npm de las librerías instalados en tu computadora. A continuación, los pasos para instalación:

### Instalación de Node.js

1. Ve al sitio web oficial de [Node.js](https://nodejs.org/en/).
2. Descarga la versión que prefieras. Hay dos versiones disponibles: LTS y Current. LTS es la versión más estable y recomendada para la mayoría de los usuarios.
3. Una vez descargado el archivo, ábrelo y sigue las instrucciones del instalador.
4. Asegúrate de que la opción para instalar `npm` (el gestor de paquetes de Node.js) esté seleccionada durante la instalación.
5. Una vez completada la instalación, puedes verificarla abriendo una terminal y ejecutando los siguientes comandos:

```bash
node -v
npm -v
```

Estos comandos deberían mostrar las versiones de Node.js y npm que acabas de instalar.

```
Por favor, ten en cuenta que estos pasos pueden variar dependiendo de tu sistema operativo. Te recomendaría revisar la documentación oficial de Node.js para obtener la información más actualizada y precisa. ¡Espero que esto te sea de ayuda!
```

### Instalación del proyecto

1. Clona el repositorio:

```
git clone https://github.com/yourusername/GadgetStyle.git
```

2. Navega al directorio del proyecto: `cd GadgetStyle`
3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm start
```

### Instalación de librerías

Este proyecto utiliza varias librerías, incluyendo Material UI, Iconos de Material UI, Firestore y SweetAlert. Aquí te dejo cómo instalarlas:

- Material UI:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

- Iconos de Material UI:

```bash
npm install @mui/icons-material
```

- Firestore:

```bash
npm install firebase
```

- SweetAlert:

```bash
npm install sweetalert2
```

```
Por favor, ten en cuenta que estos pasos pueden variar dependiendo de tu sistema operativo. Te recomendaría revisar la documentación oficial de las librerías para obtener la información más actualizada y precisa. ¡Espero que esto te sea de ayuda!
```

## Uso

Una vez que hayas iniciado el servidor de desarrollo, puedes abrir `http://localhost:3000` en tu navegador para ver la aplicación. o podes verlo a traves del siguiente comando

```bash
npm run dev
```
