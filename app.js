(() => {
  'use strict';

  const colors = { PESTEL: ['#2563eb', '#7c3aed', '#06b6d4', '#10b981', '#f97316', '#ef4444'] };
  const pestel = [
    ['P', 'Político', 'Decisiones públicas, prioridades y estabilidad institucional.'],
    ['E', 'Económico', 'Actividad, precios, ingresos, crédito y costos.'],
    ['S', 'Social', 'Demografía, cultura, hábitos y expectativas.'],
    ['T', 'Tecnológico', 'Tecnologías que cambian procesos, canales o productos.'],
    ['E', 'Ecológico', 'Clima, recursos, residuos y exigencias ambientales.'],
    ['L', 'Legal', 'Normas, obligaciones y reglas de competencia.']
  ];
  const games = {
    1: { title: 'Ahorcado estratégico', type: 'hangman', prompt: 'Descubrí el concepto que nombra una condición externa favorable que la empresa podría aprovechar.', answers: ['OPORTUNIDAD', 'ENTORNO', 'RIVALIDAD'], hints: ['Puede surgir del entorno.'] , explain: 'Una oportunidad es una condición externa que podría favorecer a la organización. Primero se verifica y se analiza su pertinencia.' },
    2: { title: 'Completa la idea', type: 'fill', prompt: 'Elegí la palabra que completa la definición.', questions: [
      { text: 'El análisis externo examina factores que se originan principalmente ______ de la empresa.', options: ['fuera', 'dentro', 'en el organigrama'], answer: 0, why: 'El análisis externo observa el contexto, la industria y los actores que rodean a la empresa.' },
      { text: 'PESTEL ayuda a ordenar señales del ______.', options: ['macroentorno', 'estado financiero', 'proceso interno'], answer: 0, why: 'PESTEL es una guía para explorar dimensiones del macroentorno.' },
      { text: 'Una hipótesis necesita ______ antes de tratarse como conclusión.', options: ['evidencia', 'un título atractivo', 'una puntuación'], answer: 0, why: 'La evidencia verificable permite evaluar y revisar una hipótesis.' }
    ] },
    3: { title: 'Verdadero o falso', type: 'tf', prompt: 'Indicá si cada afirmación es correcta.', questions: [
      { text: 'PESTEL clasifica fortalezas y debilidades internas.', answer: false, why: 'PESTEL organiza factores externos. Fortalezas y debilidades corresponden al análisis interno.' },
      { text: 'Una misma señal externa puede producir efectos distintos según la empresa.', answer: true, why: 'El impacto depende de la actividad, recursos, clientes y horizonte de cada organización.' },
      { text: 'Una oportunidad queda confirmada solo porque parece favorable.', answer: false, why: 'Debe apoyarse en evidencia y relacionarse con el alcance estratégico.' }
    ] },
    4: { title: 'Rompecabezas PESTEL', type: 'puzzle', prompt: 'Arrastrá cada señal hacia su dimensión o tocá primero la señal y luego la categoría. Las dos formas funcionan en pantalla táctil.', items: [
      { text: 'Una institución anuncia un programa público de apoyo sectorial.', cat: 'Político', why: 'Se refiere a una decisión y prioridad de política pública.' },
      { text: 'El costo de financiamiento cambia para las empresas.', cat: 'Económico', why: 'El crédito y su costo pertenecen a la dimensión económica.' },
      { text: 'Un grupo de consumidores modifica sus hábitos de compra.', cat: 'Social', why: 'Los hábitos y expectativas tienen dimensión social.' },
      { text: 'Se generaliza una plataforma digital de reservas.', cat: 'Tecnológico', why: 'La plataforma es una tecnología con posibles efectos en canales.' },
      { text: 'Una zona enfrenta mayor presión sobre la disponibilidad de agua.', cat: 'Ecológico', why: 'La disponibilidad de recursos naturales es un factor ecológico.' },
      { text: 'Entra en vigor una nueva obligación de etiquetado.', cat: 'Legal', why: 'Una obligación normativa corresponde a la dimensión legal.' }
    ] },
    5: { title: 'Memoria de conceptos', type: 'memory', prompt: 'Encontrá cada dimensión junto con su descripción.', pairs: [
      ['Político', 'Prioridades y decisiones públicas'], ['Económico', 'Precios, ingresos y crédito'], ['Social', 'Hábitos y expectativas'], ['Tecnológico', 'Herramientas y canales digitales'], ['Ecológico', 'Recursos y entorno natural'], ['Legal', 'Normas y obligaciones']
    ] },
    6: { title: 'Clasificación PESTEL', type: 'classify', prompt: 'Clasificá las señales ficticias por dimensión. No describen hechos actuales de Nicaragua.', items: [
      { text: 'Propuesta de cambiar los criterios de una licencia.', cat: 'Político', why: 'La propuesta parte de una decisión pública, aunque habría que revisar su estatus.' },
      { text: 'Variación general de precios de insumos.', cat: 'Económico', why: 'Los precios y costos pertenecen al entorno económico.' },
      { text: 'Preferencia emergente por experiencias personalizadas.', cat: 'Social', why: 'Describe expectativas y preferencias de clientes.' },
      { text: 'Una tecnología reduce el tiempo de atención.', cat: 'Tecnológico', why: 'La herramienta tecnológica puede cambiar el proceso.' },
      { text: 'Restricciones de agua en temporada seca.', cat: 'Ecológico', why: 'Se relaciona con un recurso natural y las condiciones ambientales.' },
      { text: 'Actualización de reglas de protección al consumidor.', cat: 'Legal', why: 'Las reglas de protección son obligaciones jurídicas.' }
    ] },
    7: { title: 'Conecta las cinco fuerzas', type: 'match', prompt: 'Relacioná cada fuerza con la pregunta que ayuda a responder.', pairs: [
      ['Rivalidad', '¿Cómo compiten los negocios actuales?'], ['Nuevos entrantes', '¿Qué tan difícil es ingresar?'], ['Sustitutos', '¿Qué otra solución satisface la misma necesidad?'], ['Compradores', '¿Cuánto influyen en condiciones y precio?'], ['Proveedores', '¿Cuánto influyen en insumos y condiciones?']
    ] },
    8: { title: 'Ordena el análisis', type: 'order', prompt: 'Ordená el proceso desde la observación inicial hasta la pregunta estratégica.', items: ['Priorizar según impacto, posibilidad y horizonte', 'Registrar una señal con fuente y fecha', 'Explicar la posible implicación para la empresa', 'Formular qué evidencia hace falta verificar'] , correct: [1, 3, 0, 2], explain: 'Un orden útil registra la señal, plantea qué falta comprobar, prioriza y luego explica implicaciones. En la práctica se vuelve iterativo.' },
    9: { title: 'Trivia de las cinco fuerzas', type: 'quiz', prompt: 'Una serie de preguntas para aplicar el modelo de Porter.', questions: [
      { text: '¿Cuál es la unidad de análisis más útil para las cinco fuerzas?', options: ['La industria o mercado delimitado', 'Solo la empresa', 'El país completo'], answer: 0, why: 'El modelo examina presiones competitivas en una industria delimitada.' },
      { text: 'Una alternativa distinta que resuelve la misma necesidad puede ejercer presión como…', options: ['sustituto', 'proveedor', 'nuevo comprador'], answer: 0, why: 'Los sustitutos satisfacen una necesidad de forma diferente.' },
      { text: 'La facilidad de entrada de empresas nuevas se relaciona con…', options: ['amenaza de nuevos entrantes', 'poder de proveedores', 'rivalidad únicamente'], answer: 0, why: 'Barreras bajas pueden facilitar la entrada y alterar la competencia.' }
    ] },
    10: { title: 'Detective de evidencia', type: 'evidence', prompt: 'Separá lo que afirma una señal de lo que todavía hace falta comprobar.', cases: [
      { claim: '“Todos los visitantes prefieren una carta más amplia”.', source: 'Comentario aislado de una persona, sin fecha ni registro.', options: ['Conclusión probada', 'Indicio por verificar', 'Dato de costos'], answer: 1, why: 'Una opinión aislada no demuestra la preferencia de todos los visitantes. Habría que definir población, método, fecha y evidencia.' },
      { claim: '“La nueva norma entrará en vigor el próximo mes”.', source: 'Publicación oficial fechada, pero falta revisar a quién aplica.', options: ['Hecho completo y suficiente', 'Fuente potencialmente verificable, alcance pendiente', 'Supuesto sin fuente'], answer: 1, why: 'La fuente oficial y la fecha ayudan, pero todavía hay que verificar alcance, vigencia y aplicación.' },
      { claim: '“Nuestros costos subirán 20%”.', source: 'Estimación interna no documentada.', options: ['Proyección confirmada', 'Hipótesis que requiere método y respaldo', 'Factor social'], answer: 1, why: 'La estimación necesita fuente, periodo, componentes y supuestos para evaluarse.' }
    ] },
    11: { title: 'Semáforo estratégico', type: 'traffic', prompt: 'Clasificá cada caso como oportunidad, amenaza o información insuficiente. La categoría siempre es provisional.', cases: [
      { text: 'Una obligación nueva aumenta el costo de cumplimiento. La norma aplica a la empresa y tiene fecha confirmada.', answer: 'Amenaza', why: 'El posible aumento de costos puede perjudicar, sujeto al análisis del impacto real.' },
      { text: 'Un canal digital crece, pero no se conoce su uso entre los clientes objetivo.', answer: 'Información insuficiente', why: 'La tendencia sola no demuestra que el canal resulte pertinente para este segmento.' },
      { text: 'Un aliado ofrece acceso a un segmento relevante. La organización confirma capacidad y condiciones viables.', answer: 'Oportunidad', why: 'El acceso podría favorecer a la empresa, luego de revisar sostenibilidad y resultados.' },
      { text: 'Un competidor anuncia un nuevo servicio; todavía se desconoce su alcance y demanda.', answer: 'Información insuficiente', why: 'El anuncio no basta para estimar impacto, uso o respuesta de clientes.' }
    ] },
    12: { title: '¿Competidor o sustituto?', type: 'competitor', prompt: 'Considerá la misma necesidad y el mismo segmento antes de clasificar.', cases: [
      { scenario: 'Dos cafeterías del mismo sector ofrecen bebidas y atención a visitantes.', answer: 'Competidor directo', why: 'Ofrecen soluciones semejantes al mismo segmento y pueden disputar la elección.' },
      { scenario: 'Una tienda vende té listo para llevar a personas que buscan una bebida rápida.', answer: 'Sustituto potencial', why: 'Puede cubrir una necesidad similar por medio de una solución distinta. La delimitación del mercado importa.' },
      { scenario: 'Una empresa de mantenimiento vende insumos a la cafetería.', answer: 'Ni uno, por ahora', why: 'Con esta información aparece como proveedor, no como rival o sustituto de la cafetería.' },
      { scenario: 'Una plataforma ofrece reservar una mesa en varios restaurantes.', answer: 'Complemento o canal', why: 'Con los datos disponibles facilita acceso, pero no sustituye necesariamente la experiencia de cafetería.' }
    ] },
    13: { title: 'Simulador de decisión: Café Segovia', type: 'simulator', prompt: 'El caso es ficticio. La cafetería estudia ampliar su oferta, pero no cuenta con datos suficientes sobre preferencias, costos, canales ni alternativas. ¿Qué decisión inmediata reduce mejor la incertidumbre?', choices: [
      { text: 'Cambiar toda la oferta de inmediato', result: 'No hay evidencia suficiente para anticipar aceptación o costos. Esta ruta asume una demanda que todavía no se ha comprobado.', kind: 'caution' },
      { text: 'Delimitar segmento y necesidad, y diseñar una prueba pequeña', result: 'Esta ruta genera evidencia acotada sobre preferencias y costos antes de comprometer recursos. Definí muestra, periodo, métrica y límites de la prueba.', kind: 'good' },
      { text: 'Usar únicamente comentarios en redes como decisión final', result: 'Los comentarios pueden aportar señales, pero no representan automáticamente a todos los clientes. Contrastalos con otras fuentes y métodos.', kind: 'caution' },
      { text: 'Copiar la oferta de un competidor', result: 'La oferta visible no revela costos, clientes objetivo ni resultados del competidor. Primero compará la necesidad y el contexto.', kind: 'caution' }
    ] },
    14: { title: 'Constructor de matriz externa', type: 'matrix', prompt: 'Editá una matriz de trabajo. Los ejemplos amarillos son hipótesis didácticas, no hechos sobre Nicaragua.', rows: [
      ['Cambio de hábitos de reserva', 'Social', 'Por definir', 'Encuesta exploratoria', 'Pendiente', 'Media', 'Corto', 'Baja', 'Por validar'],
      ['Nueva tecnología de reservas', 'Tecnológico', 'Por definir', 'Prueba con usuarios', 'Pendiente', 'Media', 'Medio', 'Baja', 'Por validar'],
      ['Variación en costo de insumos', 'Económico', 'Por definir', 'Cotizaciones fechadas', 'Pendiente', 'Alta', 'Corto', 'Media', 'Por validar']
    ], explain: 'Guardá evidencia y supuestos separados. La matriz se descarga como CSV y puede imprimirse desde el navegador.' },
    15: { title: 'Reto integrador S9', type: 'final', prompt: 'Cinco preguntas para cerrar. El resultado es una guía de revisión, no una nota ni un ranking.', questions: [
      { text: 'Una nueva regulación que podría afectar a una empresa se explora primero con…', options: ['PESTEL, dimensión legal', 'PESTEL, dimensión social', 'Análisis interno'], answer: 0, why: 'La regulación pertenece a la dimensión legal del macroentorno.' },
      { text: '¿Qué fuerza estudia el poder de negociar condiciones de compra?', options: ['Compradores', 'Sustitutos', 'Nuevos entrantes'], answer: 0, why: 'El poder de compradores examina su capacidad de influir en precio y condiciones.' },
      { text: '¿Qué mejora la calidad de una señal?', options: ['Fuente, fecha, alcance y método identificables', 'Un titular contundente', 'Una opinión repetida'], answer: 0, why: 'La trazabilidad permite revisar y contrastar la evidencia.' },
      { text: '¿Cuándo es mejor usar “información insuficiente”?', options: ['Cuando falta evidencia para estimar el efecto', 'Cuando la conclusión es incómoda', 'Para evitar investigar'], answer: 0, why: 'La incertidumbre debe reconocerse y convertirse en una pregunta investigable.' },
      { text: '¿Qué distingue una O/T provisional de una conclusión?', options: ['La primera declara la evidencia pendiente', 'La primera siempre tiene números', 'No hay diferencia'], answer: 0, why: 'La etiqueta provisional comunica incertidumbre y mantiene abierta la verificación.' }
    ] }
  };

  const slides = [
    { section:'Apertura', kind:'cover', title:'Leer el entorno para competir mejor', eyebrow:'Sesión 9 · Evaluación externa y análisis competitivo', text:'Una forma ordenada de convertir señales del entorno en preguntas estratégicas que sí podamos comprobar.', meta:['Universidad Americana','ADM0406 · Grupo 12','Jueves 15 de octubre de 2026'], notes:'Presentá el objetivo y explicá que trabajaremos con un caso ficticio. El énfasis está en el razonamiento y la evidencia, no en completar una lista.' },
    { section:'Apertura', title:'La pregunta que guía la sesión', text:'¿Qué cambios fuera de una empresa podrían modificar sus opciones para competir?', bullets:['Distinguir macroentorno, industria y competidores.','Usar PESTEL y las cinco fuerzas con un alcance claro.','Diseñar una matriz externa que separe evidencia de hipótesis.'], tag:'Producto: matriz externa preliminar', notes:'Conectá la pregunta detonante con ejemplos conocidos por el grupo. Pedí que nombren qué dato necesitarían para verificar una señal.' },
    { section:'Apertura', title:'El puente desde la sesión 8', text:'La estrategia necesita mirar hacia dentro y hacia fuera.', leftTitle:'Sesión 8 · Brújula interna', left:['Propósito, capacidades y decisiones propias','Recursos y límites que la organización puede gestionar'], rightTitle:'Sesión 9 · Evaluación externa', right:['Condiciones del entorno, industria y actores','Oportunidades y amenazas todavía por verificar'], note:'El análisis externo complementa el interno. Ninguno, por sí solo, determina una decisión.' },
    { section:'Entorno', title:'Tres escalas de análisis', text:'El alcance evita confundir una tendencia amplia con una presión competitiva específica.', layers:[['Macroentorno','Fuerzas amplias que pueden afectar a distintas industrias'],['Industria','Reglas y presiones que inciden en una actividad delimitada'],['Competidores','Organizaciones que disputan una elección o cliente concreto']], notes:'Pedí a la clase un ejemplo y luego preguntá en qué escala se observa. Una tendencia tecnológica puede ser macro, mientras la respuesta competitiva varía por industria.' },
    { section:'Entorno', kind:'game', game:1 },
    { section:'Entorno', kind:'game', game:2 },
    { section:'Entorno', kind:'game', game:3 },
    { section:'PESTEL', title:'PESTEL: mapa del macroentorno', text:'Seis dimensiones ayudan a buscar señales relevantes. La herramienta ordena preguntas; no ofrece respuestas automáticas.', pestel:true, notes:'Enfatizá que una dimensión no define por sí misma si el factor es oportunidad o amenaza. Importan el contexto, la empresa y la evidencia.' },
    { section:'PESTEL', title:'Preguntas útiles por dimensión', text:'Una categoría cobra sentido cuando se conecta con una pregunta concreta.', tiles:[['Político','¿Qué prioridades o decisiones públicas pueden cambiar las condiciones?'],['Económico','¿Qué precios, ingresos o condiciones de crédito inciden?'],['Social','¿Qué cambios de hábitos o expectativas conviene verificar?'],['Tecnológico','¿Qué proceso, canal o producto podría cambiar?'],['Ecológico','¿Qué recursos o condiciones ambientales son relevantes?'],['Legal','¿Qué obligaciones aplican y desde cuándo?']], notes:'Usá preguntas abiertas. No atribuyas a Nicaragua cambios o datos que no aparezcan en fuentes verificadas.' },
    { section:'PESTEL', kind:'game', game:4 },
    { section:'PESTEL', kind:'game', game:5 },
    { section:'PESTEL', kind:'game', game:6 },
    { section:'Industria', title:'Cinco fuerzas de Porter', text:'El modelo examina presiones que influyen en la competencia de una industria delimitada.', forces:true, notes:'Fijá primero la industria. Después ubicá los actores y los límites del mercado antes de conversar sobre la intensidad de cada fuerza.' },
    { section:'Industria', title:'Las fuerzas son preguntas de estructura', text:'No son una lista de rivales: cada fuerza señala una fuente distinta de presión.', bullets:['Rivalidad entre competidores actuales.','Amenaza de nuevos entrantes.','Amenaza de productos o servicios sustitutos.','Poder de negociación de compradores.','Poder de negociación de proveedores.'], note:'El modelo describe la estructura competitiva. Una fuerza no es automáticamente una amenaza prioritaria para toda empresa.' },
    { section:'Industria', kind:'game', game:7 },
    { section:'Industria', kind:'game', game:8 },
    { section:'Industria', kind:'game', game:9 },
    { section:'Evidencia', title:'De la señal a la implicación', text:'Una observación no se convierte sola en una conclusión estratégica.', steps:[['Señal','¿Qué se observó y dónde?'],['Verificación','¿Quién lo publica, cuándo y con qué método?'],['Evaluación','¿Cuál sería su impacto, probabilidad y horizonte?'],['Implicación','¿Qué podría cambiar y para quién?'],['Pregunta','¿Qué evidencia falta antes de decidir?']], notes:'Presentá la secuencia como una práctica de trazabilidad. La evaluación se revisa cuando aparece nueva evidencia.' },
    { section:'Evidencia', title:'Fuente, fecha y alcance', text:'La calidad de una señal depende de su contexto y de lo que realmente permite afirmar.', tiles:[['Fuente','Identificable y pertinente para la pregunta'],['Fecha','Vigencia del dato y periodo que representa'],['Alcance','Población, lugar, sector o actividad cubierta'],['Método','Cómo se obtuvo y qué limitaciones tiene']], note:'Separá dato, estimación, opinión y supuesto. Una fuente oficial puede ser sólida y aun así no responder la pregunta específica.' },
    { section:'Evidencia', kind:'game', game:10 },
    { section:'Evidencia', kind:'game', game:11 },
    { section:'Evidencia', title:'Competencia y sustitución', text:'Para reconocer rivales o alternativas, definí primero la necesidad y el segmento.', layers:[['Competidor directo','Ofrece una solución semejante al mismo segmento'],['Sustituto','Resuelve una necesidad parecida con otra solución'],['Complemento o canal','Facilita la experiencia sin reemplazarla necesariamente']], notes:'Estas etiquetas dependen de la delimitación del mercado. Pedí justificar cada caso en relación con necesidad, segmento y geografía.' },
    { section:'Evidencia', kind:'game', game:12 },
    { section:'Caso', title:'Caso didáctico: Café Segovia', text:'El negocio estudia ampliar su oferta para visitantes y clientes locales. La información disponible no permite concluir qué prefieren, cuánto costaría, qué canal funciona ni qué alternativas consideran.', tag:'Escenario ficticio para aprender el método', note:'No agregues resultados de mercado imaginarios. El trabajo consiste en definir qué investigar antes de recomendar una expansión.' },
    { section:'Caso', title:'Decidir qué averiguar primero', text:'Una recomendación responsable empieza por reducir la incertidumbre pertinente.', bullets:['Delimitar necesidad, segmento, lugar y periodo.','Identificar señales PESTEL y presiones competitivas relevantes.','Definir una fuente y un método para cada pregunta.','Describir impactos posibles sin presentar hipótesis como resultados.'], note:'El producto de la actividad será un instrumento de análisis, no una predicción de ventas.' },
    { section:'Caso', kind:'game', game:13 },
    { section:'Caso', kind:'game', game:14 },
    { section:'Integración', title:'De la matriz a una decisión informada', text:'La matriz organiza el trabajo; no reemplaza el criterio de dirección.', tiles:[['Factor','Qué podría cambiar en el contexto'],['Evidencia','Qué sabemos y qué falta verificar'],['Prioridad','Impacto, posibilidad, horizonte y confianza'],['Implicación','Qué opciones merece evaluar la empresa']], notes:'Invitá a revisar si cada factor está dentro del alcance definido y si su fuente permite sostener la afirmación.' },
    { section:'Integración', title:'S8 y S9 se complementan', text:'La evaluación estratégica integra condiciones propias y externas.', columns:[['Análisis interno','Capacidades, recursos, límites y propósito.'],['Análisis externo','Tendencias, industria, clientes y presiones competitivas.']], note:'Recuperá la brújula construida en la sesión 8. Una oportunidad externa solo importa si se relaciona con capacidades, prioridades y decisiones de la empresa.' },
    { section:'Integración', kind:'game', game:15 },
    { section:'Cierre', title:'Preguntas de salida', text:'Antes de cerrar, cada estudiante puede explicar:', bullets:['¿Qué diferencia hay entre macroentorno e industria?','¿Qué pregunta responde PESTEL y qué pregunta responden las cinco fuerzas?','¿Qué fuente consultaría para verificar un factor externo?','¿Qué información sigue faltando para el caso Café Segovia?'], tag:'Próximo paso: convertir el análisis en opciones estratégicas', notes:'Cierre individual breve. No se plantea calificación sumativa: el sílabo indica presaberes, práctica de diseño de instrumentos y autoestudio.' },
    { section:'Cierre', title:'Una buena decisión empieza con una buena pregunta', text:'La matriz externa permite documentar señales, evidencia pendiente e implicaciones de forma transparente.', quote:'“¿Qué dato cambiaría realmente nuestra decisión?”', quoteSmall:'Pregunta para llevar al taller', notes:'Agradecé los aportes y recordá que las hipótesis del caso deben quedar marcadas como pendientes de validación.' }
  ];

  const slideEl = document.querySelector('#slide');
  const slideLabel = document.querySelector('#slideLabel');
  const moduleLabel = document.querySelector('#moduleLabel');
  const progressBar = document.querySelector('#progressBar');
  const toast = document.querySelector('#toast');
  let index = 0, toastTimer, currentGame = null;
  const gameState = new Map();
  const $ = (selector, root=document) => root.querySelector(selector);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const colorList = ['#2563eb','#7c3aed','#06b6d4','#10b981','#f97316','#e11d48'];

  function render() {
    const slide = slides[index];
    currentGame = slide.kind === 'game' ? slide.game : null;
    slideEl.className = `slide ${slide.kind === 'cover' ? 'cover' : ''} ${slide.kind === 'game' ? 'game-slide' : ''}`;
    slideEl.innerHTML = slide.kind === 'game' ? renderGame(slide.game) : renderContent(slide);
    slideLabel.textContent = `${String(index+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
    moduleLabel.textContent = slide.section;
    progressBar.style.width = `${((index+1)/slides.length)*100}%`;
    $('#prevButton').disabled = index === 0;
    $('#nextButton').disabled = index === slides.length - 1;
    $('#notesContent').textContent = slide.notes || games[slide.game]?.explain || 'Guía la conversación con preguntas y pide que el grupo justifique sus respuestas.';
    updateOutlineActive();
    if (slide.kind === 'game') bindGame(slide.game);
  }

  function renderContent(s) {
    if (s.kind === 'cover') return `<div class="slide-inner"><p class="slide-topline">${esc(s.eyebrow)}</p><h1>${esc(s.title)}</h1><div class="accent-line"></div><p class="lede">${esc(s.text)}</p><div class="meta-line">${s.meta.map(x=>`<span>${esc(x)}</span>`).join('')}</div><div class="hero-mark" aria-hidden="true">S9</div></div>`;
    let main = `<div class="slide-inner"><p class="slide-topline">${esc(s.section)}</p><h2>${esc(s.title)}</h2>${s.text?`<p class="lede">${esc(s.text)}</p>`:''}`;
    if (s.bullets) main += `<ul class="content-list">${s.bullets.map((b,i)=>`<li><span class="bullet">${String(i+1).padStart(2,'0')}</span><span>${esc(b)}</span></li>`).join('')}</ul>`;
    if (s.tag) main += `<span class="tag">${esc(s.tag)}</span>`;
    if (s.note) main += `<div class="callout">${esc(s.note)}</div>`;
    if (s.quote) main += `<div class="quote-panel"><p>${esc(s.quote)}</p><small>${esc(s.quoteSmall||'')}</small></div>`;
    if (s.layers) main += `<div class="three-layers">${s.layers.map(([t,d])=>`<div class="layer"><strong>${esc(t)}</strong><span>${esc(d)}</span></div>`).join('')}</div>`;
    if (s.pestel) main += `<div class="pestel-grid">${pestel.map(([letter,title,desc],i)=>`<div class="pestel-item" style="--accent:${colorList[i]}"><span class="letter">${letter} · ${letter==='E'&&i===4?'AMBIENTAL':title.toUpperCase()}</span><strong>${esc(title)}</strong><p>${esc(desc)}</p></div>`).join('')}</div>`;
    if (s.tiles) main += `<div class="tile-grid">${s.tiles.map(([t,d],i)=>`<div class="tile"><span class="tile-kicker">${esc(String(i+1).padStart(2,'0'))} · ${esc(t)}</span><p>${esc(d)}</p></div>`).join('')}</div>`;
    if (s.forces) main += `<div class="force-map"><div class="force"><b>Nuevos entrantes</b><span>Barreras y facilidad de ingreso</span></div><div class="force"><b>Proveedores</b><span>Influencia sobre insumos y condiciones</span></div><div class="force center"><b>Competencia en la industria</b></div><div class="force"><b>Compradores</b><span>Influencia sobre precio y condiciones</span></div><div class="force"><b>Sustitutos</b><span>Otras formas de resolver la necesidad</span></div></div>`;
    if (s.steps) main += `<div class="steps">${s.steps.map(([t,d])=>`<div class="step"><div><strong>${esc(t)}</strong><span>${esc(d)}</span></div></div>`).join('')}</div>`;
    if (s.leftTitle && s.rightTitle) main += `<div class="columns">${[[s.leftTitle,s.left], [s.rightTitle,s.right]].map(([title,items],i)=>`<div class="text-stack"><h3>${esc(title)}</h3><ul class="content-list">${items.map((item,j)=>`<li><span class="bullet" style="color:${i?'#7c3aed':'#2563eb'}">${j+1}</span><span>${esc(item)}</span></li>`).join('')}</ul></div>`).join('')}</div>`;
    if (s.columns) main += `<div class="columns">${s.columns.map(([t,d],i)=>`<div class="text-stack"><span class="tag">${i?'EXTERNO':'INTERNO'}</span><h3>${esc(t)}</h3><p class="body-copy">${esc(d)}</p></div>`).join('')}</div>`;
    main += `</div>`;
    return main;
  }

  function freshState(id) {
    if (!gameState.has(id)) {
      const game = games[id];
      const state = { round:0, answered:false, feedback:'', selected:[], points:0, attempts:0, mistakes:0, wordIndex:0, guessed:[], memoryOpen:[], matched:[], order:null, caseIndex:0, quizIndex:0, done:false };
      if (game.type === 'order') state.order = [...game.items.keys()].sort(()=>Math.random()-.5);
      if (game.type === 'memory') state.deck = game.pairs.flatMap((pair, pairIndex)=>pair.map((label, side)=>({label,pairIndex,side}))).sort(()=>Math.random()-.5);
      if (game.type === 'hangman') state.wordIndex = Math.floor(Math.random()*game.answers.length);
      gameState.set(id,state);
    }
    return gameState.get(id);
  }
  function progressNote(state, total) { return `<span class="round-label">${state.round+1} de ${total}</span><span class="score-line">Aciertos: ${state.points}</span>`; }
  function actionButton(action,label,cls='button') { return `<button type="button" class="${cls}" data-action="${action}">${label}</button>`; }
  function renderGame(id) {
    const g=games[id], st=freshState(id);
    let content='';
    if (g.type==='hangman') content=gameHangman(g,st);
    else if (g.type==='fill'||g.type==='tf'||g.type==='quiz'||g.type==='final') content=gameQuestion(g,st);
    else if (g.type==='classify') content=gameClassify(g,st,id);
    else if (g.type==='puzzle') content=gamePuzzle(g,st);
    else if (g.type==='memory') content=gameMemory(g,st);
    else if (g.type==='match') content=gameMatch(g,st);
    else if (g.type==='order') content=gameOrder(g,st);
    else if (g.type==='evidence'||g.type==='traffic'||g.type==='competitor') content=gameCase(g,st);
    else if (g.type==='simulator') content=gameSimulator(g,st);
    else if (g.type==='matrix') content=gameMatrix(g,st);
    return `<div class="slide-inner"><div class="game-head"><div><p class="slide-topline">Actividad interactiva · ${esc(slides[index].section)}</p><h2>${esc(g.title)}</h2></div><span class="game-index">RETO ${String(id).padStart(2,'0')} / 15</span></div><p class="body-copy">${esc(g.prompt)}</p><div class="game-shell"><section class="game-main" id="gameMain">${content}</section><aside class="game-aside"><div><p class="eyebrow">PARA PENSAR</p><p>${esc(g.explain || 'Respondé, leé la retroalimentación y explicá qué evidencia o razonamiento sostiene tu decisión.')}</p></div><div><strong>La meta</strong><p>Usá la actividad para volver al concepto. Podés reintentar o revisar una respuesta razonada.</p></div></aside></div><div class="game-footer"><span class="footer-note">Actividad ${id} de 15 · sin nota ni clasificación pública</span><div>${actionButton('reset','Reintentar','button ghost')} ${actionButton('solution','Ver solución','button secondary')}</div></div></div>`;
  }
  function gameQuestion(g,st) {
    const qs=g.questions, q=qs[st.round%qs.length];
    if(g.type==='final'&&st.round>=qs.length) return `<div class="final-result"><span class="tag">CIERRE INTEGRADOR</span><h3>${st.points} de ${qs.length} respuestas correctas</h3><p>Usá el resultado para repasar. Explicá qué evidencia haría falta antes de clasificar un factor externo como oportunidad o amenaza.</p><div class="game-actions">${actionButton('reset','Reintentar el reto','button primary')}</div></div>`;
    const isTF=g.type==='tf'; const choices=isTF?['Verdadero','Falso']:q.options;const correctIndex=isTF?(q.answer?0:1):q.answer;
    return `<p class="game-prompt">${esc(q.text)}</p><div class="choice-list">${choices.map((v,i)=>`<button type="button" class="choice ${st.answered?(i===correctIndex?'correct':(st.selected[0]===i?'wrong':'')):''}" data-choice="${i}" ${st.answered?'disabled':''}>${esc(v)}</button>`).join('')}</div><div class="feedback ${st.answered?(st.selected[0]===correctIndex?'good':'bad'):''}" aria-live="polite">${st.feedback?esc(st.feedback):'Elegí una opción para recibir retroalimentación.'}</div><div class="game-actions">${st.answered?actionButton('next','Siguiente pregunta','button primary'):''}<span class="round-label">Pregunta ${st.round+1} de ${qs.length}</span><span class="score-line">Aciertos: ${st.points}</span></div>`;
  }
  function gameHangman(g,st) {
    const word=g.answers[st.wordIndex], shown=[...word].map(c=>st.guessed.includes(c)?c:'_');
    const keys='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    return `<div class="hangman-figure"><span class="tag">PISTA: ${esc(g.hints[0])}</span><span class="mistakes">Errores: ${st.mistakes} / 6</span></div><div class="word-slots" aria-label="Palabra oculta">${shown.map(c=>`<span>${c==='_'?'':esc(c)}</span>`).join('')}</div><div class="keyboard">${[...keys].map(char=>`<button class="key" type="button" data-letter="${char}" ${st.guessed.includes(char)||st.answered?'disabled':''}>${char}</button>`).join('')}</div><div class="feedback ${st.answered?(word.split('').every(c=>st.guessed.includes(c))?'good':'bad'):''}">${st.feedback?esc(st.feedback):'Usá el teclado en pantalla. Al completar la palabra, explicá por qué importa.'}</div><div class="game-actions">${st.answered?actionButton('next','Otra palabra','button primary'):''}<span class="round-label">Ronda ${st.round+1} de 3</span><span class="score-line">Aciertos: ${st.points}</span></div>`;
  }
  function gameClassify(g,st,id) {
    const itemIndex=st.round%g.items.length, item=g.items[itemIndex], categories=['Político','Económico','Social','Tecnológico','Ecológico','Legal'];
    return `<p class="game-prompt">Señal ${itemIndex+1} de ${g.items.length}: ${esc(item.text)}</p><div class="choice-list">${categories.map((cat,i)=>`<button type="button" class="choice ${st.answered?(cat===item.cat?'correct':(st.selected[0]===cat?'wrong':'')):''}" data-classify="${esc(cat)}" ${st.answered?'disabled':''}><span style="color:${colorList[i]};font-weight:900">${pestel[i][0]} · </span>${cat}</button>`).join('')}</div><div class="feedback ${st.answered?(st.selected[0]===item.cat?'good':'bad'):''}">${st.feedback?esc(st.feedback):'Seleccioná la dimensión que mejor ordena esta señal ilustrativa.'}</div><div class="game-actions">${st.answered?actionButton('next','Siguiente señal','button primary'):''}<span class="round-label">${itemIndex+1} de ${g.items.length}</span><span class="score-line">Aciertos: ${st.points}</span></div>`;
  }
  function gamePuzzle(g,st) {
    const assigned=st.assigned||{};
    const categories=['Político','Económico','Social','Tecnológico','Ecológico','Legal'];
    const cards=g.items.map((item,i)=>assigned[i]===undefined?`<button type="button" draggable="true" class="puzzle-card" data-puzzle-card="${i}">${esc(item.text)}</button>`:'').join('');
    return `<p class="game-prompt">Señales por ubicar: ${g.items.filter((_,i)=>assigned[i]===undefined).length}</p><div class="puzzle-pool" id="puzzlePool">${cards||'<p class="micro">Todas las señales tienen categoría.</p>'}</div><div class="puzzle-zones">${categories.map((cat,i)=>{const items=Object.entries(assigned).filter(([,value])=>value===cat).map(([key])=>Number(key));return `<button type="button" class="puzzle-zone" data-puzzle-zone="${cat}" aria-label="Colocar en ${cat}"><b style="color:${colorList[i]}">${pestel[i][0]} · ${cat}</b><span>${items.map(itemId=>esc(g.items[itemId].text)).join('<br>')||'Soltá o seleccioná una señal'}</span></button>`}).join('')}</div><div class="feedback ${st.answered?(st.points===g.items.length?'good':'bad'):''}">${st.feedback||'Las tarjetas son ejemplos inventados para practicar la clasificación, no afirmaciones sobre el país.'}</div><div class="game-actions">${st.answered?actionButton('reset','Volver a jugar','button'):actionButton('checkPuzzle','Comprobar rompecabezas','button primary')}<span class="score-line">Correctas: ${st.points} de ${g.items.length}</span></div>`;
  }
  function gameMemory(g,st) {
    const deck=st.deck||[];
    return `<p class="game-prompt">Seleccioná dos tarjetas para encontrar cada pareja.</p><div class="card-grid">${deck.map((card,i)=>{const visible=st.memoryOpen.includes(i)||st.matched.includes(card.pairIndex);return `<button type="button" class="memory-card ${visible?'open':''} ${st.matched.includes(card.pairIndex)?'matched':''}" data-memory="${i}" ${st.matched.includes(card.pairIndex)||st.memoryOpen.includes(i)?'disabled':''}>${visible?esc(card.label):'¿?'}</button>`}).join('')}</div><div class="feedback">${st.feedback||'Parejas encontradas: '+st.matched.length+' de '+g.pairs.length}</div>`;
  }
  function gameMatch(g,st) {
    const forces=g.pairs.map(p=>p[0]), defs=[...g.pairs.map(p=>p[1])].sort((a,b)=>a.localeCompare(b));
    return `<p class="game-prompt">Elegí una fuerza y luego su definición.</p><div class="classify-row" style="grid-template-columns:1fr 1fr"><p>Fuerza competitiva</p><p>Pregunta asociada</p></div>${forces.map((force,i)=>`<div class="classify-row" style="grid-template-columns:1fr 1.5fr"><strong>${esc(force)}</strong><select aria-label="Definición para ${esc(force)}" data-match-select="${i}" ${st.answered?'disabled':''}><option value="">Seleccioná la pregunta…</option>${defs.map(def=>`<option ${st.selected[i+1]===def?'selected':''}>${esc(def)}</option>`).join('')}</select></div>`).join('')}<div class="feedback ${st.answered?'good':''}">${st.feedback||'Relacioná las cinco fuerzas con su pregunta.'}</div><div class="game-actions">${!st.answered?actionButton('checkMatch','Revisar parejas','button primary'):actionButton('reset','Reintentar relaciones','button primary')}<span class="score-line">Aciertos: ${st.points}</span></div>`;
  }
  function gameOrder(g,st) {
    const order=st.order||g.items.map((_,i)=>i);
    return `<p class="game-prompt">Mové cada paso con los controles hasta construir una secuencia coherente.</p><div class="reorder-list">${order.map((item,i)=>`<div class="reorder-item"><span>${esc(g.items[item])}</span><button type="button" data-move="${i}" data-dir="-1" aria-label="Subir" ${i===0?'disabled':''}>↑</button><button type="button" data-move="${i}" data-dir="1" aria-label="Bajar" ${i===order.length-1?'disabled':''}>↓</button></div>`).join('')}</div><div class="feedback ${st.answered?(st.feedback.startsWith('Correcto')?'good':'bad'):''}">${st.feedback||'Orden sugerido: registrar señal, definir evidencia pendiente, priorizar y explicar implicación.'}</div><div class="game-actions">${actionButton('checkOrder','Comprobar orden','button primary')} ${st.answered?actionButton('reset','Mezclar de nuevo','button'):''}</div>`;
  }
  function gameCase(g,st) {
    let q, opts, answer, why;
    if(g.type==='evidence'){q=g.cases[st.round%g.cases.length].claim;const c=g.cases[st.round%g.cases.length];opts=c.options;answer=c.answer;why=c.why;}
    else if(g.type==='traffic'){const c=g.cases[st.round%g.cases.length];q=c.text;opts=['Oportunidad','Amenaza','Información insuficiente'];answer=['Oportunidad','Amenaza','Información insuficiente'].indexOf(c.answer);why=c.why;}
    else {const c=g.cases[st.round%g.cases.length];q=c.scenario;opts=['Competidor directo','Sustituto potencial','Ni uno, por ahora','Complemento o canal'];answer=opts.indexOf(c.answer);why=c.why;}
    const selected=st.selected[0];
    return `<p class="game-prompt">${esc(q)}</p>${g.type==='evidence'?`<div class="callout" style="margin-bottom:14px">${esc(g.cases[st.round%g.cases.length].source)}</div>`:''}<div class="choice-list">${opts.map((v,i)=>`<button type="button" class="choice ${st.answered?(i===answer?'correct':(selected===i?'wrong':'')):''}" data-choice="${i}" ${st.answered?'disabled':''}>${esc(v)}</button>`).join('')}</div><div class="feedback ${st.answered?(selected===answer?'good':'bad'):''}">${st.feedback?esc(st.feedback):'Elegí y justificá tu respuesta con la información disponible.'}</div><div class="game-actions">${st.answered?actionButton('next','Siguiente caso','button primary'):''}<span class="round-label">Caso ${st.round+1} de ${g.cases.length}</span><span class="score-line">Aciertos: ${st.points}</span></div>`;
  }
  function gameSimulator(g,st) {
    return `<p class="game-prompt">${esc(g.choices[st.round%g.choices.length].text)}</p><div class="choice-list">${g.choices.map((c,i)=>`<button type="button" class="choice ${st.answered?(i===st.selected[0]?(c.kind==='good'?'correct':'wrong'):''):''}" data-sim="${i}" ${st.answered?'disabled':''}>${esc(c.text)}</button>`).join('')}</div><div class="feedback ${st.answered?(g.choices[st.selected[0]].kind==='good'?'good':'bad'):''}">${st.feedback?esc(st.feedback):'Seleccioná una ruta. No hay resultado financiero ficticio: evaluá qué información produciría.'}</div><div class="game-actions">${st.answered?actionButton('next','Probar otra ruta','button primary'):''}<span class="round-label">Decisión ${st.round+1} de 4</span></div>`;
  }
  function gameMatrix(g,st) {
    const rows=st.rows||g.rows.map(row=>[...row]);
    const headings=['Factor','Categoría','Fuente / fecha','Evidencia o dato','Impacto','Probabilidad','Horizonte','Confianza','O/T provisional'];
    return `<p class="micro">${esc(g.explain)}</p><div class="matrix-wrap"><table class="matrix"><thead><tr>${headings.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map((row,ri)=>`<tr class="fictitious">${row.map((cell,ci)=>`<td>${ci===1?`<select data-matrix="${ri}:${ci}">${['Político','Económico','Social','Tecnológico','Ecológico','Legal','Industria'].map(o=>`<option ${o===cell?'selected':''}>${o}</option>`).join('')}</select>`:ci===4||ci===5||ci===6||ci===7||ci===8?`<select data-matrix="${ri}:${ci}">${(ci===8?['Por validar','Oportunidad provisional','Amenaza provisional','Información insuficiente']:['Pendiente','Baja','Media','Alta','Corto','Medio','Largo']).map(o=>`<option ${o===cell?'selected':''}>${o}</option>`).join('')}</select>`:`<input data-matrix="${ri}:${ci}" value="${esc(cell)}" aria-label="${esc(headings[ci])}, fila ${ri+1}">`}</td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="feedback">${st.feedback||'Las filas de ejemplo están marcadas como hipótesis didácticas. Reemplazá la información con fuentes identificables antes de usarla.'}</div><div class="game-actions">${actionButton('addRow','Agregar fila','button')} ${actionButton('downloadCsv','Descargar CSV','button primary')} ${actionButton('printMatrix','Imprimir','button secondary')}<span class="round-label">${rows.length} factores · ejemplo didáctico</span></div>`;
  }

  function bindGame(id) {
    const root=$('#gameMain'); if(!root) return;
    root.querySelectorAll('[data-choice]').forEach(btn=>btn.addEventListener('click',()=>answerChoice(id,Number(btn.dataset.choice))));
    root.querySelectorAll('[data-letter]').forEach(btn=>btn.addEventListener('click',()=>guessLetter(id,btn.dataset.letter)));
    root.querySelectorAll('[data-classify]').forEach(btn=>btn.addEventListener('click',()=>answerClassify(id,btn.dataset.classify)));
    root.querySelectorAll('[data-puzzle-card]').forEach(btn=>{
      btn.addEventListener('click',()=>{freshState(id).selectedCard=Number(btn.dataset.puzzleCard);root.querySelectorAll('[data-puzzle-card]').forEach(card=>card.classList.toggle('selected',card===btn));});
      btn.addEventListener('dragstart',event=>{event.dataTransfer.setData('text/plain',btn.dataset.puzzleCard);});
    });
    root.querySelectorAll('[data-puzzle-zone]').forEach(zone=>{
      zone.addEventListener('click',()=>{const st=freshState(id);if(st.selectedCard!==undefined){st.assigned||={};st.assigned[st.selectedCard]=zone.dataset.puzzleZone;st.selectedCard=undefined;render();}});
      zone.addEventListener('dragover',event=>event.preventDefault());
      zone.addEventListener('drop',event=>{event.preventDefault();const card=Number(event.dataTransfer.getData('text/plain'));const st=freshState(id);st.assigned||={};st.assigned[card]=zone.dataset.puzzleZone;render();});
    });
    root.querySelectorAll('[data-memory]').forEach(btn=>btn.addEventListener('click',()=>memorySelect(id,Number(btn.dataset.memory))));
    root.querySelectorAll('[data-force]').forEach(btn=>btn.addEventListener('click',()=>{freshState(id).selected[0]=btn.dataset.force;render()}));
    root.querySelectorAll('[data-match-select]').forEach(select=>select.addEventListener('change',()=>{freshState(id).selected[Number(select.dataset.matchSelect)+1]=select.value}));
    root.querySelectorAll('[data-move]').forEach(btn=>btn.addEventListener('click',()=>moveOrder(id,Number(btn.dataset.move),Number(btn.dataset.dir))));
    root.querySelectorAll('[data-sim]').forEach(btn=>btn.addEventListener('click',()=>answerSimulator(id,Number(btn.dataset.sim))));
    root.querySelectorAll('[data-matrix]').forEach(control=>control.addEventListener('input',()=>updateMatrixValue(id,control)));
    slideEl.querySelectorAll('[data-action]').forEach(btn=>btn.addEventListener('click',()=>gameAction(id,btn.dataset.action)));
  }
  function answerChoice(id,choice) {
    const g=games[id],st=freshState(id),q=g.questions[st.round%g.questions.length],correct=choice===(g.type==='tf'?(q.answer?0:1):q.answer);
    st.selected=[choice];st.answered=true;st.feedback=`${correct?'Correcto.':'Revisemos.'} ${q.why}`;if(correct)st.points++;render();
  }
  function guessLetter(id,letter) {
    const g=games[id],st=freshState(id),word=g.answers[st.wordIndex];st.guessed.push(letter);
    if(!word.includes(letter))st.mistakes++;
    if([...word].every(ch=>st.guessed.includes(ch))){st.answered=true;st.points++;st.feedback=`¡Palabra completa! ${g.explain}`;}
    else if(st.mistakes>=6){st.answered=true;st.feedback=`La palabra era ${word}. ${g.explain}`;}
    render();
  }
  function answerClassify(id,category) { const g=games[id],st=freshState(id),item=g.items[st.round%g.items.length],ok=category===item.cat;st.selected=[category];st.answered=true;st.feedback=`${ok?'Correcto.':'Revisemos la categoría.'} ${item.why}`;if(ok)st.points++;render(); }
  function memorySelect(id,cardIndex) {
    const st=freshState(id),card=st.deck[cardIndex];if(st.memoryOpen.length===2)return;
    st.memoryOpen.push(cardIndex);
    if(st.memoryOpen.length===2){const [a,b]=st.memoryOpen.map(i=>st.deck[i]);if(a.pairIndex===b.pairIndex){st.matched.push(a.pairIndex);st.points++;st.feedback=`Pareja encontrada: ${a.label} · ${b.label}.`;st.memoryOpen=[];}else{st.feedback='No coinciden. Revisá los conceptos e intentá otra pareja.';setTimeout(()=>{if(index>=0&&slides[index].game===id){st.memoryOpen=[];render()}},900)}}
    render();
  }
  function moveOrder(id,from,direction) { const st=freshState(id),arr=st.order,to=from+direction;if(to<0||to>=arr.length)return;[arr[from],arr[to]]=[arr[to],arr[from]];st.answered=false;st.feedback='';render(); }
  function answerSimulator(id,choice) {const g=games[id],st=freshState(id),result=g.choices[choice];st.selected=[choice];st.answered=true;st.feedback=result.result;if(result.kind==='good')st.points++;render()}
  function updateMatrixValue(id,control) {const st=freshState(id),[r,c]=control.dataset.matrix.split(':').map(Number);st.rows ||= games[id].rows.map(row=>[...row]);st.rows[r][c]=control.value;}
  function gameAction(id,action) {
    const g=games[id],st=freshState(id);
    if(action==='reset'){gameState.delete(id);render();return}
    if(action==='solution'){
      if(g.type==='matrix'){st.feedback='La matriz no tiene una respuesta única. Conservá fuente, fecha y evidencia verificable; clasificaciones O/T siguen siendo provisionales.';}
      else if(g.type==='order'){st.order=[...g.correct];st.feedback=g.explain;st.answered=true;}
      else if(g.type==='match'){st.feedback='Rivalidad: competencia actual. Nuevos entrantes: facilidad de ingreso. Sustitutos: otras soluciones. Compradores: poder de negociación. Proveedores: poder sobre insumos y condiciones.';st.answered=true;}
      else if(g.type==='memory'){st.feedback='Parejas: '+g.pairs.map(p=>p.join(' = ')).join(' · ');}
      else if(g.type==='hangman'){const word=g.answers[st.wordIndex];st.guessed=[...new Set([...word])];st.answered=true;st.feedback=`La palabra era ${word}. ${g.explain}`;}
      else if(g.type==='puzzle'){st.assigned=Object.fromEntries(g.items.map((item,i)=>[i,item.cat]));st.points=g.items.length;st.answered=true;st.feedback='Solución: cada señal se ubica en la dimensión que describe el tipo de cambio. Revisá la justificación de cada etiqueta.';}
      else if(g.type==='simulator'){st.feedback='La ruta que genera evidencia antes de comprometer recursos es la más prudente para este caso: delimitar un segmento, diseñar una prueba pequeña y definir qué medir.';st.answered=true;}
      else {const q=(g.questions||g.cases||[])[st.round%((g.questions||g.cases||[]).length)];if(g.type==='classify'){const item=g.items[st.round%g.items.length];st.selected=[item.cat];st.feedback=`La categoría sugerida es ${item.cat}. ${item.why}`;}else if(g.type==='traffic'){const c=g.cases[st.round%g.cases.length];st.selected=[['Oportunidad','Amenaza','Información insuficiente'].indexOf(c.answer)];st.feedback=`Respuesta sugerida: ${c.answer}. ${c.why}`;}else if(g.type==='competitor'){const c=g.cases[st.round%g.cases.length];st.selected=[['Competidor directo','Sustituto potencial','Ni uno, por ahora','Complemento o canal'].indexOf(c.answer)];st.feedback=`Respuesta sugerida: ${c.answer}. ${c.why}`;}else if(g.type==='evidence'){st.selected=[q.answer];st.feedback=`Respuesta sugerida: ${q.options[q.answer]}. ${q.why}`;}else if(q){st.selected=[g.type==='tf'?(q.answer?0:1):q.answer];st.feedback=`Respuesta: ${g.type==='tf'?(q.answer?'Verdadero':'Falso'):q.options[q.answer]}. ${q.why}`;}st.answered=true;}
      render();return;
    }
    if(action==='next'){
      st.round++;
      if(g.type==='hangman'){st.wordIndex=(st.wordIndex+1)%g.answers.length;st.guessed=[];st.mistakes=0;st.answered=false;st.feedback='';}
      else if(g.type==='simulator'){st.selected=[];st.answered=false;st.feedback='';}
      else if(g.type==='classify'||g.type==='fill'||g.type==='tf'||g.type==='quiz'||g.type==='evidence'||g.type==='traffic'||g.type==='competitor'||g.type==='final'){st.selected=[];st.answered=false;st.feedback='';}
      render();return;
    }
    if(action==='checkOrder'){const correct=JSON.stringify(st.order)===JSON.stringify(g.correct);st.answered=true;st.feedback=correct?`Correcto. ${g.explain}`:`Todavía no. ${g.explain}`;if(correct)st.points++;render();return;}
    if(action==='checkMatch'){const selected=st.selected.slice(1);const ok=g.pairs.every((pair,i)=>selected[i]===pair[1]);st.answered=true;st.feedback=ok?'Correcto. Cada fuerza aborda una fuente distinta de presión.':'Revisá las relaciones. Cada fuerza explica una presión competitiva diferente.';if(ok)st.points=5;render();return;}
    if(action==='checkPuzzle'){const assigned=st.assigned||{};let hits=0;g.items.forEach((item,i)=>{if(assigned[i]===item.cat)hits++});st.points=hits;st.answered=true;st.feedback=hits===g.items.length?'¡Rompecabezas completo! Las dimensiones sirven para ordenar preguntas antes de concluir.':`Coinciden ${hits} de ${g.items.length}. Revisá cada categoría. ${g.items.map(item=>`${item.cat}: ${item.text}`).join(' | ')}`;render();return;}
    if(action==='addRow'){st.rows ||= g.rows.map(r=>[...r]);st.rows.push(['Factor por investigar','Social','Fuente y fecha pendientes','Evidencia por recopilar','Pendiente','Pendiente','Medio','Baja','Por validar']);render();return;}
    if(action==='downloadCsv'){downloadMatrix(st);return;}
    if(action==='printMatrix'){window.print();return;}
  }
  function downloadMatrix(st){const rows=st.rows||games[14].rows;const headings=['Factor','Categoría','Fuente / fecha','Evidencia o dato','Impacto','Probabilidad','Horizonte','Confianza','O/T provisional'];const csv=[headings,...rows].map(row=>row.map(value=>`"${String(value).replaceAll('"','""')}"`).join(',')).join('\r\n');const blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='matriz-externa-cafe-segovia-ejemplo.csv';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1500);showToast('Se descargó la matriz en formato CSV.');}

  function updateOutlineActive(){document.querySelectorAll('.outline-entry').forEach(item=>item.classList.toggle('active',Number(item.dataset.slide)===index));}
  function buildOutline(){const nav=$('#outlineList');nav.innerHTML=slides.map((s,i)=>`<button type="button" class="outline-entry" data-slide="${i}"><b>${String(i+1).padStart(2,'0')}</b><span>${esc(s.title||games[s.game]?.title||'Actividad')}</span><small>${esc(s.section)}</small></button>`).join('');nav.querySelectorAll('[data-slide]').forEach(btn=>btn.addEventListener('click',()=>{index=Number(btn.dataset.slide);$('#outlineDialog').close();render()}));}
  function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2400)}
  function next(delta){const n=index+delta;if(n>=0&&n<slides.length){index=n;render()}}
  $('#prevButton').addEventListener('click',()=>next(-1));$('#nextButton').addEventListener('click',()=>next(1));
  $('#outlineButton').addEventListener('click',()=>$('#outlineDialog').showModal());$('#notesButton').addEventListener('click',()=>$('#notesDialog').showModal());$('#sourcesButton').addEventListener('click',()=>$('#sourcesDialog').showModal());
  document.querySelectorAll('[data-close-dialog]').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
  $('#fullscreenButton').addEventListener('click',async()=>{try{if(!document.fullscreenElement)await document.documentElement.requestFullscreen();else await document.exitFullscreen()}catch{showToast('Pantalla completa no disponible en este navegador.')}});
  let breakDismissedInMemory=false;
  function wasBreakDismissed(){try{return sessionStorage.getItem('s9-break-dismissed')==='yes'}catch{return breakDismissedInMemory}}
  function dismissBreak(){breakDismissedInMemory=true;try{sessionStorage.setItem('s9-break-dismissed','yes')}catch{};$('#breakDialog').close()}
  $('#dismissBreak').addEventListener('click',dismissBreak);
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'){
      const openDialog=document.querySelector('dialog[open]');if(openDialog){openDialog.close();event.preventDefault();return;}
      if(currentGame){let prior=index-1;while(prior>=0&&slides[prior].kind==='game')prior--;if(prior>=0){index=prior;render();event.preventDefault();return;}}
      if(document.fullscreenElement){document.exitFullscreen().catch(()=>{});event.preventDefault();return;}
      return;
    }
    if(event.altKey||event.ctrlKey||event.metaKey)return;
    if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)||document.activeElement?.isContentEditable)return;
    if(event.key==='ArrowRight'||event.key==='PageDown'){event.preventDefault();next(1)}
    if(event.key==='ArrowLeft'||event.key==='PageUp'){event.preventDefault();next(-1)}
    if(event.key.toLowerCase()==='f'&&!event.repeat){$('#fullscreenButton').click()}
  });

  // Converts the current Managua calendar date's 19:00 into an absolute timestamp using IANA time-zone data.
  const managuaFormatter=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Managua',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'});
  function managuaParts(date){return Object.fromEntries(managuaFormatter.formatToParts(date).filter(part=>part.type!=='literal').map(part=>[part.type,Number(part.value)]))}
  function managuaSevenPm(now=new Date()){
    const p=managuaParts(now);const localTarget=Date.UTC(p.year,p.month-1,p.day,19,0,0);
    let guess=localTarget;
    for(let i=0;i<3;i++){const at=managuaParts(new Date(guess));const represented=Date.UTC(at.year,at.month-1,at.day,at.hour,at.minute,at.second);guess+=localTarget-represented;}
    return guess;
  }
  function updateTimer(){
    const now=new Date(),remaining=Math.max(0,Math.ceil((managuaSevenPm(now)-now.getTime())/1000));
    const timer=$('#breakTimer');
    if(remaining===0){$('#timerLabel').textContent='PAUSA · 7:00 P. M.';$('#timerValue').textContent='00:00';timer.classList.remove('warning');timer.classList.add('done');if(!wasBreakDismissed()&&!$('#breakDialog').open)$('#breakDialog').showModal();return;}
    const mins=Math.floor(remaining/60),secs=remaining%60;$('#timerValue').textContent=`${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;$('#timerLabel').textContent='Pausa de clase · Managua';timer.classList.toggle('warning',remaining<=300);timer.classList.remove('done');
  }

  buildOutline();render();updateTimer();setInterval(updateTimer,1000);
  window.S9App={slides,games,managuaSevenPm,managuaParts};
})();
