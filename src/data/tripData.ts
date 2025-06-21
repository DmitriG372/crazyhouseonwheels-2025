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
        name: "Nürburgring",
        coordinates: [50.32066, 6.93777]
      },
      endLocation: {
        name: "Eschwege",
        coordinates: [51.191389, 10.068611]
      },
      distance: "270 km",
      duration: "3.5h",
      activities: [
        { time: "09:00", description: "Jalutuskäik raja ääres" },
        { time: "16:00", description: "Rent4Ring check-in" },
        { time: "17:00", description: "Nürburgring sõit" },
        { time: "19:00", description: "Start suunal Eschwege" },
        { time: "22:30", description: "Saabumine KNAUS Campingpark" }
      ],
      stops: [
        { 
          name: "Nürburgring", 
          type: "rajasõit",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nürburgring"
        }
      ],
      accommodation: {
        name: "KNAUS Campingpark Eschwege",
        address: "Am Werratalsee 2, 37269 Eschwege",
        coordinates: [51.191389, 10.068611],
        contact: {
          phone: "+49 5651 3388-83",
          email: "eschwege@knauscamp.de",
          website: "https://www.knauscamp.de/eschwege.html"
        },
        price: "~45 €/öö",
        notes: ["Werratalsee järve kaldal"],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=KNAUS+Campingpark+Eschwege"
      },
      specialActivities: [
        {
          name: "Nürburgring rajasõit - Rent4Ring",
          address: "Antoniusweg 1a, 53520 Nürburg",
          time: "17:00–18:00",
          description: "Check-in 16:00 (vähemalt 1h enne starti)",
          bookingReference: "#BK11714",
          website: "https://www.rent4ring.de/en/",
          coordinates: [50.3356, 6.9475]
        }
      ],
      notes: ["Kaasa: Juhiluba, ID-kaart, krediitkaart"],
      googleMapsUrl: "https://www.google.com/maps/dir/Nürburgring,+Nürburg,+Saksamaa/KNAUS+Campingpark+Eschwege,+Am+Werratalsee+2,+37269+Eschwege/"
    },
    {
      id: 8,
      date: "2025-07-04",
      dayNumber: 8,
      startLocation: {
        name: "Eschwege",
        coordinates: [51.191389, 10.068611]
      },
      endLocation: {
        name: "Poznań",
        coordinates: [52.4036, 16.9842]
      },
      distance: "600 km",
      duration: "8h",
      activities: [
        { time: "09:00", description: "Start Poznań suunas" },
        { time: "12:00", description: "Lõunapaus Bolesławieci kandis" },
        { time: "15:00", description: "Toidupood Leszno lähedal" },
        { time: "17:30", description: "Saabumine Camping Malta" },
        { time: "18:30", description: "Jalutuskäik Malta järve ääres" }
      ],
      stops: [
        { 
          name: "Bolesławiec", 
          type: "lõunapaus",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=McDonald's+Bolesławiec"
        },
        { 
          name: "Leszno", 
          type: "toidupood",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lidl+Leszno"
        }
      ],
      accommodation: {
        name: "Camping Malta",
        address: "ul. Krańcowa 98, 61-036 Poznań",
        coordinates: [52.4036, 16.9842],
        contact: {
          phone: "+48 61 876 62 03",
          email: "camping@malta.poznan.pl",
          website: "http://www.campingmalta.poznan.pl/"
        },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Camping+Malta"
      },
      googleMapsUrl: "https://www.google.com/maps/dir/Eschwege+→+Bolesławiec+→+Leszno+→+Camping+Malta+Poznań/"
    },
    {
      id: 9,
      date: "2025-07-05",
      dayNumber: 9,
      startLocation: {
        name: "Poznań",
        coordinates: [52.4036, 16.9842]
      },
      endLocation: {
        name: "Pasvalys",
        coordinates: [56.0589, 24.3994]
      },
      distance: "600 km",
      duration: "9h",
      activities: [
        { time: "09:00", description: "Start Leedu suunas" },
        { time: "12:30", description: "Lõuna Augustówi kandis" },
        { time: "15:30", description: "Tankimine Leedu piiri lähedal" },
        { time: "18:00", description: "Saabumine Pasvalys" }
      ],
      stops: [
        { 
          name: "Augustów", 
          type: "lõunapaus",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=McDonald's+Augustów"
        },
        { 
          name: "Leedu piir", 
          type: "tankimine ja pood",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Maxima+near+Lithuanian+border"
        }
      ],
      accommodation: {
        name: "Camping & Camper Place Pasvalys",
        address: "Dvareliškių g., 39161 Pasvalys",
        coordinates: [56.0589, 24.3994],
        contact: {
          phone: "+370 672 22270",
          website: "https://pasvalyscamping.com/"
        },
        notes: ["Google 4.7/5", "Booking.com 8.9/10", "Ideaalne rahulikuks puhkuseks enne koju jõudmist"],
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Camping+&+Camper+Place+Pasvalys"
      },
      googleMapsUrl: "https://www.google.com/maps/dir/Poznań+→+Augustów+→+Leedu+piir+→+Pasvalys+Camping/"
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
        name: "Tallinn",
        coordinates: [59.437, 24.7536]
      },
      distance: "480 km",
      duration: "7h",
      activities: [
        { time: "09:00", description: "Start Tallinna suunas" },
        { time: "11:30", description: "Paus Jēkabpilsi kandis" },
        { time: "14:00", description: "Lõuna Valgas" },
        { time: "16:30", description: "Saabumine Tallinnasse" },
        { time: "18:00", description: "Camperi puhastus" },
        { time: "20:00", description: "Ettevalmistus tagastuseks" }
      ],
      stops: [
        { 
          name: "Jēkabpils", 
          type: "paus",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Neste+Jēkabpils"
        },
        { 
          name: "Valga", 
          type: "lõuna",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Circle+K+Valga"
        }
      ],
      accommodation: {
        name: "Kodus",
        address: "Tallinn",
        coordinates: [59.437, 24.7536]
      },
      notes: ["Camperi puhastus ja kontroll", "Ettevalmistus tagastuseks"],
      googleMapsUrl: "https://www.google.com/maps/dir/Pasvalys+→+Jēkabpils+→+Valga+→+Tallinn/"
    }
  ]
};