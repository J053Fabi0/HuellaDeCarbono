const formas = [
  {
    categoria: "Transporte",
    cards: [
      {
        titulo: "Usar transporte público o alternativa",
        resumen: "Si tienes la oportunidad de ir en bicicleta o en ",
        resto: "transporte público, puedes reducir drásticamente tus emisiones de carbono.",
        min: 0.6,
        max: 1,
        med: 0.8,
        img: "transporte publico.jpg",
        id: 0,
      },
      {
        titulo: "Compartir transporte privado",
        resumen: "Si compartes tu coche o le dices a un conocido ",
        resto:
          "que te lleve en su coche a un lugar a donde él también se dirige, quizá incluso te ayude a ahorrar algo de dinero si comparten las cuentas.",
        min: 0,
        max: 1,
        med: 0.3,
        img: "compartir transporte.jpg",
        id: 1,
      },
      {
        titulo: "Conducir eficientemente",
        resumen: "No, quizá no lo estés haciendo. Lee las ",
        resto:
          "siguientes recomendaciones para manejar eficientemente antes de seleccionar que ya haces esto: <a href='https://www.conduccioneficiente.cl' target='blank'>Conducción eficiente</a>. Ahí se muestran muchos tips para ahorrar combustible. Te ayudará también a ahorrar dinero.",
        min: 0.01,
        max: 1.46,
        med: 0.3,
        img: "conducir eficientemente.jpg",
        id: 2,
      },
      {
        titulo: "Cambiarse a un híbrido",
        resumen: "¡Cuidado! Esto tiene trampa: si la red eléctrica ",
        resto:
          "de tu localidad genera la energía con combustión fósil, termina siendo mejor usar un coche de gasolina. Además, no debes cambiar de coche a menos que tenga por lo menos 76,000 KM, aproximadamente. Por esto mismo, resulta que hacer este cambio puede ser incluso contraproducente, dependiendo de dónde vivas.",
        min: -0.2,
        max: 3.1,
        med: 0.7,
        img: "coche híbrido.jpg",
        id: 3,
        desabilita: [4, 5],
      },
      {
        titulo: "Carro 100% eléctrico",
        resumen: "¡Cuidado! Esto tiene trampa: si la red eléctrica ",
        resto:
          "de tu localidad genera la energía con combustión fósil, termina siendo mejor usar un coche de gasolina. Además, no debes cambiar de coche a menos que tenga por lo menos 76,000 KM, aproximadamente. Por esto mismo, resulta que hacer este cambio puede ser incluso contraproducente, dependiendo de dónde vivas.",
        min: -1.9,
        max: 5.4,
        med: 2,
        img: "coche eléctrico.jpg",
        id: 4,
        desabilita: [3, 5],
      },
      {
        titulo: "Vivir sin coche",
        resumen: "No compres un coche. Ten a la mano la bicicleta ",
        resto: "y usa transportes públicos o compartidos como alternativa.",
        min: 0.6,
        max: 3.6,
        med: 0,
        img: "vivir sin carro.jpg",
        id: 5,
        desabilita: [3, 4],
      },
      {
        titulo: "Trabajar desde casa",
        resumen: "Así no tienes que usar un transporte.",
        resto: "",
        min: 0.1,
        max: 1.4,
        med: 0.4,
        img: "trabajar desde casa.jpg",
        id: 6,
      },
      {
        titulo: "Evitar un vuelo largo",
        resumen: "Los combustibles necesarios para un vuelo de ",
        resto:
          "avión son muy contaminantes. Siempre es más ecológico en camión o incluso en tren, aunque esto no siempre sea lo más económico, claro.",
        min: 0.7,
        max: 4.5,
        med: 1.9,
        img: "vuelo largo.png",
        id: 7,
      },
      {
        titulo: "Evitar un vuelo corto",
        resumen: "Al evitar un vuelo corto también puedes ayudar ",
        resto: "a reducir tu huella de carbono. Viajar en camión o incluso en tren es mejor, aunque sea menos económico e incluso práctico.",
        min: 0.2,
        max: 1.5,
        med: 0.6,
        img: "vuelo corto.jpg",
        id: 8,
      },
    ],
  },
  {
    categoria: "Dieta",
    cards: [
      {
        titulo: "Seguir una dieta saludable",
        resumen: "Una dieta saludable tiene menos carnes rojas ",
        resto:
          "y procesados. Básicamente es hacerle caso a los nutricionistas. La ganadería contamina mucho, y reducir el consumo de carnes ayudará a contaminar menos.",
        min: 0.01,
        max: 1.3,
        med: 0.3,
        img: "dieta saludable.jpg",
        id: 9,
      },
      {
        titulo: "Dieta vegana",
        resumen: "Nada de producto animal. Al contrario de",
        resto:
          " lo que muchos piensan, los nutricionistas no han encontrado que una dieta vegana repercuta negativamente en la salud, pero solo si se sigue correctamente. Si planeas intentar esto, es recomendable acudir con un profesional.",
        min: 0.4,
        max: 2.1,
        med: 0.9,
        img: "dieta vegana.jpg",
        id: 10,
        desabilita: [11, 13],
      },
      {
        titulo: "Dieta vegetariana",
        resumen: "Sustituir la carne por alternativas vegetales. ",
        resto: "",
        min: 0.01,
        max: 1.5,
        med: 0.5,
        img: "dieta vegetariana.jpg",
        id: 11,
        desabilita: [10, 12, 13],
      },
      {
        titulo: "Insectos como fuente de proteína",
        resumen: "Sustituir la carne por insectos. Los insectos ",
        resto:
          "pueden proporcionar hasta 4 veces la cantidad de proteína que la carne, y liberan hasta <a href='https://comprarinsectoscomestibles.es/comer-insectos-comestibles-frenar-cambio-climatico/' target='blank'>2850 veces menos CO2</a> que la carne de vaca.<br>Por ejemplo, <a href='https://comprarinsectoscomestibles.es/insectos-comestibles-una-dieta-para-el-futuro-hoy/' target='blank'>si consumiéramos 100gms de  grillos nos aportarían 60 gms de proteína</a>, mientras que un filete de vacuno sólo 20gms.  A su vez nos daría el 20% de la fibra que necesitaríamos diariamente.<br>Existen proyectos como el <a href='https://thehiveexplorer.com/' target='blank'>Hive Explorer</a> que te ayudarán a generar tus propios insectos 100% comestibles. ¡No les tengas miedo, saben muy bien!",
        min: 0.01,
        max: 1.5,
        med: 0.5,
        img: "comer insectos.jpg",
        id: 12,
        desabilita: [11, 13],
      },
      {
        titulo: "No comer carne de vaca",
        resumen: "La carne de vaca o ternero es conocida",
        resto:
          " por ser la más contaminante de todas.<br>Puedes conocer las emisiones que causa cada alimento en <a href='https://ourworldindata.org/grapher/ghg-kcal-poore' target='blank'>esta tabla interactiva</a>.",
        min: 0,
        max: 1.25,
        med: 0.5,
        img: "no comer carne de vaca.jpg",
        id: 13,
        desabilita: [10, 11, 12],
      },
      {
        titulo: "Consumir productos regionales o locales",
        resumen: "Los productos regionales no requieren",
        resto: " mucho transporte para llegar hasta ti, y tampoco necesitan ambientes controlados para crecer.",
        min: 0,
        max: 1.1,
        med: 0.4,
        img: "productos regionales o locales.jpg",
        id: 14,
      },
      {
        titulo: "Consumir productos de temporada",
        resumen: "Aquellos productos que no requieren",
        resto:
          " calefactores ni tratos especiales  en cierta época del año, son los que se dan bien en esa temporada, por lo que se requiere menos energía para producirlos.",
        min: 0,
        max: 0.4,
        med: 0.2,
        img: "productos de temporada.jpg",
        id: 15,
      },
      {
        titulo: "Producir tus propios cultivos o comida",
        resumen: "Ya sea que tengas un jardín con algunos",
        resto: " cultivos o una pequeña granja, producir tu propia comida siempre beneficia al medio ambiente.",
        min: null,
        max: null,
        med: 0.4,
        img: "propia comida.jpg",
        id: 16,
      },
      {
        titulo: "Pedir comida ecológica en restaurantes",
        resumen: "Por lo que has leído arriba, algo ecológico",
        resto:
          " sería no pedir mucha carne (o directamente evitarla), preferir insectos, pedir productos de temporada y/o locales, entre otros.",
        min: null,
        max: null,
        med: 0.3,
        img: "restaurante comida buena.jpg",
        id: 17,
      },
      {
        titulo: "Menos comida procesada / alcohol",
        resumen: "No hay mucho que decir: evita comer procesados y/o alcohol.",
        resto: "",
        min: null,
        max: null,
        med: 0.2,
        img: "no alcohol.jpg",
        id: 18,
      },
    ],
  },
  {
    categoria: "El hogar",
    cards: [
      {
        titulo: "Generar tu propia energía sostenible",
        resumen: "Compra unos paneles solares. Es muy bueno",
        resto: " para reducir tu huella de carbono.",
        min: 0.1,
        max: 4.8,
        med: 1.3,
        img: "propia energía renovable.jpg",
        id: 19,
        desabilita: [20],
      },
      {
        titulo: "Comprar energía sostenible",
        resumen: "Si en tu localidad existe un servicio que ofrezca",
        resto: " energía sostenible, es buena idea comprarles esa valiosa energía.",
        min: 0.3,
        max: 2.5,
        med: 1.5,
        img: "comprar energía renovable.jpg",
        id: 20,
        desabilita: [19],
      },
      {
        titulo: "Electrodomésticos más eficientes",
        resumen: "Estufa eléctrica, refrigerador moderno,",
        resto: " microondas de último año, etc. Todo ayuda.",
        min: 0.01,
        max: 0.3,
        med: 0.1,
        img: "estufa electrica.jpg",
        id: 21,
      },
      {
        titulo: "Usar una bomba de calor",
        resumen: "Para calentar tu casa o el agua de la ducha,",
        resto: " usa una <a href='https://youtu.be/uHehqh6eGF8' target='blank'>bomba de calor</a>, que no ocupa gas fósil para funcionar.",
        min: 0.1,
        max: 1.3,
        med: 0.8,
        img: "bomba de calor.jpg",
        id: 22,
        desabilita: [23],
      },
      {
        titulo: "Usar un boiler solar o similar",
        resumen: "Calentar tu casa o agua con otros métodos sostenibles.",
        resto: "",
        min: 0.1,
        max: 1.3,
        med: 0.7,
        img: "boiler solar.jpg",
        id: 23,
        desabilita: [22],
      },
      {
        titulo: "Ahorrar agua caliente cuando sea posible",
        resumen: "En verano, ¿para qué quieres agua caliente?",
        resto:
          " Es buena idea acostumbrarte a usar agua fría si el agua caliente no es estrictamente necesaria. Es más, si realmente te interesa el planeta, no usarás agua caliente casi ni en invierno.",
        min: 0.1,
        max: 0.6,
        med: 0.3,
        img: "agua caliente.jpg",
        id: 24,
      },
      {
        titulo: "Mejor aislamiento",
        resumen: "No necesitas remodelar la casa, solo poner",
        resto:
          " algún aislamiento en el techo o las ventanas.<br>Identificar qué partes de la casa están peor aisladas y reforzarlas, tendrá un efecto positivo en el medio ambiente, porque se requerirá menos calefacción para mantener la casa a una temperatura adecuada.",
        min: null,
        max: null,
        med: 0.2,
        img: "aislar el techo.jpg",
        id: 25,
        desabilita: [26],
      },
      {
        titulo: "Remodelación y renovación de la casa",
        resumen: "Esto tiene que involucrar remodelar las paredes,",
        resto:
          " quizá el techo. Es una remodelación para mejorar el aislamiento de la casa.<br>La idea es detectar qué partes de la casa están peor aisladas y reforzarlas.",
        min: 0,
        max: 1.9,
        med: 0.9,
        img: "aislar la casa.jpg",
        id: 26,
        desabilita: [25],
      },
      {
        titulo: "Vivir en una casa pequeña / compartir vivienda",
        resumen: "",
        resto: "",
        min: 0,
        max: 1,
        med: 0.4,
        img: "casa pequeña.jpg",
        id: 27,
      },
      {
        titulo: "¡Vivir en una casa pasiva!",
        resumen: "¿Que qué es una casa pasiva?",
        resto:
          " En <a href='https://youtu.be/n0CeNAEzsp8' target='_blank'>este video</a> puedes saber.<br>Pero en pocas palabras, una casa pasiva es aquella que está construida de cierta forma que la energía requerida para climatizarla sea mínima. Son realmente fabulosas, porque combinan muchas técnicas para lograr esta eficiencia tan elevada.<br>Puede parecer que no disminuyen mucho la huella de carbono, pero es que los materiales y la construcción tienen su impacto, aunque al fin y al cabo, los beneficios superan a los gastos y resulta conveniente.",
        min: 0.1,
        max: 0.9,
        med: 0.5,
        img: "casa pasiva.jpg",
        id: 28,
      },
    ],
  },
  {
    categoria: "Otras cosas",
    cards: [
      {
        titulo: "Vivir sin mascotas",
        resumen: "Así es, tus mascotas son muy contaminantes, lamento decirlo.",
        resto: "",
        min: 0.01,
        max: 2.4,
        med: 0.8,
        img: "no mascotas.jpg",
        id: 29,
      },
      {
        titulo: "Menos compras y/o herramientas más duraderas",
        resumen: "Evidentemente, si consumes menos y",
        resto: " compras productos duraderos, pues ayudas al medio ambiente.",
        min: 0,
        max: 0.35,
        med: 0.15,
        img: "menos productos.jpg",
        id: 30,
      },
      {
        titulo: "Reciclar",
        resumen: "Aunque no lo parezca, reciclar no es",
        resto:
          " la mejor forma de reducir la huella de carbono según algunos estudios, aunque <b>sí que es excelente</b> para otros propósitos igualmente importantes, como reducir la cantidad de materia prima que consumimos. Si ya lo haces, ¡sigue así!",
        min: 0,
        max: 0.3,
        med: 0.1,
        img: "reciclar.jpg",
        id: 31,
      },
    ],
  },
];

const ghgPerCapita2 = {
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas (the)",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia (Plurinational State of)",
  BQ: "Bonaire, Sint Eustatius and Saba",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory (the)",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  CV: "Cabo Verde",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  KY: "Cayman Islands (the)",
  CF: "Central African Republic (the)",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands (the)",
  CO: "Colombia",
  KM: "Comoros (the)",
  CD: "Congo (the Democratic Republic of the)",
  CG: "Congo (the)",
  CK: "Cook Islands (the)",
  CR: "Costa Rica",
  HR: "Croatia",
  CU: "Cuba",
  CW: "Curaçao",
  CY: "Cyprus",
  CZ: "Czechia",
  CI: "Côte d'Ivoire",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic (the)",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  SZ: "Eswatini",
  ET: "Ethiopia",
  FK: "Falkland Islands (the) [Malvinas]",
  FO: "Faroe Islands (the)",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories (the)",
  GA: "Gabon",
  GM: "Gambia (the)",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island and McDonald Islands",
  VA: "Holy See (the)",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran (Islamic Republic of)",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "Korea (the Democratic People's Republic of)",
  KR: "Korea (the Republic of)",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic (the)",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands (the)",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia (Federated States of)",
  MD: "Moldova (the Republic of)",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands (the)",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger (the)",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands (the)",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestine, State of",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines (the)",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  MK: "Republic of North Macedonia",
  RO: "Romania",
  RU: "Russian Federation (the)",
  RW: "Rwanda",
  RE: "Réunion",
  BL: "Saint Barthélemy",
  SH: "Saint Helena, Ascension and Tristan da Cunha",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin (French part)",
  PM: "Saint Pierre and Miquelon",
  VC: "Saint Vincent and the Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome and Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SX: "Sint Maarten (Dutch part)",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia and the South Sandwich Islands",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan (the)",
  SR: "Suriname",
  SJ: "Svalbard and Jan Mayen",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania, United Republic of",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks and Caicos Islands (the)",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates (the)",
  GB: "United Kingdom of Great Britain and Northern Ireland (the)",
  UM: "United States Minor Outlying Islands (the)",
  US: "United States of America (the)",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela (Bolivarian Republic of)",
  VN: "Viet Nam",
  VG: "Virgin Islands (British)",
  VI: "Virgin Islands (U.S.)",
  WF: "Wallis and Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
  AX: "Åland Islands",
};

const countryListAllIsoData = [
  { code: "AF", code3: "AFG", name: "Afghanistan", number: "004" },
  { code: "AL", code3: "ALB", name: "Albania", number: "008" },
  { code: "DZ", code3: "DZA", name: "Algeria", number: "012" },
  { code: "AS", code3: "ASM", name: "American Samoa", number: "016" },
  { code: "AD", code3: "AND", name: "Andorra", number: "020" },
  { code: "AO", code3: "AGO", name: "Angola", number: "024" },
  { code: "AI", code3: "AIA", name: "Anguilla", number: "660" },
  { code: "AQ", code3: "ATA", name: "Antarctica", number: "010" },
  { code: "AG", code3: "ATG", name: "Antigua and Barbuda", number: "028" },
  { code: "AR", code3: "ARG", name: "Argentina", number: "032" },
  { code: "AM", code3: "ARM", name: "Armenia", number: "051" },
  { code: "AW", code3: "ABW", name: "Aruba", number: "533" },
  { code: "AU", code3: "AUS", name: "Australia", number: "036" },
  { code: "AT", code3: "AUT", name: "Austria", number: "040" },
  { code: "AZ", code3: "AZE", name: "Azerbaijan", number: "031" },
  { code: "BS", code3: "BHS", name: "Bahamas (the)", number: "044" },
  { code: "BH", code3: "BHR", name: "Bahrain", number: "048" },
  { code: "BD", code3: "BGD", name: "Bangladesh", number: "050" },
  { code: "BB", code3: "BRB", name: "Barbados", number: "052" },
  { code: "BY", code3: "BLR", name: "Belarus", number: "112" },
  { code: "BE", code3: "BEL", name: "Belgium", number: "056" },
  { code: "BZ", code3: "BLZ", name: "Belize", number: "084" },
  { code: "BJ", code3: "BEN", name: "Benin", number: "204" },
  { code: "BM", code3: "BMU", name: "Bermuda", number: "060" },
  { code: "BT", code3: "BTN", name: "Bhutan", number: "064" },
  { code: "BO", code3: "BOL", name: "Bolivia (Plurinational State of)", number: "068" },
  { code: "BQ", code3: "BES", name: "Bonaire, Sint Eustatius and Saba", number: "535" },
  { code: "BA", code3: "BIH", name: "Bosnia and Herzegovina", number: "070" },
  { code: "BW", code3: "BWA", name: "Botswana", number: "072" },
  { code: "BV", code3: "BVT", name: "Bouvet Island", number: "074" },
  { code: "BR", code3: "BRA", name: "Brazil", number: "076" },
  { code: "IO", code3: "IOT", name: "British Indian Ocean Territory (the)", number: "086" },
  { code: "BN", code3: "BRN", name: "Brunei Darussalam", number: "096" },
  { code: "BG", code3: "BGR", name: "Bulgaria", number: "100" },
  { code: "BF", code3: "BFA", name: "Burkina Faso", number: "854" },
  { code: "BI", code3: "BDI", name: "Burundi", number: "108" },
  { code: "CV", code3: "CPV", name: "Cabo Verde", number: "132" },
  { code: "KH", code3: "KHM", name: "Cambodia", number: "116" },
  { code: "CM", code3: "CMR", name: "Cameroon", number: "120" },
  { code: "CA", code3: "CAN", name: "Canada", number: "124" },
  { code: "KY", code3: "CYM", name: "Cayman Islands (the)", number: "136" },
  { code: "CF", code3: "CAF", name: "Central African Republic (the)", number: "140" },
  { code: "TD", code3: "TCD", name: "Chad", number: "148" },
  { code: "CL", code3: "CHL", name: "Chile", number: "152" },
  { code: "CN", code3: "CHN", name: "China", number: "156" },
  { code: "CX", code3: "CXR", name: "Christmas Island", number: "162" },
  { code: "CC", code3: "CCK", name: "Cocos (Keeling) Islands (the)", number: "166" },
  { code: "CO", code3: "COL", name: "Colombia", number: "170" },
  { code: "KM", code3: "COM", name: "Comoros (the)", number: "174" },
  { code: "CD", code3: "COD", name: "Congo (the Democratic Republic of the)", number: "180" },
  { code: "CG", code3: "COG", name: "Congo (the)", number: "178" },
  { code: "CK", code3: "COK", name: "Cook Islands (the)", number: "184" },
  { code: "CR", code3: "CRI", name: "Costa Rica", number: "188" },
  { code: "HR", code3: "HRV", name: "Croatia", number: "191" },
  { code: "CU", code3: "CUB", name: "Cuba", number: "192" },
  { code: "CW", code3: "CUW", name: "Curaçao", number: "531" },
  { code: "CY", code3: "CYP", name: "Cyprus", number: "196" },
  { code: "CZ", code3: "CZE", name: "Czechia", number: "203" },
  { code: "CI", code3: "CIV", name: "Côte d'Ivoire", number: "384" },
  { code: "DK", code3: "DNK", name: "Denmark", number: "208" },
  { code: "DJ", code3: "DJI", name: "Djibouti", number: "262" },
  { code: "DM", code3: "DMA", name: "Dominica", number: "212" },
  { code: "DO", code3: "DOM", name: "Dominican Republic (the)", number: "214" },
  { code: "EC", code3: "ECU", name: "Ecuador", number: "218" },
  { code: "EG", code3: "EGY", name: "Egypt", number: "818" },
  { code: "SV", code3: "SLV", name: "El Salvador", number: "222" },
  { code: "GQ", code3: "GNQ", name: "Equatorial Guinea", number: "226" },
  { code: "ER", code3: "ERI", name: "Eritrea", number: "232" },
  { code: "EE", code3: "EST", name: "Estonia", number: "233" },
  { code: "SZ", code3: "SWZ", name: "Eswatini", number: "748" },
  { code: "ET", code3: "ETH", name: "Ethiopia", number: "231" },
  { code: "FK", code3: "FLK", name: "Falkland Islands (the) [Malvinas]", number: "238" },
  { code: "FO", code3: "FRO", name: "Faroe Islands (the)", number: "234" },
  { code: "FJ", code3: "FJI", name: "Fiji", number: "242" },
  { code: "FI", code3: "FIN", name: "Finland", number: "246" },
  { code: "FR", code3: "FRA", name: "France", number: "250" },
  { code: "GF", code3: "GUF", name: "French Guiana", number: "254" },
  { code: "PF", code3: "PYF", name: "French Polynesia", number: "258" },
  { code: "TF", code3: "ATF", name: "French Southern Territories (the)", number: "260" },
  { code: "GA", code3: "GAB", name: "Gabon", number: "266" },
  { code: "GM", code3: "GMB", name: "Gambia (the)", number: "270" },
  { code: "GE", code3: "GEO", name: "Georgia", number: "268" },
  { code: "DE", code3: "DEU", name: "Germany", number: "276" },
  { code: "GH", code3: "GHA", name: "Ghana", number: "288" },
  { code: "GI", code3: "GIB", name: "Gibraltar", number: "292" },
  { code: "GR", code3: "GRC", name: "Greece", number: "300" },
  { code: "GL", code3: "GRL", name: "Greenland", number: "304" },
  { code: "GD", code3: "GRD", name: "Grenada", number: "308" },
  { code: "GP", code3: "GLP", name: "Guadeloupe", number: "312" },
  { code: "GU", code3: "GUM", name: "Guam", number: "316" },
  { code: "GT", code3: "GTM", name: "Guatemala", number: "320" },
  { code: "GG", code3: "GGY", name: "Guernsey", number: "831" },
  { code: "GN", code3: "GIN", name: "Guinea", number: "324" },
  { code: "GW", code3: "GNB", name: "Guinea-Bissau", number: "624" },
  { code: "GY", code3: "GUY", name: "Guyana", number: "328" },
  { code: "HT", code3: "HTI", name: "Haiti", number: "332" },
  { code: "HM", code3: "HMD", name: "Heard Island and McDonald Islands", number: "334" },
  { code: "VA", code3: "VAT", name: "Holy See (the)", number: "336" },
  { code: "HN", code3: "HND", name: "Honduras", number: "340" },
  { code: "HK", code3: "HKG", name: "Hong Kong", number: "344" },
  { code: "HU", code3: "HUN", name: "Hungary", number: "348" },
  { code: "IS", code3: "ISL", name: "Iceland", number: "352" },
  { code: "IN", code3: "IND", name: "India", number: "356" },
  { code: "ID", code3: "IDN", name: "Indonesia", number: "360" },
  { code: "IR", code3: "IRN", name: "Iran (Islamic Republic of)", number: "364" },
  { code: "IQ", code3: "IRQ", name: "Iraq", number: "368" },
  { code: "IE", code3: "IRL", name: "Ireland", number: "372" },
  { code: "IM", code3: "IMN", name: "Isle of Man", number: "833" },
  { code: "IL", code3: "ISR", name: "Israel", number: "376" },
  { code: "IT", code3: "ITA", name: "Italy", number: "380" },
  { code: "JM", code3: "JAM", name: "Jamaica", number: "388" },
  { code: "JP", code3: "JPN", name: "Japan", number: "392" },
  { code: "JE", code3: "JEY", name: "Jersey", number: "832" },
  { code: "JO", code3: "JOR", name: "Jordan", number: "400" },
  { code: "KZ", code3: "KAZ", name: "Kazakhstan", number: "398" },
  { code: "KE", code3: "KEN", name: "Kenya", number: "404" },
  { code: "KI", code3: "KIR", name: "Kiribati", number: "296" },
  { code: "KP", code3: "PRK", name: "Korea (the Democratic People's Republic of)", number: "408" },
  { code: "KR", code3: "KOR", name: "Korea (the Republic of)", number: "410" },
  { code: "KW", code3: "KWT", name: "Kuwait", number: "414" },
  { code: "KG", code3: "KGZ", name: "Kyrgyzstan", number: "417" },
  { code: "LA", code3: "LAO", name: "Lao People's Democratic Republic (the)", number: "418" },
  { code: "LV", code3: "LVA", name: "Latvia", number: "428" },
  { code: "LB", code3: "LBN", name: "Lebanon", number: "422" },
  { code: "LS", code3: "LSO", name: "Lesotho", number: "426" },
  { code: "LR", code3: "LBR", name: "Liberia", number: "430" },
  { code: "LY", code3: "LBY", name: "Libya", number: "434" },
  { code: "LI", code3: "LIE", name: "Liechtenstein", number: "438" },
  { code: "LT", code3: "LTU", name: "Lithuania", number: "440" },
  { code: "LU", code3: "LUX", name: "Luxembourg", number: "442" },
  { code: "MO", code3: "MAC", name: "Macao", number: "446" },
  { code: "MG", code3: "MDG", name: "Madagascar", number: "450" },
  { code: "MW", code3: "MWI", name: "Malawi", number: "454" },
  { code: "MY", code3: "MYS", name: "Malaysia", number: "458" },
  { code: "MV", code3: "MDV", name: "Maldives", number: "462" },
  { code: "ML", code3: "MLI", name: "Mali", number: "466" },
  { code: "MT", code3: "MLT", name: "Malta", number: "470" },
  { code: "MH", code3: "MHL", name: "Marshall Islands (the)", number: "584" },
  { code: "MQ", code3: "MTQ", name: "Martinique", number: "474" },
  { code: "MR", code3: "MRT", name: "Mauritania", number: "478" },
  { code: "MU", code3: "MUS", name: "Mauritius", number: "480" },
  { code: "YT", code3: "MYT", name: "Mayotte", number: "175" },
  { code: "MX", code3: "MEX", name: "Mexico", number: "484" },
  { code: "FM", code3: "FSM", name: "Micronesia (Federated States of)", number: "583" },
  { code: "MD", code3: "MDA", name: "Moldova (the Republic of)", number: "498" },
  { code: "MC", code3: "MCO", name: "Monaco", number: "492" },
  { code: "MN", code3: "MNG", name: "Mongolia", number: "496" },
  { code: "ME", code3: "MNE", name: "Montenegro", number: "499" },
  { code: "MS", code3: "MSR", name: "Montserrat", number: "500" },
  { code: "MA", code3: "MAR", name: "Morocco", number: "504" },
  { code: "MZ", code3: "MOZ", name: "Mozambique", number: "508" },
  { code: "MM", code3: "MMR", name: "Myanmar", number: "104" },
  { code: "NA", code3: "NAM", name: "Namibia", number: "516" },
  { code: "NR", code3: "NRU", name: "Nauru", number: "520" },
  { code: "NP", code3: "NPL", name: "Nepal", number: "524" },
  { code: "NL", code3: "NLD", name: "Netherlands (the)", number: "528" },
  { code: "NC", code3: "NCL", name: "New Caledonia", number: "540" },
  { code: "NZ", code3: "NZL", name: "New Zealand", number: "554" },
  { code: "NI", code3: "NIC", name: "Nicaragua", number: "558" },
  { code: "NE", code3: "NER", name: "Niger (the)", number: "562" },
  { code: "NG", code3: "NGA", name: "Nigeria", number: "566" },
  { code: "NU", code3: "NIU", name: "Niue", number: "570" },
  { code: "NF", code3: "NFK", name: "Norfolk Island", number: "574" },
  { code: "MP", code3: "MNP", name: "Northern Mariana Islands (the)", number: "580" },
  { code: "NO", code3: "NOR", name: "Norway", number: "578" },
  { code: "OM", code3: "OMN", name: "Oman", number: "512" },
  { code: "PK", code3: "PAK", name: "Pakistan", number: "586" },
  { code: "PW", code3: "PLW", name: "Palau", number: "585" },
  { code: "PS", code3: "PSE", name: "Palestine, State of", number: "275" },
  { code: "PA", code3: "PAN", name: "Panama", number: "591" },
  { code: "PG", code3: "PNG", name: "Papua New Guinea", number: "598" },
  { code: "PY", code3: "PRY", name: "Paraguay", number: "600" },
  { code: "PE", code3: "PER", name: "Peru", number: "604" },
  { code: "PH", code3: "PHL", name: "Philippines (the)", number: "608" },
  { code: "PN", code3: "PCN", name: "Pitcairn", number: "612" },
  { code: "PL", code3: "POL", name: "Poland", number: "616" },
  { code: "PT", code3: "PRT", name: "Portugal", number: "620" },
  { code: "PR", code3: "PRI", name: "Puerto Rico", number: "630" },
  { code: "QA", code3: "QAT", name: "Qatar", number: "634" },
  { code: "MK", code3: "MKD", name: "Republic of North Macedonia", number: "807" },
  { code: "RO", code3: "ROU", name: "Romania", number: "642" },
  { code: "RU", code3: "RUS", name: "Russian Federation (the)", number: "643" },
  { code: "RW", code3: "RWA", name: "Rwanda", number: "646" },
  { code: "RE", code3: "REU", name: "Réunion", number: "638" },
  { code: "BL", code3: "BLM", name: "Saint Barthélemy", number: "652" },
  { code: "SH", code3: "SHN", name: "Saint Helena, Ascension and Tristan da Cunha", number: "654" },
  { code: "KN", code3: "KNA", name: "Saint Kitts and Nevis", number: "659" },
  { code: "LC", code3: "LCA", name: "Saint Lucia", number: "662" },
  { code: "MF", code3: "MAF", name: "Saint Martin (French part)", number: "663" },
  { code: "PM", code3: "SPM", name: "Saint Pierre and Miquelon", number: "666" },
  { code: "VC", code3: "VCT", name: "Saint Vincent and the Grenadines", number: "670" },
  { code: "WS", code3: "WSM", name: "Samoa", number: "882" },
  { code: "SM", code3: "SMR", name: "San Marino", number: "674" },
  { code: "ST", code3: "STP", name: "Sao Tome and Principe", number: "678" },
  { code: "SA", code3: "SAU", name: "Saudi Arabia", number: "682" },
  { code: "SN", code3: "SEN", name: "Senegal", number: "686" },
  { code: "RS", code3: "SRB", name: "Serbia", number: "688" },
  { code: "SC", code3: "SYC", name: "Seychelles", number: "690" },
  { code: "SL", code3: "SLE", name: "Sierra Leone", number: "694" },
  { code: "SG", code3: "SGP", name: "Singapore", number: "702" },
  { code: "SX", code3: "SXM", name: "Sint Maarten (Dutch part)", number: "534" },
  { code: "SK", code3: "SVK", name: "Slovakia", number: "703" },
  { code: "SI", code3: "SVN", name: "Slovenia", number: "705" },
  { code: "SB", code3: "SLB", name: "Solomon Islands", number: "090" },
  { code: "SO", code3: "SOM", name: "Somalia", number: "706" },
  { code: "ZA", code3: "ZAF", name: "South Africa", number: "710" },
  { code: "GS", code3: "SGS", name: "South Georgia and the South Sandwich Islands", number: "239" },
  { code: "SS", code3: "SSD", name: "South Sudan", number: "728" },
  { code: "ES", code3: "ESP", name: "Spain", number: "724" },
  { code: "LK", code3: "LKA", name: "Sri Lanka", number: "144" },
  { code: "SD", code3: "SDN", name: "Sudan (the)", number: "729" },
  { code: "SR", code3: "SUR", name: "Suriname", number: "740" },
  { code: "SJ", code3: "SJM", name: "Svalbard and Jan Mayen", number: "744" },
  { code: "SE", code3: "SWE", name: "Sweden", number: "752" },
  { code: "CH", code3: "CHE", name: "Switzerland", number: "756" },
  { code: "SY", code3: "SYR", name: "Syrian Arab Republic", number: "760" },
  { code: "TW", code3: "TWN", name: "Taiwan", number: "158" },
  { code: "TJ", code3: "TJK", name: "Tajikistan", number: "762" },
  { code: "TZ", code3: "TZA", name: "Tanzania, United Republic of", number: "834" },
  { code: "TH", code3: "THA", name: "Thailand", number: "764" },
  { code: "TL", code3: "TLS", name: "Timor-Leste", number: "626" },
  { code: "TG", code3: "TGO", name: "Togo", number: "768" },
  { code: "TK", code3: "TKL", name: "Tokelau", number: "772" },
  { code: "TO", code3: "TON", name: "Tonga", number: "776" },
  { code: "TT", code3: "TTO", name: "Trinidad and Tobago", number: "780" },
  { code: "TN", code3: "TUN", name: "Tunisia", number: "788" },
  { code: "TR", code3: "TUR", name: "Turkey", number: "792" },
  { code: "TM", code3: "TKM", name: "Turkmenistan", number: "795" },
  { code: "TC", code3: "TCA", name: "Turks and Caicos Islands (the)", number: "796" },
  { code: "TV", code3: "TUV", name: "Tuvalu", number: "798" },
  { code: "UG", code3: "UGA", name: "Uganda", number: "800" },
  { code: "UA", code3: "UKR", name: "Ukraine", number: "804" },
  { code: "AE", code3: "ARE", name: "United Arab Emirates (the)", number: "784" },
  { code: "GB", code3: "GBR", name: "United Kingdom of Great Britain and Northern Ireland (the)", number: "826" },
  { code: "UM", code3: "UMI", name: "United States Minor Outlying Islands (the)", number: "581" },
  { code: "US", code3: "USA", name: "United States of America (the)", number: "840" },
  { code: "UY", code3: "URY", name: "Uruguay", number: "858" },
  { code: "UZ", code3: "UZB", name: "Uzbekistan", number: "860" },
  { code: "VU", code3: "VUT", name: "Vanuatu", number: "548" },
  { code: "VE", code3: "VEN", name: "Venezuela (Bolivarian Republic of)", number: "862" },
  { code: "VN", code3: "VNM", name: "Viet Nam", number: "704" },
  { code: "VG", code3: "VGB", name: "Virgin Islands (British)", number: "092" },
  { code: "VI", code3: "VIR", name: "Virgin Islands (U.S.)", number: "850" },
  { code: "WF", code3: "WLF", name: "Wallis and Futuna", number: "876" },
  { code: "EH", code3: "ESH", name: "Western Sahara", number: "732" },
  { code: "YE", code3: "YEM", name: "Yemen", number: "887" },
  { code: "ZM", code3: "ZMB", name: "Zambia", number: "894" },
  { code: "ZW", code3: "ZWE", name: "Zimbabwe", number: "716" },
  { code: "AX", code3: "ALA", name: "Åland Islands", number: "248" },
];
