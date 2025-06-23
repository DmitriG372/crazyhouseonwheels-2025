import { Trip } from '../types/Trip';

export const tripData: Trip = {
  name: "CrazyHouseOnWheels 2025",
  startDate: "2025-06-27",
  endDate: "2025-07-06",
  days: [
    {
      id: 1,
      date: "2025-06-27",
      dayNumber: 1,
      startLocation: {
        name: "Tallinn",
        coordinates: [59.437, 24.7536]
      },
      endLocation: {
        name: "Molėtai",
        coordinates: [55.1720084, 25.4326486]
      },
      distance: "580 km",
      duration: "7h 31min",
      activities: [
        { time: "14:00", description: "Camperi kättesaamine Tallinnas" },
        { time: "15:00", description: "Start teele Molėtai suunas (~7.5 tundi sõitu + peatused)" },
        { time: "17:30", description: "Peatus Lätis, Salacgrīvas: tankimine, jalutus koertega, kerge eine" },
        { time: "20:30", description: "Peatus Leedus, Panevėžysis: tankimine, toidupood (nt Rimi)" },
        { time: "22:30", description: "Saabumine kämpingusse Molėtais, check-in" },
        { time: "23:00", description: "Õhtusöök camperis" },
        { time: "23:30", description: "Öörahuks valmistumine, magama" }
      ],
      stops: [
        { 
          name: "Circle K Salacgrīva", 
          type: "paus koerte ja keha kinnitamiseks", 
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Circle+K+Salacgrīva"
        },
        { 
          name: "Rimi Supermarket, Panevėžys", 
          type: "tankimine ja toiduvarude täiendamine",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rimi+Supermarket+Panevėžys"
        }
      ],
      accommodation: {
        name: "Molėtų Kempingas \"Ežero krantas\"",
        address: "Kranto g. 16, Rutonių k., Inturkės sen., Molėtų rajonas, Leedu",
        coordinates: [55.158612, 25.500381],
        contact: {
          phone: "+370 698 22810",
          email: "moletukempingas@gmail.com",
          website: "http://moletukempingas.lt/"
        },
        amenities: ["Vesi", "Elekter", "Mänguväljak", "Grillimisvõimalus", "Ujumiskoht", "Paadirent"],
        notes: [
          "Privaatne, hästi hooldatud kämping Leedu järve ääres", 
          "Looduskaunis ja rahulik piirkond",
          "Sobib laste ja koertega – palju vaba ruumi ja vaikne atmosfäär",
          "Võib olla keskmisest kallim, kuid vastab kvaliteedile"
        ],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Molėtų+Kempingas+Ežero+krantas"
      },
      googleMapsUrl: "https://www.google.com/maps/dir/Tallinn,+Harju+County,+Estonia/Ainaži,+Ainažu+pilsēta,+Limbaži+Municipality,+Latvia/Panevėžys,+Panevėžys+City+Municipality,+Lithuania/Molėtų+Kempingas,+Lietuva/"
    },
    {
      id: 2,
      date: "2025-06-28",
      dayNumber: 2,
      startLocation: {
        name: "Molėtai",
        coordinates: [55.158612, 25.500381]
      },
      endLocation: {
        name: "Giżycko",
        coordinates: [54.036896, 21.698325]
      },
      distance: "397 km",
      duration: "5h 21min",
      activities: [
        { time: "08:00", description: "Äratus ja hommikusöök kämpingus" },
        { time: "09:00", description: "Camperi ettevalmistus ja check-out" },
        { time: "09:30", description: "Start suunal Giżycko" },
        { time: "12:15", description: "Tankimine + poekülastus Suwałki kandis (nt Biedronka)" },
        { time: "13:45", description: "Lõunapaus + jalutus koertega Augustów kandis (nt McDonald's + roheala)" },
        { time: "16:30", description: "Saabumine Giżycko piirkonda" },
        { time: "17:00", description: "Check-in kämpingus" },
        { time: "19:00", description: "Õhtusöök camperis või kohapealses restoranis" },
        { time: "20:00", description: "Õhtune jalutuskäik Masuuria järve ääres / lastega mänguväljak" },
        { time: "21:30", description: "Valmistumine magamiseks" }
      ],
      stops: [
        { 
          name: "Suwałki (PL)", 
          type: "tankimine ja toiduvarude täiendamine",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Biedronka,+Ignacego+Krasickiego+1,+Suwałki"
        },
        { 
          name: "Augustów (PL)", 
          type: "sobilik koht lõunapausiks ja jalutuseks",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=McDonald's,+Wojska+Polskiego+69/B,+Augustów"
        }
      ],
      accommodation: {
        name: "Elixir Hotelik Caravan Camping",
        address: "Guty 9, 11-500 Giżycko",
        coordinates: [54.036896, 21.698325],
        contact: {
          phone: "+48 87 428 28 26 / +48 602 715 753",
          website: "https://www.elixirhotel.com/"
        },
        amenities: ["Caravan parkimine", "Elekter", "Duššid", "Restoran", "Ujumiskoht", "Jalgrattarent"],
        notes: [
          "Tripadvisoris hinnatud keskmiselt 3/5, #1 kämping Giżycko piirkonnas",
          "Otse Masuuria järve ääres, vaikne ja looduslik keskkond",
          "Kõrghooajal nõutav minimaalselt 3 ööd, aga see võib olla paindlik reisijate ja hooaja järgi",
          "Hinnakiri puudub, hind sõltub hooajast ja inimeste arvust – soovitatav ette ühendust võtta",
          "Lemmikloomad lubatud (võimalik lisatasu)"
        ],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Elixir+Hotelik+Caravan+Camping"
      },
      googleMapsUrl: "https://www.google.com/maps/dir/Molėtų+Kempingas,+Lietuva/Biedronka,+Ignacego+Krasickiego+1,+Suwałki,+Polska/Restauracja+McDonald's,+Wojska+Polskiego+69%2FB,+Augustów,+Poland/Elixir+Hotelik+Caravaning,+Guty+9,+Poland/"
    },
    {
      id: 3,
      date: "2025-06-29",
      dayNumber: 3,
      startLocation: {
        name: "Giżycko",
        coordinates: [54.036896, 21.698325]
      },
      endLocation: {
        name: "Wieliczka",
        coordinates: [49.98738, 20.06473]
      },
      distance: "610 km",
      duration: "6h 50min",
      activities: [
        { time: "06:30", description: "Äratus ja hommikusöök kämpingus" },
        { time: "07:30", description: "Check-out ja start suunal Wieliczka (~8.5h koos pausidega)" },
        { time: "11:30", description: "Peatus Piasecznos (Varssavi lähedal): lõuna ja koerte jalutus" },
        { time: "12:30", description: "Sõit jätkub" },
        { time: "15:30", description: "Saabumine Wieliczkasse: tankimine + toidupoe külastus" },
        { time: "16:00", description: "Saabumine ja check-in: CamperPark Parking Trabant" },
        { time: "16:15", description: "Camper paigale + ettevalmistus ekskursiooniks" },
        { time: "17:30", description: "Wieliczka soolakaevanduse ekskursioon – individuaaltuur" },
        { time: "19:30", description: "Ekskursiooni lõpp, õhtusöök camperis või lähedal asuvas restoranis" },
        { time: "21:00", description: "Õhtune jalutuskäik kaevanduse pargis või kämpingu alal" },
        { time: "22:30", description: "Magama" }
      ],
      stops: [
        { 
          name: "Piaseczno (Varssavi lähedal)", 
          type: "lõunapaus ja jalutus",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=McDonald's+Piaseczno"
        },
        { 
          name: "Wieliczka (PL)", 
          type: "tankimine ja pood",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lidl,+Tadeusza+Kościuszki+36,+Wieliczka"
        }
      ],
      accommodation: {
        name: "CamperPark – Parking Trabant, Wieliczka",
        address: "Edwarda Dembowskiego 23, 32-020 Wieliczka, Poola (otse soolakaevanduse kõrval)",
        coordinates: [49.984895, 20.0545468],
        contact: {
          email: "info@camperpark.pl"
        },
        price: "25-40 PLN/öö",
        amenities: ["Elekter", "WC", "Dušš", "WiFi"],
        notes: ["Otse kaevanduse kõrval", "Ideaalne ekskursiooniks"],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=CamperPark+Parking+Trabant+Wieliczka"
      },
      specialActivities: [
        {
          name: "Wieliczka Soolakaevanduse ekskursioon",
          address: "Daniłowicza 10, Wieliczka, Poland",
          time: "17:30",
          description: "Tourist Route – Individual Tour (English), broneering: #1234837 (KINNITATUD)",
          website: "https://bilety.kopalnia.pl/",
          coordinates: [49.98738, 20.06473]
        }
      ],
      googleMapsUrl: "https://www.google.com/maps/dir/Elixir+Hotelik+Caravaning,+Guty+9,+11-500+Giżycko,+Poola/Aleja+Józefa+Grzecznarowskiego+40,+26-610+Radom,+Poola/Tadeusza+Kościuszki+36,+32-020+Wieliczka,+Poola/Edwarda+Dembowskiego+23,+32-020+Wieliczka,+Poola/"
    },
    {
      id: 4,
      date: "2025-06-30",
      dayNumber: 4,
      startLocation: {
        name: "Wieliczka",
        coordinates: [49.98738, 20.06473]
      },
      endLocation: {
        name: "Wrocław (Siechnice)",
        coordinates: [51.017196, 17.164966]
      },
      distance: "282 km",
      duration: "3h 30min",
      activities: [
        { time: "08:00", description: "Äratus ja hommikusöök camperis" },
        { time: "09:00", description: "Check-out ja sõit outlet'i (ca 30 min)" },
        { time: "09:30", description: "Saabumine Factory Kraków Outlet'i" },
        { time: "10:00", description: "Factory Kraków Outlet – 3h shoping (koolitarbed, rõivad, lasteriided)" },
        { time: "13:00", description: "Start suunal Wrocław (260 km, u 3h koos peatusega)" },
        { time: "14:30", description: "Lõuna ja tankimine A4 kiirtee teenindusjaamas (MOP) Opole lähedal" },
        { time: "16:30", description: "Saabumine Camp4U, check-in" },
        { time: "17:00", description: "Lõõgastus: ujumine, mänguväljak, jalutuskäik" },
        { time: "19:30", description: "Õhtusöök camperis või foodtruckis" },
        { time: "21:00", description: "Jalutuskäik metsas, koertega" },
        { time: "22:30", description: "Magama" }
      ],
      stops: [
        { 
          name: "Factory Kraków Outlet", 
          type: "ostlemine: rõivad, jalatsid, koolitarbed",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Factory+Kraków,+Profesora+Adama+Rożańskiego+32,+Modlniczka"
        },
        { 
          name: "A4 kiirtee teeninduspunkt", 
          type: "tankimine + lõuna: A4 kiirtee teenindusjaamas",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Orleni+teenindusjaamad+A4+kiirteel"
        }
      ],
      accommodation: {
        name: "Camp4U, Siechnice (Wrocław)",
        address: "ul. Opolska 46, 55-011 Siechnice, PL",
        coordinates: [51.017196, 17.164966],
        contact: {
          phone: "+48 664 359 458",
          email: "info@camp4u.pl",
          website: "https://camp4u.pl/"
        },
        price: "50 PLN",
        amenities: ["Vaikne ja looduslähedane", "Bassein", "Mänguväljak", "Grilliala", "Rattarent"],
        notes: ["Camperikoht 50 PLN", "Kõik vajalikud mugavused", "Lemmikloomasõbralik"],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Camp4U+Siechnice"
      },
      specialActivities: [
        {
          name: "Factory Kraków Outlet",
          address: "Prof. A. Rożańskiego 32, 32-085 Modlniczka, PL",
          time: "10:00–13:00",
          description: "3h shopping: rõivad, jalatsid, koolitarbed. Avatud 10:00–21:00",
          website: "https://factorykrakow.pl/",
          coordinates: [50.1095581, 19.845848]
        }
      ],
      googleMapsUrl: "https://www.google.com/maps/dir/Parking+Trabant+Wieliczka+Kopalnia+Soli+-+Camper+Park,+Camper,+Car,+Edwarda+Dembowskiego+23,+Wieliczka,+Polska/Factory+Kraków,+Profesora+Adama+Rożańskiego+32,+Modlniczka,+Poland/CAMP4U,+Opolska+46,+Zębice,+Polska/"
    },
    {
      id: 5,
      date: "2025-07-01",
      dayNumber: 5,
      startLocation: {
        name: "Wrocław",
        coordinates: [51.017196, 17.164966]
      },
      endLocation: {
        name: "Brühl",
        coordinates: [50.8289401, 6.8756241]
      },
      distance: "863 km",
      duration: "9h 40min",
      activities: [
        { time: "08:00", description: "Äratus, hommikusöök kämpingus" },
        { time: "09:00", description: "Check-out ja start suunal Brühl (~860 km, ~10h koos pausidega)" },
        { time: "13:00", description: "Lõunapaus ja jalutuskäik koertega (nt Raststätte Eichelborn Nord Erfurdi lähedal)" },
        { time: "16:00", description: "Tankimine + puhkepaus (nt Raststätte Bühleck Süd Kasseli lähedal)" },
        { time: "19:00", description: "Saabumine Camping Heider Bergsee, check-in" },
        { time: "19:30", description: "Jalutuskäik järve ääres / vaba aeg laste ja koertega" },
        { time: "20:30", description: "Õhtusöök camperis või väligrillil" },
        { time: "21:30", description: "Rahulik õhtu kämpingus, valmistumine homseks Phantasialandiks" },
        { time: "22:30", description: "Magama" }
      ],
      stops: [
        { 
          name: "Lõuna Erfurdi kandis", 
          type: "sobilik peatuskoht otse A4 kiirtee ääres, kus on restoran ja võimalus koertega jalutada",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tank+Rast+Raststätte+Eichelborn+Nord"
        },
        { 
          name: "Tankimine + paus Kasseli kandis", 
          type: "peatuskoht A44 kiirtee ääres, mis jääb täpselt optimaalsele marsruudile",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tank+Rast+Raststätte+Bühleck+Süd"
        }
      ],
      accommodation: {
        name: "Camping Heider Bergsee, Brühl",
        address: "Heider Bergsee, 50321 Brühl, Saksamaa",
        coordinates: [50.82944, 6.8764],
        contact: {
          phone: "+49 2232 701150",
          email: "schirmer@heiderbergsee.de",
          website: "https://heiderbergsee.de/"
        },
        price: "25-35 €/öö (2 in + camper), elekter ja dušš lisatasu eest",
        amenities: ["Elekter", "Dušid", "Restoran", "Rand", "Mänguväljak"],
        notes: [
          "Otse järve ääres, vaid 10 min jalutada Brühli keskusest",
          "Ideaalne baas Phantasialandi külastuseks järgmisel päeval",
          "Rahulik ja looduslähedane, lemmikloomasõbralik",
          "Broneeri ette, kui võimalik – kõrghooaeg!"
        ],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Camping+Heider+Bergsee"
      },
      googleMapsUrl: "https://www.google.com/maps/dir/CAMP4U,+Opolska+46,+Zębice,+Polska/Camping+Heider+Bergsee,+Heider+Bergsee,+Brühl,+Deutschland/"
    },
    {
      id: 6,
      date: "2025-07-02",
      dayNumber: 6,
      startLocation: {
        name: "Brühl",
        coordinates: [50.8289401, 6.8756241]
      },
      endLocation: {
        name: "Nürburgring",
        coordinates: [50.32066, 6.93777]
      },
      distance: "77 km",
      duration: "1h",
      activities: [
        { time: "08:00", description: "Äratus, hommikusöök kämpingus" },
        { time: "09:00", description: "Sõit Phantasialand parklasse (~15 min)" },
        { time: "09:30", description: "Saabumine parki, sissepääs (park avatud 09:00–18:00)" },
        { time: "10:00", description: "Atraktsioonid ja peretegevused: teemamaailmad, Ameerika mäed, veeatraktsioonid" },
        { time: "13:00", description: "Lõuna Phantasialandi territooriumil" },
        { time: "16:30", description: "Väljaminek pargist, suveniirid, tualetid, ettevalmistus sõiduks" },
        { time: "17:00", description: "Sõit suunal Nürburgring (~77 km, u 1h)" },
        { time: "18:00", description: "Saabumine Camping am Nürburgring, check-in" },
        { time: "19:00", description: "Õhtusöök matkaautos või kämpingu restoranis" },
        { time: "20:00", description: "Jalutuskäik ringraja ääres / koertega" },
        { time: "22:00", description: "Magama" }
      ],
      stops: [
        { 
          name: "Phantasialand", 
          type: "lõbustuspark",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phantasialand+Brühl"
        }
      ],
      accommodation: {
        name: "Camping am Nürburgring",
        address: "Kreisstraße 72, 53520 Müllenbach",
        coordinates: [50.32066, 6.93777],
        contact: {
          phone: "+49 2692 224",
          email: "rezeption@camping-am-nuerburgring.de",
          website: "https://www.camping-am-nuerburgring.de/"
        },
        price: "~40 €/2 päeva",
        notes: ["Otse raja kõrval", "Maksmine sularahas"],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Camping+am+Nürburgring"
      },
      specialActivities: [
        {
          name: "Phantasialand",
          address: "Berggeiststraße 31-41, 50321 Brühl",
          time: "09:00–18:00",
          description: "Atraktsioonid avatakse kell 10:00, park suletakse kell 18:00. Piletid ainult veebist: phantasialand.de. Soovitused: Hommikul vara kohale, et jõuda atraktsioonidele esimeste seas. Palavuse korral veemänguala ja siseruumid. Võimalusel vaheldada intensiivseid ja rahulikumaid atraktsioone.",
          website: "https://www.phantasialand.de/de/",
          coordinates: [50.7983, 6.8788]
        }
      ],
      notes: [
        "Koerad Phantasialandis: Ei ole lubatud parki siseneda – jäävad matkaautosse", 
        "Seetõttu sobib see päev ainult lühiajaliseks külastuseks (~6–7h) ja kiireks naasmiseks kämpingusse"
      ],
      googleMapsUrl: "https://www.google.com/maps/dir/Camping+Heider+Bergsee+Brühl/Phantasialand/Camping+am+Nürburgring/"
    },
    {
      id: 7,
      date: "2025-07-03",
      dayNumber: 7,
      startLocation: {
        name: "Camping am Nürburgring",
        coordinates: [50.32066, 6.93777]
      },
      endLocation: {
        name: "Eschwege",
        coordinates: [51.191557, 10.0683472]
      },
      distance: "295 km",
      duration: "3h 27min",
      activities: [
        { time: "08:00", description: "Äratus ja hommikusöök kämpingus" },
        { time: "09:00", description: "Jalutuskäik raja ääres, Nürburgringi külastuskeskuse tiir (kingipood, vaateplats)" },
        { time: "11:00", description: "Lõuna ettevalmistus matkaautos või kohalikus restoranis" },
        { time: "12:00", description: "Puhkus, ettevalmistus rajapäevaks – dokumentide, riiete ja joogivee kontroll" },
        { time: "15:45", description: "Saabumine RSRNurburg kontorisse (Antoniusweg 1a, 53520 Nürburg)" },
        { time: "16:00–17:00", description: "Registreerimine, briifing ja ettevalmistus" },
        { time: "17:00–18:00", description: "Nürburgringi sõit (rendiauto koos instruktoriga)" },
        { time: "18:30", description: "Lühike lõõgastus, suveniirid ja kerge eine" },
        { time: "19:00", description: "Start Eschwege suunal" },
        { time: "22:30", description: "Saabumine KNAUS Campingpark Eschwegesse, registreerimine ja puhkus" }
      ],
      stops: [],
      accommodation: {
        name: "KNAUS Campingpark Eschwege",
        address: "Am Werratalsee 2, 37269 Eschwege, Saksamaa",
        coordinates: [51.191557, 10.0683472],
        contact: {
          phone: "+49 (0)5651 3388-83",
          email: "eschwege@knauscamp.de",
          website: "https://knauscamp.de/"
        },
        price: "Hooajaväline ACSI ~27 €/öö, tipphooaeg kuni ~45 €/öö",
        amenities: ["Elekter", "Dušš", "Jalutusalad", "Laste mänguväljak", "Restoran", "Rattarent"],
        notes: ["Otse Werratalsee järve kaldal, looduskaunis", "Lemmikloomad: Lubatud, rahulik ja jalutamiseks sobiv ümbrus"],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=KNAUS+Campingpark+Eschwege"
      },
      specialActivities: [
        {
          name: "Nürburgring rajasõit - Rent4Ring",
          address: "Antoniusweg 1a, 53520 Nürburg",
          time: "17:00–18:00",
          description: "Nürburgringi sõit (rendiauto koos instruktoriga). Start: 17:00, Check-in & briefing: vähemalt 1h enne – 16:00. Kaasa võtta: juhiluba (füüsiline), ID-kaart, krediitkaart, sobivad jalanõud. Kiiver antakse kohapeal, rajariietus pole kohustuslik.",
          website: "https://www.rent4ring.de/en/",
          coordinates: [50.345174, 6.9580951]
        }
      ],
      notes: ["Broneering: Rent4Ring #BK11714"],
      googleMapsUrl: "https://www.google.com/maps/dir/Antoniusweg+1,+Nürburg,+Deutschland/KNAUS+Campingpark+Eschwege,+Am+Werratalsee+2,+Eschwege,+Deutschland/"
    },
    {
      id: 8,
      date: "2025-07-04",
      dayNumber: 8,
      startLocation: {
        name: "Eschwege",
        coordinates: [51.191557, 10.0683472]
      },
      endLocation: {
        name: "Poznań",
        coordinates: [52.403565, 16.9833791]
      },
      distance: "593 km",
      duration: "6h 15min",
      activities: [
        { time: "08:00", description: "Äratus ja hommikusöök kämpingus" },
        { time: "09:00", description: "Check-out ja start teele Poznań suunas (~593 km, ~8h koos pausidega)" },
        { time: "12:30", description: "Lõunapaus A2 kiirteel Frankfurt (Oder) kandis (tankla + restoran + jalutus koertega)" },
        { time: "16:00", description: "Peatus A2 kiirtee ääres Nowy Tomyśl kandis poekülatuseks (nt Lidl, Biedronka)" },
        { time: "17:30", description: "Saabumine Poznańi, Camping Malta check-in" },
        { time: "18:30", description: "Jalutuskäik Malta järve ääres, laste mänguväljak" },
        { time: "19:30", description: "Õhtusöök camperis või kohapealses restoranis Rycerska" },
        { time: "21:00", description: "Rahulik õhtu – ujumine, jalutuskäik, puhkus" },
        { time: "22:30", description: "Magama" }
      ],
      stops: [
        { 
          name: "Frankfurt (Oder) kant", 
          type: "lõunapaus + tankimine + koerte jalutus",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=McDonald's+MOP+Briesen+A2"
        },
        { 
          name: "Nowy Tomyśl kant", 
          type: "poekülatuse peatus",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lidl+Nowy+Tomyśl"
        }
      ],
      accommodation: {
        name: "Camping Malta",
        address: "ul. Krańcowa 98, 61-036 Poznań, Poola",
        coordinates: [52.403565, 16.9833791],
        contact: {
          phone: "+48 61 876 62 03",
          email: "camping@malta.poznan.pl",
          website: "https://campingmalta.poznan.pl"
        },
        amenities: ["Elekter", "Dušš", "Mänguväljak", "Restoran", "Jalgrattarent", "Malta järv"],
        notes: [
          "Malta järve ääres, 10 min Poznańi keskusest", 
          "Lemmikloomad lubatud",
          "Ligipääs spaa, loomaaed, veesuusatamiskeskus lähedal"
        ],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Camping+Malta+Krańcowa+98+Poznań"
      },
      googleMapsUrl: "https://www.google.com/maps/dir/KNAUS+Campingpark+Eschwege,+Am+Werratalsee+2,+37269+Eschwege,+Germany/McDonald's,+Briesen,+Germany/Lidl,+Nowy+Tomyśl,+Poland/Camping+Malta,+Krańcowa+98,+61-036+Poznań,+Poland/"
    },
    {
      id: 9,
      date: "2025-07-05",
      dayNumber: 9,
      startLocation: {
        name: "Katowice",
        coordinates: [50.2433, 19.0477]
      },
      endLocation: {
        name: "Pasvalys",
        coordinates: [56.0589, 24.3994]
      },
      distance: "680 km",
      duration: "9h",
      activities: [
        { time: "07:30", description: "Äratus, hommikusöök" },
        { time: "08:00", description: "Check-out ja start Leedu suunas" },
        { time: "11:00", description: "Venitus + kohvipaus MOP Bolimów Północ (S8)" },
        { time: "13:30", description: "Tankimine & lõunapaus MOP Zambrów Zachód (S8; Orlen + KFC)" },
        { time: "16:30", description: "Toidupood + jalutus Lidl Suwałki" },
        { time: "17:15", description: "Piiriületus Budzisko / Kalvarija" },
        { time: "19:00", description: "Saabumine Pasvalys Camping, check-in" },
        { time: "20:00", description: "Õhtusöök camperis / väligrillil" },
        { time: "21:00", description: "Lõõgastus pargis ja järve ääres" },
        { time: "22:30", description: "Magama" }
      ],
      stops: [
        { 
          name: "MOP Bolimów Północ", 
          type: "WC, mänguväljak, koerterada",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=MOP+Bolimów+Północ"
        },
        { 
          name: "MOP Zambrów Zachód", 
          type: "Orlen + KFC",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=MOP+Zambrów+Zachód"
        },
        { 
          name: "Lidl Suwałki", 
          type: "toidutäiendus, roheala",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lidl+Suwałki"
        },
        { 
          name: "MOP Kalvarija", 
          type: "esimesed teenused Leedus",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=MOP+Kalvarija"
        }
      ],
      accommodation: {
        name: "Camping & Camper Place Pasvalys",
        address: "Dvareliškių g., 39161 Pasvalys, Leedu",
        coordinates: [56.0589, 24.3994],
        contact: {
          phone: "+370 672 22270",
          website: "https://pasvalyscamping.com/"
        },
        price: "Camperplats ~10–20 €/öö (+ elekter)",
        notes: ["Google 4.7/5", "Camping.info 5.0/5"],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=56.0589,24.3994"
      },
      googleMapsUrl: "https://www.google.com/maps/dir/Camping+215+Katowice/MOP+Bolimów+Północ/MOP+Zambrów+Zachód/Lidl+Suwałki/MOP+Kalvarija/Camping+Camper+Place+Pasvalys/"
    },
    {
      id: 10,
      date: "2025-07-06",
      dayNumber: 10,
      startLocation: {
        name: "Pasvalys",
        coordinates: [56.0589, 24.3994]
      },
      endLocation: {
        name: "Käokella tee 1-1/2, Tallinn",
        coordinates: [59.39, 24.67]
      },
      distance: "530 km",
      duration: "7h",
      activities: [
        { time: "08:00", description: "Äratus, hommikusöök" },
        { time: "09:00", description: "Check-out; veepaakide tühjendus" },
        { time: "09:15", description: "Start Tallinnasse (Via Baltica E67)" },
        { time: "10:45", description: "Paus Neste Jēkabpils" },
        { time: "13:00", description: "Lõuna Circle K Valka/Valga" },
        { time: "13:30", description: "Piiriületus Eestisse" },
        { time: "15:45", description: "Kohvipaus Olerex Puhu Risti" },
        { time: "18:00", description: "Saabumine koju, Käokella tee 1-1/2" },
        { time: "18:15", description: "Kerge õhtusöök kodus" },
        { time: "Õhtu", description: "Vaba aeg, puhkus" }
      ],
      stops: [
        { 
          name: "Neste Jēkabpils", 
          type: "paus",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Neste+Jēkabpils"
        },
        { 
          name: "Circle K Valka/Valga", 
          type: "lõuna",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Circle+K+Valga"
        },
        { 
          name: "Olerex Puhu Risti", 
          type: "kohvipaus",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Olerex+Puhu+Risti"
        }
      ],
      accommodation: {
        name: "Kodus",
        address: "Käokella tee 1-1/2, Tallinn, EE",
        coordinates: [59.39, 24.67]
      },
      notes: [
        "Järgmisel päeval (07.07.2025): Camperi tagastus",
        "08:15-08:45: Camperi sisepuhastus",
        "08:45-09:00: Paak täis & AdBlue kontroll (Neste Laagri)",
        "09:15: Rendikontorisse tagastus",
        "Puhastusnimekiri: Paak täis, Hall/must vesi tühjaks, WC kassett puhastatud, Isiklikud esemed eemaldatud, Salong pühitud, Väliskontroll & fotod"
      ],
      googleMapsUrl: "https://www.google.com/maps/dir/Camping+Camper+Place+Pasvalys/Neste+Jēkabpils/Circle+K+Valka+Valga/Olerex+Puhu+Risti/Käokella+tee+1+Tallinn/"
    }
  ]
};