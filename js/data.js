const menu = [
  {
    categoria: "RACIONES",
    piatti: [
      { nomePiatto: "ARANCINO CLÁSICO ITALIANO (4 UNIDADES)", prezzo: 6.5 },
      { nomePiatto: "FRITTATINA NAPOLETANA (CROQUETA DE PASTA, 4 UNIDADES)", prezzo: 6.5 },
      { nomePiatto: "PAPAS BRAVAS", prezzo: 8.9 },
      { nomePiatto: "CALAMARES CON SALSA DE ALIOLI", prezzo: 10.5 },
      { nomePiatto: "NACHOS CON QUESO, GUACAMOLE, CHILI CON CARNE Y JALAPEÑOS", prezzo: 10.5 },
      { nomePiatto: "INVOLTINI DI MELANZANE RIPIENI IN SALSA CASERA", prezzo: 10.5 }
    ]
  },
  {
    categoria: "PASTA",
    piatti: [
      { nomePiatto: "ESPAGUETIS CON SALSA BOLOÑESA", prezzo: "9.0" },
      { nomePiatto: "MACARRONES A LA BOSCAIOLA", prezzo: 11.9 },
      { nomePiatto: "MACARRONES CON PESTO Y CHERRY TOMATE ASADO", prezzo: 9.9 },
      { nomePiatto: "ESPAGUETIS CON SALSA CARBONARA", prezzo: 12.5 }
    ]
  },
  {
    categoria: "TOSTADAS",
    piatti: [
      { nomePiatto: "AGUACATE CON HUEVO ESCALFADO Y BACON CRUJIENTE", prezzo: "9.0" },
      { nomePiatto: "CUATRO QUESOS Y BACON", prezzo: 11.9 }
    ]
  },
  {
    categoria: "PLATOS-DE-MI-CASA",
    piatti: [
       { nomePiatto: "HUEVOS ROTOS CON JAMÓN", prezzo: "9.0" },
       { nomePiatto: "AUTÉNTICA BERENJENA DE PARMESANO", prezzo: 11.5 },
       { nomePiatto: "CUATRO QUESOS Y BACON", prezzo: 11.9 },
       { nomePiatto: "LASAÑA TRADICIONAL ITALIANA", prezzo: 11.5 },
       { nomePiatto: "RÚCULA, TOMATE CHERRY ASADO, PARMESANO Y BALSÁMICO", prezzo: 6.9 },
       { nomePiatto: "BURRATA CON SALSA ITALIANA", prezzo: 10.9 },
       { nomePiatto: "CAPONATA (GUISO CLÁSICO DE LA COCINA SICILIANA)", prezzo: 8.5 },
       { nomePiatto: "SALTIMBOCCA DI POLLO ALLA ROMANA", prezzo: 11.9 },
       { nomePiatto: "PANCETTA ITALIANA AL FORNO CON GUARNICIÓN", prezzo: 14.9 }
    ]
  },
  {
     categoria: "HAMBURGUESAS",
     piatti: [
       {nomePiatto: "POLLO REBOZADO CON QUESO Y BACON", prezzo: 12.9},
       {nomePiatto: "DE TERNERA CASERA CON BACON Y QUESO", prezzo: 11.5},
       {nomePiatto: "BERENJENA Y CALABACÍN A LA PLANCHA, CEBOLLA CALAMERIZADA, PESTO Y MOZZARELLA", prezzo: 10.5},
       {nomePiatto: "CERDO IBERICO DESMIGADO EN SALSA DEL CHEF", prezzo: 10.5},
       {nomePiatto: "<strong>AÑADIR POR 1€ CADA INGREDIENTE</strong>", prezzo: ""},
       {nomePiatto: `<div class="dish_contents">
                               <ul
                                  class="d-flex flex-row align-items-start justify-content-start flex-wrap">
                                  <li>Bacon</li>
                                  <li>Queso</li>
                                  <li>Huevo frito</li>
                                  <li>Jalapeno</li>
                                  <li>Cebolla caramelizata</li>
                                  <li>Guacamole</li>
                                  <li>Tomate cherry asado</li>
                                  <li>Aguacate</li>
                                  <li>Mozzarella</li>
                               </ul>
                            </div>`, prezzo:""}
  ],
},
{
  categoria: "RISOTO",
  piatti: [
       {nomePiatto: "CARNE PICADA, CREMA DE CHAMPIÑONES, GUISANTES Y PARMESANO", prezzo: 11.5},
       {nomePiatto: "GUANCIALE, CREMA DE CALABACÍN Y PARMESANO", prezzo: 11.5},
       {nomePiatto: "A LA AUTÉNTICA SALSA CARBONARA", prezzo: 11.5},
  ],
},
{
  categoria: "BOCADILLOS",
  piatti: [
       {nomePiatto: "CALAMARES A LA ROMANA CON ALIOLI", prezzo: 9.9},
       {nomePiatto: "PECHUGA DE POLLO REBOZADO CON QUESO, BACON, LECHUGA, TOMATE Y MAYONESA", prezzo: 9.9},
       {nomePiatto: "JAMÓN, BURRATA, RÚCULA Y PESTO", prezzo: 11.9},
  ],
},
{
  categoria: "COCKTAILS", 
  piatti: [
    {nomePiatto: "RON & COLA",prezzo: "6.0"},
    {nomePiatto: "NEGRONI", prezzo: 6.5},
    {nomePiatto: "GIN & TÓNICA", prezzo: "6.0"},
    {nomePiatto: "CALIMOCHO", prezzo: 2.8},
    {nomePiatto: "VODKA, FANTA DE NARANJA", prezzo: 5.5},
    {nomePiatto: "PUERTO DE INDIAS Y TÓNICA", prezzo: "6.0"},
    {nomePiatto: "BAILEYS CON HIELO", prezzo: "5.0"},
    {nomePiatto: "PACHARÁN CON HIELO", prezzo: "4.0"},
    {nomePiatto: "LIMONCELLO CON HIELO", prezzo: 4.5},
  ],
},
{
  categoria: "CHUPITOS",
  piatti: [
  {nomePiatto: "VODKA",prezzo: 1.9},
    {nomePiatto: "WHISKY", prezzo: 2.2},
    {nomePiatto: "BAILEYS", prezzo: 2.2},
    {nomePiatto: "GRAPPA", prezzo: 2.5},
    {nomePiatto: "LIMONCELLO", prezzo: "2.0"},
    {nomePiatto: "RON", prezzo: "2.0"},
    {nomePiatto: "JÁGERMEISTER", prezzo: 1.9},
    {nomePiatto: "TEQUILA", prezzo: 1.9},
    {nomePiatto: "LICOR", prezzo: "2.0"},
  ],
},
{
  categoria: "CERVEZAS",
  piatti: [
    {nomePiatto: "ESTRELLA",prezzo: "1.65 - 2.1"},
    {nomePiatto: "DAMM LEMON", prezzo: "1.65 - 2.1"},
    {nomePiatto: "<strong>BOTELLA 1/3</strong>", prezzo: ""},
    {nomePiatto: "AMBAR", prezzo: 2.5},
    {nomePiatto: "VOLL DAMM", prezzo: 1.9},
    {nomePiatto: "PERONI", prezzo: 3.2},
    {nomePiatto: "MORETTI", prezzo: 3.2},
    {nomePiatto: "KELLER", prezzo: 2.2},
    {nomePiatto: "FREEDAMM SIN ALCOHOL CON O SIN LIMÓN", prezzo: 2.2},
  ],
},
{
  categoria: "REFRESCOS",
  piatti: [
    {nomePiatto: "COCA COLA/ZERO", prezzo: 2.2},
    {nomePiatto: "FANTA", prezzo: 2.2},
    {nomePiatto: "AQUARIUS", prezzo: 2.4},
    {nomePiatto: "NESTÉA", prezzo: 2.4},
    {nomePiatto: "TÓNICA", prezzo: 2.2},
    {nomePiatto: "AGUA (PEQUEÑA)", prezzo: 1.3},
    {nomePiatto: "AGUA (GRANDE)", prezzo: 2.5},
    {nomePiatto: "MOSTO", prezzo: 1.8},
    {nomePiatto: "AGUA CON GAS PEQUEÑA", prezzo: 1.5},
  ],
},
{
  categoria: "VINOS",
  piatti: [
    {nomePiatto: "VERDEJO BLANCO", prezzo: "2.5 - 14.9"},
    {nomePiatto: "SOMONTANO TINTO, BLANCO Y ROSADO", prezzo: "2.8 - 16.5"},
    {nomePiatto: "RIOJA CRIANZA", prezzo: "2.8 - 16.5"},
    {nomePiatto: "VINO DE LA CASA TINTO Y BLANCO", prezzo: "1.8 - 10.5"},
    {nomePiatto: "SANGRÍA 1L", prezzo: 13.5},
    {nomePiatto: "VERMUT", prezzo: "3.0"},
    {nomePiatto: "<strong>VINOS ITALIANOS</strong>  ", prezzo: ""},
    {nomePiatto: "LAMBRUSCO DOC TINTO", prezzo: "23.0"},
    {nomePiatto: "MONTALCINO DOC TINTO", prezzo: "44.0"},
    {nomePiatto: "PRIMITIVO IGT TINTO", prezzo: "25.0"},
  ],
},
{
  categoria: "PARA-PICAR",
  piatti: [
       {nomePiatto: "OLIVAS MARINADAS", prezzo: 1.5},
       {nomePiatto: "PATATA BOLSA", prezzo: 1.5}
  ],
},
{
  categoria: "POSTRES",
  piatti: [
       {nomePiatto: "TIRAMISU ITALIANO CASERO", prezzo: 5.9},
       {nomePiatto: "3 BOLAS DE HELADO CON SALSA DE CHOCOLATE (CHOCOLATE,VANILLA Y FRESA)", prezzo: 5.5},
       {nomePiatto: "TARTA DE QUESO CASERA", prezzo: 5.5}
  ],
},
{
  categoria: "TÉ-Y-CAFÉ",
  piatti: [
    {nomePiatto: "CARAJILLO", prezzo: 2.2},
    {nomePiatto: "CAFÉ CON LECHE", prezzo: 1.5},
    {nomePiatto: "COLA CAO", prezzo: 1.9},
    {nomePiatto: "CAPPUCCINO", prezzo: 1.5},
    {nomePiatto: "CORTADO", prezzo: 1.4},
    {nomePiatto: "ESPRESSO", prezzo: 1.3},
    {nomePiatto: "AMERICANO", prezzo: 1.3},
    {nomePiatto: "TÉ GRAN VARIEDAD, PREGUNTANOS", prezzo: 1.6},
    {nomePiatto: "<strong>Disponible leche de soja</strong>", prezzo: ""},
  ],
},

{
  categoria: "ZUMOS-Y-BATIDOS",
  piatti: [
    {nomePiatto: "ZUMO DE NARANJA RECIÉN EXPRIMIDA", prezzo: 3.2},
    {nomePiatto: "ZUMO DE ZANAHORIA, MANZANA Y LIMÓN RECIÉN HECHO", prezzo: 3.2},
    {nomePiatto: "ZUMO DE MELOCOTÓN", prezzo: 2.2},
    {nomePiatto: "ZUMO DE PIÑA", prezzo: 2.2},
    {nomePiatto: "BATIDOS DE MELÓN CON LECHE, YOGUR, MIEL Y MENTA", prezzo: 3.9},
    {nomePiatto: "BATIDOS DE BANANA, LECHE, YOGUR Y CHOCOLATE", prezzo: 3.9},
    {nomePiatto: "BATIDOS DE SANDÍA, LIMÓN Y MENTA", prezzo: 3.9},
  ],
},
{
  categoria: "MENU-INFANTIL",
  piatti: [
    {nomePiatto: "<strong>ENTRANTES (2 UNIDADES)</strong>", prezzo: "3.0"},
    {nomePiatto: "ARANCINI", prezzo: ""},
    {nomePiatto: "CROQUETA DE JAMON", prezzo: ""},
    {nomePiatto: "CROQUETA DE PASTA", prezzo: ""},
    {nomePiatto: "<strong>PLATOS PRINCIPALES</strong>", prezzo: "5.0"},
    {nomePiatto: "PECHUGA DE POLLO REBOZADA O A LA PLANCHA CON PATATAS FRITAS", prezzo: ""},
    {nomePiatto: "ESPAGUETIS CON QUESO", prezzo: ""},
    {nomePiatto: "ESPAGUETIS CON SALSA BOLOGNESA", prezzo: ""},
    {nomePiatto: "LASAÑA", prezzo: ""},
    {nomePiatto: "<strong>POSTRES</strong>", prezzo: 2.5},
    {nomePiatto: "BOLA DE HELADO CON SALSA DE CHOCOLATE", prezzo: ""},
    {nomePiatto: "TARTA DE QUESO CASERA", prezzo: ""},
    {nomePiatto: "<i>Para menores de 8 años</i>", prezzo: ""},
  ],
},

  // Aggiungi altre categorie e piatti secondo le tue esigenze
];
                   
                   function createDishElement(piatto) {
                       const dishElement = document.createElement('div');
                       dishElement.classList.add('dish');
                       
                       const innerHTML = `
                           <div class="dish_title_container d-flex flex-xl-row flex-column align-items-start justify-content-start">
                               <div class="dish_title">${piatto.nomePiatto}</div>
                               <div class="dish_price">${piatto.prezzo}</div>
                           </div>`;
                       
                       dishElement.innerHTML = innerHTML;
                       return dishElement;
                   }
                   
                   function createCategoryColumn(categoria) {
                       const categoriaColumn = document.createElement('div');
                       categoriaColumn.classList.add('col-lg-4');
                       categoriaColumn.classList.add('themenu_column');

                     
                   
                       const innerHTML = `
                           <div class="themenu_col">
                               <div class="themenu_col_title ${categoria.categoria.toLowerCase()}-toggle">${categoria.categoria}</div>
                               <div class="dish_list ${categoria.categoria.toLowerCase()}-content">
                                   ${categoria.piatti.map(piatto => createDishElement(piatto).outerHTML).join('')}
                               </div>
                           </div>`;
                       
                       categoriaColumn.innerHTML = innerHTML;
                       return categoriaColumn;
                   }
                   
                   const menuContainer = document.querySelector('.themenu_row');
                   
                   menu.forEach(categoria => {
                       const categoryColumn = createCategoryColumn(categoria);
                       menuContainer.appendChild(categoryColumn);
                   });


 