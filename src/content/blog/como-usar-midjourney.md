---
title: "Cómo Usar Midjourney v7: Guía Paso a Paso 2026"
description: "Aprende a usar Midjourney v7 desde cero. Guía completa con los mejores prompts, parámetros y consejos para crear imágenes impresionantes."
pubDate: 2026-05-02
updatedDate: 2026-05-02
heroImage: "/midjourney-dalle-featured.svg"
category: "IA de Imagen"
tags: ["Midjourney", "cómo usar", "tutorial", "imágenes", "IA", "generar imágenes", "arte digital"]
author: "Equipo IA Tools"
readTime: "20 min"
featured: true
faq:
  - question: "¿Cómo empezar a usar Midjourney?"
    answer: "Necesitas una cuenta de Discord y suscribirte en midjourney.com. El plan Basic cuesta $10/mes."
  - question: "¿Midjourney es gratuito?"
    answer: "Tiene un período de prueba muy limitado con 25 generaciones gratuitas. Para uso regular necesitas el plan Basic ($10/mes) o superior."
  - question: "¿Qué puedo crear con Midjourney?"
    answer: "Arte conceptual, portadas, ilustraciones, personajes ficticios, fotografía artística, concepto art para películas y juegos. No es ideal para fotos de productos."
  - question: "¿Cuál es la diferencia entre Midjourney y DALL-E?"
    answer: "Midjourney genera imágenes con calidad artística superior y más estilo. DALL-E es más fácil de usar pero menos flexible. Midjourney requiere más iteración."
  - question: "¿Puedo usar Midjourney comercialmente?"
    answer: "Sí, con el plan Basic hasta $20,000/año de ganancias. Con Standard y Pro sin límite. Revisa los términos en midjourney.com/terms."
---

Midjourney es la herramienta de generación de imágenes por inteligencia artificial más potente y popular que existe actualmente. Y lo ha sido durante años.

Pero tiene una curva de aprendizaje pronunciada. Y una interfaz nada intuitiva, porque todo funciona a través de Discord, no desde una página web tradicional.

Después de meses usándolo Intensity, te explico exactamente cómo funciona y cómo sacarle el máximo provecho. No desde la teoría, sino desde la práctica daily de alguien que lo usa para crear contenido profesional.

## Por qué Midjourney y no DALL-E

Antes de meternos en los detalles, mi opinión honesta sobre cuándo usar cada uno.

Midjourney genera imágenes con una calidad artística superior. Las imágenes tienen más carácter, estilo, y sensación profesionales. Pero requiere más trabajo: más intentos, más refinación, más iteraciones.

DALL-E 4, integrado en ChatGPT Plus, es más fácil de usar. Pero las imágenes a veces se ven "genéricas" o "artificiales". Es más práctico para cosas rápidas.

### Mi recomendación:

- **Usa Midjourney** cuando quieres el mejor resultado artístico posible, aunque cueste más trabajo
- **Usa DALL-E** cuando necesitas algo rápido y práctico sin complicarte la vida

Esta guía es sobre Midjourney, así que profundicemos en cómo sacarle el máximo provecho.

## Midjourney vs otras herramientas de IA

El panorama de generación de imágenes con IA ha cambiado dramáticamente en los últimos años. Aquí está cómo se compara Midjourney:

| Herramienta | Calidad artística | Facilidad de uso | Precio | Mejor para |
|------------|------------------|-----------------|---------|------------|
| Midjourney | ★★★★★ | ★★★☆☆ | $10-60/mes | Arte conceptual |
| DALL-E 4 | ★★★★☆ | ★★★★★ | $20/mes (ChatGPT) | Uso general |
| Stable Diffusion | ★★★★☆ | ★★☆☆☆ | Gratis | Control total |
| Adobe Firefly | ★★★☆☆ | ★★★★☆ | $5-55/mes | Integración Adobe |

Midjourney lidera en calidad artística. Pero la diferencia se ha acortado. Para muchos casos de uso, DALL-E es suficiente.

## Cómo empezar con Midjourney

### Requisitos previos

Antes de empezar, necesitas:

- **Cuenta de Discord** (obligatoria, no hay otra forma de usar Midjourney)
- **Suscripción a Midjourney** (el plan gratuito tiene límites muy bajos)

### Paso 1: Crear cuenta en Discord

1. Ve a **discord.com** y regístrate con tu email
2. Confirma tu email
3. Descarga la app de Discord (opcional, pero recomendado):
   - Para Windows/Mac: discord.com/download
   - Para móviles: App Store / Google Play

### Paso 2: Unirse al servidor de Midjourney

1. Ve a **midjourney.com/discord**
2. Clic en "Join Midjourney"
3. Acepta la invitación al servidor
4. Explora los canales #general y #newbies ( donde generarás tus imágenes)

### Paso 3: Suscribirse a Midjourney

1. Ve a **midjourney.com/account**
2. Inicia sesión con tu cuenta de Discord
3. Elige tu plan:

| Plan | Precio | Para qué sirve |
|------|--------|--------------|
| Basic | $10/mes | 2000 minutos/mes - suficiente para probar |
| Standard | $30/mes | 15 horas + modo relax |
| Pro | $60/mes | Todo incluido, sin límites |

**Mi recomendación:** Empieza con Basic. Si te engancha y empiezas a usarlo daily, escala a Standard. El modo relax te permite seguir generando mientras no tienes prisa.

### Paso 4: Tu primera imagen

En el canal #newbies o #general, escribe:

```
/imagine prompt: una foto de un gato negro sentado en un alféizar, iluminación cinematográfica, fotorrealista --ar 16:9 --v 7
```

Verás cómo se generan 4 варианта de tu imagen enunos segundos. Puedes:

- hacer clic en cualquier вариante para upscal (a mayor resolución)
- guardarla con U1, U2, U3, U4
- crear variaciones con V1, V2, V3, V4

## Los comandos esenciales

Midjourney funciona con comandos. Aquí están los más importantes:

### Comandos básicos

```
/imagine - Generar imagen (el principal)
/settings - Ver y ajustar configuración de tu cuenta
/describe - Subir imagen y obtener prompts automáticamente
/blend - Mezclar dos imágenes
/shorten - Simplificar prompt (quitar palabras innecesarias)
/prefer option set - Crear персонализация de estilos
/help - Ver ayuda
/info - Ver información de tu cuenta
```

### Parámetros que debes conocer

Los parámetros se ponen al final del prompt con doble guión (--). Aquí están los más útiles:

| Parámetro | Ejemplo | Para qué sirve |
|-----------|---------|----------------|
| --ar | --ar 16:9 | Ratio de aspecto (ancho:alto) |
| --v | --v 7 | Versión del modelo (1-7) |
| --s | --s 750 | Estilo/creatividad (100-1000) |
| --iw | --iw 0.6 | Peso de imagen de referencia (0-1) |
| --seed | --seed 12345 | Semilla para reproducir resultado |
| --no | --no plantas | Excluir elementos |
| --q | --q 2 | Calidad (1 o 2, más lento pero mejor) |
| --style | --style raw | Estilo raw más literal |
| --repeat | --repeat 3 | Repetir generación 3 veces |
| --tile | --tile | Crear patrón repetible |

### Versiones de Midjourney

Midjourney tiene varias versiones, cada una con su estilo:

- **v7 (actual)**: Predeterminado, calidad equilibrada
- **v6**: Más consistente, menos hallucinations
- **niji 6**: Mejor para anime y estilos ilustración
- **raw**: Más literal, menos interpretación artística

### Ratios de aspecto populares

- `--ar 1:1` - Cuadrado (Instagram posts)
- `--ar 16:9` - Horizontal (YouTube thumbnails)
- `--ar 9:16` - Vertical (TikTok/Stories/Reels)
- `--ar 4:3` - Foto estándar
- `--ar 21:9` - Panorámico
- `--ar 3:2` - Fotografía clásica
- `--ar 2:3` - Retrato vertical

## Cómo escribir prompts efectivos

Esta es la parte más importante. El prompt es la descripción de lo que quieres crear.

### La estructura básica

```
[sujeto] + [contexto/escena] + [estilo/iluminación] + [parámetros]
```

**Ejemplo:**
```
retrato de una mujer de 30 años, cabello castaño largo, ojos verdes, iluminación profesional de estudio, cámara Canon, profundidad de campo, luz natural, sombras suaves, 85mm --ar 4:5 --v 7
```

### Cómo construir prompts efectivos

**1. Sé específico con el sujeto:**
- En lugar de "una persona",di "una mujer latinoamericana de 30 años con cabello negro"
- En lugar de "un animal", di "un golden retriever adulto con pelaje dorado"

**2. Añade contexto:**
- "sentado en un sofá"
- "de pie en una playa al atardecer"
- "en una oficina moderna"

**3. Define el estilo:**
- "fotorrealista"
- "estilo anime"
- "pintura al óleo"
- "arte conceptual de película"

**4. Especifica iluminación:**
- "iluminación de estudio"
- "luz natural dari window"
- "golden hour"
- "neon lights"

### Ejemplos de estilos completos

**Fotorrealista:**
```
retrato de una mujer de 30 años, cabello castaño, ojos verdes, iluminación profesional de estudio, cámara Canon, profundidad de campo, luz natural, sombras suaves, 85mm --ar 4:5 --v 7
```

**Arte conceptual:**
```
diseño de personaje guerrero cyberpunk, armadura tecnológica, estilo anime japonais, colores vibrantes, trabajo de líneas detallado, fondo negro, concepto art, pintura digital --ar 1:1 --v 7
```

**Minimalista:**
```
logo minimalista, letra A, formas geométricas simples, fondo blanco, estilo vectorial, diseño limpio --ar 1:1 --v 7 --style raw
```

**Fotografía callejera:**
```
retrato estilo street photography, lente 35mm, luz dorada golden hour, ciudad al fondo, bokeh, película --ar 3:4 --v 7
```

**Arte digital:**
```
ilustración digitally de un dragón volando sobre montañas, colores vibrantes, estilo animación Studio Ghibli, cielo nublado, detallada --ar 16:9 --v 7
```

## Técnicas avanzadas

Estas son las técnicas que uso diariamente para conseguir mejores resultados:

### 1. Usar imagen de referencia

Sube una imagen y usa `--iw` para influir en el estilo:

```
[imagen] un gato en el mismo estilo artistico --iw 0.5 --ar 1:1
```

El valor va de 0 a 1. Más alto = más cercano a la imagen de referencia.

### 2. Prompt negativo con --no

Excluye elementos que no quieres:

```
un paisaje hermoso --no personas, edificios, automóviles, cables
```

Si siempre aparecen personas donde no quieres, añade --no personas.

### 3. Multi-prompt con ::

Define el peso de cada elemento. Funciona como prioridades:

```
ciudad cyberpunk::luces de neón::escala masiva::8k --ar 16:9
```

El número después de :: define el peso relativo.

### 4. Personalización de estilos

Guarda tu estilo favorito para usarlo después:

```
/prefer option set --p minuevostyle
```

Luego úsalo en cualquier prompt:

```
/imagine prompt: un gato --p mistyle
```

### 5. Describe cualquier imagen

Sube una imagen y obtén un prompt automáticamente:

```
/describe [sube la imagen]
```

Te da 4 opciones de prompts. Puedes editarlos y usarlos como punto de partida.

### 6. Mezclar imágenes

Mezcla dos imágenes para crear algo nuevo:

```
/blend [sube imagen 1] [sube imagen 2]
```

Puedes mezclar hasta 5 imágenes.

### 7. Variación personalizada

Usa el parámetro --p para personalizaciones específicas:

```
--p estilo1 --p estilo2
```

## Errores comunes y soluciones

### La imagen sale muy oscura

Añade más términos de iluminación:

```
luz brillante, daylight, bien iluminado, soft lighting, well lit
```

### La calidad no es buena

Usa --quality 2:

```
--q 2
```

Esto toma más tiempo pero mejora significativamente el resultado.

### No es lo que esperaba

Varios problemas y soluciones:

- **Refina con más detalles específicos**
- **Usa --iw 0.3** para imagen más cercana al prompt
- **Prueba diferentes estilos**: --style raw vs default
- **Aumenta --s** para más creatividad
- **Usa diferentes seed** si nada funciona

### La cara se ve rara

Problema común en Midjourney. Intenta:

- Añadir "front facing face" o "face symmetry"
- Usar --no deformed
- Probar con diferentes seed
- Usar v6 o niji 6
- Añadir "high detail face"

### Las manos se ven mal

Otro problema común. Intenta:

- "realistic hands" o "detailed hands"
- --no extra limbs
- Usar --v 6

## Workflow para mejorar resultados

Este es mi proceso para conseguir la imagen perfecta:

1. **Generación inicial**: Prompt básico, múltiples variaciones
2. **Selección**: Elige la variante más cercana a lo que quieres
3. **Iteración**: Refina el prompt basada en lo que viste
4. **Upscale**: Aumenta resolución una vez que tienes lo que buscas
5. **Variaciones**: Si necesitas más opciones, usa V (variation)

## Cuándo usar Midjourney

### Ideal para:

- Arte conceptual y concepto art
- Portadas de libros y discos
- Ilustraciones para proyectos
- Personajes ficticios
- Fotografía artística
- Fondos para videos
- Diseño gráfico
- Trabajos de investigación
- Arte para redes sociales
- Visualización para películas y juegos

### No es ideal para:

- Fotos de productos reales (DALL-E es mejor)
- Imágenes con texto legible (Adobe Firefly es mejor)
- Personas específicas (problemas legales)
- Uso comercial sin licencia adecuada
- Contenido que necesito inmediatamente (iteración toma tiempo)

## Planes y precios

Aquí está el desglose completo:

| Plan | Precio | Minutos/mes | Límite comercial |
|------|---------|------------|----------------|
| Basic | $10/mes | 2000 min | $20,000/año |
| Standard | $30/mes | 15 horas | Ilimitado |
| Pro | $60/mes | Ilimitado | Ilimitado |
| Mega | $120/mes | Ilimitado | Ilimitado |

**Nota:** Los cambios de precio pueden ocurrir. Verifica siempre en midjourney.com/pricing.

## Licencia de uso comercial

Con los planes de pago, tienes derechos comerciales:

- **Basic:** Hasta $20,000/año de ganancias
- **Standard y Pro:** Uso comercial sin límite

Revisa siempre los términos actualizados en midjourney.com/terms antes de usar comercialmente.

## Mi setup personal

Así uso Midjourney daily:

```
Plan: Standard ($30/mes)

Parámetros por defecto:
- --v 7
--ar 1:1 (más común)
- --s 750 (balance creativity/accuracy)

Casos de uso:
- Arte conceptual (60%)
- Ilustraciones para blog (25%)
- Diseño de personajes (15%)

Workflow:
1. Prompt básico
2. 4 variaciones
3. Seleccionar mejor
4. Upscale o iterar
5. Refinar prompt si es necesario
```

## Conclusión

Midjourney requiere práctica. Pero los resultados justifican el esfuerzo. Es la herramienta más potente para crear imágenes con calidad artística profesional.

Los puntos clave para tener éxito:
1. **Sé específico** en tus prompts
2. **Practica** con muchos intentos
3. **Aprende los parámetros** principales
4. **Itera** hasta conseguir lo que buscas
5. **Respeta las licencias** para uso comercial
6. **Guarda los prompts** que funcionan

Esta guía te da lo básico para empezar. Como todo, la práctica hace al maestro. Después de 100+ generaciones, empezarás a ver qué funciona y qué no.

---

¿Tienes dudas específicas sobre Midjourney? Cuéntame:
- Qué quieres crear
- Para qué lo necesitas
- Tu nivel de experiencia

Y te ayudo con prompts específicos para tu caso.