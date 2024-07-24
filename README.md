# PANDORA API 

- API-RESTFUL  para panificadora
- Aplicacion con metodos 

## Lenguajes y entorno

 <img src="https://www.svgrepo.com/show/349419/javascript.svg" alt="Javascript Logo" width="70"/> <img src="https://www.svgrepo.com/show/303658/nodejs-1-logo.svg" alt="Node.js Logo" width="70"/> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsC9Zl9jYsLYXA9lhxDCiJD0Y_PQakXzpzMA&s" alt="Node.js Logo" width="70"/>

## Dependencias
                    
 <img  src="https://repository-images.githubusercontent.com/139898859/9617c480-81c2-11ea-94fc-322231ead1f0" width="100"> </img> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRch-8JXtrnT0M69PmPhq9Rb6MLzs1mYYzVZw&s" width="130"> </img> <img  src="https://w7.pngwing.com/pngs/413/267/png-transparent-jwt-io-json-web-token-hd-logo.png" width="110"> </img> <img  src="https://raw.githubusercontent.com/joiful-ts/joiful/master/img/logo-icon-with-text-800x245.png" width="130"> </img> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMs4Pei68Y98iE7pyOS1b5pevi5wVZq3A59g&s" width="100"> </img>

## Endpoints

#### Products
---
#####  `GET/api/products`
- Obtiene todos los datos de productos de la base de datos.
- Puede ser utilizado por USER y ADMIN.
#####  `GET/api/products:id`
- Obtiene todos los datos del producto con el id indicado.
- Puede ser utilizado por USER y ADMIN.
#####  `POST/api/products`
- Crea un nuevo producto en nuestra base de datos.
- Solo ADMIN puede utilizar este endpoint.
#####  `PATCH/api/products:id`
- Modifica los campos y datos del producto con el id indicado que el usuario necesite en nuestra base de datos.
- Solo ADMIN puede utilizar este endpoint.
#####  `DELETE/api/products`
- Elimina el producto con el id indicado de nuestra base de datos.
- Solo ADMIN puede utilizar este endpoint.

#### Category
---
#####  `GET/api/category`
- Obtiene todos los datos de las categorias en nuestra base de datos
- Puede ser utilizado por USER y ADMIN
#####  `GET/api/category:id`
- Obtiene todos los datos de la categoria con el id indicado en nuestra base de datos
- Puede ser utilizado por USER y ADMIN
#####  `POST/api/category`
- Crea una nueva categoria en nuestra base de datos
- Solo ADMIN puede utilizar este endpoint.
#####  `PATCH/api/category`
- Modifica los campos y datos de la categoria con el id indicado que el usuario necesite en nuestra base de datos.
- Solo ADMIN puede utilizar este endpoint.
#####  `DELETE/api/category`
- Elimina la categoria con el id indicado de nuestra base de datos.
- Solo ADMIN puede utilizar este endpoint.

#### Purchases
---
#####  `POST/api/purchases`
- Crea una nueva compra en nuestra base de datos.
- Puede ser utilizado por USER y ADMIN
#####  `GET/api/purchases:id`
- Obtiene los datos de una compra con el id indicado de nuestra base de datos.
- Puede ser utilizado por USER y ADMIN

#### User
---
#####   `POST/api/register`
- Crea un nuevo usuario en nuestra aplicación.
#####   `POST/api/login`
- Ingresa con los datos correctos a los permisos de nuestra aplicación.
#####   `GET/api/profile:id`
- Obtiene los datos de un usuario de nuestra aplicación.
- Solo ADMIN puede utilizar este endpoint.

### Tablas en PostgreSQL

| Nombre de tabla      | Contenido |
| --------- | -----:|
| Products  | Datos de productos panificados |
| Category     |   Categoria de productos panificados |
| Users      |    Usuarios de mi aplicacion |
| Purchases      |    Compras de productos por usuarios  |



## Lista de tareas
- [x] Instalar gestor de paquetes. (pnpm)
- [x] Instalar dependencias del proyecto. (dotenv,express,uuid)
- [x] Crear carpetas:
   - [x] Helpers.
   - [x] Controllers.
   - [x] Middlewares.
   - [x] Routes.
   - [x] utils.
- [x] Crear archivo index.js.
- [x] Crear servidor. (express)
- [x] Crear archivo data.js momentaneo. (database)
- [x] Crear API RESTful: 
   - [x] Metodos HTTP. (POST,GET,PUT,DELETE)
- [x] Crear controladores.
   - [x] getProducts
   - [x] createdProduct
   - [x] updateProduct
   - [x] getProductById
   - [x] deleteProduct
- [x] Crear router. (Router + Controllers)
- [x] Crear middlewares.
   -[x] errorHandler
- [x] Conectar PostgreSQL
- [x] Conectar Prisma
- [x] Cambiar tipo de dato de PRICE en tabla PRODUCTS de INT a FLOAT
- [x] Añadir campos Products[] a Users y Users[] a Productos para la relacion muchos a muchos
- [x] Crear model purchase
- [x] Instalar Prisma Client
- [x] Configurar Prisma Client
- [x] Modificar funciones controllers con prisma (CRUD)
- [x] Instalar Joi y configurar middleware
