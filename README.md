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
## Endpoints

#### Products
---
#####  `GET/api/products`
- Obtiene todos los datos de productos de la base de datos.
- Puede ser utilizado por usuarios con role USER y ADMIN.
Ejemplo de 'Response':
```json
{
    "data": [
        {
            "id": "792e87cb-d237-41da-881f-66f16d4eb16f",
            "productName": "Budin de Limon",
            "price": 2000.2,
            "isVegan": true,
            "image": "https://saborargento.com.ar/wp-content/uploads/2023/06/Receta-de-Budin-de-Limon-con-Aceite.jpg",
            "stock": true,
            "description": "Esponjoso y sabroso",
            "createdAt": "2024-07-20T23:54:14.923Z",
            "updateAt": "2024-07-20T23:54:14.923Z",
            "categoryId": 1
        },
        {
            "id": "2bdab62d-f9d5-43e3-8bea-ddb178284a67",
            "productName": "Budin de Mandarina",
            "price": 2000.2,
            "isVegan": true,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMLO3BVR31JfPjPeOfPnbv6H_TKBwclyiOA&s",
            "stock": true,
            "description": "Esponjoso y sabroso",
            "createdAt": "2024-07-24T02:23:24.567Z",
            "updateAt": "2024-07-24T02:23:24.567Z",
            "categoryId": 1
        }
    ],
    "message": "Products retrieved successfully"
}
```

#####  `GET/api/products:id`
- Obtiene todos los datos del producto con el id indicado.
- Solo un usuario con role ADMIN puede utilizar este endpoint.
- Indicar ID del producto deseado 
Ejemplo de 'Response':
```json
{
    "data": {
        "id": "792e87cb-d237-41da-881f-66f16d4eb16f",
        "productName": "Budin de Limon",
        "price": 2000.2,
        "isVegan": true,
        "image": "https://saborargento.com.ar/wp-content/uploads/2023/06/Receta-de-Budin-de-Limon-con-Aceite.jpg",
        "stock": true,
        "description": "Esponjoso y sabroso",
        "createdAt": "2024-07-20T23:54:14.923Z",
        "updateAt": "2024-07-20T23:54:14.923Z",
        "categoryId": 1
    },
    "message": "Product retrieved successfully"
}
```

#####  `POST/api/products`
- Crea un nuevo producto en nuestra base de datos.
- Solo un usuario con role ADMIN puede utilizar este endpoint.
- Respetar los datos del modelo
Ejemplo de 'Response':
```json
{
    "data": {
        "id": "64f652de-331e-47ad-8e50-b7ee55b48589",
        "productName": "Budin de Banana y Chocolate",
        "price": 2000.2,
        "isVegan": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMLO3BVR31JfPjPeOfPnbv6H_TKBwclyiOA&s",
        "stock": true,
        "description": "Esponjoso y sabroso",
        "createdAt": "2024-07-29T15:21:15.560Z",
        "updateAt": "2024-07-29T15:21:15.560Z",
        "categoryId": 1
    },
    "message": "Product created successfully"
}
```

#####  `PATCH/api/products:id`
- Modifica los campos y datos del producto con el id indicado que el usuario necesite en nuestra base de datos.
- Solo un usuario con role ADMIN puede utilizar este endpoint.
- Indicar todos los datos del modelo
Ejemplo de 'Response':
```json
{
    "data": {
        "id": "64f652de-331e-47ad-8e50-b7ee55b48589",
        "productName": "Budin de Banana y Chocolate",
        "price": 22200.2,
        "isVegan": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMLO3BVR31JfPjPeOfPnbv6H_TKBwclyiOA&s",
        "stock": true,
        "description": "Esponjosoooo y sabrosoooo",
        "createdAt": "2024-07-29T15:21:15.560Z",
        "updateAt": "2024-07-29T15:24:38.141Z",
        "categoryId": 1
    },
    "message": "Product update successfully"
}
```

#####  `DELETE/api/products`
- Elimina el producto con el id indicado de nuestra base de datos.
- Solo un usuario con role ADMIN puede utilizar este endpoint.
- Indicar ID del producto deseado
Ejemplo de 'Response':
```json
{
    "data": {
        "id": "64f652de-331e-47ad-8e50-b7ee55b48589",
        "productName": "Budin de Banana y Chocolate",
        "price": 22200.2,
        "isVegan": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMLO3BVR31JfPjPeOfPnbv6H_TKBwclyiOA&s",
        "stock": true,
        "description": "Esponjosoooo y sabrosoooo",
        "createdAt": "2024-07-29T15:21:15.560Z",
        "updateAt": "2024-07-29T15:24:38.141Z",
        "categoryId": 1
    },
    "message": "Product delete successfully"
}
```
#### Category
---
#####  `GET/api/category`
- Obtiene todos los datos de las categorias en nuestra base de datos
- Puede ser utilizado por USER y ADMIN

Ejemplo de 'Response':
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
- Solo un usuario con role ADMIN puede utilizar este endpoint.
- Indicar ID de la categoria deseada
Ejemplo de 'Response':
```json
{
    "data": {
        "id": 1,
        "name": "Budin",
        "createdAt": "2024-07-20T23:54:09.590Z",
        "updateAt": "2024-07-20T23:56:58.979Z"
    },
    "message": "category retrieved successfully"
}
```

#####  `POST/api/category`
- Crea una nueva categoria en nuestra base de datos.
- Solo un usuario con role ADMIN puede utilizar este endpoint.
- Indicar nombre de la nueva categoria a crear.
Ejemplo de 'Response':
```json
{
    "data": {
        "id": 2,
        "name": "Alfajor",
        "createdAt": "2024-07-29T15:50:16.464Z",
        "updateAt": "2024-07-29T15:50:16.464Z"
    },
    "message": "Category created successfully"
}
```

#####  `PATCH/api/category`
- Modifica los campos y datos de la categoria con el id indicado que el usuario necesite en nuestra base de datos.
- Solo un usuario con role ADMIN puede utilizar este endpoint.
- Indicar ID y nombre de la categoria a modificar.
Ejemplo de 'Response':
```json
{
    "data": {
        "id": 2,
        "name": "Alfajores",
        "createdAt": "2024-07-29T15:50:16.464Z",
        "updateAt": "2024-07-29T15:53:01.693Z"
    },
    "message": "category update successfully"
}
```

#####  `DELETE/api/category`
- Elimina la categoria con el id indicado de nuestra base de datos.
- Solo un usuario con role ADMIN puede utilizar este endpoint.
- Indicar ID  de la categoria a eliminar.
Ejemplo de 'Response':
```json
  {
    "data": {
        "id": 2,
        "name": "Alfajores",
        "createdAt": "2024-07-29T15:50:16.464Z",
        "updateAt": "2024-07-29T15:53:01.693Z"
    },
    "message": "category delete successfully"
}
```


#### Purchases
---
#####  `POST/api/purchases`
- Crea una nueva compra en nuestra base de datos.
- Puede ser utilizado por USER y ADMIN
- Indicar userID, productoID y cantidad al crear una 'compra'.
Ejemplo de 'Response':
```json
{
    "data": {
        "userId": 11,
        "productId": "2bdab62d-f9d5-43e3-8bea-ddb178284a67",
        "quantity": 3,
        "createdAt": "2024-07-29T16:00:02.105Z"
    },
    "message": "New purchase created successfully"
}
```

#####  `GET/api/purchases:id`
- Obtiene los datos de una compra con el id indicado de nuestra base de datos.
- Puede ser utilizado por USER y ADMIN
- Indicar userID de la compra deseada
Ejemplo ID 1 'Response':
```json
[
    {
        "productId": "792e87cb-d237-41da-881f-66f16d4eb16f",
        "userId": 1,
        "quantity": 2,
        "product": {
            "productName": "Budin de Limon",
            "price": 2000.2
        },
        "user": {
            "firstName": "Sebastian",
            "lastName": "Galeano",
            "email": "sebascarp@gmail.com"
        }
    },
    {
        "productId": "2bdab62d-f9d5-43e3-8bea-ddb178284a67",
        "userId": 1,
        "quantity": 3,
        "product": {
            "productName": "Budin de Mandarina",
            "price": 2000.2
        },
        "user": {
            "firstName": "Sebastian",
            "lastName": "Galeano",
            "email": "sebascarp@gmail.com"
        }
    }
]
```
#### User
---
#####   `POST/api/register`
- Crea un nuevo usuario en nuestra aplicación.
#####   `POST/api/login`
- Ingresa con los datos correctos a los permisos de nuestra aplicación.
#####   `GET/api/profile:id`
- Obtiene los datos de un usuario de nuestra aplicación.
- Solo un usuario con role ADMIN puede utilizar este endpoint.

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
- [x] Verificar aplicacion:
   - [x] Metodos HTTP funcionando
   - [x] Registro y logeo de usuarios correctamente configurados
   - [x] Obtener datos de los endpoints sin token (products/category)
   - [x] Verificar que solo ADMIN pueda crear productos/categorias en mi bd
   - [x] Verificar que USER pueda crear purchases
   - [x] Verificar que toker refresh funcione correctamente
   - [x] Verificar que se puedan obtener datos con fetch
