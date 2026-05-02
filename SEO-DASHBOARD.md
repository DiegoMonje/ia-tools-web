# SEO Dashboard - IA Tools

## Configuración de Tracking

### Google Analytics 4

1. Ir a [analytics.google.com](https://analytics.google.com)
2. Crear propiedad
3. Añadir código de seguimiento al sitio:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Añadir en Layout.astro:**

```astro
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

---

### Google Search Console

1. Ir a [search.google.com/search-console](https://search.google.com/search-console)
2. Añadir propiedad con dominio
3. Verificar con DNS TXT o file upload

---

## Métricas a seguir

### KPIs principales

| Métrica | Objetivo mes 3 | Objetivo mes 6 |
|--------|----------------|----------------|
| Sessions | 200-400 | 700-1000 |
| Users | 150-300 | 500-800 |
| Pageviews | 1000-2000 | 5000-8000 |
| Avg. Session Duration | 2:00 | 3:00 |
| Bounce Rate | <70% | <60% |
| Pages/Session | 2.5 | 3.5 |

### Métricas SEO

| Métrica | Objetivo mes 3 | Objetivo mes 6 |
|--------|----------------|----------------|
| Keywords ranking | 50 | 200 |
| Impressions | 10000 | 50000 |
| Clicks | 200 | 1000 |
| CTR medio | 2% | 3% |
| Avg. Position | 20 | 10 |

---

## Revisión semanal

### Checklist semanal

- [ ] Revisar GA4: sesiones, Users, pageviews
- [ ] Revisar GSC: clicks, impressions, position
- [ ] Analizar top 10 páginas por tráfico
- [ ] Identificar keywords perdidas
- [ ] Revisar nuevos backlinks conseguidos

### Revisión mensual

- [ ] Analizar crecimiento vs mes anterior
- [ ] Revisar contenido con bajo rendimiento
- [ ] Audit technical SEO
- [ ] Revisar backlinks rotos
- [ ] Actualizar contenido antiguo

---

## Herramientas recomendada

### Gratuitos
- Google Analytics 4
- Google Search Console
- Ubersuggest (limitado)
- AnswerThePublic (limitado)

### De pago (si hay presupuesto)
- Ahrefs: $99-999/mes
- Semrush: $119-449/mes
- Screaming Frog: free-$199/año

---

## Alertas importantes

### Revisar inmediatamente si:
- Caída >30% en tráfico
-Nuevos errores en GSC
- Pérdida de backlinks importantes
- Caída drástica en rankings

---

## Próximos pasos

1. **[ ] Configurar GA4**
2. **[ ] Configurar GSC**
3. **[ ] Crear spreadsheet de tracking**
4. **[ ] Revisión semanal automática**
5. **[ ] Revisión mensual de contenido**