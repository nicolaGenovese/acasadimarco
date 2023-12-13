const menu = [
    {
      categoria: "RACIONES",
      piatti: [
        { descrizione: "ARANCINO CLÁSICO ITALIANO (4 UNIDADES)", prezzo: 6.5 },
        { descrizione: "FRITTATINA NAPOLETANA (CROQUETA DE PASTA, 4 UNIDADES)", prezzo: 6.5 },
        { descrizione: "PAPAS BRAVAS", prezzo: 8.9 },
        { descrizione: "CALAMARES CON SALSA DE ALIOLI", prezzo: 10.5 },
        { descrizione: "NACHOS CON QUESO, GUACAMOLE, CHILI CON CARNE Y JALAPEÑOS", prezzo: 10.5 },
        { descrizione: "INVOLTINI DI MELANZANE RIPIENI IN SALSA CASERA", prezzo: 10.5 }
      ]
    },
    {
      categoria: "PASTA",
      piatti: [
        { descrizione: "ESPAGUETIS CON SALSA BOLOÑESA", prezzo: 9.0 },
        { descrizione: "MACARRONES A LA BOSCAIOLA", prezzo: 11.9 },
        { descrizione: "MACARRONES CON PESTO Y CHERRY TOMATE ASADO", prezzo: 9.9 },
        { descrizione: "ESPAGUETIS CON SALSA CARBONARA", prezzo: 12.5 }
      ]
    },
    {
      categoria: "TOSTADAS",
      piatti: [
        { descrizione: "AGUACATE CON HUEVO ESCALFADO Y BACON CRUJIENTE", prezzo: 9.0 },
        { descrizione: "CUATRO QUESOS Y BACON", prezzo: 11.9 }
      ]
    },
    // Aggiungi altre categorie e piatti secondo le tue esigenze
  ];



  const html = `<div class="col-lg-4 themenu_column">
  <div class="themenu_col">
     <div class="themenu_col_title raciones-toggle">RACIONES</div>
     <div class="dish_list raciones-content">
        <!-- Dish -->
        <div class="dish">
           <div
              class="dish_title_container d-flex flex-xl-row flex-column align-items-start justify-content-start">
              <div class="dish_title">ARANCINO CLÁSICO
                 ITALIANO (4 UNIDADES)</div>
              <div class="dish_price">6.5€</div>
           </div>
           <!-- <div class="dish_contents">
                                <ul class="d-flex flex-row align-items-start justify-content-start flex-wrap">
                                   <li>Pork</li>
                                   <li>Tenderloin</li>
                                   <li>Green Pepper</li>
                                </ul>
                                </div> -->
           <!-- <div class="dish_order"><a href="#">Order Now</a></div> -->
        </div>
        <!-- Dish -->
        <div class="dish">
           <div
              class="dish_title_container d-flex flex-xl-row flex-column align-items-start justify-content-start">
              <div class="dish_title">FRITTATINA NAPOLETANA
                 (CROQUETA DE PASTA, 4 UNIDADES)</div>
              <div class="dish_price">6.5€</div>
           </div>
           <!-- <div class="dish_contents">
                                <ul class="d-flex flex-row align-items-start justify-content-start flex-wrap">
                                   <li>Pork</li>
                                   <li>Tenderloin</li>
                                   <li>Green Pepper</li>
                                </ul>
                                </div> -->
           <!-- <div class="dish_order"><a href="#">Order Now</a></div> -->
        </div>
        <!-- Dish -->
        <div class="dish">
           <div
              class="dish_title_container d-flex flex-xl-row flex-column align-items-start justify-content-start">
              <div class="dish_title">PAPAS BRAVAS </div>
              <div class="dish_price">8.9€</div>
           </div>
           <!-- <div class="dish_contents">
                                <ul class="d-flex flex-row align-items-start justify-content-start flex-wrap">
                                   <li>Pork</li>
                                   <li>Tenderloin</li>
                                   <li>Green Pepper</li>
                                </ul>
                                </div> -->
           <!-- <div class="dish_order"><a href="#">Order Now</a></div> -->
        </div>
        <!-- Dish -->
        <div class="dish">
           <div
              class="dish_title_container d-flex flex-xl-row flex-column align-items-start justify-content-start">
              <div class="dish_title">CALAMARES CON SALSA DE
                 ALIOLI</div>
              <div class="dish_price">10.5€</div>
           </div>
           <!-- <div class="dish_contents">
                                <ul class="d-flex flex-row align-items-start justify-content-start flex-wrap">
                                   <li>Pork</li>
                                   <li>Tenderloin</li>
                                   <li>Green Pepper</li>
                                </ul>
                                </div> -->
           <!-- <div class="dish_order"><a href="#">Order Now</a></div> -->
        </div>
        <!-- Dish -->
        <div class="dish">
           <div
              class="dish_title_container d-flex flex-xl-row flex-column align-items-start justify-content-start">
              <div class="dish_title">NACHOS CON QUESO,
                 GUACAMOLE, CHILI CON CARNE Y JALAPEÑOS</div>
              <div class="dish_price">10.5€</div>
           </div>
           <!-- <div class="dish_contents">
                                <ul class="d-flex flex-row align-items-start justify-content-start flex-wrap">
                                   <li>Pork</li>
                                   <li>Tenderloin</li>
                                   <li>Green Pepper</li>
                                </ul>
                                </div> -->
           <!-- <div class="dish_order"><a href="#">Order Now</a></div> -->
        </div>
        <div class="dish">
           <div
              class="dish_title_container d-flex flex-xl-row flex-column align-items-start justify-content-start">
              <div class="dish_title">INVOLTINI DI MELANZANE
                 RIPIENI IN SALSA CASERA</div>
              <div class="dish_price">10.5€</div>
           </div>
           <!-- <div class="dish_contents">
                                <ul class="d-flex flex-row align-items-start justify-content-start flex-wrap">
                                   <li>Pork</li>
                                   <li>Tenderloin</li>
                                   <li>Green Pepper</li>
                                </ul>
                                </div> -->
           <!-- <div class="dish_order"><a href="#">Order Now</a></div> -->
        </div>
     </div>
  </div>
</div>`