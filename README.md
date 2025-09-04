Aplicación Móvil con React Native Expo y Firebase
Información del Estudiante
Nombre del Estudiante: Rafael Alejandro Menendez Alfaro
Carnet: 20230154
Nombre del Estudiante: Juan Pablo Ayala Menjivar 
Carnet: 20200135
Enlace de Video Demostrativo: [Insertar enlace aquí - debe ser público sin solicitar accesos]
Descripción del Proyecto
Esta aplicación móvil fue desarrollada utilizando React Native Expo y Firebase como base de datos NoSQL. La aplicación implementa un sistema completo de autenticación de usuarios con registro, inicio de sesión y edición de información personal.
Funcionalidades Principales
🚀 Pantallas Implementadas
Splash Screen: Pantalla de carga inicial con logo y animación
Registro de Usuarios: Formulario completo para crear nuevas cuentas
Inicio de Sesión: Autenticación con email y contraseña
Home Screen: Pantalla principal que muestra información del usuario
Edición de Perfil: Permite modificar datos del usuario logueado
📋 Información de Usuario Gestionada
Nombre completo
Correo electrónico (usado para autenticación)
Contraseña (manejo seguro con Firebase Auth)
Título universitario
Año de graduación
Dependencias Utilizadas
Dependencias Principales
{
  "expo": "~49.0.15",
  "react": "18.2.0",
  "react-native": "0.72.6",
  "expo-status-bar": "~1.6.0",
  "expo-splash-screen": "~0.20.5",
  "expo-font": "~11.4.0",
  "expo-constants": "~14.4.2"
}
Navegación
{
  "@react-navigation/native": "^6.1.7",
  "@react-navigation/stack": "^6.3.17",
  "react-native-screens": "~3.22.0",
  "react-native-safe-area-context": "4.6.3",
  "react-native-gesture-handler": "~2.12.0"
}
Firebase y Base de Datos
{
  "firebase": "^10.3.1",
  "@react-native-async-storage/async-storage": "1.18.2"
}
Instalación y Configuración
1. Prerrequisitos
Node.js (versión 16 o superior)
Expo CLI: npm install -g expo-cli
Cuenta de Firebase activa
2. Instalación
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
# Navegar al directorio del proyecto
cd firebase-auth-app
# Instalar dependencias
npm install
3. Configuración de Firebase
Crear un proyecto en Firebase Console
Habilitar Authentication con Email/Password
Crear una base de datos Firestore
Obtener la configuración del proyecto
Reemplazar las credenciales en firebaseConfig.js:
const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto-id",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "tu-app-id"
};
4. Ejecución
# Iniciar el proyecto
expo start
# Para ejecutar en Android
expo start --android
# Para ejecutar en iOS
expo start --ios
Estructura del Proyecto
firebase-auth-app/
├── screens/
│   ├── SplashScreen.js
│   ├── LoginScreen.js
│   ├── RegisterScreen.js
│   ├── HomeScreen.js
│   └── EditProfileScreen.js
├── firebaseConfig.js
├── App.js
├── package.json
└── README.md
Características Técnicas
🔐 Autenticación
Firebase Authentication para manejo seguro de usuarios
Validación de formularios en tiempo real
Manejo de errores con mensajes personalizados
Persistencia de sesión automática
💾 Base de Datos
Firestore para almacenamiento de datos de usuario
Estructura de documentos optimizada
Actualizaciones en tiempo real
🎨 Interfaz de Usuario
Diseño moderno con esquemas de colores atractivos
Animaciones fluidas y transiciones suaves
Responsive design que se adapta a diferentes pantallas
Componentes reutilizables y bien estructurados
📱 Experiencia de Usuario
Navegación intuitiva entre pantallas
Feedback visual para todas las acciones
Validación en tiempo real de formularios
Manejo de estados de carga
Seguridad Implementada
✅ Autenticación segura con Firebase
✅ Validación de entrada en cliente y servidor
✅ Protección de rutas basada en autenticación
✅ Manejo seguro de contraseñas
✅ Persistencia segura de sesión
Futuras Mejoras
[ ] Recuperación de contraseña
[ ] Verificación de email
[ ] Fotos de perfil
[ ] Tema oscuro/claro
[ ] Notificaciones push
[ ] Validación biométrica
Notas del Desarrollador
Esta aplicación fue desarrollada siguiendo las mejores prácticas de React Native y Firebase. El código está bien documentado y estructurado para facilitar futuras mejoras y mantenimiento.
Problemas Conocidos
Ninguno reportado actualmente
Soporte
Para soporte técnico o preguntas sobre el proyecto, contactar al desarrollador a través del correo electrónico institucional.
Proyecto desarrollado para: [Nombre del curso/materia]
Institución: [Nombre de la universidad]
Fecha: [Fecha de entrega]
 
