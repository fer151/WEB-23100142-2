# Aquitectura de una Aplicación 
---
**Nombre del estudiante:** Fernando Guadalupe Campos Villanueva  
**Materia:** Programación Web   
**Institución:** Instituto Tecnológico de Nuevo Laredo  
**Fecha:** 30 de agosto de 2025  

---
### Instrucciones
Elabore un documento en formato Markdown en el cual defina
a que se refiere el concepto de Arquitectura de una Aplicacion (web)
y desriba cuales son los tipos de arquitectura mas comunes
---

## ¿Qué es la arquitectura de una aplicación web?
La arquitectura de una aplicación web se refiere a la manera en que se organizan y estructuran los componentes que conforman una aplicación, así como la forma en que estos interactúan entre sí para cumplir con los requerimientos del sistema.
Incluye aspectos como la distribución de responsabilidades entre el cliente y el servidor, el flujo de datos, la comunicación entre capas y la escalabilidad de la aplicación.

---
## Tipos mas comunes de arquitectura web 
**Deacuerdo a como se comunican las partes que componen la app**
### 1. Cliente - Servidor 
- Es el modelo clasico 
- El Cliete (navegador) envía solicitudes al servidor que procesa la información y con ella devuleve una respuesta. 
### 2. Punta a Punta 
- Los clientes actúan a la vez como proveedores y consumidores de datos. 
- No existe un servidor central, sino que los nodos se comunican directamente.

**De acuerdo como se organiza el código de la app**

### 1. Monolítica
- Toda la aplicación (frontend, backend, lógica de negocio y base de datos) está integrada en un único bloque.
- Más simple de desarrollar al inicio, pero difícil de escalar y mantener.
### 2. En Capas 
- Divide la aplicación en capas con responsabilidades bien definidas (presentación, lógica de negocio, acceso a datos).
- Mejora la organización y facilita el mantenimiento. 
### 3. Microservicios
- La aplicación se divide en pequeños servicios independientes que se comunican entre sí mediante APIs.
- Permite mayor escalabilidad, flexibilidad y despliegue continuo.
### 4. Serverless
- La aplicación se ejecuta en funciones bajo demanda en la nube, sin necesidad de administrar servidores.
- Reduce costos de infraestructura y facilita la escalabilidad automática.

---