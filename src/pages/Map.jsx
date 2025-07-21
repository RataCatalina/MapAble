import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Icon definitions
const iconRamp = new L.Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=Ga8griGzK974&format=png&color=000000',
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const iconToilet = new L.Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=cXHBuYVqUu4c&format=png&color=000000',
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const iconRestaurant = new L.Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=hDZAPBoj5SPu&format=png&color=000000',
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const iconCafe = new L.Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=12840&format=png&color=000000',
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const iconJob = new L.Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=20497&format=png&color=000000',
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const iconOrga = new L.Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=Q6qPgCQf6iZX&format=png&color=000000',
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const iconHot = new L.Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=3Vmqp9CYmbd7&format=png&color=000000',
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const iconPha = new L.Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=11934&format=png&color=000000',
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const iconMus = new L.Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=uGVCP6q9YD18&format=png&color=000000',
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const iconBank = new L.Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=ekfhFWx8X7C3&format=png&color=000000',
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

// Function to return icon based on category
const getIconByCategory = (category) => {
  switch (category) {
    case 'ramps':
      return iconRamp;
    case 'toilets':
      return iconToilet;
    case 'restaurants':
      return iconRestaurant;
    case 'cafes':
      return iconCafe;
    case 'jobs':
      return iconJob;
    case 'organizations':
      return iconOrga;
    case 'hotels':
      return iconHot;
    case 'pharmacy':
      return iconPha;
    case 'museum':
      return iconMus;
    case 'bank':
      return iconBank;
    default:
      return iconRamp;
  }
};

const AccessibleMap = () => {
  const [filter, setFilter] = useState('all');

  const allMarkers = [
      {
      position: [47.0105, 28.8638],
      description: 'Access ramp at Chișinău City Hall',
      category: 'ramps',
      urlLocation: 'https://maps.app.goo.gl/EAk1QZ6kDZUevyEr9',

    },
    {
      position: [47.014, 28.858],
      description: 'Accessible toilet in Central Park',
      category: 'toilets',
    },
    {
      position: [47.017, 28.869],
      description: 'Restaurant with accessible toilet',
      category: 'restaurants',
    },
    {
      position: [47.012, 28.861],
      description: 'Access ramp at the Municipal Library',
      category: 'ramps',
    },
    {
      position: [47.0225, 28.8314],
      description: 'Entrance ramp - Municipal Hospital No.1',
      category: 'ramps',
    },
    {
      position: [47.0262, 28.8371],
      description: 'Accessible WC - Kaufland Viaduct',
      category: 'toilets',
    },
    {
      position: [47.0341, 28.8405],
      description: 'Access ramp - State Pedagogical University',
      category: 'ramps',
    },
    {
      position: [47.0115, 28.8490],
      description: 'Pegas Restaurant - accessible entrance + toilet',
      category: 'restaurants',
    },
    {
      position: [47.0373, 28.8199],
      description: 'Accessible toilet - Valea Morilor Park',
      category: 'toilets',
    },
    {
      position: [47.0487, 28.8403],
      description: 'Access ramp - Atrium Shopping Center',
      category: 'ramps',
    },
    {
      position: [47.0165, 28.8693],
      description: 'Adapted toilet - National Library of Moldova',
      category: 'toilets',
    },
    {
      position: [47.0315, 28.8695],
      description: 'Andy s Pizza - accessible on Alba Iulia Street',
      category: 'restaurants',
    },
    {
      position: [47.0178, 28.8573],
      description: 'Ramp + elevator access - National Theatre Mihai Eminescu',
      category: 'ramps',
    },
    {
    position: [47.0213, 28.8452],
    description: 'Tucano Coffee - Bodoni Street, accessible entrance',
    category: 'cafes',
  },
  {
    position: [47.0109, 28.8404],
    description: 'Delice d Ange Café - ground floor, wide doors',
    category: 'cafes',
  },
  {
    position: [47.0332, 28.8647],
    description: 'Café de Italia - accessible sidewalk, WC partially adapted',
    category: 'cafes',
  },
  {
    position: [47.0288, 28.8315],
    description: 'Marlen Café - easy entrance, located near Dendrarium',
    category: 'cafes',
  },
  {
  position: [47.0355, 28.8312],
  description: 'ICT Center Tekwill - inclusive hiring and accessible building',
  category: 'jobs',
  },
  {
    position: [47.0198, 28.8457],
    description: 'Orange Moldova - inclusive HR policies and accessible headquarters',
    category: 'jobs',
  },
  {
    position: [47.0363, 28.8537],
    description: 'Endava Moldova - offices with elevators and remote job options',
    category: 'jobs',
  },
  {
    position: [47.0107, 28.8689],
    description: 'Moldcell - open to hiring persons with disabilities',
    category: 'jobs',
  },
  {
    position: [47.0180, 28.8720],
    description: 'Job Placement Center for Persons with Disabilities - info and support',
    category: 'jobs',
  },
  {
    position: [47.0180, 28.8720],
    description: 'Centrul pentru Drepturile Persoanelor cu Dizabilități Center for the Rights of Persons with Disabilities',
    category: 'organizations',
  },
  { 
    position: [47.017177, 28.835103],
    description: 'Agenție Aeriană Bilete de Avion iFly',
    category: 'organizations',
  },
  { 
    position: [47.05223332326585, 28.863842284655764],
    description: 'Compania IT Brilic Media',
    category: 'organizations',
  },
  { 
    position: [47.038774, 28.826282],
    description: 'Agenția Travel Business Tickets',
    category: 'organizations',
  },
  { 
    position: [47.049870, 28.863690],
    description: 'Compania Fitness Mama',
    category: 'organizations',
  },
  { 
    position: [47.03642543702815, 28.8143217441803],
    description: 'Compania de software Cedacri International',
    category: 'organizations',
  },
  { 
    position: [47.029235391480995, 28.84612767672119],
    description: 'Hub-ul HoReCa Grup',
    category: 'organizations',
  },
  { 
    position: [47.01714566628276, 28.844988728834054],
    description: 'Compania Moldtelecom',
    category: 'organizations',
  },
  { 
    position: [47.021256, 28.838355],
    description: 'Compania TELLUS',
    category: 'organizations',
  },
  { 
    position: [47.01184554369055, 28.879424374016356],
    description: 'Compania „Rodals” SRL',
    category: 'organizations',
  },
  { 
    position: [47.05674104982824, 28.86211919654723],
    description: 'Compania PandaShop',
    category: 'organizations',
  },
  { 
    position: [47.04672010564228, 28.864231384054854],
    description: 'Compania Decoratii.md',
    category: 'organizations',
  },
  { 
    position: [47.041905029553895, 28.81900762723482],
    description: 'Compania Unisolar - shiny solutions',
    category: 'organizations',
  },
  { 
    position: [47.013657, 28.856147],
    description: 'Bonus Market',
    category: 'organizations',
  },
  { 
    position: [47.049870, 28.863690],
    description: 'Compania Birovits',
    category: 'organizations',
  },
  { 
    position: [47.021690, 28.849847],
    description: 'Compania Magenta Consulting',
    category: 'organizations',
  },
  { 
    position: [47.058250, 28.857350],
    description: 'TryMyGames Studio',
    category: 'organizations',
  },
  { 
    position: [47.033100, 28.889700],
    description: 'Compania „Rodals” SRL',
    category: 'organizations',
  },
   { 
    position: [47.02169095423774, 28.84984650818465],
    description: 'Keystone Moldova',
    category: 'organizations',
  },
  { 
    position: [47.01932061661051, 28.828255520901486],
    description: 'Centrul pentru Drepturile Persoanelor cu Dizabilități',
    category: 'organizations',
  },
  { 
    position: [47.7487870142902, 28.97202011481933],
    description: 'Alianța INFONET',
    category: 'organizations',
  },
  { 
    position: [47.026141245386825, 28.82404348650818],
    description: 'Programul Naţiunilor Unite pentru Dezvoltare',
    category: 'organizations',
  },
  { 
    position: [47.028811705675786, 28.821086488340596],
    description: 'East Europe Foundation - Moldova',
    category: 'organizations',
  },
  { 
    position: [47.047257092842855, 28.896422686508163],
    description: 'Asociatia MOTIVATIE din Moldova',
    category: 'organizations',
  },
  { 
    position: [47.04502452027243, 28.882172169311392],
    description: 'Trattoria Della Nonna',
    category: 'restaurants',
  },
  { 
    position: [47.04923542104092, 28.889725269897284],
    description: 'Select Banquet Hall',
    category: 'restaurants',
  },
  { 
    position: [47.046954557717406, 28.88334088340582],
    description: 'Gud',
    category: 'restaurants',
  },
  { 
    position: [47.04622349114359, 28.891055645568663],
    description: 'Esushi',
    category: 'restaurants',
  },
  { 
    position: [47.02201223965561, 28.83646339842515],
    description: 'Andy s',
    category: 'restaurants',
  },
  { 
    position: [47.04526546784039, 28.890859592590186],
    description: 'La PLăcinte',
    category: 'restaurants',
  },
  { 
    position: [47.04924242041501, 28.891288744032565],
    description: 'Foișor',
    category: 'restaurants',
  },
  { 
    position: [47.0481404847345, 28.891288744032565],
    description: 'Don Cezar Pizza & Grill',
    category: 'restaurants',
  },
  { 
    position: [47.0138024026102, 28.85322979999986],
    description: 'Steak House',
    category: 'restaurants',
  },
  { 
    position: [47.04764925089662, 28.77892448465563],
    description: 'Butoiaș',
    category: 'restaurants',
  },
  { 
    position: [47.03188444752936, 28.78134065396715],
    description: 'Café de Paris',
    category: 'cafes',
  },
  { 
    position: [47.02038841500278, 28.80980615396714],
    description: 'Bonjour Café',
    category: 'cafes',
  },
  { 
    position: [47.0192766365416, 28.804029403674194],
    description: 'Filin Café',
    category: 'cafes',
  },
  { 
    position: [47.03941903442207, 28.88911744403259],
    description: 'Blúr Café',
    category: 'cafes',
  },
  { 
    position: [47.008540488923945, 28.864511115344094],
    description: 'Amfion Café',
    category: 'cafes',
  },
  { 
    position: [47.008540488923945, 28.864511115344094],
    description: 'Pegas Burger Café',
    category: 'cafes',
  },
  {
    position: [47.02712809004656, 28.845641888589935],
    description: 'Villa ACAEM',
    category: 'hotels',
  },
  {
    position: [47.0240002448976, 28.841954032217702],
    description: 'Salutaris Farm (filiala Varlaam)',
    category: 'pharmacy',
  },
  {
    position: [47.0198046326729, 28.8286881851804],
    description: 'Farmacia Felicia',
    category: 'pharmacy',
  },
  {
    position: [47.023373909233726, 28.825426619018312],
    description: 'Farmacie "ORIENT"',
    category: 'pharmacy',
  },
  {
    position: [47.01635215455761, 28.845768492187116],
    description: 'Felicia',
    category: 'pharmacy',
  },
  {
    position: [47.0159425236962, 28.847914259399015],
    description: 'Farmacia Familiei',
    category: 'pharmacy',
  },
  {
    position: [47.03413880619072, 28.843451063598266],
    description: 'Farmacia Hippocrates',
    category: 'pharmacy',
  },
  {
    position: [47.03805983882779, 28.828119407934313],
    description: 'Farmacia Familiei',
    category: 'pharmacy',
  },
  {
    position: [47.01429921029711, 28.855656554491922],
    description: 'Farmacie "ORIENT"',
    category: 'pharmacy',
  },
  {
    position: [47.010846376212405, 28.83591549614245],
    description: 'Farmacia Felicia',
    category: 'pharmacy',
  },
  {
    position: [47.029457869848365, 28.79501069999972],
    description: 'DITA Hyper Farmacie',
    category: 'pharmacy',
  },
  {
    position: [47.02381867240481, 28.827274329812692],
    description: 'Muzeul Național de Istorie a Moldovei',
    category: 'museum',
  },
  {
    position: [47.02256696536627, 28.84043658654044],
    description: 'Muzeul Național de Artă a Moldovei',
    category: 'museum',
  },
  {
    position: [47.1691850572534, 27.582077288031404],
    description: 'Casa Muzeelor',
    category: 'museum',
  },
  {
    position: [46.64040967365022, 27.72955390898385],
    description: 'Muzeul „Ștefan cel Mare” din Vaslui',
    category: 'museum',
  },
  {
    position: [47.16318180928456, 27.580775015868403],
    description: 'Muzeul Mitropolitan',
    category: 'museum',
  },
  {
    position: [47.14004041781806, 27.58523821166936],
    description: 'Palatul Culturii',
    category: 'museum',
  },
  {
    position: [47.158746463998675, 27.586268179931068],
    description: 'Muzeul de Artă',
    category: 'museum',
  },
  {
    position: [47.174968690241734, 27.573565238036625],
    description: 'Muzeul Militar National „Regele Ferdinand I“ Filiala Iasi',
    category: 'museum',
  },
  {
    position: [47.14004041781806, 27.586611502684974],
    description: 'Complexul Muzeul Național Moldova',
    category: 'museum',
  },
  {
    position: [47.161431059325594, 27.594851248778664],
    description: 'Muzeul municipal "Regina Maria" Burchi-Septilici',
    category: 'museum',
  },
  {
    position: [47.02196472634183, 28.837418751840863],
    description: 'maib',
    category: 'bank',
  },
  {
    position: [47.02243282284209, 28.83475800051811],
    description: 'Mobiasbanca - OTP Group',
    category: 'bank',
  },
  {
    position: [47.01898051467137, 28.83673210635406],
    description: 'Moldindconbank - Filiala "Centru"',
    category: 'bank',
  },
  {
    position: [47.04068235002831, 28.838534550811055],
    description: 'Banca Naţională a Moldovei',
    category: 'bank',
  },
  {
    position: [47.00534464154014, 28.839907841826673],
    description: 'FinComBank',
    category: 'bank',
  },
  {
    position: [47.026235954762896, 28.836903767740014],
    description: 'Bancomat MAIB',
    category: 'bank',
  },
  {
    position: [47.02442218718071, 28.83321404812554],
    description: 'FinComBank',
    category: 'bank',
  },
  {
    position: [47.02295942649907, 28.836903767740014],
    description: 'Victoriabank, Sucursala nr. 11 Chișinău',
    category: 'bank',
  },
  {
    position: [47.01699094755836, 28.844285206938938],
    description: 'EuroCreditBank - oficiul central',
    category: 'bank',
  },
  {
    position: [47.017576122051786, 28.84222527041552],
    description: 'maib',
    category: 'bank',
  },
  {
    position: [47.04015582255493, 28.83733292117239],
    description: 'maib bancomat',
    category: 'bank',
  },
  {
    position: [47.02032635627021, 28.84153862490771],
    description: 'Moldindconbank - Filiala "Premium"',
    category: 'bank',
  },
  {
    position: [47.02118280474022, 28.829021169311247],
    description: 'World Bank Group',
    category: 'bank',
  },
  {
    position: [47.00585015157079, 28.840093328124645],
    description: 'Victoriabank, Agenția nr.16 Chișinău, Shopping MallDova',
    category: 'bank',
  }
 
  ];

  const filteredMarkers =
    filter === 'all'
      ? allMarkers
      : allMarkers.filter((marker) => marker.category === filter);

  return (
 <section className="relative h-[calc(100vh-64px)] ">
  {/* Dropdown-ul fixat sus dreapta peste hartă */}
  <div className="absolute md:top-4 md:right-4 z-[1000] md:mr-[50px] right-2 top-2">
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="p-2 rounded-md border border-gray-400 shadow-sm text-base bg-white"
    >
      <option value="all">All locations</option>
      <option value="toilets">Accessible toilets</option>
      <option value="ramps">Ramps</option>
      <option value="restaurants">Restaurants</option>
      <option value="cafes">Cafés</option>
      <option value="jobs">Jobs</option>
      <option value="organizations">Organizations</option>
      <option value="hotels">Hotels</option>
      <option value="pharmacy">Pharmacy</option>
      <option value="museum">Museums</option>
      <option value="bank">Bank</option>
    </select>
  </div>

  {/* Harta pe toată secțiunea disponibilă */}
  <div className="absolute inset-0 z-0">
    <MapContainer
      center={[47.0105, 28.8638]}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {filteredMarkers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          icon={getIconByCategory(marker.category)}
        >
          <Popup>{marker.description}</Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
</section>

) }

export default AccessibleMap;
