# PANDORA API 

- API-RESTFUL  para panificadora
- Aplicacion con metodos 

## Lenguajes y entorno
<img src="https://www.svgrepo.com/show/303658/nodejs-1-logo.svg" alt="Node.js Logo" width="70"/> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsC9Zl9jYsLYXA9lhxDCiJD0Y_PQakXzpzMA&s" alt="Node.js Logo" width="70"/>

## Dependencias
- Dotenv: v16.4.5
- Express: v4.19.2
- Express-JWT: v8.4.1
- JWT: v9.0.2 
- Bcrypt": v5.1.1
- Prisma: v5.16.1
- PrismaClient: v5.16.1
- Joi: v17.13.3
- Multer: v1.4.5-lts.1
- Multer-s3: v2.10.0
- AWS-sdk: v2.1664.0
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

Response:
```json
{
    "data": [
        {
            "id": 1,
            "name": "Budin",
            "createdAt": "2024-07-20T23:54:09.590Z",
            "updateAt": "2024-07-20T23:56:58.979Z"
        }
    ],
    "message": "category retrieved successfully"
}
```

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
| --------- | :-----|
| Products  | Datos de productos panificados |
| Category     |   Categoria de productos panificados |
| Users      |    Usuarios de mi aplicacion |
| Purchases      |    Compras de productos por usuarios  |

### Modelos y tipo de datos
- Para crear los campos en nuestra base de datos te recomiendo que los datos respeten el modelado con Prisma de las diferentes tablas: 
#### Products 

| Nombre de campo      | Tipo de dato |
| --------- | :-----|
| productName  | String |
| price     |  Float |
| isVegan      |    Boolean |
| image      |    String  |
| stock | Boolean    |
| description |  String |
| categoryId | Int  |

** categoryId es una clave foranea **

- Ejemplo de creación de un nuevo producto:

```json
{
   "productName": "Alfajor de almendras",
   "price": 520.20,
   "isVegan": true,
   "image": "www.image.com/alfajor-almendras",
   "stock": true,
   "description": "Rico alfajorcito",
   "categoryId": 2
}
```

### Category

| Nombre de campo      | Tipo de dato |
| --------- | :-----|
| name  | String |

- Ejemplo de creación de una nueva categoria:

```json
{
   "name": "Alfajor"
}
```


### User

| Nombre de campo      | Tipo de dato |
| --------- | :-----|
| firstName  | String |
| secondName  | String |
| lastName  | String |
| email  | String |
| password  | String |
| role  | Role |

- Ejemplo de creación de un nuevo usuario:

```json
{
   "firstName": "Lionel",
   "secondName": "Andres",
   "lastName": "Messi",
   "email": "Lio10@gmail.com",
   "password": "Fulvo10",
   "role": "ADMIN",
}
```

### Purchases

| Nombre de campo      | Tipo de dato |
| --------- | :-----|
| userId  | Int |
| productId  | String |
| quantity  | Int |

- Ejemplo de creación de una nueva compra:

```json
{
   "userId": 1,
   "productId": "Ajkas23-14142asd",
   "quantity": 2
}
```

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
- [x] Crear y configurar schemas
- [x] Hashear/encriptar contraseñas de usuarios
- [x] Añadir token y refresh a contraseñas 
- [x] Implementar cors
- [x] Configurar expressJWT
- [x] Crear middleware para checkear rol de usuario
- [] Configurar multer y multer-s3
- [] Configurar aws-sdk
- [] Verificar aplicacion:
   - [] Metodos HTTP funcionando
   - [] Registro y logeo de usuarios correctamente configurados
   - [] Obtener datos de los endpoints sin token (products/category)
   - [] Verificar que solo ADMIN pueda crear productos/categorias en mi bd
   - [] Verificar que USER pueda crear purchases
   - [] Verificar que toker refresh funcione correctamente
   - [] Verificar que se puedan obtener datos con fetch
