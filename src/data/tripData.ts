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
        coordinates: [55.158612, 25.500381]
      },
      distance: "580 km",
      duration: "7h",
      activities: [
        { time: "14:00", description: "Camperi kättesaamine Tallinnas" },
        { time: "15:00", description: "Start teele Molėtai suunas" },
        { time: "17:30", description: "Peatus Valgas: tankimine, jalutus koertega" },
        { time: "19:30", description: "Peatus Zarasais: tankimine, toidupood" },
        { time: "21:30", description: "Saabumine kämpingusse, check-in" },
        { time: "22:00", description: "Õhtusöök camperis" }
      ],
      stops: [
        { 
          name: "Circle K Valga", 
          type: "paus", 
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Circle+K+Valga"
        },
        { 
          name: "Zarasai", 
          type: "tankimine ja pood",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Zarasai"
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
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Molėtų+Kempingas+\"Ežero+krantas\""
      },
      googleMapsUrl: "https://www.google.com/maps/dir/Tallinn/Valga/Zarasai/Molėtų+Kempingas+\"Ežero+krantas\",+Leedu/"
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
      distance: "500 km",
      duration: "7h",
      activities: [
        { time: "08:00", description: "Hommikusöök" },
        { time: "09:30", description: "Start suunal Giżycko" },
        { time: "12:30", description: "Lõunapaus Augustów kandis" },
        { time: "15:30", description: "Tankimine Suwałki kandis" },
        { time: "18:00", description: "Check-in kämpingus" },
        { time: "20:00", description: "Jalutuskäik järve ääres" }
      ],
      stops: [
        { 
          name: "Augustów", 
          type: "lõunapaus",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=McDonald's+Augustów"
        },
        { 
          name: "Suwałki", 
          type: "tankimine ja pood",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Biedronka+Suwałki"
        }
      ],
      accommodation: {
        name: "Elixir Hotelik Caravan Camping",
        address: "Guty 9, 11-500 Giżycko",
        coordinates: [54.036896, 21.698325],
        contact: {
          phone: "+48 87 428 28 26",
          website: "http://www.elixirhotel.com/"
        },
        amenities: ["Elekter", "Dušid", "Restoran", "Ujumiskoht"],
        notes: ["Masuuria järve ääres", "Lemmikloomad lubatud", "Tripadvisoris hinnatud keskmiselt 3/5"],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Elixir+Hotelik+Caravan+Camping"
      },
      googleMapsUrl: "https://www.google.com/maps/dir/Molėtai+→+Augustów+→+Suwałki+→+Giżycko+(Elixir+Camping)/"
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
      distance: "450 km",
      duration: "7h",
      activities: [
        { time: "08:30", description: "Start suunal Wieliczka" },
        { time: "11:30", description: "Lõunapaus Radom lähedal" },
        { time: "13:00", description: "Tankimine Krakówi äärelinnas" },
        { time: "15:30", description: "Saabumine Wieliczka" },
        { time: "17:30", description: "Soolakaevanduse ekskursioon" },
        { time: "19:30", description: "Õhtusöök" }
      ],
      stops: [
        { 
          name: "Radom", 
          type: "lõunapaus",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=McDonald's+Radom"
        },
        { 
          name: "Kraków äärelinn", 
          type: "tankimine ja pood",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lidl+Kraków+Nowa+Huta"
        }
      ],
      accommodation: {
        name: "CamperPark - Parking Trabant",
        address: "Wieliczka soolakaevanduse kõrval",
        coordinates: [50.028889, 20.060278],
        contact: {
          email: "info@camperpark.pl",
          website: "https://camprest.com/en/campsites/poland/lesser-poland-voivodeship/camperpark-parking-trabant"
        },
        price: "25-40 PLN/öö",
        amenities: ["Elekter", "WC", "Dušš", "WiFi"],
        notes: ["Otse kaevanduse kõrval", "Ideaalne ekskursiooniks"],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=CamperPark+–+Parking+Trabant,+Wieliczka"
      },
      specialActivities: [
        {
          name: "Wieliczka Soolakaevanduse ekskursioon",
          address: "Daniłowicza 10, Wieliczka, Poland",
          time: "17:30",
          description: "Tourist Route – Individual Tour (English)",
          bookingReference: "#1234837",
          website: "https://bilety.kopalnia.pl/",
          coordinates: [49.98738, 20.06473]
        }
      ],
      googleMapsUrl: "https://www.google.com/maps/dir/Giżycko+→+Radom+→+Kraków+Lidl+→+Wieliczka+CamperPark/"
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
      distance: "270 km",
      duration: "4h",
      activities: [
        { time: "09:00", description: "Sõit outlet'i" },
        { time: "10:00", description: "Factory Kraków Outlet - 3h shopping" },
        { time: "13:00", description: "Start suunal Wrocław" },
        { time: "15:00", description: "Tankimine Opole kandis" },
        { time: "17:30", description: "Saabumine Camp4U" },
        { time: "18:00", description: "Ujumine ja mänguväljak" }
      ],
      stops: [
        { 
          name: "Factory Kraków Outlet", 
          type: "shopping",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Factory+Kraków+Outlet"
        },
        { 
          name: "Opole", 
          type: "tankimine ja lõuna",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Orlen+Opole"
        }
      ],
      accommodation: {
        name: "Camp4U",
        address: "ul. Opolska 46, 55-011 Siechnice",
        coordinates: [51.017196, 17.164966],
        contact: {
          phone: "+48 664 359 458",
          email: "info@camp4u.pl",
          website: "https://camp4u.pl/en/home-en/"
        },
        price: "50 PLN",
        amenities: ["Bassein", "Mänguväljak", "Grill", "Rattarent"],
        notes: ["Vaikne ja looduslähedane"],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Camp4U"
      },
      specialActivities: [
        {
          name: "Factory Kraków Outlet",
          address: "Prof. A. Rożańskiego 32, 32-085 Modlniczka, PL",
          time: "10:00–13:00",
          description: "3h shopping: rõivad, jalatsid, koolitarbed. Avatud 10:00–21:00",
          website: "https://factorykrakow.pl/",
          coordinates: [50.128, 19.883]
        }
      ],
      googleMapsUrl: "https://www.google.com/maps/dir/Wieliczka/Factory+Kraków+Outlet/Opole/Camp4U+Siechnice/"
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
      distance: "760 km",
      duration: "9h",
      activities: [
        { time: "09:00", description: "Start suunal Brühl" },
        { time: "12:30", description: "Lõunapaus Fulda kandis" },
        { time: "15:00", description: "Tankimine Limburg kandis" },
        { time: "17:30", description: "Saabumine Heider Bergsee" },
        { time: "18:30", description: "Jalutuskäik järve ääres" }
      ],
      stops: [
        { 
          name: "Fulda", 
          type: "lõunapaus",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fulda+city+center+park+and+restaurants"
        },
        { 
          name: "Limburg", 
          type: "tankimine",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tank+&+Rast+Limburg+Süd"
        }
      ],
      accommodation: {
        name: "Camping Heider Bergsee",
        address: "Heider Bergsee, 50321 Brühl",
        coordinates: [50.8289401, 6.8756241],
        contact: {
          phone: "+49 2232 701150",
          email: "schirmer@heiderbergsee.de",
          website: "http://heiderbergsee.de/"
        },
        price: "25-35 €/öö",
        amenities: ["Elekter", "Dušid", "Restoran", "Rand", "Mänguväljak"],
        notes: ["Otse järve ääres", "10 min jalutada Brühli keskusest", "Ideaalne baas Phantasialandi külastuseks", "Rahulik ja looduslähedane, lemmikloomasõbralik"],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Camping+Heider+Bergsee"
      },
      googleMapsUrl: "https://www.google.com/maps/dir/Camp4U+(Siechnice)+→+Fulda+(lõuna)+→+Limburg+Rast+→+Heider+Bergsee+(Brühl)/"
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
      distance: "90 km",
      duration: "1.5h",
      activities: [
        { time: "09:00", description: "Sõit Phantasialand parklasse" },
        { time: "09:30", description: "Phantasialand (09:00-18:00)" },
        { time: "13:00", description: "Lõuna pargis" },
        { time: "17:00", description: "Sõit Nürburgring suunas" },
        { time: "18:30", description: "Check-in kämpingus" },
        { time: "20:00", description: "Jalutuskäik ringraja ääres" }
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
          description: "Lõbustuspark - atraktsioonid ja peretegevused",
          website: "https://www.phantasialand.de/",
          coordinates: [50.7983, 6.8788]
        }
      ],
      notes: ["Koerad ei ole parki lubatud"],
      googleMapsUrl: "https://www.google.com/maps/dir/Camp4U+(Siechnice)+→+Fulda+(lõuna)+→+Limburg+Rast+→+Heider+Bergsee+(Brühl)/"
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
        name: "Illertissen",
        coordinates: [48.2123, 10.0874]
      },
      distance: "350 km",
      duration: "4h 15min",
      activities: [
        { time: "08:00", description: "Äratus, hommikusöök camperis" },
        { time: "09:00-12:00", description: "Vaba aeg rajakompleksis (ring°werk muuseum, lasteala, jalutus)" },
        { time: "12:15", description: "Lõuna Cockpit Restaurant (terrass koerasõbralik)" },
        { time: "15:30", description: "Saabumine RSRNurburg / Rent4Ring kontorisse (registreerimine)" },
        { time: "16:00", description: "Sõitjate briifing (kohustuslik)" },
        { time: "17:00-18:00", description: "4 ringi instruktoriga Nürburgringi Nordschleifel" },
        { time: "18:15-18:30", description: "Varustuse tagastus, suveniirid" },
        { time: "18:30", description: "Tankimine + hall-vee tühjendus (ARAL Tankstelle Nürburgring)" },
        { time: "18:45", description: "Start Illertisseni suunas (A61 → A6 → A7)" },
        { time: "20:45", description: "Venitus + koerajalutus Rasthof Hohenlohe Süd (WC, mänguväljak)" },
        { time: "22:45", description: "Saabumine Camping Illertissen (hiline iseteenindus-check-in)" },
        { time: "23:00", description: "Õhtusöök camperis / Camper Lounge'i snäkk (avatud 23:30-ni)" },
        { time: "23:30", description: "Jalgsiring Iller-kanali kaldal" },
        { time: "00:00", description: "Magama (öörahu 22:00-07:00)" }
      ],
      stops: [
        { 
          name: "Rasthof Hohenlohe Süd", 
          type: "venitus, WC, mänguväljak",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rasthof+Hohenlohe+Süd"
        },
        { 
          name: "Lidl Illertissen", 
          type: "toidutäiendus",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lidl+Reinthalstraße+10+Illertissen"
        }
      ],
      accommodation: {
        name: "Camping Illertissen",
        address: "Dietenheimer Str. 91, 89257 Illertissen",
        coordinates: [48.2123, 10.0874],
        contact: {
          phone: "+49 7303 7888",
          website: "https://www.camping-illertissen.de/"
        },
        price: "~32 € / öö (2 täisk. + 2 last + camper + elekter)",
        amenities: ["Elekter", "Dušid", "Pesumasin", "Tasuta Wi-Fi", "Gassi-Wiese (koertele)", "Camper Lounge"],
        notes: ["Hiline saabumine: Iseteenindus-kast, soovitatav ette helistada"],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=48.2123,10.0874"
      },
      specialActivities: [
        {
          name: "Nürburgring rajasõit - Rent4Ring",
          address: "Antoniusweg 1a, 53520 Nürburg",
          time: "17:00–18:00",
          description: "4 ringi instruktoriga Nürburgringi Nordschleifel",
          bookingReference: "#BK11714",
          website: "https://www.rent4ring.de/en/",
          coordinates: [50.3356, 6.9475]
        }
      ],
      notes: [
        "Jälgi rajapäeval vedelike tarbimist. Juhil ja instruktoril on kohustuslik kanda kinniseid jalanõusid.",
        "Tanki Nürburgringil paak täis, et säästa aega.",
        "Illertisseni kämpingu Camper Lounge pakub hiliseid kergeid eineid."
      ],
      googleMapsUrl: "https://www.google.com/maps/dir/Camping+am+Nürburgring,+Kreisstraße+72,+53520+Müllenbach,+Germany/Camping+Illertissen,+Dietenheimer+Str.+91,+89257+Illertissen,+Germany/"
    },
    {
      id: 8,
      date: "2025-07-04",
      dayNumber: 8,
      startLocation: {
        name: "Illertissen",
        coordinates: [48.2123, 10.0874]
      },
      endLocation: {
        name: "Katowice",
        coordinates: [50.2433, 19.0477]
      },
      distance: "780 km",
      duration: "6h 45min + matk",
      activities: [
        { time: "06:30", description: "Äratus & kiire hommikusöök" },
        { time: "07:00", description: "Check-out → sõit Garmisch-Partenkirchen (155 km, ≈1 h 45 m)" },
        { time: "08:45", description: "Parkimine Olympia-Skistadion (tasuline)" },
        { time: "09:00", description: "Jalgsirada (25 min) Partnachklammi piletikassasse (pilet €7 + koer €2)" },
        { time: "09:15-11:30", description: "Kanjoni läbimine & tagasi (∼2 km, 2 h)" },
        { time: "11:40", description: "10 min sõit Camping Resort Zugspitze (dušš, veetäide, lõunasnäkk)" },
        { time: "12:45", description: "Start Katowice suunas (625 km, ≈6 h 45 m)" },
        { time: "15:30", description: "Venitus + tankimine 24-Autohof Wernberg-Köblitz" },
        { time: "17:45", description: "Kiire kohvipaus Rozvadov Service Area (CZ)" },
        { time: "19:15", description: "Tank + õhtusnäkk MOP Gorzyczki Orlen (PL)" },
        { time: "20:30", description: "Saabumine Camping 215 Katowice (check-in kuni 22:00)" },
        { time: "21:00", description: "Õhtusöök ja jalutuskäik Three Ponds Valley's" },
        { time: "22:30", description: "Magama" }
      ],
      stops: [
        { 
          name: "Olympia-Skistadion parkla", 
          type: "parkla",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=47.4755,11.1109"
        },
        { 
          name: "24-Autohof Wernberg-Köblitz", 
          type: "tankimine, restoran, mänguväljak",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=24-Autohof+Wernberg-Köblitz"
        },
        { 
          name: "MOP Gorzyczki Orlen", 
          type: "tank + õhtusnäkk",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=MOP+Gorzyczki+Orlen"
        }
      ],
      accommodation: {
        name: "Camping 215 Katowice",
        address: "ul. Trzech Stawów 23, 40-289 Katowice, PL",
        coordinates: [50.2433, 19.0477],
        contact: {
          phone: "+48 32 256 12 20",
          website: "http://camping.mosir.katowice.pl/"
        },
        price: "Plats + pere ≈ 90 PLN; elekter +15 PLN",
        amenities: ["Modernsed mugavused", "Asub looduspargis"],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=50.2433,19.0477"
      },
      specialActivities: [
        {
          name: "Partnachklamm",
          address: "Graseck 4, 82467 Garmisch-Partenkirchen",
          time: "09:15-11:30",
          description: "Kanjoni läbimine",
          website: "https://www.partnachklamm.de/",
          coordinates: [47.4755, 11.1109]
        }
      ],
      notes: [
        "Partnachklamm: Võta kaasa veekindel jope ja taskulamp.",
        "Pikk sõit: Jagage roolivahetusi iga 2-3 tunni tagant."
      ],
      googleMapsUrl: "https://www.google.com/maps/dir/Camping+Illertissen,+Dietenheimer+Str.+91,+89257+Illertissen,+Germany/Partnachklamm,+Graseck+4,+82467+Garmisch-Partenkirchen,+Germany/Camping+215,+ul.+Trzech+Stawów+23,+40-289+Katowice,+Poland/"
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
      googleMapsUrl: "https://www.google.com/maps/dir/Camping+215,+ul.+Trzech+Stawów+23,+40-289+Katowice,+Poland/Camping+&+Camper+Place+Pasvalys,+Dvareliškių+g.,+39161+Pasvalys,+Lithuania/"
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
      googleMapsUrl: "https://www.google.com/maps/dir/Camping+&+Camper+Place+Pasvalys,+Dvareliškių+g.,+39161+Pasvalys,+Lithuania/Käokella+tee+1,+Tallinn,+Estonia/"
    }
  ]
};