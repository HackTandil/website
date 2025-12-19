# 📚 Biblioteca Hacktandil

## ¿Cómo contribuir?

¿Tenés un libro que te marcó como developer? ¡Sumalo a la biblioteca de la comunidad!

### Pasos para agregar un libro

1. **Hacé fork del repositorio** y cloná tu fork localmente

2. **Editá el archivo** `src/data/library.json`

3. **Agregá tu libro** siguiendo este formato:

```json
{
  "title": "Nombre del Libro",
  "author": "Nombre del Autor",
  "cover": "URL de la imagen de portada",
  "goodreads": "URL de Goodreads",
  "recommendedBy": "@tu_usuario"
}
```

4. **Abrí un Pull Request** con tu recomendación

### ¿Dónde encontrar los datos?

- **cover**: Podés obtener la URL de la imagen desde Goodreads o Amazon. Click derecho en la portada → "Copiar dirección de imagen"
- **goodreads**: La URL de la página del libro en [goodreads.com](https://www.goodreads.com)
- **recommendedBy**: Tu usuario de X/Twitter o GitHub (ej: `@tunombre`)

### Ejemplo

```json
{
  "title": "AI Engineering",
  "author": "Chip Huyen",
  "cover": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1733340973i/216848047.jpg",
  "goodreads": "https://www.goodreads.com/book/show/216848047-ai-engineering",
  "recommendedBy": "@tadeodonegana"
}
```

### Tips

- Asegurate de que el JSON sea válido (podés usar [jsonlint.com](https://jsonlint.com) para verificar)
- Usá imágenes de buena calidad para la portada (!)
- Un libro por Pull Request facilita la revisión :)

---

¿Dudas? Contactanos en [X](https://x.com/hacktandil) o abrí un issue en el repo.
