type Continent = "Africa" | "Asia" | "Europe" | "Oceania" | "South America" | "North America";

export interface ICountry {
  code: string;
  name: string;
  ddd: string;
  mask: string;
}

const countries: Record<Continent, ICountry[]> = {
  Africa: [
    {
      name: "Algeria",
      ddd: "+213",
      code: "DZ",
      mask: "+213 ### ### ###",
    },
    {
      name: "Angola",
      ddd: "+244",
      code: "AO",
      mask: "+244 ### ### ###",
    },
    {
      name: "Benin",
      ddd: "+229",
      code: "BJ",
      mask: "+229 ### ### ##",
    },
    {
      name: "Botswana",
      ddd: "+267",
      code: "BW",
      mask: "+267 ### ####",
    },
    {
      name: "Burkina Faso",
      ddd: "+226",
      code: "BF",
      mask: "+226 ### ### ###",
    },
    {
      name: "Burundi",
      ddd: "+257",
      code: "BI",
      mask: "+257 ### ###",
    },
    {
      name: "Cabo Verde",
      ddd: "+238",
      code: "CV",
      mask: "+238 ### ## ##",
    },
    {
      name: "Cameroon",
      ddd: "+237",
      code: "CM",
      mask: "+237 ### ### ###",
    },
    {
      name: "Central African Republic",
      ddd: "+236",
      code: "CF",
      mask: "+236 ### ### ###",
    },
    {
      name: "Chad",
      ddd: "+235",
      code: "TD",
      mask: "+235 ### ### ###",
    },
    {
      name: "Comoros",
      ddd: "+269",
      code: "KM",
      mask: "+269 ### ####",
    },
    {
      name: "Congo",
      ddd: "+242",
      code: "CG",
      mask: "+242 ### ### ###",
    },
    {
      name: "Congo, Democratic Republic of the",
      ddd: "+243",
      code: "CD",
      mask: "+243 ### ### ###",
    },
    {
      name: "Djibouti",
      ddd: "+253",
      code: "DJ",
      mask: "+253 ### ###",
    },
    {
      name: "Egypt",
      ddd: "+20",
      code: "EG",
      mask: "+20 ### ### ####",
    },
    {
      name: "Equatorial Guinea",
      ddd: "+240",
      code: "GQ",
      mask: "+240 ### ###",
    },
    {
      name: "Eritrea",
      ddd: "+291",
      code: "ER",
      mask: "+291 ### ####",
    },
    {
      name: "Eswatini",
      ddd: "+268",
      code: "SZ",
      mask: "+268 ### ####",
    },
    {
      name: "Ethiopia",
      ddd: "+251",
      code: "ET",
      mask: "+251 ### ### ####",
    },
    {
      name: "Gabon",
      ddd: "+241",
      code: "GA",
      mask: "+241 ### ###",
    },
    {
      name: "Gambia",
      ddd: "+220",
      code: "GM",
      mask: "+220 ### ####",
    },
    {
      name: "Ghana",
      ddd: "+233",
      code: "GH",
      mask: "+233 ### ### ###",
    },
    {
      name: "Guinea",
      ddd: "+224",
      code: "GN",
      mask: "+224 ### ### ###",
    },
    {
      name: "Guinea-Bissau",
      ddd: "+245",
      code: "GW",
      mask: "+245 ### ####",
    },
    {
      name: "Ivory Coast",
      ddd: "+225",
      code: "CI",
      mask: "+225 ### ####",
    },
    {
      name: "Kenya",
      ddd: "+254",
      code: "KE",
      mask: "+254 ### ### ###",
    },
    {
      name: "Lesotho",
      ddd: "+266",
      code: "LS",
      mask: "+266 ### ####",
    },
    {
      name: "Liberia",
      ddd: "+231",
      code: "LR",
      mask: "+231 ### ### ###",
    },
    {
      name: "Libya",
      ddd: "+218",
      code: "LY",
      mask: "+218 ### ### ####",
    },
    {
      name: "Madagascar",
      ddd: "+261",
      code: "MG",
      mask: "+261 ## ### ##",
    },
    {
      name: "Malawi",
      ddd: "+265",
      code: "MW",
      mask: "+265 ### ### ###",
    },
    {
      name: "Mali",
      ddd: "+223",
      code: "ML",
      mask: "+223 ### ### ###",
    },
    {
      name: "Mauritania",
      ddd: "+222",
      code: "MR",
      mask: "+222 ### ### ###",
    },
    {
      name: "Mauritius",
      ddd: "+23#",
      code: "MU",
      mask: "+23# ### ####",
    },
    {
      name: "Morocco",
      ddd: "+212",
      code: "MA",
      mask: "+212 ### ### ###",
    },
    {
      name: "Mozambique",
      ddd: "+258",
      code: "MZ",
      mask: "+258 ### ### ###",
    },
    {
      name: "Namibia",
      ddd: "+264",
      code: "NA",
      mask: "+264 ### ### ###",
    },
    {
      name: "Niger",
      ddd: "+227",
      code: "NE",
      mask: "+227 ### ### ###",
    },
    {
      name: "Nigeria",
      ddd: "+234",
      code: "NG",
      mask: "+234 ### ### ####",
    },
    {
      name: "Rwanda",
      ddd: "+25#",
      code: "RW",
      mask: "+25# ### ### ###",
    },
    {
      name: "Sao Tome and Principe",
      ddd: "+239",
      code: "ST",
      mask: "+239 ### ### ###",
    },
    {
      name: "Senegal",
      ddd: "+221",
      code: "SN",
      mask: "+221 ### ### ###",
    },
    {
      name: "Seychelles",
      ddd: "+248",
      code: "SC",
      mask: "+248 ### ####",
    },
    {
      name: "Sierra Leone",
      ddd: "+232",
      code: "SL",
      mask: "+232 ### ### ###",
    },
    {
      name: "Somalia",
      ddd: "+252",
      code: "SO",
      mask: "+252 ### ### ###",
    },
    {
      name: "South Africa",
      ddd: "+27",
      code: "ZA",
      mask: "+27 ### ### ####",
    },
    {
      name: "South Sudan",
      ddd: "+211",
      code: "SS",
      mask: "+211 ### ### ###",
    },
    {
      name: "Sudan",
      ddd: "+249",
      code: "SD",
      mask: "+249 ### ### ###",
    },
    {
      name: "Togo",
      ddd: "+228",
      code: "TG",
      mask: "+228 ### ### ##",
    },
    {
      name: "Western Sahara",
      ddd: "+212",
      code: "EH",
      mask: "+212 ### ### ###",
    },
  ],
  Asia: [
    {
      name: "Afghanistan",
      ddd: "+93",
      code: "AF",
      mask: "+93 ### ### ###",
    },
    {
      name: "Armenia",
      ddd: "+374",
      code: "AM",
      mask: "+374 ## ### ###",
    },
    {
      name: "Azerbaijan",
      ddd: "+994",
      code: "AZ",
      mask: "+994 ## ### ##",
    },
    {
      name: "Bahrain",
      ddd: "+973",
      code: "BH",
      mask: "+973 ### ####",
    },
    {
      name: "Bangladesh",
      ddd: "+880",
      code: "BD",
      mask: "+880 ### ### ####",
    },
    {
      name: "Bhutan",
      ddd: "+975",
      code: "BT",
      mask: "+975 ## ####",
    },
    {
      name: "Brunei Darussalam",
      ddd: "+673",
      code: "BN",
      mask: "+673 ### ####",
    },
    {
      name: "Cambodia",
      ddd: "+855",
      code: "KH",
      mask: "+855 ### ### ###",
    },
    {
      name: "China",
      ddd: "+86",
      code: "CN",
      mask: "+86 ### ### ####",
    },
    {
      name: "Cyprus",
      ddd: "+357",
      code: "CY",
      mask: "+357 ## ### ###",
    },
    {
      name: "Georgia",
      ddd: "+995",
      code: "GE",
      mask: "+995 ### ### ###",
    },
    {
      name: "India",
      ddd: "+91",
      code: "IN",
      mask: "+91 #### ### ###",
    },
    {
      name: "Indonesia",
      ddd: "+62",
      code: "ID",
      mask: "+62 ### ### ###",
    },
    {
      name: "Iran",
      ddd: "+98",
      code: "IR",
      mask: "+98 ### ### ####",
    },
    {
      name: "Iraq",
      ddd: "+964",
      code: "IQ",
      mask: "+964 ### ### ###",
    },
    {
      name: "Israel",
      ddd: "+972",
      code: "IL",
      mask: "+972 ## ### ####",
    },
    {
      name: "Japan",
      ddd: "+81",
      code: "JP",
      mask: "+81 ## #### ####",
    },
    {
      name: "Jordan",
      ddd: "+962",
      code: "JO",
      mask: "+962 ### ### ###",
    },
    {
      name: "Kazakhstan",
      ddd: "+7",
      code: "KZ",
      mask: "+7 ### ### ####",
    },
    {
      name: "Kuwait",
      ddd: "+965",
      code: "KW",
      mask: "+965 ### ####",
    },
    {
      name: "Kyrgyzstan",
      ddd: "+996",
      code: "KG",
      mask: "+996 ### ### ###",
    },
    {
      name: "Laos",
      ddd: "+856",
      code: "LA",
      mask: "+856 ## ### ###",
    },
    {
      name: "Lebanon",
      ddd: "+961",
      code: "LB",
      mask: "+961 # ### ####",
    },
    {
      name: "Malaysia",
      ddd: "+60",
      code: "MY",
      mask: "+60 # #### ####",
    },
    {
      name: "Maldives",
      ddd: "+960",
      code: "MV",
      mask: "+960 ## ####",
    },
    {
      name: "Mongolia",
      ddd: "+976",
      code: "MN",
      mask: "+976 ## ####",
    },
    {
      name: "Myanmar",
      ddd: "+95",
      code: "MM",
      mask: "+95 ### ### ###",
    },
    {
      name: "Nepal",
      ddd: "+977",
      code: "NP",
      mask: "+977 ### ####",
    },
    {
      name: "Oman",
      ddd: "+968",
      code: "OM",
      mask: "+968 ### ####",
    },
    {
      name: "Pakistan",
      ddd: "+92",
      code: "PK",
      mask: "+92 ### ### ####",
    },
    {
      name: "Palestine",
      ddd: "+970",
      code: "PS",
      mask: "+970 # ### ####",
    },
    {
      name: "Philippines",
      ddd: "+63",
      code: "PH",
      mask: "+63 ### ### ####",
    },
    {
      name: "Qatar",
      ddd: "+974",
      code: "QA",
      mask: "+974 ### ####",
    },
    {
      name: "Saudi Arabia",
      ddd: "+966",
      code: "SA",
      mask: "+966 ### ### ####",
    },
    {
      name: "Singapore",
      ddd: "+65",
      code: "SG",
      mask: "+65 #### ####",
    },
    {
      name: "South Korea",
      ddd: "+82",
      code: "KR",
      mask: "+82 ## #### ####",
    },
    {
      name: "Sri Lanka",
      ddd: "+94",
      code: "LK",
      mask: "+94 ### ### ####",
    },
    {
      name: "Syria",
      ddd: "+963",
      code: "SY",
      mask: "+963 ### ### ###",
    },
    {
      name: "Taiwan",
      ddd: "+886",
      code: "TW",
      mask: "+886 ### ### ###",
    },
    {
      name: "Tajikistan",
      ddd: "+992",
      code: "TJ",
      mask: "+992 ### ### ###",
    },
    {
      name: "Thailand",
      ddd: "+66",
      code: "TH",
      mask: "+66 ### ### ###",
    },
    {
      name: "Timor-Leste",
      ddd: "+67#",
      code: "TL",
      mask: "+67# ### ###",
    },
    {
      name: "Turkey",
      ddd: "+9#",
      code: "TR",
      mask: "+9# ### ### ####",
    },
    {
      name: "Turkmenistan",
      ddd: "+993",
      code: "TM",
      mask: "+993 ### ### ###",
    },
    {
      name: "United Arab Emirates",
      ddd: "+971",
      code: "AE",
      mask: "+971 ### ### ####",
    },
    {
      name: "Uzbekistan",
      ddd: "+998",
      code: "UZ",
      mask: "+998 ### ### ###",
    },
    {
      name: "Vietnam",
      ddd: "+84",
      code: "VN",
      mask: "+84 ### ### ###",
    },
  ],
  Europe: [
    {
      name: "Albania",
      ddd: "+355",
      code: "AL",
      mask: "+355 ## ### ###",
    },
    {
      name: "Andorra",
      ddd: "+376",
      code: "AD",
      mask: "+376 ### ###",
    },
    {
      name: "Austria",
      ddd: "+43",
      code: "AT",
      mask: "+43 ### ### ####",
    },
    {
      name: "Belarus",
      ddd: "+375",
      code: "BY",
      mask: "+375 ## ### ##",
    },
    {
      name: "Belgium",
      ddd: "+32",
      code: "BE",
      mask: "+32 ### ### ###",
    },
    {
      name: "Bosnia and Herzegovina",
      ddd: "+387",
      code: "BA",
      mask: "+387 ## ### ###",
    },
    {
      name: "Bulgaria",
      ddd: "+359",
      code: "BG",
      mask: "+359 ## ### ###",
    },
    {
      name: "Croatia",
      ddd: "+385",
      code: "HR",
      mask: "+385 ## ### ###",
    },
    {
      name: "Cyprus",
      ddd: "+357",
      code: "CY",
      mask: "+357 ## ### ###",
    },
    {
      name: "Czech Republic",
      ddd: "+420",
      code: "CZ",
      mask: "+420 ### ### ###",
    },
    {
      name: "Denmark",
      ddd: "+45",
      code: "DK",
      mask: "+45 ## ## ##",
    },
    {
      name: "Estonia",
      ddd: "+372",
      code: "EE",
      mask: "+372 ### ####",
    },
    {
      name: "Finland",
      ddd: "+358",
      code: "FI",
      mask: "+358 ## #### ##",
    },
    {
      name: "France",
      ddd: "+33",
      code: "FR",
      mask: "+33 # ## ## ##",
    },
    {
      name: "Germany",
      ddd: "+49",
      code: "DE",
      mask: "+49 ### ### ####",
    },
    {
      name: "Greece",
      ddd: "+30",
      code: "GR",
      mask: "+30 ## #######",
    },
    {
      name: "Hungary",
      ddd: "+36",
      code: "HU",
      mask: "+36 ## ### ###",
    },
    {
      name: "Iceland",
      ddd: "+354",
      code: "IS",
      mask: "+354 ### ###",
    },
    {
      name: "Ireland",
      ddd: "+353",
      code: "IE",
      mask: "+353 ### ### ###",
    },
    {
      name: "Italy",
      ddd: "+39",
      code: "IT",
      mask: "+39 ### ### ###",
    },
    {
      name: "Kosovo",
      ddd: "+383",
      code: "XK",
      mask: "+383 ## ### ###",
    },
    {
      name: "Latvia",
      ddd: "+371",
      code: "LV",
      mask: "+371 ## ### ###",
    },
    {
      name: "Liechtenstein",
      ddd: "+423",
      code: "LI",
      mask: "+423 ## ###",
    },
    {
      name: "Lithuania",
      ddd: "+370",
      code: "LT",
      mask: "+370 ## ### ###",
    },
    {
      name: "Luxembourg",
      ddd: "+352",
      code: "LU",
      mask: "+352 ## ###",
    },
    {
      name: "Malta",
      ddd: "+356",
      code: "MT",
      mask: "+356 ## ###",
    },
    {
      name: "Moldova",
      ddd: "+373",
      code: "MD",
      mask: "+373 ### ###",
    },
    {
      name: "Monaco",
      ddd: "+377",
      code: "MC",
      mask: "+377 ### ###",
    },
    {
      name: "Montenegro",
      ddd: "+382",
      code: "ME",
      mask: "+382 ## ### ###",
    },
    {
      name: "Netherlands",
      ddd: "+31",
      code: "NL",
      mask: "+31 ## ### ###",
    },
    {
      name: "North Macedonia",
      ddd: "+389",
      code: "MK",
      mask: "+389 ## ### ###",
    },
    {
      name: "Norway",
      ddd: "+47",
      code: "NO",
      mask: "+47 ## ## ##",
    },
    {
      name: "Poland",
      ddd: "+48",
      code: "PL",
      mask: "+48 ### ### ###",
    },
    {
      name: "Portugal",
      ddd: "+351",
      code: "PT",
      mask: "+351 ### ### ###",
    },
    {
      name: "Romania",
      ddd: "+40",
      code: "RO",
      mask: "+40 ### ### ###",
    },
    {
      name: "San Marino",
      ddd: "+378",
      code: "SM",
      mask: "+378 ## ### ###",
    },
    {
      name: "Serbia",
      ddd: "+381",
      code: "RS",
      mask: "+381 ### ### ###",
    },
    {
      name: "Slovakia",
      ddd: "+421",
      code: "SK",
      mask: "+421 ### ### ###",
    },
    {
      name: "Slovenia",
      ddd: "+386",
      code: "SI",
      mask: "+386 ## ### ###",
    },
    {
      name: "Spain",
      ddd: "+34",
      code: "ES",
      mask: "+34 ### ### ###",
    },
    {
      name: "Sweden",
      ddd: "+46",
      code: "SE",
      mask: "+46 ### ### ####",
    },
    {
      name: "Switzerland",
      ddd: "+41",
      code: "CH",
      mask: "+41 ## ### ####",
    },
    {
      name: "Ukraine",
      ddd: "+380",
      code: "UA",
      mask: "+380 ## ### ###",
    },
  ],
  Oceania: [
    {
      name: "American Samoa",
      ddd: "+1 684",
      code: "AS",
      mask: "+1 684 ### ####",
    },
    {
      name: "Australia",
      ddd: "+61",
      code: "AU",
      mask: "+61 ## ### ####",
    },
    {
      name: "Cook Islands",
      ddd: "+682",
      code: "CK",
      mask: "+682 ## ###",
    },
    {
      name: "Fiji",
      ddd: "+679",
      code: "FJ",
      mask: "+679 ### ###",
    },
    {
      name: "French Polynesia",
      ddd: "+689",
      code: "PF",
      mask: "+689 ## ## ##",
    },
    {
      name: "Guam",
      ddd: "+1 671",
      code: "GU",
      mask: "+1 671 ### ####",
    },
    {
      name: "Kiribati",
      ddd: "+686",
      code: "KI",
      mask: "+686 ## ###",
    },
    {
      name: "Marshall Islands",
      ddd: "+692",
      code: "MH",
      mask: "+692 ## ####",
    },
    {
      name: "Nauru",
      ddd: "+674",
      code: "NR",
      mask: "+674 ## ###",
    },
    {
      name: "New Caledonia",
      ddd: "+687",
      code: "NC",
      mask: "+687 ## ## ##",
    },
    {
      name: "New Zealand",
      ddd: "+64",
      code: "NZ",
      mask: "+64 ## ### ###",
    },
    {
      name: "Niue",
      ddd: "+683",
      code: "NU",
      mask: "+683 ## ###",
    },
    {
      name: "Norfolk Island",
      ddd: "+672",
      code: "NF",
      mask: "+672 ## ###",
    },
    {
      name: "Palau",
      ddd: "+680",
      code: "PW",
      mask: "+680 ## ####",
    },
    {
      name: "Papua New Guinea",
      ddd: "+675",
      code: "PG",
      mask: "+675 ## ###",
    },
    {
      name: "Samoa",
      ddd: "+685",
      code: "WS",
      mask: "+685 ## ###",
    },
    {
      name: "Solomon Islands",
      ddd: "+677",
      code: "SB",
      mask: "+677 ## ###",
    },
    {
      name: "Tonga",
      ddd: "+676",
      code: "TO",
      mask: "+676 #####",
    },
    {
      name: "Tuvalu",
      ddd: "+688",
      code: "TV",
      mask: "+688 ## ###",
    },
  ],
  "South America": [
    {
      name: "Argentina",
      ddd: "+54",
      code: "AR",
      mask: "+54 ###-####",
    },
    {
      name: "Bolivia",
      ddd: "+591",
      code: "BO",
      mask: "+591 ##-###-###",
    },
    {
      name: "Brazil",
      ddd: "+55",
      code: "BR",
      mask: "+55 (##) #####-####",
    },
    {
      name: "Chile",
      ddd: "+56",
      code: "CL",
      mask: "+56 9 #### ####",
    },
    {
      name: "Colombia",
      ddd: "+57",
      code: "CO",
      mask: "+57 ### ### ####",
    },
    {
      name: "Ecuador",
      ddd: "+593",
      code: "EC",
      mask: "+593 ##-###-####",
    },
    {
      name: "Guyana",
      ddd: "+592",
      code: "GY",
      mask: "+592 ###-###-###",
    },
    {
      name: "Paraguay",
      ddd: "+595",
      code: "PY",
      mask: "+595 ### ### ###",
    },
    {
      name: "Peru",
      ddd: "+51",
      code: "PE",
      mask: "+51 ##-###-###",
    },
    {
      name: "Suriname",
      ddd: "+597",
      code: "SR",
      mask: "+597 ###-###",
    },
    {
      name: "Uruguay",
      ddd: "+598",
      code: "UY",
      mask: "+598 ##-###-###",
    },
    {
      name: "Venezuela",
      ddd: "+58",
      code: "VE",
      mask: "+58 ##-###-###",
    },
  ],
  "North America": [
    {
      name: "Antigua and Barbuda",
      ddd: "+1 268",
      code: "AG",
      mask: "+1 268 ### ####",
    },
    {
      name: "Bahamas",
      ddd: "+1 242",
      code: "BS",
      mask: "+1 242 ### ####",
    },
    {
      name: "Barbados",
      ddd: "+1 246",
      code: "BB",
      mask: "+1 246 ### ####",
    },
    {
      name: "Belize",
      ddd: "+501",
      code: "BZ",
      mask: "+501 ###-####",
    },
    {
      name: "Canada",
      ddd: "+1",
      code: "CA",
      mask: "+1 ###-###-####",
    },
    {
      name: "Costa Rica",
      ddd: "+506",
      code: "CR",
      mask: "+506 ###-####",
    },
    {
      name: "Cuba",
      ddd: "+53",
      code: "CU",
      mask: "+53 ###-###-###",
    },
    {
      name: "Dominica",
      ddd: "+1 767",
      code: "DM",
      mask: "+1 767 ### ####",
    },
    {
      name: "Dominican Republic",
      ddd: "+1 809",
      code: "DO",
      mask: "+1 809 ###-####",
    },
    {
      name: "El Salvador",
      ddd: "+503",
      code: "SV",
      mask: "+503 ###-####",
    },
    {
      name: "Grenada",
      ddd: "+1 473",
      code: "GD",
      mask: "+1 473 ### ####",
    },
    {
      name: "Guatemala",
      ddd: "+502",
      code: "GT",
      mask: "+502 ###-####",
    },
    {
      name: "Haiti",
      ddd: "+509",
      code: "HT",
      mask: "+509 ##-####",
    },
    {
      name: "Honduras",
      ddd: "+504",
      code: "HN",
      mask: "+504 ###-####",
    },
    {
      name: "Jamaica",
      ddd: "+1 876",
      code: "JM",
      mask: "+1 876 ### ####",
    },
    {
      name: "Mexico",
      ddd: "+52",
      code: "MX",
      mask: "+52 ##-###-####",
    },
    {
      name: "Nicaragua",
      ddd: "+505",
      code: "NI",
      mask: "+505 ###-####",
    },
    {
      name: "Panama",
      ddd: "+507",
      code: "PA",
      mask: "+507 ###-####",
    },
    {
      name: "Saint Kitts and Nevis",
      ddd: "+1 869",
      code: "KN",
      mask: "+1 869 ### ####",
    },
    {
      name: "Saint Lucia",
      ddd: "+1 758",
      code: "LC",
      mask: "+1 758 ### ####",
    },
    {
      name: "Saint Vincent and the Grenadines",
      ddd: "+1 784",
      code: "VC",
      mask: "+1 784 ### ####",
    },
    {
      name: "Trinidad and Tobago",
      ddd: "+1 868",
      code: "TT",
      mask: "+1 868 ###-####",
    },
    {
      name: "United States",
      ddd: "+1",
      code: "US",
      mask: "+1 ###-###-####",
    },
  ],
};

function sortCountriesByName(countries: ICountry[]): ICountry[] {
  return countries.slice().sort((a, b) => a.name.localeCompare(b.name));
}

const countriesByContinent = Object.keys(countries).reduce(
  (sorted, continent) => {
    const continentKey = continent as Continent;
    sorted[continentKey] = sortCountriesByName(countries[continentKey]);
    return sorted;
  },
  {} as Record<Continent, ICountry[]>
);

export { countriesByContinent };
