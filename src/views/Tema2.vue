<template lang="pug">
.curso-main-container.pb-3
	BannerInterno
	.container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
		.titulo-principal.color-acento-contenido
			.titulo-principal__numero
				span 2
			h1 Hojas de estilo 
		p.mb-5(data-aos='fade-right') Las hojas de estilo, conocidas como CSS (Cascading Style Sheets), son el mecanismo que confiere apariencia a una página web. Para ello, se crea un archivo con extensión .css, el cual contiene el código de estilización. Este código se compone de selectores (que pueden ser etiquetas HTML, clases, identificadores, entre otros) y un conjunto de propiedades y valores que definen el estilo de los elementos seleccionados. 
		.tarjeta.p-5.mb-5(data-aos="fade-right" style="background-color: #d6e0f7 ")
			.row.justify-content-center.align-items-center
				.col-lg-1.col-5(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/18.svg', alt='')
				.col-lg-11(data-aos="fade-left")
					p.mb-0 La principal ventaja de utilizar CSS es la capacidad de reutilizar el mismo código en múltiples páginas web, lo que facilita la implementación de un diseño coherente a lo largo de todo el sitio. Además, el uso de hojas de estilo mejora significativamente el mantenimiento y control del diseño de un sitio web, permitiendo cambios globales en la presentación con modificaciones en un solo archivo.
		h5.mb-4 A continuación, se muestra un esquema general de cómo se puede implementar código CSS en una página web: 
		.titulo-sexto.color-acento-contenido(data-aos='fade-right')
			h5 Figura 4. 
			span Esquema general CSS 
		.f-2-1.p-5.mb-5
			.row.justify-content-center.mb-5
				.col-lg-7.d-lg-block.d-none: img(src='@/assets/curso/temas/19.svg', alt='El CSS se deriva en las “clases” esta se subdivide en “tags” y “atributos”. Derivando estas finalmente en la página web.')
				.col-lg-7.d-lg-none.d-block: img(src='@/assets/curso/temas/20.svg', alt='El CSS se deriva en las “clases” esta se subdivide en “tags” y “atributos”. Derivando estas finalmente en la página web.')
		.f-2-2.mn.p-5.mb-5
			h5.mb-4 Al momento de implementar las CSS es necesario tener en cuenta los siguientes puntos: 
			.row.justify-content-center.mb-5
				.col-lg-4.mb-lg-0.mb-3
					.tarjeta.p-4(style="background-color: #f7eefe") 
						h5 Separación de estructura del documento:
						p Se refiere a la separación del contenido del documento HTML independiente de su presentación (tipos de letras, colores, tamaños de letras, espacios, fondos de pantalla, anexo de imágenes, entre otros)
				.col-lg-4
					.tarjeta.p-4(style="background-color: #d8fffa") 
						h5 Optimización de carga: Utilizar CSS 
						p eficientemente permite reducir el tiempo de carga de las páginas web al minimizar el uso de recursos innecesarios. Esto se logra mediante la combinación de archivos, minimización de código y uso de selectores y reglas CSS adecuadas para el diseño responsive.
			.row.justify-content-center.mb-5
				.col-lg-4.mb-lg-0.mb-3
					h5.mb-4 Un ejemplo de código de hoja interna es:
					.tarjeta-codigo.p-5.mb-5
						pre.language-css(language="css").mt-5
							code
								| &lt;head&gt; 
								| &lt;style&gt; 
								| body{ background-color: #FFFFFF; 
								| } 
								| h1{ 
								| color: #000000; 
								| text-align: center; 
								| } 
								| &lt;/style&gt; 
								| &lt;/head&gt; 
								| &lt;body&gt; 
								| &lt;/body&gt; 
				.col-lg-4.mb-lg-0.mb-3
					h5.mb-4 Un ejemplo de código de hoja externa es:  
					.tarjeta-codigo.p-5.mb-5
						pre.language-html(language="html").mt-5
							code
								| &lt;head&gt; 
								| &lt;link rel=“stylesheet” type=“text/css” href=“estilo.css”&gt; 
								| &lt;/head&gt; 
								| &lt;body&gt; 
								| &lt;/body&gt; 
				.col-lg-4.mb-lg-0.mb-3
					h5.mb-4 Un ejemplo de código de hoja en sitio web es: 
					.tarjeta-codigo.p-5.mb-5
						pre.language-html(language="html").mt-5
							code
								|&lt;head&gt; 
								|&lt;link rel=“stylesheet” type=“text/css” href=“https://www.estilo.css”&gt; 
								|&lt;/head&gt; 
								|&lt;body&gt; 
								|&lt;/body&gt; 
			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta.color-primario.p-5.mb-5
						.row.justify-content-center.align-items-center
							.col-lg-2.col-6: img(src='@/assets/curso/temas/12.svg', alt='')
							.col-lg-10
								h5.mb-3: span.titulo-azul.p-2 ¡Importante! 
								p(data-aos='fade-right') Los selectores de CSS, se utilizan para determinar los elementos a los que se va a aplicar el estilo y se clasifican por nombre, por id de selector y por clase.
			.row.justify-content-center.mb-5
				.col-lg-7.mb-lg-0.mb-3
					AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
						.p-4(titulo="De selector de nombre ")
							p Donde se llama directamente al #[em tag] (h2) al que se debe aplicar el estilo. 
								br
								|Ejemplo de selector de nombre: 
							.tarjeta.bg-white.p-4
									code h2 {
										br
										|text-align: left;color: #[span.color-rojo red;]
										br
										|}
							
						.p-4(titulo="De selector por id ")
							p Donde solo se aplica un elemento único. Aquí el nombre del estilo va precedido por el carácter “#”. Ejemplo de selector por id: 
							.tarjeta.bg-white.p-4
									code #texto1 { 
										br
										|text-align: center; color: #[span.color-blue blue;] 
										br
										|} 
						.p-4(titulo="De selector de clase ")
							p En este caso se pueden personalizar los estilos para aplicarlos a diferentes elementos que comparten alguna relación, para ello se debe escribir un punto (.) delante del nombre de la clase. Ejemplo de selector de clase: 
							.tarjeta.bg-white.p-4
									code .nombreMiclase { 
										br
										|text-align: center; color: #[span.color-rojo red;] 
										br
										|} 
				.col-lg-5.col-7: img(src='@/assets/curso/temas/24.png', alt='')
		Separador 
		#t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
			h2 2.1 Introducción CSS3 
		.row.justify-content-center.align-items-center
				.col-lg-1.col-5(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/25.svg', alt='')
				.col-lg-11(data-aos="fade-left")
					p.mb-0 CSS3 representa una evolución significativa respecto a sus predecesores, CSS y CSS2, introduciendo una serie de mejoras que pueden categorizarse principalmente en dos aspectos:  
		.row.justify-content-center.mb-5
			.col-lg-5.mb-lg-0.mb-3
					.tarjeta.color-primario.p-4
						.row.justify-content-center.mb-3
							.col-4
								figure
									img(src='@/assets/curso/temas/26.svg', alt='Texto que describa la imagen')
						h4.text-white Aplicación del concepto de módulos: 
						p.text-white Esta característica transforma la forma en que se definen los estilos de un sitio web, acercándose más a un enfoque de programación modular. Los módulos permiten organizar los estilos en contextos específicos y mantenerlos en archivos separados, lo que facilita su gestión y reutilización. Aunque la mención de archivos con extensión .less se asocia con un preprocesador CSS específico, el concepto modular en sí es fundamental para organizar CSS de manera más eficiente y no se limita a una extensión de archivo específica.
			.col-lg-5.mb-lg-0.mb-3
					.tarjeta.color-acento-contenido.p-4.h-100
						.row.justify-content-center.mb-3
							.col-4
								figure
									img(src='@/assets/curso/temas/27.svg', alt='Texto que describa la imagen')
						h4(style="color:#12263f ") Enriquecimiento visual y funcional de los elementos: 
						p(style="color: #12263f") CSS3 amplía las posibilidades de diseño y animación de los elementos en las páginas web. Esto incluye la implementación de animaciones, transiciones, maquetaciones con columnas, gradientes para modificar colores, transformaciones para rotar y escalar elementos, y el uso de fuentes de texto externas a través de librerías. Estas herramientas permiten a los diseñadores y desarrolladores web crear experiencias de usuario más ricas y dinámicas.
		p.mb-5(data-aos='fade-right') Estas innovaciones hacen de CSS3 una herramienta poderosa para el diseño web moderno, permitiendo la creación de sitios web más atractivos, funcionales y accesibles. 
		.row.justify-content-center.mb-5
			.col-lg-6
				h5.mb-4 Un ejemplo de estructura de uso de módulos:  
				.tarjeta-codigo.p-5.mb-5
					pre.language-html(language="html").mt-5
						code
							br
							|.styles/ 
							br
							|..controlador.less 
							br
							|..módulos/ 
							br
							|…configuraciones/ 
							br
							|….menu.less 
							br
							|….comentarios.less 
							br
							|….right/ 
							br
							|…..right.less 
							br
							|….left/ 
							br
							|…..left.less 
							br
							|….center/ 
							br
							|…..center.less 
							br
							|…ayudas/ 
							br
							|….ayudas.less 
							br
							|/**** Contenido de archivo controlador.less *****/ 
							br
							|@import módulos/configuraciones/menu.less 
							br
							|@import módulos/ayudas/ayudas.less 
		Separador 
		#t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
			h2 2.2 Estructura  
		.f-2-3.p-5.mn.mb-5.pt-0
			.row.justify-content-center.mb-5
				.col-lg-7(data-aos="fade-right")
					.p-4(style="background-color: #f2e5fd")
						p.mb-0 La estructura de CSS3 se basa en un conjunto de reglas almacenadas en un archivo. Cada regla consta de un selector, utilizado para identificar el elemento HTML al que se aplicarán los estilos, seguido de una o más declaraciones, que se separan entre sí por punto y coma (;). Una declaración incluye una propiedad y un valor asignado a esa propiedad. Además de definirse en un archivo CSS externo, estas declaraciones de estilo también pueden aplicarse directamente sobre un elemento HTML específico utilizando el atributo #[span.color-morado #[em style]]. Para ello, se coloca la propiedad, seguida de dos puntos y su valor correspondiente, todo ello entre comillas dentro del atributo style en la etiqueta HTML deseada. 
				.col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/28.svg', alt='')
			.row.justify-content-center.mb-5
				.col-lg-10
					.titulo-sexto.color-acento-contenido(data-aos='fade-right')
						h5 Figura 5.
						span Ejemplo de estructura CSS3
					img.d-none.d-lg-block(src='@/assets/curso/temas/29.svg', alt='Código que incluye dos reglas:SELECTOR { "PROPIEDAD : VALOR ; PROPIEDAD DOS : VALOR;"}')
					img.d-block.d-lg-none(src='@/assets/curso/temas/30.svg', alt='Código que incluye dos reglas:SELECTOR { "PROPIEDAD : VALOR ; PROPIEDAD DOS : VALOR;"}')
			.row.justify-content-center.mb-5
				.col-lg-6
					
					h4.mb-4 Un ejemplo con uso del atributo style 
					.tarjeta-codigo.p-5.mb-5
						pre.language-html(language="html").mt-5
							code
								|&lt;html&gt; 
								|&lt;head&gt; 
								|&lt;title&gt; 
								|&lt;/title&gt; 
								|&lt;/head&gt; 
								|&lt;body&gt;  
								|&lt;h1 style=”color:red; size:30 px”&gt;Texto1&lt;/h1&gt; 
								|&lt;h2 style=”color:blue; size:40 px”&gt;Texto2&lt;/h2&gt; 
								|&lt;h3 style=”color:green; size:50 px”&gt;Texto3&lt;/h3&gt; 
								|&lt;/body&gt; 
								|&lt;/html&gt; 
		Separador
		#t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
			h2 2.3 Formulario CSS3 
		.f-2-3.mn.p-5.mb-5.pt-0
			.row.justify-content-center.mb-5
				.col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
					.p-4(style="background-color: #EFE4F9 ")
						p.mb-0 Los formularios en HTML se construyen siguiendo los principios básicos discutidos anteriormente. Sin embargo, con la introducción de HTML5, se han agregado nuevas funcionalidades que enriquecen los formularios web, incluyendo nuevos tipos de datos #[span.color-morado (como color, tel, email, date, url, time, month, number, week, datetime-local, range, y search)], nuevos controles (output) y nuevos atributos (placeholder, autofocus, min, max, required, step, y pattern). Según la recomendación del W3C, es importante verificar la compatibilidad de estas nuevas características con diferentes navegadores. Aunque inicialmente algunas de estas innovaciones se soportaban principalmente en navegadores específicos como Opera, la compatibilidad ha mejorado significativamente con el tiempo, y actualmente, muchos navegadores modernos soportan estas características. 
				.col-lg-5.col-7(data-aos="fade-right"): img(src='@/assets/curso/temas/31.svg', alt='')
			.row.justify-content-center.mb-5
				.col-lg-10
					h4.mb-4 Un ejemplo de formulario CSS3 es: 
					.tarjeta-codigo.p-5.mb-5
						pre.language-html(language="html").mt-5
							code
								| &lt;html&gt; 
								br
								| &lt;head&gt; 
								br
								| &lt;meta charset=“utf-8” /&gt; &lt;title&gt;Nuevos componentes&lt;/title&gt; 
								br
								| &lt;/head&gt; 
								br
								| &lt;body&gt; 
								br
								| &lt;form action=“.” oninput=“range_control_value.value = range_control.valueAsNumber”&gt; 
								br
								| &lt;p&gt; 
								br
								| Nombre: &lt;input type=“text” name=“name_control” autofocus required /&gt; 
								br
								| &lt;br/&gt; 
								br
								| Email: &lt;input type=“email” name=“email_control” required /&gt; 
								br
								| &lt;br/&gt; 
								br
								| URL: &lt;input type=“url” name=“url_control” placeholder=“Escripe la URL de tu página web personal” /&gt; 
								br
								| &lt;br/&gt; 
								br
								| Fecha: &lt;input type=“date” name=“date_control” /&gt; 
								br
								| &lt;br/&gt; 
								br
								| Tiempo: &lt;input type=“time” name=“time_control” /&gt; 
								br
								| &lt;br/&gt; 
								br
								| Fecha y hora de nacimiento: &lt;input type=“datetime” name=“datetime_control” /&gt; 
								br
								| &lt;br/&gt; 
								br
								| Mes: &lt;input type=“month” name=“month_control” /&gt; 
								br
								| &lt;br/&gt; 
								br
								| Semana: &lt;input type=“week” name=“week_control” /&gt; 
								br
								| &lt;br/&gt; 
								br
								| Número (min -10, max 10): &lt;input type=“number” name=“number_control” min=“-10” max=“10” value=“0” /&gt; 
								br
								| &lt;br/&gt; 
								br
								| Intervalo (min 0, max 10): &lt;input type="range" name="range_control" min="0" max="10" value="0" /&gt;  
								br
								| &lt;output for="range_control" name="range_control_value" &gt;0&lt;/output&gt; 
								br
								| &lt;br /&gt; 
								br
								| Teléfono: &lt;input type="tel" name="tel_control" /&gt; 
								br
								| &lt;br/&gt; 
								br
								| Término de búsqueda: &lt;input type="search" name="search_control" /&gt; 
								br
								| &lt;br /&gt; 
								br
								| Color Favorito: &lt;input type="color" name="color_control" /&gt; 
								br
								| &lt;br/&gt; 
								br
								| &lt;input type="submit" value="Submit!" /&gt; 
								br
								| &lt;/p&gt; 
								br
								| &lt;/form&gt; 
								br
								| &lt;/body&gt; 
								br
								| &lt;/html&gt; 
					h4.mb-4 El resultado del código anterior de formulario CSS3 es: 
					.titulo-sexto.color-acento-contenido(data-aos='fade-right')
						h5 Figura 6. 
						span Resultado código del formulario. 
					img(src='@/assets/curso/temas/32.svg', alt='La imagen presenta el resultado del código del formulario.')


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
