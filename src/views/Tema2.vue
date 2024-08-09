<template lang="pug">
.curso-main-container.pb-3
	BannerInterno
	.container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
		.titulo-principal.color-acento-contenido
			.titulo-principal__numero
				span 2
			h1 Ejercicios de diseño e implementación
		.f-1-1.p-5.mn.pb-0
			.row.justify-content-center.align-items-center.mb-5
				.col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
					.p-4(style="background-color: #f2e5fd ")
						p.mb-0 El aprendizaje basado en problemas es una buena estrategia a seguir en este tipo de actividades, debido a que es el análisis de un problema el que da origen a un modelo de base de datos. Por lo tanto, se propondrán dos problemas a considerar, y en torno a ellos se van reforzando los conocimientos adquiridos a la vez que se va profundizando en algunos conceptos. Para lograrlo, se toma como problema los casos comunes como lo son el análisis y diseño de un sistema de facturación en inventarios y un sistema para gestionar las matrículas de estudiantes en un instituto de formación técnica. 
				.col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/10.png', alt='')
			Separador
			#t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
				h2 2.1 Análisis y diseño sistema de facturación 
			p.mb-5(data-aos='fade-right') #[b Analicemos el primer caso, llamado Sistema de facturación.  ]
			.row.justify-content-center.align-items-center.mb-5
				.col-lg-1.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/11.svg', alt='')
				.col-lg-11(data-aos="fade-left")
					p.mb-0 Suponga que lo contratan para diseñar una base de datos de una droguería, el objetivo principal es llevar las existencias de cada producto, a la vez que se va facturando lo que se vende, también interesa la información de los clientes, porque a futuro se quiere hacer campañas publicitarias de #[em email marketing], según los productos que cada cliente consume. 
			.row.justify-content-center.mb-5
				.col-lg-10
					div.px-3(style="background-color: #e3dfeb")
						.row.justify-content-center.mb-5
							.col-lg-7
								.p-3.py-5
									ol.lista-ol--cuadro
										li.d-flex
											.lista-ol--cuadro__vineta
												span 1
											p.mb-0  Artículo más vendido. 
										li.d-flex
											.lista-ol--cuadro__vineta
												span 2
											p.mb-0  Artículos que más utilidades dejan por unidad. 
										li.d-flex
											.lista-ol--cuadro__vineta
												span 3
											p.mb-0  Empresa o persona que más factura (cantidad de factura). 
										li.d-flex
											.lista-ol--cuadro__vineta
												span 4
											p.mb-0  Empresa o persona que más factura (volumen de ventas en pesos).
										li.d-flex
											.lista-ol--cuadro__vineta
												span 5
											p.mb-0 Productos sin existencia.
							.col-lg-5: img(src='@/assets/curso/temas/12.svg', alt='').pt-4
		p.mb-5(data-aos='fade-right') También fijó los productos que se organizan por categoría, porque le interesa saber el precio de compra y de venta, para conocer qué descuento hacer a una factura. 
			br
			|El cliente ofrece un modelo sobre cómo debe ser la factura, como se presenta en la siguiente figura. 
		.row.justify-content-center.mb-5
			.col-lg-8
				.titulo-sexto.color-acento-contenido(data-aos='fade-right')
					h5 Figura 1.
					span Modelo de factura 
				img(src='@/assets/curso/temas/13.png', alt='Factura con detalles del cliente, servicios prestados y costos. Incluye honorarios, mano de obra y descuento por cliente nuevo, con subtotal, IVA y total a pagar. ')
		.f-2-1.mn.p-5
			.titulo-tres.mb-4: h3.mb-0 Análisis y diseño 
			p.mb-5(data-aos='fade-right') #[b Una buena forma de empezar el análisis es con el formato de la factura; se inicia revisando la cabecera de la factura.] 
				br
				|Un primer impulso puede hacer pensar que se debe crear una entidad para la compañía o empresa y pensar en definir una entidad o empresa con atributos “nombre_compañia”, “dirección”, “ciudad”, etc.; sin embargo, considere lo siguiente:
			.row.justify-content-center.mb-5
				.col-lg-10
					.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
						.bloque-texto-g__img(
							:style="{'background-image':`url(${require('@/assets/curso/temas/14.png')})`}"
						)
						.bloque-texto-g__texto.p-4
							p.mb-0 El cliente le ha pedido que modele un sistema de facturación para su droguería, es decir, para una droguería, no para un conjunto de droguerías. Es diferente, si solicitaran “se necesita un sistema de facturación que administre el inventario y facturación de múltiples droguerías”, a estos problemas se les llama #[em multitenant] (multiinquilino), pero este no es el caso. Por lo tanto, no es la entidad droguería parte del modelo, porque no se está modelando la facturación de múltiples droguerías. 
			.titulo-sexto.color-acento-contenido(data-aos='fade-right')
				h5 Figura 2. 
				span Factura con información resaltada
			.row.justify-content-center.mb-5
				.col-lg-10
					img(src='@/assets/curso/temas/15.png', alt='Sección de una factura que presenta los datos de facturación del cliente, incluyendo nombre, compañía, dirección, ciudad, teléfono y correo electrónico, junto con el número de factura, fecha, identificación del cliente y términos de pago.') 
		.row.justify-content-center.mb-5
				.col-lg-1.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/15.svg', alt='')
				.col-lg-11(data-aos="fade-left")
					.p-4(style="background-color: #ecf2ff ")
						p.mb-0 Tal parece que los datos más relevantes de los clientes están presentados en la parte resaltada de la imagen, lo que hace pensar que se requiere una entidad, cliente, usuario o persona y, que la persona puede tener relacionada una empresa o tal vez una persona hace la compra para una empresa. Lo anterior se puede modelar con una entidad, la entidad persona que relaciona los datos (nombre, compañía, dirección, ciudad, teléfono, correo electrónico). 
		.row.justify-content-center.mb-5.g-0
			.col-lg-4.mb-lg-0.mb-3
				.p-4(style="background-color: #8722e2 ").h-100
					p.mb-0.text-white Una forma simplificada sería creando una entidad persona y para poder identificar cada fila usar una llave primaria (id_persona), pero también es importante usar un identificador único de persona como lo es el documento de identificación (porque las personas nunca tienen el mismo número), de igual forma, debe tener en cuenta que no puede existir una persona si al menos no se define el número de identificación y el nombre. 
			.col-lg-4.col-7: img(src='@/assets/curso/temas/16.png', alt='')
		p.mb-5(data-aos='fade-right') Lo anterior se puede identificar en la siguiente imagen (flecha roja para definir la llave primaria, morada para definir los datos que deben ser registrados obligatoriamente, y la verde una columna cuyo valor no puede repetirse en toda la tabla).
		.f-2-1.mn.p-5 
			.row.justify-content-center.mb-5
				.col-lg-6
					.titulo-sexto.color-acento-contenido(data-aos='fade-right')
						h5 Figura 3. 
						span Identificación 
					img(src='@/assets/curso/temas/17.png', alt='Diagrama entidad-relación en MySQL Workbench, presentando la tabla "persona" con sus columnas y tipos de datos. Las flechas indican las columnas configuradas como clave primaria (PK), no nula (NN) y única (UQ).')
			p.mb-5(data-aos='fade-right') Tal parece que los datos más relevantes de los clientes están presentados en la parte resaltada de la imagen, lo que hace pensar que se requiere una entidad, cliente, usuario o persona y, que la persona puede tener relacionada una empresa o tal vez una persona hace la compra para una empresa. 
		.f-2-3.mn.p-5
			.row.justify-content-center.mb-5
				.col-lg-6
					.titulo-sexto.color-acento-contenido(data-aos='fade-right')
						h5 Figura 4.
						span Creación de tabla con las compañías 
					img(src='@/assets/curso/temas/18.png', alt='Diagrama entidad-relación en MySQL Workbench, mostrando las tablas "persona" y "compania" con sus respectivas columnas y tipos de datos. Las flechas indican las columnas configuradas como clave primaria (PK), no nula (NN) y única (UQ) en la tabla "compania".')
			p.mb-5(data-aos='fade-right') Como hay menos compañías que personas, se ha tomado id_compania como SMALLINT. Esta decisión permite cumplir con dos requerimientos no funcionales: 
			.row.justify-content-center.mb-5
				.col-lg-4.mb-lg-0.mb-3(data-aos="fade-right")
					.tarjeta.p-4(style="background-color: #3a1d71")
						.row.justify-content-center.align-items-center
							.col-lg-3.col-7: img(src='@/assets/curso/temas/19.svg', alt='')
							.col-lg-9
								p.mb-0.text-white Ahorro de espacio de almacenamiento.
				.col-lg-4.mb-lg-0.mb-3(data-aos="fade-right")
					.tarjeta.p-4(style="background-color: #3a1d71")
						.row.justify-content-center.align-items-center
							.col-lg-3.col-7: img(src='@/assets/curso/temas/20.svg', alt='')
							.col-lg-9
								p.mb-0.text-white Ahorro en el tiempo  computacional de las consultas.
			.row.justify-content-center.mb-5
				.col-lg-8
					.p-4(style="background-color: #e3dfeb")
						p.mb-0 #[b Nota:] es importante comprender cómo la decisión de tipo de dato apunta a cumplir con los requerimientos no funcionales.
			p.mb-5(data-aos='fade-right') Es posible que piense que debe haber una relación entre la persona y la compañía de la siguiente forma: 
		.f-2-4.mn.p-5
			.row.justify-content-center.mb-5
				.col-lg-6
					.titulo-sexto.color-acento-contenido(data-aos='fade-right')
						h5 Figura 5.
						span Relación entre la persona y la compañía 
					img(src='@/assets/curso/temas/21.png', alt='Diagrama entidad-relación en MySQL Workbench mostrando las tablas "persona" y "compania" con sus respectivas columnas y tipos de datos. La flecha indica la relación entre la columna "id_compania" de la tabla "persona" y la clave primaria de la tabla "compania".')
			p.mb-5(data-aos='fade-right') Al hacerlo de esta forma, una persona puede pertenecer a una empresa (solo a una), pero esa misma persona podría comprar en la farmacia unas veces a nombre propio y otras a nombre de la empresa, y este modelo no permitiría saber cada caso. Otro problema es que esa persona un día compra a nombre de una empresa y otro día puede comprar a nombre de otra empresa (si cambia de empresa) y al actualizar la empresa de la persona, se estarían actualizando las facturas pasadas, lo cual sería un error. 
				br
				br
				|#[b De esta forma, la manera correcta sería relacionar la persona y la empresa con la factura.] 
			.row.justify-content-center.mb-5
				.col-lg-6
					.titulo-sexto.color-acento-contenido(data-aos='fade-right')
						h5 Figura 6.
						span Información de la factura 
					img(src='@/assets/curso/temas/22.png', alt='Detalle de una factura que presenta los datos de la compañía, incluyendo nombre, dirección, ciudad y teléfono, así como la información de facturación del cliente, con el número de factura, la fecha y los términos de pago resaltados en un recuadro.')
		.f-2-5.mn.p-5
			p.mb-5(data-aos='fade-right') Ahora, se presentan los datos de la factura y sus datos, como número de factura (que debe ser único y secuencial), fecha, la identificación del cliente (código interno id_persona), y términos de pago. 
			.row.justify-content-center.mb-5
				.col-lg-10
					.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
						.bloque-texto-g__img(
							:style="{'background-image':`url(${require('@/assets/curso/temas/23.png')})`}"
						)
						.bloque-texto-g__texto.p-4
							p.mb-0 Como se puede identificar  en la siguiente imagen, se creó la tabla término de pago, que almacenará los medios de pago (crédito, contado, contra entrega, etc.), note también que se usó el tipo de datos TINYTINT que solo almacena números de 0-126 y se hace una relación de 1 a muchos (un término puede tener relacionadas muchas facturas, o lo que es igual muchas facturas tienen un mismo término de pago). 
			.row.justify-content-center.mb-5
				.col-lg-10
					.titulo-sexto.color-acento-contenido(data-aos='fade-right')
						h5 Figura 7.
						span Creación de la tabla término de pagos 
					img(src='@/assets/curso/temas/24.png', alt='Diagrama entidad-relación que presenta las tablas y sus relaciones en una base de datos. La tabla "factura" se vincula con las tablas "persona," "compania" y "termino" mediante claves foráneas. Se destacan las propiedades de los campos en la tabla "factura," incluyendo el tipo de dato y las restricciones como la clave primaria (PK), no nulo (NN) y único (UQ).')
			p.mb-5(data-aos='fade-right') Note que una factura necesariamente debe tener relacionada la referencia de una persona, el término, la fecha y la hora, pero la compañía (id_compania) no es obligatoria. Esto es porque hay facturas que las compran las personas naturales y otras que las compran las empresas o compañías, pero en un caso o en el otro, siempre habrá una persona que hace la compra, es por esto que el id_persona es obligatoria. 
			.row.justify-content-center.mb-5.g-0
				.col-lg-4.mb-lg-0.mb-3
					.p-4(style="background-color: #8722e2 ").h-100
						p.mb-0.text-white La factura tiene un tipo de dato BIGINT, porque se espera que pueda facturar muchos al ser minorista, note también la columna AI (Auto Incrementable), esto hace que el gestor de base datos le asigne automáticamente y secuencialmente un número a cada fila para la columna id_factura. 
				.col-lg-4.col-7: img(src='@/assets/curso/temas/25.png', alt='')
			p.mb-5(data-aos='fade-right') #[b Otro segmento de la factura son los ítems o productos que la componen: ]
		.row.justify-content-center.mb-5
			.col-lg-8
				.titulo-sexto.color-acento-contenido(data-aos='fade-right')
					h5 Tabla 1. 
					span Ítems que componen la factura 
				.tabla-a.color-acento-botones.mb-5
					table
						thead(style="background-color: #00ffdf ").border-0
							tr
								th Descripción 
								th Cantidad 
								th Precio Unitario 
								th Monto 
						tbody(style="background-color: #ecf2ff")
							tr
								td Horarios por servicios 
								td 1
								td 200,00
								td 200,00
							tr
								td Mano de obra: 5 horas a 75€/hr 
								td 5
								td 75,00
								td 375,00 
							tr
								td Descuento por nuevo cliente 
								td -
								td (50,00) 
								td (50,00) 
		p.mb-5(data-aos='fade-right') La tabla sugiere que los productos tienen una descripción, un precio unitario y como mencionó el cliente, un precio de compra: 
		.f-2-6.mn.p-5
			.row.justify-content-center.mb-5
				.col-lg-8
					.titulo-sexto.color-acento-contenido(data-aos='fade-right')
						h5 Figura 8.
						span Apartados que tienen los productos
					img(src='@/assets/curso/temas/26.png', alt='Diagrama entidad-relación que presenta la estructura de las tablas "producto" y "categoria" en una base de datos. Se detalla la relación entre estas tablas, así como los campos de la tabla "producto," con sus propiedades y restricciones, incluyendo clave primaria (PK), no nulo (NN), único (UQ), y el valor por defecto (Default Expression) para el campo "existencia."')
			p.mb-5(data-aos='fade-right') Una categoría puede tener varios productos o varios productos pertenecen a una categoría, esto es una relación de 1 a muchos, que queda definida en la imagen anterior. Note los tipos de datos definidos y también que la columna existencia no puede ser #[em null], además de eso, si el usuario no pone un dato o trata de poner dato #[em null] en la existencia, entonces el sistema gestor de base de datos le pondrá “0” a esa fila en esa columna. La imagen sugiere que los productos tienen una descripción, un precio unitario y como mencionó el cliente, un precio de compra:
			.row.justify-content-center.align-items-center.mb-5
				.col-lg-4.mb-lg-0.mb-3.col-7: img(src='@/assets/curso/temas/27.png', alt='') 
				.col-lg-7
					.tarjeta.p-4(style="background-color: #f2e5fd ")
						p.mb-0 Ahora, resta relacionar los productos con la factura, y una factura puede relacionar varios productos, y un mismo producto puede estar en muchas facturas, por lo tanto, es una relación de muchos a muchos (n:m), esto hace que se genere una entidad intermedia que se llama producto_factura.
			p.mb-5(data-aos='fade-right') La usabilidad es una medida de calidad que busca medir la eficacia, eficiencia y satisfacción en la experiencia del usuario con respecto a un producto, lo ideal es que este tipo de interacción entre usuario/producto sea lo más fácil y simple posible.  
		.row.justify-content-center.align-items-center.mb-5
			.col-lg-8.mb-lg-0.mb-3
				.tarjeta.p-4(style="background-color: #ecf2ff ")
					p.mb-0 La entidad factura_producto es una relación de muchos a muchos y agrega los datos necesarios para saber en cuánto y cuántos productos se venden por factura. También en la siguiente imagen se presenta cómo son obligatorias todas las columnas de este modelo y que la cantidad por defecto tiene valor de 1, debido a que si se intenta guardar un valor nulo, no debe ser posible y en lugar de insertar nulo insertará 1, porque no tiene sentido agregar un producto a una factura y no vender al menos un producto. 
			.col-lg-4.col-7: img(src='@/assets/curso/temas/28.png', alt='') 
		.row.justify-content-center.mb-5
			.col-lg-8
				.titulo-sexto.color-acento-contenido(data-aos='fade-right')
					h5 Figura 9.
					span Columnas del modelo 
				img(src='@/assets/curso/temas/29.png', alt='Diagrama entidad-relación que presenta la estructura de la tabla "factura_producto" en una base de datos. Se muestran los campos de la tabla, tales como id_factura, id_producto, valor_unitario y cantidad, junto con sus propiedades y restricciones, incluyendo clave primaria (PK), no nulo (NN), único (UQ), y el valor por defecto (Default Expression) para el campo "cantidad."')
		Separador
		#t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
			h2 2.2 Identificación de sentencias DDL
		.row.justify-content-center.mb-5
			.col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
				p.mb-5(data-aos='fade-right') Suponga que lo contratan para diseñar una base de datos de una droguería, el objetivo principal es llevar las existencias de cada producto, a la vez que se va facturando lo que se vende, también interesa la información de los clientes, porque a futuro se quiere hacer campañas publicitarias de #[em email marketing], según los productos que cada cliente consume.
				.p-4(style="background-color: #d6e1fd ")
					p.mb-0 MySQL Workbench ofrece la interfaz gráfica con la que se pueden generar estos códigos. Se mostrará cómo se hace con algunos ejemplos, siga estos pasos: 
			.col-lg-5.col-7: img(src='@/assets/curso/temas/30.png', alt='')
		.f-2-7.mn.p-5.mb-4
			.row.justify-content-center.align-items-center.mb-5
				.col-md-1.col-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/a.svg', alt='')
				.col-md-11
					p.mb-0 Haga clic derecho a la entidad persona y luego a “Copy SQL to Clipboard” (copiar SQL en portapapeles). 
			.row.justify-content-center.mb-5
				.col-lg-6
					.titulo-sexto.color-acento-contenido(data-aos='fade-right')
						h5 Figura 10. 
						span #[em Copy to Clipboard]
					img(src='@/assets/curso/temas/31.png', alt='La imagen presenta un diagrama en MySQL Workbench, destacando con una flecha roja la opción "Copy SQL to Clipboard" en el menú contextual del botón derecho sobre la tabla "persona". Esta opción permite copiar el SQL de la tabla al portapapeles.')
			.row.justify-content-center.align-items-center.mb-5
				.col-md-1.col-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/b.svg', alt='')
				.col-md-11
					p.mb-0 Después se debe pegar (Ctrl+V) el contenido en un editor de texto y el resultado será: 
			.row.justify-content-center.align-items-center.mb-5
				.col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
					.tarjeta-codigo.p-5.mb-5
						pre.language-html(language="html").mt-5
							code REATE TABLE IF NOT EXISTS `mydb`.`persona` ( 
								br
								|`id_persona` INT NOT NULL, 
								br
								|`identificacion` VARCHAR(45) NOT NULL, 
								br
								|`nombres` VARCHAR(450) NOT NULL, 
								br
								|`direccion` VARCHAR(250) NULL, 
								br
								|`ciudad` VARCHAR(80) NULL, 
								br
								|`codigo_postal` VARCHAR(15) NULL, 
								br
								|`telefono` VARCHAR(15) NULL, 
								br
								|`correo` VARCHAR(250) NULL, 
								br
								|PRIMARY KEY (`id_persona`), 
								br
								|UNIQUE INDEX `identificacion_UNIQUE` (`identificacion` ASC) VISIBLE) 
								br
								|ENGINE = InnoDB; 
				.col-lg-4(data-aos="fade-left")
					.p-4(style="background-color:#e3dfeb ")
						p.mb-0 Como puede apreciar, es posible obtener la definición de la #[b base de datos en lenguaje SQL (DDL)], si no se tuviera MySQL Workbench, se tendría que elaborar cada una de las sentencias. 
		h5.mb-5 Pruebe sus conocimientos a través del siguiente ejercicio, en el que identifique en la sintaxis: 
		.row.justify-content-center.mb-5
			.col-lg-3.mb-lg-0.mb-3(data-aos="fade-right")
				.tarjeta.p-4(style="background-color: #debefb")
					.row.justify-content-center.align-items-center
						.col-lg-4.col-7: img(src='@/assets/curso/temas/32.svg', alt='')
						.col-lg-8
							p.mb-0 Cómo en SQL se define una llave primaria.
			.col-lg-3.mb-lg-0.mb-3(data-aos="fade-right")
				.tarjeta.p-4(style="background-color: #debefb")
					.row.justify-content-center.align-items-center
						.col-lg-4.col-7: img(src='@/assets/curso/temas/33.svg', alt='')
						.col-lg-8
							p.mb-0 Cómo en SQL se define un índice único.
			.col-lg-6
				.tarjeta.p-4(style="background-color: #e8eefe")
					p.mb-0 Es importante que se familiarice con estas sentencias, porque las operaciones de mantenimiento de bases de datos como adición o sustracción de columnas o tablas, son más fáciles cuando se hacen a través de la ejecución de #[em scripts] en lenguaje SQL. 
		.row.justify-content-center.mb-5
			.col-lg-10
				.tarjeta.color-primario.p-4.mb-3
					.row.justify-content-center.align-items-center
						.col-lg-2.col-6: img(src='@/assets/curso/temas/megafono.svg', alt='')
						.col-lg-8
							h5.mb-3: span.color-azul.p-2 Nota  
							p(data-aos='fade-right') Nota: como no se ha especificado el nombre de la base de datos MySQL Workbench pone por defecto `mydb` a la base de datos.
		p.mb-5(data-aos='fade-right') A continuación, se presenta una entidad más compleja, como lo es la entidad factura:
		.f-2-8.mn.p-5 
			.row.justify-content-center.mb-5
				.col-lg-7
					.tarjeta-codigo.p-5.mb-5
						pre.language-html(language="html").mt-5
							code CREATE TABLE IF NOT EXISTS `mydb`.`factura` ( 
								br
								|`id_factura`BIGINT NOT NULL AUTO_INCREMENT, 
								br
								|`id_persona` INT NOT NULL, 
								br
								|`id_compania`SMALLINT NULL, 
								br
								|`id_termino`TINYINT NOT NULL, 
								br
								|`fecha`DATE NOT NULL, 
								br
								|`hora`TIME NOT NULL, 
								br
								|PRIMARY KEY(`id_factura`), 
								br
								|INDEX`fk_factura_persona_idx` (`id_persona`ASC)VISIBLE, 
								br
								|INDEX`fk_factura_compania1_idx` (`id_compania`ASC)VISIBLE, 
								br
								|INDEX`fk_factura_termino1_idx` (`id_termino`ASC)VISIBLE, 
								br
								|CONSTRAINT`fk_factura_persona` 
								br
								|FOREIGN KEY(`id_persona`) 
								br
								|REFERENCES`mydb`.`persona` (`id_persona`) 
								br
								|ON DELETE NO ACTION 
								br
								|ON UPDATE NO ACTION, 
								br
								|CONSTRAINT`fk_factura_compania1` 
								br
								|FOREIGN KEY(`id_compania`) 
								br
								|REFERENCES`mydb`.`compania` (`id_compania`) 
								br
								|ON DELETE NO ACTION 
								br
								|ON UPDATE NO ACTION, 
								br
								|CONSTRAINT`fk_factura_termino1` 
								br
								|FOREIGN KEY(`id_termino`) 
								br
								|REFERENCES`mydb`.`termino` (`id_termino`) 
								br
								|ON DELETE NO ACTION 
								br
								|ON UPDATE NO ACTION) 
								br
								|ENGINE = InnoDB 
			p.mb-5(data-aos='fade-right') Observe cómo las llaves foráneas les define un índice: 
			.row.justify-content-center.mb-5
				.col-lg-7
					.tarjeta-codigo.p-5.mb-5
						pre.language-html(language="html").mt-5
							code INDEX `fk_factura_persona_idx` (`id_persona`ASC)VISIBLE,
			p.mb-5(data-aos='fade-right') Con esta sintaxis, lo que hace #[b #[em MySQL Workbench]] es decirle al gestor de base de datos MySQL que esta columna id_persona debe guardarse en estructura de árbol binario (que se llame fk_factura_persona_idx) y no de manera secuencial. Este tipo de estructura de datos en árbol mejora la velocidad de las operaciones de consulta y búsqueda. 
			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta.color-primario.p-4.mb-3
						.row.justify-content-center.align-items-center
							.col-lg-2.col-6: img(src='@/assets/curso/temas/megafono.svg', alt='')
							.col-lg-8
								h5.mb-3: span.color-azul.p-2 Nota  
								p(data-aos='fade-right') Nota: usar MySQL Workbench ayuda a definir la estructura de almacenamiento de los datos para que cumpla con el requerimiento no funcional de rendimiento en las consultas.
			p.mb-5(data-aos='fade-right') #[b También se crean índices para las columnas id_compania e id_termino. ]
			.row.justify-content-center.mb-5
				.col-lg-6
					.tarjeta-codigo.p-5.mb-5
						pre.language-html(language="html").mt-5
							code CONSTRAINT`fk_factura_persona` 
								br
								|FOREIGN KEY(`id_persona`) 
								br
								|REFERENCES`mydb`.`persona` (`id_persona`) 
								br
								|ON DELETE NO ACTION ACTION,] 
			p.mb-5(data-aos='fade-right') A continuación, se presenta línea a línea, recordando que la columna id_persona es una llave foránea de la tabla persona:
		.row.justify-content-center.mb-5
			.col-lg-8
				.titulo-sexto.color-acento-contenido(data-aos='fade-right')
					h5 Tabla 2. 
					span Restricciones
				.tabla-a.color-acento-botones.mb-5
					table
						thead(style="background-color: #00ffdf ").border-0
							tr.text-start
								th Nombre restricción
								th Descripción 
						tbody(style="background-color: #ecf2ff")
							tr
								td CONSTRAINT `fk_factura_persona` 
								td Indica al SGDB que debe crear una restricción (CONSTRAINT) que se llama fk_factura_persona 
							tr
								td FOREIGN KEY`(`id_persona`)
								td Indica la columna que es llave foránea, es decir, que id_persona es una referencia de una fila de otra tabla. 
							tr
								td REFERENCES `mydb`.`persona` (`id_persona`) 
								td La fila de la otra tabla de la que es referencia de la base de datos mydb, tabla persona columna id_persona 
							tr
								td ON DELETE NO ACTION 
								td Qué acción debe hacer el SGDB si borran la fila de la tabla persona con los datos de la tabla factura que estén relacionados, acá dice que no le permite borrar personas que ya tienen facturas. 
							tr
								td ON UPDATE NO ACTION, 
								td Qué acción debe hacer el SGDB si actualiza la columna id_persona una fila de la tabla persona con los datos de la tabla factura que estén relacionados, acá dice que no le permita actualizar la columna id_persona de la tabla persona que ya tiene facturas. 
		p.mb-5(data-aos='fade-right') No es de preocuparse si no es muy claro hasta la decisión del SQL de llaves foráneas, dado que a lo largo de la práctica y la revisión del material complementario, podría complementar los diferentes elementos y conceptos. 
		Separador 
		#t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
			h2 2.3 Generar la base de datos
		.row.justify-content-center.mb-5
			.col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
				p.mb-0 A continuación, se presentará cómo obtener el modelo físico de una base de datos en formato natural de las bases de datos (esto es SQL). Con el siguiente procedimiento se obtendrá un modelo de datos en sentencias DDL, en un archivo con extensión .sql, estos documentos son los códigos fuente de las bases de datos, generalmente en el proceso de desarrollo de #[em software] son versionados como cualquier archivo de código fuente. 
					br
					br
					|De acuerdo con lo anterior, una forma de generar la base de datos es la siguiente: 
			.col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/temas/34.svg', alt='')
		.row.justify-content-center.mb-5
			.col-lg-3.mb-lg-0.mb-3
				.tarjeta-numero.p-4.h-100
					.numero: h4.text-white 1
					p.mt-3 Ponga un nombre a la base de datos dando clic derecho en editar Schema. 
			.col-lg-3.mb-lg-0.mb-3
				.tarjeta-numero.p-4.h-100
					.numero: h4.text-white 2
					p.mt-3 Seleccione Ingeniería hacia adelante (#[em Forward Engineering]). 
			.col-lg-3.mb-lg-0.mb-3
				.tarjeta-numero.p-4.h-100
					.numero: h4.text-white 3
					p.mt-3 Entre los datos de #[em root] base de datos. 
			.col-lg-3.mb-lg-0.mb-3
				.tarjeta-numero.p-4.h-100
					.numero: h4.text-white 4
					p.mt-3 Seleccione las opciones de la base de datos y se deja por defecto. 
		.row.justify-content-center.mb-5
			.col-lg-3.mb-lg-0.mb-3
				.tarjeta-numero.p-4.h-100
					.numero: h4.text-white 5
					p.mt-3 Luego, pide la contraseña de usuario #[em root] que se puso en el proceso de instalación de MySQL. 
			.col-lg-3.mb-lg-0.mb-3
				.tarjeta-numero.p-4.h-100
					.numero: h4.text-white 6
					p.mt-3 Después muestra un resumen de lo que creará. 
			.col-lg-3.mb-lg-0.mb-3
				.tarjeta-numero.p-4.h-100
					.numero: h4.text-white 7
					p.mt-3 Finalmente, le da en Next y el sistema generará el DDL de la base datos.  
		p.mb-5(data-aos='fade-right') Se guarda un archivo #[b #[em “Save to file”]] y se copia al portapapeles #[em “Copy to clipboard”]. Se sugiere antes de dar #[em Next] y continuar el proceso, primero guardar como un archivo y ponerle este nombre, luego de ponerlo le da #[em Next] para que ejecute ese #[em script] en el SGDB instalado. 
		.row.justify-content-center.mb-5
			.col-lg-10
				.tarjeta.color-primario.p-4.mb-3
					.row.justify-content-center.align-items-center
						.col-lg-2.col-6: img(src='@/assets/curso/temas/35.svg', alt='')
						.col-lg-8
							p(data-aos='fade-right') El archivo generado guardado en formato de texto con extensión .sql es lo que se llama el #[em script] DDL de la base de datos, es el principal producto de un modelo de datos, es el entregable de un proyecto y por lo que materialmente se puede pasar una factura al cliente.
		Separador
		#t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
			h2 2.4 Operaciones de mantenimiento y actualización 
		p.mb-5(data-aos='fade-right') Por lo general, la base datos se diseña y se despliega en servidores en la nube, #[em hosting] o en instancias de almacenamiento, sistemas operativos o de plataforma que no tienen interfaz gráfica, es por eso que es importante el archivo de texto DDL con extensión .sql, la base de datos hasta ahora generada presenta una inexactitud que se ha puesto para ejemplificar una operación de actualización o mantenimiento. 
		.row.justify-content-center.mb-5
			.col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
				.tarjeta.p-4(style="background-color: #e3dfeb ")
					p.mb-0 Suponga que el cliente ha contratado un servidor en la nube para la base de datos y al darle subir el archivo de extensión .sql ha generado la base de datos, pero, se ha dado cuenta de que su modelo está mal o incompleto y lleva varios meses trabajando la base de datos, hay muchos datos, por lo que no se puede volver a empezar con una base de datos vacía, sino que se debe ajustar la base de datos actual (base en producción) sin borrar o alterar los datos que la base ya tiene.
						br
						br
						|#[b Además, junto a su equipo de trabajo ha detectado que no modelaron el pie de la factura:] 
			.col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/temas/36.png', alt='')
		.row.justify-content-center.mb-5
			.col-lg-7
				.titulo-sexto.color-acento-contenido(data-aos='fade-right')
					h5 Figura 11.
					span Pie de la factura
				.tabla-a.color-acento-botones.mb-5.tabla-edit
					table 
						tbody
							tr
								td(style="background-color: #a854f3 ").text-white.fw-bold Subtotal 
								td(style="background-color: #8722e2 ").text-white 525,00
							tr
								td(style="background-color: #a854f3 ").text-white.fw-bold Tasa de impuesto
								td(style="background-color: #8722e2 ").text-white 4,250%
							tr
								td(style="background-color: #a854f3 ").text-white.fw-bold Impuesto
								td(style="background-color: #8722e2 ").text-white 22,31
							tr
								td(style="background-color: #a854f3 ").text-white.fw-bold TOTAL
								td(style="background-color: #8722e2 ").text-white 547,31 €
		p.mb-5(data-aos='fade-right') Este ajuste consiste en agregar en la tabla factura, el valor del subtotal y la tasa de impuesto a aplicar; con estos datos se puede calcular el total: 
		.f-2-9.mn.px-5
			.row.justify-content-center.mb-5
				.col-lg-6
					.titulo-sexto.color-acento-contenido(data-aos='fade-right')
						h5 Figura 12. 
						span Información a agregar en la tabla factura 
					img(src='@/assets/curso/temas/37.png', alt='Esta imagen presenta un diagrama entidad-relación que ilustra las tablas "persona" y "factura" en una base de datos. La tabla "factura" incluye columnas como id_factura, id_persona, id_compania, id_termino, fecha, hora, sub_total y tasa_impuesto. La flecha roja señala la columna "tasa_impuesto".')
			p.mb-5(data-aos='fade-right') #[b Ahora, se necesitan sincronizar estos cambios (los del diagrama) con la base de datos generada. De acuerdo con lo anterior, puede revisar los siguientes pasos:  ]
			.row.justify-content-center.mb-5
				.col-lg-3.mb-lg-0.mb-3
					.tarjeta-numero.p-4.h-100
						.numero: h4.text-white 1
						p.mt-3 Hacer clic en #[em Database] > #[em Synchronize Model].
				.col-lg-3.mb-lg-0.mb-3
					.tarjeta-numero.p-4.h-100
						.numero: h4.text-white 2
						p.mt-3 Seleccionar la conexión local.
				.col-lg-3.mb-lg-0.mb-3
					.tarjeta-numero.p-4.h-100
						.numero: h4.text-white 3
						p.mt-3 Seleccionar los datos en la parte de generación de #[em script] adicionales. 
				.col-lg-3.mb-lg-0.mb-3
					.tarjeta-numero.p-4.h-100
						.numero: h4.text-white 4
						p.mt-3 Ingresar la contraseña para conectarse. 
			.row.justify-content-center.mb-5
				.col-lg-3.mb-lg-0.mb-3
					.tarjeta-numero.p-4.h-100
						.numero: h4.text-white 5
						p.mt-3 Analizar las bases de datos presentes y las características del servidor. 
				.col-lg-3.mb-lg-0.mb-3
					.tarjeta-numero.p-4.h-100
						.numero: h4.text-white 6
						p.mt-3 Seleccionar la base de datos con la que se va a sincronizar. 
				.col-lg-3.mb-lg-0.mb-3
					.tarjeta-numero.p-4.h-100
						.numero: h4.text-white 7
						p.mt-3 Analizar las diferencias. 
				.col-lg-3.mb-lg-0.mb-3
					.tarjeta-numero.p-4.h-100
						.numero: h4.text-white 8
						p.mt-3 Al ubicarse en cada una de las entidades o tablas, ignorar la actualización si es necesario. 
			.row.justify-content-center.mb-5
				.col-lg-3.mb-lg-0.mb-3
					.tarjeta-numero.p-4.h-100
						.numero: h4.text-white 9
						p.mt-3 Si se desea actualizar el modelo (diagrama) para que quede conforme a la base de datos, hacer clic en el botón “#[em Update Model]”. 
				.col-lg-3.mb-lg-0.mb-3
					.tarjeta-numero.p-4.h-100
						.numero: h4.text-white 10
						p.mt-3 Para actualizar la base de datos, hacer clic en #[em Next]. 
			p(data-aos='fade-right') #[b Al final del proceso se debe tener el DDL donde se genera la base datos y el DDL donde se actualiza la tabla factura.  ]
		Separador
		#t_2_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
			h2 2.5 Actualización por interfaz de línea de comandos
		.row.justify-content-center.mb-5
			.col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
				p Muchas veces no es el computador local el que interesa actualizar, sino más bien, un servidor en la nube. Algunas plataformas tienen un entorno gráfico que permite aplicar el #[em script] con unos cuantos clics desde una interfaz web, pero la mayoría ofrece una interfaz de consola o terminal, de manera que los recursos computacionales no se desperdician en interfaces gráficas. 
					br
					br
					|#[b Verifique los siguientes archivos:]
				.row.mb-5
					.col-lg-6 
						a.anexo.mb-4(:href="obtenerLink('downloads/DDL_drogueria.sql')" target="_blank")
							.row.justify-content-around.align-items-center
								.col-3
									.anexo__icono
										img(src="@/assets/curso/temas/link.svg")
								.anexo__texto
									p Anexo. DDL_drogueria.sql 
					.col-lg-6 
						a.anexo.mb-4(:href="obtenerLink('downloads/DDL_update.sql')" target="_blank")
							.row.justify-content-around.align-items-center
								.col-3
									.anexo__icono
										img(src="@/assets/curso/temas/link.svg")
								.anexo__texto
									p Anexo. DDL_update.sql 
					.col-lg-8 
						a.anexo.mb-4(:href="obtenerLink('downloads/ModeloFacturacionDrogueria.mwb')" target="_blank")
							.row.justify-content-around.align-items-center
								.col-3
									.anexo__icono
										img(src="@/assets/curso/temas/link.svg")
								.anexo__texto
									p Anexo. ModeloFacturacionDrogueria.mwb 
			.col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/temas/38.png', alt='')
		p.mb-5(data-aos='fade-right') A continuación, se presenta cómo aplicar el #[em script] desde una terminal. Esta base de datos se encuentra diseñada para cumplir el requerimiento funcional de administración de facturas de una droguería: 
		.fondo-slyder.mn.p-5.mb-5
			.tarjeta.bg-white.p-5
				SlyderA(tipo='b')
					.row.justify-content-center.mb-5
						.col-lg-4.mb-lg-0.mb-3
							h5.color-morado Paso 1
							p.mb-0 Dar clic en el menú inicio, buscar MySQL, una terminal o #[em interface] de línea de comandados (#[em Command Line Interface], CLI). 
						.col-lg-6: img(src='@/assets/curso/temas/39.png', style="width: 450px", alt='').m-auto
					.row.justify-content-center.mb-5
						.col-lg-4.mb-lg-0.mb-3
							h5.color-morado Paso 2
							p.mb-0 A continuación, pedirá la contraseña de #[em root]. 
						.col-lg-6: img(src='@/assets/curso/temas/41.png', alt='')
					.row.justify-content-center.mb-5
						.col-lg-4.mb-lg-0.mb-3
							h5.color-morado Paso 3
							p.mb-0 Luego, se debe seleccionar la base de datos con la sentencia SQL: use farmacia. 
						.col-lg-6: img(src='@/assets/curso/temas/40.png', alt='')
		p.mb-5(data-aos='fade-right') A continuación, se describe un problema del cual se pretende obtener un modelo de datos que permita gestionar la información, a través de un sistema gestor de base de datos, como se realizó en el caso anterior, donde se fue empleando una estrategia empírica, luego de conocer los conceptos de bases de datos.
			br
			br
			|#[b Se presentará un problema más sencillo con el ánimo de concentrar esfuerzos en el análisis desde un enfoque metodológico, que se puede basar en tres fases:]
		.fondo-slyder.mn.p-5.mb-5
			.tarjeta.bg-white.p-5
				SlyderA(tipo='b')
					.row.justify-content-center.mb-5
						.col-lg-4.mb-lg-0.mb-3
							h5.color-morado Diseño conceptual
							p.mb-0 Encargado de entender el problema y la naturaleza de los datos (qué son y qué representan en el mundo real). Las actividades a desarrollar son: 
							ul.lista-ul--color
								li.d-flex
									i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
									p.mb-0 Identificar entidades. 
								li.d-flex
									i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
									p.mb-0 Identificar atributos. 
								li.d-flex
									i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
									p.mb-0 Identificar las relaciones.
								li.d-flex
									i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
									p.mb-0 Identificar las cardinalidades de las relaciones. 
								li.d-flex
									i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
									p.mb-0 Diagrama entidad relación.
						.col-lg-6: img(src='@/assets/curso/temas/42.png', alt='')
					.row.justify-content-center.mb-5
						.col-lg-4.mb-lg-0.mb-3
							h5.color-morado Diseño lógico
							p.mb-0 Se encarga de analizar la estructura de los datos y que se cumpla con los requisitos del negocio, modelo de negocio o problema. Las actividades a desarrollar son:
							ul.lista-ul--color
								li.d-flex
									i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
									p.mb-0 Mapear diagrama entidad relación a un modelo relacional.
								li.d-flex
									i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
									p.mb-0 Análisis de restricciones de integridad.
								li.d-flex
									i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
									p.mb-0 Validación de requisitos funcionales.
						.col-lg-6: img(src='@/assets/curso/temas/43.png', alt='')
					.row.justify-content-center.mb-5
						.col-lg-4.mb-lg-0.mb-3
							h5.color-morado Diseño físico
							p.mb-0 Se preocupa por cómo se almacenarán los datos. Las actividades a desarrollar son:
							ul.lista-ul--color
								li.d-flex
									i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
									p.mb-0 Definición de tipos de datos. 
								li.d-flex
									i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
									p.mb-0 Analizar las restricciones de llaves foráneas. 
								li.d-flex
									i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
									p.mb-0 Definición de índices.
						.col-lg-6: img(src='@/assets/curso/temas/44.png', alt='')
		p.mb-5(data-aos='fade-right') #[b Estudiemos ahora el caso 2, gestión de matrículas. ]
		.row.justify-content-center.align-items-center.mb-5
			.col-lg-5.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/45.png', alt='')
			.col-lg-7(data-aos="fade-left")
				.tarjeta.p-4(style="background-color: #e3dfeb")
					p.mb-0 Se necesita un sistema que permita controlar las matrículas de un instituto de formación técnica profesional; donde interesa la información pertinente de los estudiantes como son los datos personales y la edad; y de los profesores parte de los datos personales como la titulación profesional o técnica y el año de graduación. 
						br
						br
						|Cada programa técnico se desarrolla por semestres y un semestre tiene varias materias, cada semestre un estudiante puede matricular máximo 7 materias, un profesor puede orientar varias materias y la misma materia puede ser dictada por varios profesores. 
		p.mb-5(data-aos='fade-right') Un estudiante puede estudiar varios programas, aunque no a la vez, y el estudiante se inscribe a un programa y cada año puede cursar 2 semestres (de enero a junio período 1, y de julio a diciembre período 2), si registra por semestre una matrícula con las materias a cursar. Algunos programas duran 5, 6 o 7 semestres.
		.f-2-10.mn.p-5.pb-0.mb-5
			.titulo-tres.mb-4: h3.mb-0 Diseño conceptual 
			p.mb-5(data-aos='fade-right') Para la elaboración del modelo conceptual es fundamental identificar las entidades, luego los atributos de cada una de ellas, luego las relaciones entre entidades y, si se desea, se elabora un diagrama de entidad relación como resultado del diseño conceptual: 
			.row.justify-content-center.mb-5
				.col-lg-7.mb-lg-0.mb-3
					AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
						div(titulo="Lista de entidades ")
							ul.lista-ul--color
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Persona (estudiantes y profesores): existen personas estudiantes y personas profesores. 
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Programa: representa la carrera técnica. 
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Inscripción: de un estudiante a un programa. 
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Materia. 
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Matrícula: dura un semestre y puede contener máximo 7 materias. 
						div(titulo="Lista de atributos ")
							ul.lista-ul--color
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Estudiante (nombre, apellidos, identificación, fecha_nacimiento, correo, teléfono, dirección). 
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Profesor (nombre, apellidos, identificación, correo, teléfono, dirección, titulación, fecha de titulación).
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Programa (nombre del programa, nivel, número de semestres).
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Inscripción (fecha, fecha de graduación).
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Materia (nombre de la materia y semestre). 
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Matrícula (año, período). 
						div(titulo="Relaciones y cardinalidad ")
							ul.lista-ul--color
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 El estudiante puede tener varias inscripciones, pero una inscripción por un solo estudiante. 
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Un profesor puede dictar varias materias y una materia ser dictada por varios profesores. 
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Una inscripción puede ser la relación entre un único estudiante y un único programa.
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Una inscripción puede tener varias matrículas, pero una matrícula corresponde a una única inscripción. 
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Una matrícula se relaciona con varios estudiantes y un estudiante con varias matrículas.
									li.d-flex
										i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
										p.mb-0 Una matrícula puede tener más de una materia, y la misma materia puede estar relacionada con varias matrículas. 
				.col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/temas/46.png', alt='')
		.titulo-sexto.color-acento-contenido(data-aos='fade-right')
			h5 Figura 13. 
			span Diagrama entidad relación
		img(src='@/assets/curso/temas/47.svg', alt='Este diagrama entidad-relación muestra las relaciones entre entidades de un sistema académico, incluyendo "persona," "estudiante," "profesor," "inscripción," "programa," "materia" y "matrícula." Las conexiones especifican atributos y cardinalidades, como id_persona, nombre, apellidos, identificación, y más.').mb-4
		.p-4(style="background-color: #f7eefe")
			p.mb-0 Actualmente, algunos diseñadores de bases de datos no diseñan el modelo entidad relación, por lo general directamente diseñan el modelo lógico o diagrama relacional, en algunos casos se emplea el modelo que se denomina modelo conceptual, que es equivalente al modelo entidad relación, pero difiere en la notación del diagrama al hacerse más parecido al modelo relacional. Por este mismo motivo es poco usado, porque supone hacer un nuevo paso o transformación del modelo conceptual a un modelo lógico, siendo este último el que en realidad puede convertirse en una base de datos. 
		.f-2-11.mn.p-5.mb-5.pb-1
			.titulo-tres.mb-4: h3.mb-0 Diseño lógico
			.row.justify-content-center.mb-5
				.col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
					.p-4(style="background-color: #ecf2ff ").mb-4
						p.mb-0 Una vez se tiene el modelo conceptual, se mapea el diagrama entidad relación o también llamado modelo conceptual a un modelo lógico, esto mediante las reglas de multiplicidad entre entidades (de uno a uno, de uno a muchos y de muchos a muchos). 
							br
							br
							|#[b Puede verificar algunos modelos, pero es recomendable que lo cree de manera que ejercite, lo hasta ahora visto.] 
					p Lo invitamos a visitar el siguiente, archivo Modelos.mwb
					a.anexo.mb-4(:href="obtenerLink('downloads/Anexo_7.mwb')" target="_blank")
								.row.justify-content-around.align-items-center
									.col-3
										.anexo__icono
											img(src="@/assets/curso/temas/link.svg")
									.anexo__texto
										p Modelos.mwb
				.col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/48.png', alt='')
			p.mb-5(data-aos='fade-right').fw-bold Ahora, analicemos los siguientes pasos:
			.row.justify-content-center.mb-5
				.col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
					.p-5(style="background-color: #8722e2 ").h-100 
						img(src='@/assets/curso/temas/49.svg', alt='' style="width: 72px ").mb-3
						h4.mb-5.text-white Análisis de restricciones de integridad
						p.mb-0.text-white La entidad matrícula tiene relación con una inscripción, y esta a su vez con un estudiante y con el programa al que pertenece, también podría haberse realizado la matrícula con el programa y el estudiante, pero convenientemente, al relacionar matrícula con inscripción con menos datos, se está relacionando el programa y el estudiante de forma indirecta. Las demás relaciones responden al proceso de análisis de mapeo, por lo que no se entrará en detalles
				.col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
					.p-5(style="background-color: #00ffdf ").h-100 
						img(src='@/assets/curso/temas/50.svg', alt='' style="width: 72px ").mb-3
						h4.mb-5 Validación de requisitos funcionales
						p.mb-0 Para conocer si se cumplen los requisitos funcionales de lógica es importante prestar atención a los siguientes puntos:
						ul.lista-ul--color
							li.d-flex
								i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
								p.mb-0 Revise por cada atributo si es conveniente que sea #[em Not Null] (#[em Not null] o NN), o si no nulo representa algo conceptualmente en el proceso.
							li.d-flex
								i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
								p.mb-0 Si un atributo o columna es #[em Not Null], revise si es importante definir un valor por defecto según la lógica del problema.
		.titulo-tres.mb-4: h3.mb-0 Diseño físico 
		p.mb-5(data-aos='fade-right') Finalmente, se debe revisar cuidadosamente la naturaleza de los datos antes de generar el archivo, conocer los tipos de datos que soporta el SGDB y estar seguro de que están bien definidos (si pueden no ser nulos, la longitud máxima y mínima, etc.): 
		.row.justify-content-center.mb-5
			.col-lg-7.mb-lg-0.mb-3
				AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
					div(titulo="Definición de tipos de datos")
						p.mb-0 #[b Revise:  ]
						ul.lista-ul--color
							li.d-flex
								i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
								p.mb-0 Que el valor (entero y flotante) corresponda a los valores que en un momento dado puede tener, por ejemplo, mire que las materias id_materia es tipo SMALLINT (lo que permitiría 32767 materias) mientras que en personas id_persona es tipo INT (lo que permitiría 2147483647 personas, es decir, el más del 30 % de la población mundial). 
							li.d-flex
								i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
								p.mb-0 Preste especial atención en las cadenas de texto, tamaño máximo y mínimo en longitud. 
					div(titulo="Analizar las restricciones ")
						p.mb-0 #[b Considere:] 
							br
							|Este es el punto estratégico del modelo, revisar la no nulidad o nulidad de las llaves foráneas es de vital importancia, porque ello determina en gran porcentaje si su modelo cumple los requerimientos funcionales del sistema, por ejemplo, una inscripción debe tener relacionado un id_estudiante y un id_programa, porque la lógica de una inscripción es que un estudiante se matricula a un programa de formación, por lo tanto, ni id_estudiante, ni id_programa deben ser #[em Null], por lo tanto, son atributo con restricción #[em Not Null] (NN). 
					div(titulo="Definición de índices ")
						p.mb-0 #[b Valide:] 
							br
							br
							|Cómo se usa MySQL Workbench, esta hace por el diseñador muchas cosas, una de ellas es identificar los índices; sin embargo, si en algún momento decide hacer la base de datos en esta herramienta, no cree índices en los siguientes casos:
						ul.lista-ul--color
							li.d-flex
								i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
								p.mb-0 Por cada llave foránea se crea un índice.
							li.d-flex
								i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
								p.mb-0 Si va a hacer consultas por rango de fechas, a las columnas por las que va a filtrar por rango de fechas, créeles un índice. 
							li.d-flex
								i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
								p.mb-0 No es necesario crear índices para las llaves primarias, por defecto MySQL lo hace. 
			.col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/temas/51.png', alt='')
		.row.justify-content-center.mb-5
			.col-lg-10
				.tarjeta.p-4.mb-3(style="background-color: #8722e2 ")
					.row.justify-content-center.align-items-center
						.col-lg-2.col-6: img(src='@/assets/curso/temas/megafono.svg', alt='')
						.col-lg-8
							p.text-white(data-aos='fade-right').mb-0 Si algún día usa otro motor de base de datos como Oracle, Postgres o SQL Server, verifique manualmente la creación de índices, porque según la herramienta que esté usando, puede ayudarle a crearlos para las llaves foráneas o no.

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
