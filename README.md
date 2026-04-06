# ACCIN – Itinerarios Conectados  
### Prototipo de solución tecnológica · Espacios Castellanos de Innovación (EC‑Innova)

Este repositorio contiene el prototipo funcional desarrollado por **Espacios Castellanos de Innovación (EC‑Innova)** como parte de la propuesta presentada a la licitación de Acción contra el Hambre (ACH) para la plataforma **ACCIN – Itinerarios Conectados**.

Nuestro objetivo con esta demo es mostrar, de forma muy visual y aterrizada, cómo EC‑Innova puede convertir los procesos de Acción Social en una solución tecnológica moderna, escalable y preparada para crecer con los programas de empleo, emprendimiento y seguridad alimentaria de ACH.


## 1. Quién es EC‑Innova

**Espacios Castellanos de Innovación (EC‑Innova)** es una empresa especializada en:

- Diseño y construcción de soluciones digitales a medida para administraciones públicas, entidades sociales y ecosistemas de innovación.
- Proyectos que combinan **producto digital, datos e inteligencia artificial aplicada** para mejorar la vida de las personas y la toma de decisiones de las organizaciones.
- Acompañamiento integral: desde la visión y la arquitectura hasta el desarrollo, despliegue, soporte y evolución de las soluciones.

En esta licitación, EC‑Innova actúa como **socio tecnológico de referencia**, poniendo a disposición de Acción contra el Hambre:

- Un equipo propio, sin subcontratación, con perfiles de producto, UX, desarrollo, datos e IA.
- Experiencia en proyectos cofinanciados por fondos europeos y en entornos donde es crítico medir impacto social, eficiencia y retorno.
- Una propuesta de plataforma donde el **código desarrollado es 100 % propiedad de ACH** y se integra con su ecosistema actual (Atenea, KoboToolbox, GESPRA, People ADS, Power BI, SharePoint).


## 2. Qué queremos demostrar con este prototipo

Este prototipo es una **maqueta funcional de alto impacto** que EC‑Innova ha construido específicamente para la licitación ACCIN. No es el producto final, sino un demostrador que permite ver en pantalla ideas clave de la propuesta técnica:

- Que entendemos cómo trabaja Acción Social (programas de empleo, emprendimiento y seguridad alimentaria) y qué necesitan sus equipos en el día a día.
- Que somos capaces de traducir esa realidad a una herramienta **centrada en la persona beneficiaria y en su itinerario completo**.
- Que podemos incorporar **IA aplicada a los itinerarios** desde el primer momento, de forma responsable y explicable, para apoyar al equipo técnico, no para sustituirlo.

El prototipo se enfoca en los elementos troncales de los **Bloques 1 y 2**: diseño y desarrollo de la herramienta, experiencia de uso para equipos técnicos y personas participantes, y bases para el soporte y la evolución futura.


## 3. Qué incluye esta demo

En esta versión se pueden explorar cuatro experiencias principales:

### 3.1. Acceso y roles

- Pantalla de acceso donde se simula la entrada como:
  - **ADMIN** – visión global.
  - **GESTOR** – visión de una sede/oficina.
  - **TECNICO** – visión de los itinerarios que acompaña.
  - **PARTICIPANTE** – área personal de la persona beneficiaria.
- El comportamiento de la navegación y los permisos cambia según el rol, siguiendo la lógica de la tabla de roles y permisos definida en la licitación.

### 3.2. Dashboard para equipos de Acción Social

Para perfiles Admin / Gestor / Técnico, la página de inicio muestra:

- Indicadores clave adaptados al rol:
  - Beneficiarios activos.
  - Proyectos asignados.
  - Empresas colaboradoras.
  - Inserciones en el mes.
- Bloques de "Actividades recientes" y "Próximas sesiones" que conectan con la realidad diaria de los equipos en los programas Vives, itinerarios personalizados, escuelas de empleo, etc.

La idea es que este dashboard se alimente en producción de **Atenea y Power BI**, manteniendo la coherencia con el modelo de reporting actual de ACH.

### 3.3. Módulo de Personas Beneficiarias

Es el núcleo del prototipo y refleja la filosofía de EC‑Innova de poner a la persona en el centro:

- **Listado de personas beneficiarias** con tarjetas que muestran:
  - Nombre y situación laboral.
  - Proyecto en el que participa.
  - Edad.
  - Última actividad registrada.
- Filtrado dinámico según el rol:
  - El técnico ve solo las personas asociadas a sus proyectos.
  - El gestor ve las de su oficina.
  - El admin puede tener una vista agregada.

Al abrir una persona, la ficha se organiza en pestañas:

1. **Datos personales** – información básica, contacto, nivel formativo, etc.  
2. **Itinerario** – línea de tiempo con sesiones, talleres, entrevistas, prácticas u otras actividades clave.  
3. **Documentación** – área de subida/listado de documentos (DNI, CV, certificados…), diseñada para integrarse con SharePoint y con los formularios recogidos en KoboToolbox.  
4. **IA y recomendaciones** – panel de inteligencia artificial que sugiere itinerarios, estima probabilidad de éxito y muestra factores de riesgo o palancas de mejora.

### 3.4. Portal de la persona participante

Para el rol **PARTICIPANTE**, se muestra una vista específica:

- Mensaje de bienvenida personalizado y próxima sesión planificada.
- Línea de tiempo de su itinerario actual.
- Acciones rápidas:
  - Subir documentación.
  - Acceder a materiales formativos.
  - Responder encuestas o cuestionarios.

Esta parte del prototipo refleja la apuesta de EC‑Innova por un **área personal clara, accesible y empoderadora** para las personas participantes.


## 4. IA aplicada a los itinerarios (visión EC‑Innova)

EC‑Innova incorpora en el prototipo un primer set de **"quick wins" de IA**, alineados con la propuesta técnica presentada:

- **Itinerario sugerido**: la ficha de la persona muestra una ruta recomendada basada en perfiles similares, programas disponibles y resultados históricos (en la demo de forma simulada, en producción mediante modelos entrenados con datos anonimizados de ACH).
- **Probabilidad de éxito y riesgo de abandono**: indicadores visuales que ayudan a priorizar acompañamiento, alertas y decisiones técnicas, sin perder el foco en la persona.
- **Factores explicativos**: lista de factores que el modelo tiene en cuenta (competencias digitales, barreras de conciliación, movilidad, salud, etc.), para que la IA sea transparente y comprensible para los equipos.
- **Autocompletado inteligente**: ejemplo de cómo, a partir de documentos (por ejemplo, un CV), la IA puede proponer completar campos de la ficha con un solo clic.

En la solución definitiva, estos componentes se desplegarán como **microservicios de IA** (Python, Azure OpenAI u otros servicios equivalentes), desacoplados del núcleo de la aplicación para facilitar mantenimiento, trazabilidad y control ético de los modelos.


## 5. Arquitectura y stack tecnológico propuestos por EC‑Innova

### Frontend

- Framework: **Next.js** (App Router) + **React**.
- Componentes modulares por dominio (auth, layout, personas beneficiarias, portal participante).
- Diseño responsive y accesible, adaptable a distintos dispositivos (oficinas, centros, móviles de técnicos y participantes).

### Backend y datos

- Backend en **Node.js**, con API REST/GraphQL y modelo de datos relacional (PostgreSQL + ORM tipo Prisma).
- Integración prevista con el ecosistema de ACH:
  - Atenea (DWH y reporting omnicanal).
  - KoboToolbox (formularios, encuestas y trabajo de campo).
  - GESPRA (gestión económica y presupuestaria).
  - People ADS (personas y RR. HH.).
  - SharePoint (gestión documental).
  - Power BI (cuadros de mando y análisis).

### Seguridad, permisos y tenencia

- Modelo de permisos basado en roles (admin, gestor, técnico, participante) alineado con la tabla oficial de roles y permisos del proyecto.
- Posibilidad de despliegue en modelo multi‑tenant, facilitando la escalabilidad a distintas comunidades autónomas, programas o socios.


## 6. Cómo ejecutar la demo

### Requisitos

- Node.js (versión LTS).
- npm, yarn, pnpm o bun.

### Pasos

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/serdie/accin-demo.git
   cd accin-demo
   ```

2. Instalar dependencias:

   ```bash
   npm install
   # o
   yarn
   # o
   pnpm install
   # o
   bun install
   ```

3. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   # o
   bun dev
   ```

4. Abrir `http://localhost:3000` en el navegador.


## 7. Guion de demo recomendado (para la defensa)

1. Presentación de EC‑Innova y del objetivo del proyecto ACCIN.  
2. Acceso a la aplicación y cambio de rol (Admin → Gestor → Técnico → Participante).  
3. Recorrido rápido por el dashboard y explicación de cómo se alimentará de Atenea/Power BI.  
4. Módulo de Personas Beneficiarias: listado + ficha + pestañas (Itinerario, Documentación, IA).  
5. Panel de IA: itinerario sugerido, probabilidad de éxito, riesgo de abandono, autocompletado desde documentos.  
6. Portal de la persona participante: cómo vive ella la herramienta y su itinerario.  
7. Cierre: próximos pasos, plan de trabajo y visión de evolución (módulos adicionales, integraciones completas, despliegue por fases).

---

> ⚠️ **Aviso**: Este repositorio es un prototipo no productivo creado por EC‑Innova exclusivamente para la licitación de Acción contra el Hambre. Todos los datos son ficticios o anonimizados.
