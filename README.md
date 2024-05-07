## ¡Bienvenido a la API de la Tienda Funko!

Este es un proyecto de backend que combina las tecnologías fundamentales de Node.js, Express y MySQL/Sequelize para crear una API RESTful destinada a una tienda en línea especializada en la venta de figuras coleccionables Funko.

### Resumen del Proyecto

El proyecto abarca diversas funcionalidades, incluyendo:

- **Gestión de Usuarios**: Funcionalidades de registro e inicio de sesión utilizando Bcrypt para la encriptación de contraseñas.
- **Autenticación Basada en Tokens**: Autenticación segura de usuarios con Tokens de JSON Web Tokens (JWT) y middleware para proteger los endpoints.
- **Operaciones CRUD**: Implementación de operaciones de Crear, Leer, Actualizar y Borrar para gestionar usuarios, productos, pedidos y categorías.
- **Relaciones de Base de Datos**: Utilización de relaciones tanto de Muchos a Muchos como de Uno a Muchos entre entidades.
- **Inserción de Datos Iniciales**: Población de la base de datos con datos iniciales utilizando seeders.
- **Pruebas con Postman**: Pruebas de los endpoints de la API utilizando Postman.
- **Configuración de la Base de Datos**: Configuración de la base de datos MySQL almacenada en un archivo `config.json` dentro de la carpeta `config`.

### Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- **Controladores**: Contiene la lógica para manejar las solicitudes y respuestas HTTP para usuarios, Funkos (productos), pedidos y categorías.
- **Middleware**: Contiene el middleware responsable de la autenticación de usuarios antes de acceder a ciertos endpoints.
- **Migraciones**: Contiene los archivos de migración de la base de datos, facilitando los cambios en el esquema de la base de datos con el tiempo.
  - *Migraciones*: Estos archivos ayudan en el versionamiento y la automatización del proceso de alteración del esquema de la base de datos.
- **Modelos**: Incluye definiciones de modelos para diversas entidades como categoría, Funko, pedido, token y usuario. Además, incluye modelos para tablas intermedias para las relaciones entre Funko-categoría y Funko-pedido.
- **Rutas**: Define las rutas de la API para diferentes funcionalidades.
- **Configuración**: El archivo `config.json` almacena las credenciales de MySQL para la conectividad con la base de datos.
- **Package.json**: Contiene scripts para iniciar el servidor (`node index.js`) y ejecutarlo en modo de desarrollo (`nodemon index.js`).
- **Git Ignore**: Evita la carga innecesaria de `node_modules` al repositorio Git para un control de versiones más rápido y limpio.

### Comenzando

Para comenzar con el proyecto:

1. Clona el repositorio.
2. Instala las dependencias utilizando `npm install`.
3. Configura la base de datos MySQL y las credenciales en `config.json`.
4. Ejecuta las migraciones para crear las tablas de la base de datos.
5. Inicia el servidor utilizando `npm start` o `npm run dev` para desarrollo con nodemon.

### Reflexión sobre el Proyecto

Desarrollar este proyecto de backend ha sido una experiencia enriquecedora, donde he adquirido una cantidad significativa de nuevos conocimientos y habilidades.
Desde la configuración inicial del entorno de desarrollo hasta la implementación de funcionalidades clave como autenticación de usuarios, gestión de datos y pruebas de API, cada paso ha sido una oportunidad para aprender y crecer como desarrollador. 

Explorar tecnologías como Node.js, Express y MySQL/Sequelize me ha permitido comprender mejor los fundamentos del desarrollo web backend y cómo estas herramientas pueden combinarse para crear aplicaciones escalables. 
Además, trabajar en este proyecto me ha brindado la oportunidad de profundizar en conceptos como la seguridad de la información, las relaciones de base de datos y las mejores prácticas de desarrollo de API RESTful. 

En resumen, un desafío que me ha permitido consolidar mi crecimiento como desarrolladora...

DIAGRAMA DE RELACIONES ENTRE ENTIDADES:

![DIAGRAMA BACKEND FUNKO ECOMMERCE](https://github.com/evagarcle/primerProyectoBackend/assets/162992210/0c017929-e2ca-4f21-b381-96b319c9853f)

VISUAL STUDIO CODE:

![visual studio](https://github.com/evagarcle/primerProyectoBackend/assets/162992210/6e2c485f-c212-45d1-81ba-8ec5c1bee411)

POSTMAN:

![postman](https://github.com/evagarcle/primerProyectoBackend/assets/162992210/55f49afa-30c9-4fe9-810a-57230892e9f8)


