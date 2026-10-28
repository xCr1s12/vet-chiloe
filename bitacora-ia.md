# Bitácora de Uso de IA Generativa - Mini Proyecto vetChiloé

## Registro de Interacciones

### Entrada 1: Frontend
- **Paso:** Paso 1 - Corregir la importacion de un Componente que no renderizaba
- **Herramienta:** Github Copilot
- **Prompt:** 
  > " Por que el icono de search en el componente BuscadorPaciente al renderizarse aparece como object object "
- **Resultado:** 
  > Copilot reviso el componente y encontro que se estaba usando el icono en un campo que no admitia componentes (<Search/>) y comprobo que el import del icono era invalido al ser una exportacion no predeterminada de la libreria lucide-react: movio el componente de search fuera de el campo  y lo encerro en un contenedor, tambien corrigio el import a una importacion nombrada {search} en vez de search 
- **Verificación:** 
  > se verifico que renderizara el icono y fue exitoso

---

### Entrada 2: Base de Datos (SQL)
- **Paso:** Paso 2 - Funciones
- **Herramienta:** Copilot
- **Prompt:** 
  > " adapta el archivo de funciones.sql de server/sql para funcionar con la base de datos actual de neon y luego ejecutalo  "
- **Resultado:** 
  > El resultato fue el esperado, se adaptaron las funciones a la base de datos actual de Neon y se ejecutaron correctamente sin errores. Se realizaron ajustes en la sintaxis y en los tipos de datos.
- **Verificación:** 
  > Se ejecutaron las funciones en el SQL EDITOR y se verificó que los resultados fueran correctos y consistentes con los datos de la base de datos.

---

### Entrada 3: Backend (N-Capas)
- **Paso:** paso 3- verificacion de estado de los endpoint
- **Herramienta:** Github Copilot
- **Prompt:** 
  > Haz la verificacion en navegador de la url de vercel en produccion https://vet-chiloe.vercel.app/pacientes de los endpoint prueba buscar …/api/buscar?q=mer  
- **Resultado:** 
  > Copilot comprobo la url exacta y encontro que los endpoint estaban  funcionales y devolvio 200 al hacer las busquedas
- **Verificación:** 
  > se verifico haciendo una comprobacion en el navegador de manera propia buscando https://vet-chiloe.vercel.app/api/buscar?q=mer y se encontro el dato  a buscar 
---

### Entrada 4: DevOps
- **Paso:** paso-4 - Despliegue de funciones en neon
- **Herramienta:** Copilot
- **Prompt:** 
  > " adapta el archivo de funciones.sql de server/sql para funcionar con la base de datos actual de neon y luego ejecutalo  "
- **Resultado:** 
  > El resultato fue el esperado, se adaptaron las funciones a la base de datos actual de Neon y se ejecutaron correctamente sin errores. Se realizaron ajustes en la sintaxis y en los tipos de datos.
- **Verificación:** 
  > Se ejecutaron las funciones en el SQL EDITOR y se verificó que los resultados fueran correctos y consistentes con los datos de la base de datos.

---

## Reflexión en Pareja

## Conclusión

La Inteligencia Artificial se convirtió en un pilar fundamental a lo largo de todo el ciclo de desarrollo del proyecto, optimizando los tiempos de entrega y la calidad del código.

Gracias a su asistencia técnica, logramos destrabar con agilidad complejos desafíos relacionados con el diseño de la interfaz de usuario y la arquitectura de la base de datos.

Asimismo, optimizó significativamente las tareas de control de calidad al facilitar una revisión exhaustiva de los endpoints y agilizar los procesos de despliegue en producción.

Mantuvimos siempre un riguroso criterio de validación, verificando y probando cada una de sus sugerencias para garantizar su absoluta estabilidad y correcto funcionamiento.

En definitiva, su integración no solo aceleró nuestro ritmo de trabajo, sino que también profundizó nuestra comprensión global del sistema y sus componentes.