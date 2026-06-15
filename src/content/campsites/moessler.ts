import type { CampsiteConfig } from "../types";

/**
 * Schwimmbad Camping Mössler — Döbriach am Millstätter See, Kärnten.
 * Alle Texte/Fakten belegt aus moessler.at (Stand-Scrape 2026-06), v. a. der
 * Seite /schwimmbad-camping. Bilder = ausschließlich eigene Fotos des
 * Schwimmbad Campings + Region (Millstätter See, Mirnock) in
 * /public/campsites/moessler/.
 *
 * EHRLICH:
 * - Der Platz liegt ca. 500 m vom Millstätter See entfernt (NICHT direkt am
 *   Ufer) — die Quelle selbst rahmt ihn aber als "Schwimmbad Camping am
 *   Millstätter See"; Distanz wird im Text klar genannt.
 * - Es gibt KEINE eigenen Fotos der Stellplätze/Mobilheim-Innenräume in der
 *   Bibliothek → Mobilheim-Sektion ausgelassen (Mobilheim-Preis bleibt in der
 *   Buchung). Seecamping-/Landhaus-Fotos der Schwester­plätze NICHT verwendet.
 * - Preise = reale Preisinformation 2026 der Seite /schwimmbad-camping
 *   (Frühjahrs-/Herbstsaison, 2 Personen, inkl. Stellplatz; zzgl. Ortstaxe).
 * - Weißes Logo (logo-full-white) wäre auf weißem Footer-Feld unsichtbar →
 *   logo ausgelassen (Footer zeigt Wortmarke MÖSSLER).
 */
const IMG = "/campsites/moessler";

export const moessler: CampsiteConfig = {
  name: "Schwimmbad Camping Mössler",
  shortName: "Mössler",
  slug: "moessler",
  ort: "Döbriach am Millstätter See",
  region: "Kärnten",
  brandKind: "Schwimmbad Camping",
  see: "Millstätter See",
  regionLong: "Millstätter See · Kärnten · Österreich",

  claim: "Familiencamping mit eigenem Erlebnisbad am Millstätter See",
  claimEmphasis: "eigenem Erlebnisbad",
  intro:
    "Familiengeführter Campingpark in Döbriach, Kärnten — mit beheiztem Edelstahl-Erlebnisbad (30 °C), 170 Komfortstellplätzen und nur rund 500 m zum Millstätter See.",

  statement: {
    text: "Bei uns ist Camping noch ein Erlebnis — mit eigenem Erlebnisbad, Bergen ringsum und dem Millstätter See vor der Tür.",
    emphasis: "noch ein Erlebnis",
  },

  pillars: [
    {
      title: "Eigenes Erlebnisbad (30 °C)",
      text: "Modernes Edelstahl-Erlebnisbad (9 × 19 m) mit thermalwarmem Wasser und Indoor-Einstieg — exklusiv für unsere Campinggäste.",
      image: { src: `${IMG}/erlebnisbad-sonnig.webp`, alt: "Edelstahl-Erlebnisbad des Schwimmbad Campings Mössler mit modernem Poolgebäude, Palme und orangefarbenen Liegestühlen" },
    },
    {
      title: "Der Millstätter See",
      text: "Nur rund 500 m vom Platz — und mit der Mössler See Card kommst du gratis in alle örtlichen Strandbäder am See.",
      image: { src: `${IMG}/millstaetter-see-blick.webp`, alt: "Weitsicht über den tiefblauen Millstätter See mit Bergpanorama in Kärnten" },
    },
    {
      title: "Berge & Natur ringsum",
      text: "Eingebettet zwischen Mirnock und Millstätter See — ideale Ausgangslage für Wanderungen und Radtouren in der Kärntner Bergwelt.",
      image: { src: `${IMG}/mirnock-gipfel.webp`, alt: "Wanderpaar am Mirnock-Gipfel mit Blick auf den Millstätter See bei Sonnenuntergang" },
    },
  ],

  usps: [
    "Beheiztes Erlebnisbad (30 °C)",
    "Kostenloses WLAN am ganzen Platz",
    "Kostenlose Sauna",
    "Kinderbetreuung in den Ferien",
    "Nur ca. 500 m zum Millstätter See",
    "Familiengeführter Campingpark",
    "Hunde willkommen (Auslaufwiese & Agility)",
  ],

  trust: {
    heading: "Worauf du dich bei Mössler verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Ein familiengeführter Campingpark am Millstätter See — mit eigenem beheiztem Erlebnisbad, fairen Preisen und vielen inkludierten Leistungen für entspannte Campingtage.",
  },

  // Real auf der Startseite ausgewiesene Auszeichnungen (Jahr im Label genannt).
  awards: [
    { label: "ADAC Campingführer · Tipp 2015", image: { src: `${IMG}/award-adac-tipp-2015.png`, alt: "ADAC Campingführer – Tipp 2015 (4 Sterne)" } },
    { label: "camping.info Award 2016", image: { src: `${IMG}/award-campinginfo-2016.png`, alt: "camping.info Award 2016" } },
  ],

  saison: { von: "März", bis: "November" },

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme-2.webp`, alt: "Luftaufnahme des Schwimmbad Campings Mössler mit Erlebnisbad und parzellierten Stellplätzen in Döbriach" },
  },

  camping: {
    heading: "Schwimmbad Camping in Döbriach",
    intro:
      "Familiengeführter Campingpark auf rund 55.000 m² parkähnlicher Fläche — 170 parzellierte Komfortstellplätze mit Strom, Wasser, Abwasser und TV-Anschluss, dazu ein beheiztes Erlebnisbad direkt am Platz.",
    features: [
      {
        title: "Edelstahl-Erlebnisbad (9 × 19 m)",
        text: "Edelstahl-Erlebnisbad mit Luftwhirlbank, Schwallbrause, Massagedüsen und Bodenblubber — inklusive für Campinggäste.",
        image: { src: `${IMG}/erlebnisbad-pool-sommer.webp`, alt: "Edelstahl-Erlebnisbad des Schwimmbad Campings Mössler mit Liegebereich, Palme und Bergblick an einem sonnigen Sommertag" },
      },
      {
        title: "Parzellierte Komfortstellplätze",
        text: "Begrünte Stellplätze (65–100 m²) mit Strom, Wasser, Abwasser, TV (DVB-C/S) und kostenlosem WLAN.",
        image: { src: `${IMG}/stellplaetze-gruen.webp`, alt: "Begrünte, parzellierte Stellplätze mit Wohnwagen und Bäumen am Schwimmbad Camping Mössler" },
      },
      {
        title: "Thermalwarmes Wasser — 30 °C",
        text: "Das Becken hat 30 °C und ist von Ende April bis Mitte Oktober in Betrieb — mit Tunnel-Einstieg ins Freie.",
        image: { src: `${IMG}/erlebnisbad-dampf.webp`, alt: "Dampfendes, beheiztes Erlebnisbad (30 °C) in der Dämmerung am Schwimmbad Camping Mössler" },
      },
    ],
  },

  kinder: {
    heading: "Für Kinder & Familien",
    intro:
      "Langeweile? Fehlanzeige. Beheiztes Erlebnisbad und Kinderbecken, Indoor-Spielplatz mit Softplay, gleich drei Spielplätze und in den Ferien kostenlose Kinderbetreuung — hier dürfen Kinder Kinder sein.",
    features: [
      {
        title: "Familien- & Kinderprogramm",
        text: "In den Ferienzeiten warten besondere Veranstaltungen für Kinder und Familien — vom Kasperltheater bis zum kreativen Basteln.",
        image: { src: `${IMG}/kasperltheater-neu.webp`, alt: "Kasperltheater mit vielen Familien und Kindern am Schwimmbad Camping Mössler" },
      },
      {
        title: "Indoor-Spielplatz & Softplay",
        text: "Der moderne Indoor-Spielplatz mit 2-stöckigem Softplay-Bereich, Rutschen und Kletterelementen ist der Hit bei jedem Wetter.",
        image: { src: `${IMG}/kasperltheater.webp`, alt: "Familienprogramm am Schwimmbad Camping Mössler" },
      },
      {
        title: "Beheiztes Kinderbecken",
        text: "Ein eigenes beheiztes Kinderbecken sorgt dafür, dass es auch die Kleinsten immer schön warm haben.",
        image: { src: `${IMG}/kinderbecken-pool.webp`, alt: "Beheiztes Erlebnisbad mit Schwimmern von oben am Schwimmbad Camping Mössler" },
      },
      {
        title: "Drei Spielplätze & Riesenpendelschaukel",
        text: "Gleich drei Spielplätze plus Riesenpendelschaukel, Tischtennis sowie Fußball- und Beachvolleyballplatz — Bewegung pur.",
        image: { src: `${IMG}/einfahrt-moessler.webp`, alt: "Einfahrt zum Mössler Schwimmbad Camping mit buntem Blumenbeet" },
      },
      {
        title: "Kostenlose Kinderbetreuung",
        text: "Im Juli, August und Anfang September gibt es kostenlose Kinderbetreuung mit kreativem Basteln.",
        image: { src: `${IMG}/kinderbetreuung-basteln.webp`, alt: "Kinder beim kreativen Basteln mit Betreuer am Schwimmbad Camping Mössler" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv in der Region",
    intro:
      "Mit dem Natur-Aktiv-Programm gibt es für unsere Gäste kostenlos geführte Wanderungen und Radtouren — dazu Kräuterworkshops, Bogenschießen und die ganze Bergwelt rund um den Millstätter See.",
    items: [
      {
        title: "Geführte Wanderungen",
        text: "Beim Natur-Aktiv-Programm geht es kostenlos auf geführte Touren — etwa zur Schluchtenwanderung mit Lagerfeuer.",
        image: { src: `${IMG}/schlucht-lagerfeuer.webp`, alt: "Geführte Schluchtenwanderung mit Lagerfeuer und Kindern am Schwimmbad Camping Mössler" },
      },
      {
        title: "Mountainbike & Radtouren",
        text: "Kostenlos geführte Radtouren erschließen die Berge über dem Millstätter See — Tourenvielfalt für jedes Level.",
        image: { src: `${IMG}/mountainbike-see.webp`, alt: "Mountainbike-Gruppe auf Schotterweg hoch über dem Millstätter See in Kärnten" },
      },
      {
        title: "Kräuterworkshops",
        text: "Aus dem eigenen Kräutergarten: Workshops rund um Wildkräuter — etwa selbst gemachter Hollersaft.",
        image: { src: `${IMG}/kraeuterworkshop-gross.webp`, alt: "Kräuterworkshop mit Holunderblüten — drei Teilnehmerinnen am Schwimmbad Camping Mössler" },
      },
      {
        title: "Bogenschießen",
        text: "Auf dem platzeigenen Pfeil-und-Bogen-Platz wird jeder zum Robin Hood — Schnuppern für Groß und Klein.",
        image: { src: `${IMG}/bogenschiessen-wald.webp`, alt: "Bogenschütze mit Pfeil und Bogen im Wald beim Schwimmbad Camping Mössler" },
      },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Mit dem Auto", text: "Die Millstätter-See-Region ist über die A10 (Tauern Autobahn) gut erreichbar; Döbriach liegt am Ostufer des Sees. Navi-Adresse: Glanzerstraße 24, 9873 Döbriach." },
      { title: "Direkt am Geschehen", text: "Restaurant und Mini-Markt liegen direkt bei der Platzeinfahrt, der Millstätter See ist rund 500 m entfernt." },
      { title: "An- & Abreise", text: "Anreise ab 13:00 Uhr, Abreise bis 12:00 Uhr (Mietunterkünfte bis 10:30 Uhr), Nachtruhe 23:00–07:00 Uhr." },
    ],
  },

  galerie: {
    heading: "Ein Platz zum Wohlfühlen",
    headingEmphasis: "Wohlfühlen",
    intro:
      "Erlebnisbad bei Tag und Nacht, der Millstätter See und das bunte Familienleben — ein paar Eindrücke vom Schwimmbad Camping Mössler in Döbriach.",
    tag: "März bis November",
    images: [
      { src: `${IMG}/erlebnisbad-nacht.webp`, alt: "Beleuchtetes Erlebnisbad-Gebäude mit spiegelglattem Edelstahl-Pool bei Nacht am Schwimmbad Camping Mössler" },
      { src: `${IMG}/see-blick-mirnock.webp`, alt: "Panoramablick auf den Millstätter See von der Mirnock-Alm mit Rastbank" },
      { src: `${IMG}/wandern-millstaettersee.webp`, alt: "Wanderin auf dem Mirnock mit Blick auf den Millstätter See und Almhütten" },
      { src: `${IMG}/wandern-gipfel.webp`, alt: "Wanderpaar am Gipfel mit weitem Blick auf den Millstätter See in Kärnten" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum, Unterkunft und Personen — die Familie Mössler meldet sich mit deiner persönlichen Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote: "ab-Preise Frühjahr/Herbst für 2 Personen inkl. Stellplatz · zzgl. Ortstaxe € 2,70 p. P./Nacht · in der Hauptsaison höher · Stand 2026",
    highlight: {
      title: "Pool & Sauna inklusive",
      text: "Die Benützung des beheizten Erlebnisbads (30 °C) und der Sauna ist für Campinggäste inklusive.",
    },
    categories: [
      // Reale Preisinformation 2026 (Seite /schwimmbad-camping), Frühjahrs-/Herbstsaison,
      // 2 Personen = Stellplatzgebühr + 2× Personengebühr (9,60); Mobilheim "ab" + 2 Pers.
      { id: "stellplatz", label: "Stellplatz", perNight: 28.1, perExtraGuest: 9.6 },
      { id: "komfort-stellplatz", label: "Komfort-Stellplatz", perNight: 34, perExtraGuest: 9.6 },
      { id: "mobilheim", label: "Mobilheim", perNight: 80.8, perExtraGuest: 9.6 },
    ],
  },

  kontakt: {
    coords: { lat: 46.774342, lng: 13.653663 },
    tel: "+43 4246 77 35",
    telHref: "tel:+4342467735",
    mail: "camping@moessler.at",
    facebook: "https://www.facebook.com/campingmoessler",
    adresse: "Glanzerstraße 24 · 9873 Döbriach am Millstätter See · Kärnten",
  },

  languages: ["DE", "EN", "IT", "NL"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Erlebnisbad", href: "#camping" },
        { label: "Komfortstellplätze", href: "#camping" },
        { label: "Galerie", href: "#galerie" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Kinderprogramm", href: "#kinder" },
        { label: "Indoor-Spielplatz", href: "#kinder" },
        { label: "Kinderbecken", href: "#kinder" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Wandern", href: "#aktivitaeten" },
        { label: "Radtouren", href: "#aktivitaeten" },
        { label: "Bogenschießen", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default moessler;
