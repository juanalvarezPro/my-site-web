---
title: 'Guía Completa: Instalar n8n Localmente y Configurar Wasapi'
description: 'Aprende a instalar n8n en tu máquina local, configurarlo y usar el paquete de nodos de Wasapi para automatizar WhatsApp'
published: 2024-12-19
tags: ['n8n', 'wasapi', 'whatsapp', 'automatización', 'nodejs', 'tutorial']
series: 'Automatización con n8n'
---

# Guía Completa: Instalar n8n Localmente y Configurar Wasapi

En esta guía te mostraré cómo instalar n8n en tu máquina local y configurar el paquete de nodos de Wasapi para automatizar WhatsApp. n8n es una herramienta de automatización de flujos de trabajo que te permite conectar diferentes servicios y APIs de manera visual.

## ¿Qué es n8n?

n8n es una plataforma de automatización de flujos de trabajo de código abierto que te permite:
- Conectar diferentes servicios y APIs
- Automatizar tareas repetitivas
- Crear workflows complejos de manera visual
- Integrar con más de 200 servicios

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **Git** (opcional, para clonar repositorios)

## Paso 1: Instalación de n8n

### Instalación Global

La forma más sencilla de instalar n8n es usando npm globalmente:

```bash
npm install n8n -g
```

### Verificar la Instalación

Una vez instalado, verifica que n8n se instaló correctamente:

```bash
n8n --version
```

Deberías ver algo como: `n8n@1.0.0` (o la versión actual).

<MacScreenMock 
  title="Terminal" 
  url="~" 
  type="terminal"
/>

## Paso 2: Ejecutar n8n Localmente

### Iniciar n8n

Para ejecutar n8n en tu máquina local, simplemente ejecuta:

```bash
n8n
```

n8n se iniciará y estará disponible en: `http://localhost:5678`

<MacScreenMock 
  title="Terminal" 
  url="localhost:5678" 
  type="terminal"
/>

### Primera Configuración

Al acceder por primera vez a n8n, verás una pantalla de bienvenida donde podrás:

1. **Crear una cuenta de administrador**
2. **Configurar tu perfil**
3. **Acceder al dashboard principal**

<MacScreenMock 
  title="n8n - Workflow Automation" 
  url="localhost:5678" 
  type="browser"
/>

## Paso 3: Instalar el Paquete de Nodos de Wasapi

### ¿Qué es el Paquete de Wasapi?

El paquete `@laiyon/n8n-nodes-wasapi` es un conjunto de nodos personalizados que te permite integrar n8n con la API de Wasapi (WhatsApp API) para automatizar mensajes de WhatsApp.

### Instalación del Paquete

Para instalar el paquete de nodos de Wasapi, sigue estos pasos:

#### Opción 1: Instalación Directa

```bash
npm install @laiyon/n8n-nodes-wasapi
```

#### Opción 2: Instalación en el Directorio de n8n

Si n8n está instalado globalmente, puedes instalar el paquete en el directorio de n8n:

```bash
cd ~/.n8n
npm install @laiyon/n8n-nodes-wasapi
```

### Reiniciar n8n

Después de instalar el paquete, reinicia n8n para que reconozca los nuevos nodos:

```bash
# Detener n8n (Ctrl+C)
# Luego volver a ejecutar
n8n
```

## Paso 4: Configurar Wasapi en n8n

### Acceder a los Nodos de Wasapi

Una vez reiniciado n8n, verás los nuevos nodos de Wasapi disponibles en la paleta de nodos:

- **Wasapi Send Message**: Para enviar mensajes
- **Wasapi Get Messages**: Para recibir mensajes
- **Wasapi Webhook**: Para configurar webhooks

### Configurar Credenciales

1. **Crea un nuevo workflow**
2. **Arrastra un nodo de Wasapi** al canvas
3. **Configura las credenciales** de tu cuenta de Wasapi:
   - API Key
   - Base URL
   - Número de teléfono

## Paso 5: Crear tu Primer Workflow

### Ejemplo Básico: Envío de Mensaje

Vamos a crear un workflow simple que envíe un mensaje de WhatsApp:

1. **Nodo Trigger**: Usa un "Manual Trigger" para iniciar el workflow
2. **Nodo Wasapi**: Configura "Wasapi Send Message"
3. **Conecta los nodos** y configura el mensaje

<MacScreenMock 
  title="n8n Workflow Editor" 
  url="localhost:5678/workflow" 
  type="n8n"
/>

### Configuración del Nodo Wasapi

En el nodo de Wasapi, configura:
- **To**: Número de teléfono destino
- **Message**: Contenido del mensaje
- **Type**: Tipo de mensaje (text, image, document)

## Paso 6: Probar el Workflow

### Ejecutar Manualmente

1. **Guarda el workflow**
2. **Haz clic en "Execute Workflow"**
3. **Verifica que el mensaje se envíe correctamente**

### Monitorear Ejecuciones

En la pestaña "Executions" puedes ver:
- Estado de las ejecuciones
- Logs detallados
- Errores si los hay

## Consejos y Mejores Prácticas

### Seguridad

- **Nunca expongas tus credenciales** en el código
- **Usa variables de entorno** para configuraciones sensibles
- **Configura autenticación** en n8n si planeas usarlo en producción

### Performance

- **Usa webhooks** en lugar de polling cuando sea posible
- **Implementa rate limiting** para evitar límites de API
- **Monitorea el uso de recursos** de tu máquina

### Mantenimiento

- **Actualiza n8n regularmente**
- **Mantén los paquetes de nodos actualizados**
- **Haz backup de tus workflows** importantes

## Solución de Problemas Comunes

### n8n no inicia

```bash
# Verificar que el puerto 5678 esté libre
lsof -i :5678

# Usar un puerto diferente
n8n start --port 5679
```

### Nodos de Wasapi no aparecen

```bash
# Verificar instalación
npm list @laiyon/n8n-nodes-wasapi

# Reinstalar si es necesario
npm uninstall @laiyon/n8n-nodes-wasapi
npm install @laiyon/n8n-nodes-wasapi
```

### Errores de conexión con Wasapi

- Verifica que tu API Key sea válida
- Confirma que la Base URL sea correcta
- Revisa los logs de n8n para más detalles

## Recursos Adicionales

- [Documentación oficial de n8n](https://docs.n8n.io/)
- [Paquete de nodos Wasapi en npm](https://www.npmjs.com/package/@laiyon/n8n-nodes-wasapi)
- [Comunidad de n8n](https://community.n8n.io/)
- [Repositorio de Wasapi SDK](https://github.com/juanalvarezpro/wasapi-sdk)

## Conclusión

Con esta guía has aprendido a:
- Instalar n8n localmente
- Configurar el paquete de nodos de Wasapi
- Crear workflows básicos
- Solucionar problemas comunes

n8n es una herramienta poderosa que, combinada con Wasapi, te permite automatizar completamente tus flujos de trabajo de WhatsApp. Experimenta con diferentes workflows y descubre todas las posibilidades que tienes disponibles.

¿Tienes alguna pregunta o quieres compartir tu experiencia? ¡Déjame un comentario!
