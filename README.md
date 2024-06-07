# PickCoin

# Como ejecutar el proyecto

## 1. Abrir una terminal en VSC

Ve a la pestana "Terminal" en la parte superior y selecciona “New Terminal” o simplemente presiona "Ctrl + shift + ñ" para abrir la terminal integrada.

## 2. Instalar dependencias del proyecto

Ejecuta el siguiente comando para instalar todas las dependencias listadas en package.json 

```
npm install
```

## 3. Iniciar json-server en la terminal

Dirigete a la carpeta src de la siguiente manera:

```
cd src
```

Y ejecuta el siguiente comando para iniciar json-server

```
json-server --watch db.json
```

## 4. Abrir otra terminal para live-server

Ahora nuevamene ve a la pestana "Terminal" en la parte superior y selecciona “New Terminal” o simplemente presiona "Ctrl + shift + ñ" para una nueva terminal integrada y ejecuta el siguiente comando para iniciar live-server

```
npm run dev
```