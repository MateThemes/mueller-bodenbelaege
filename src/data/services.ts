import { Ruler, Hammer, Paintbrush, Sparkles, ArrowUpSquare, Square, Trash2, Palette } from 'lucide-react'
import { Service } from '@/types/service'

export const services: Service[] = [
  // Core Services
  {
    id: 'beratung',
    title: 'Beratung & Planung',
    description: 'Professionelle Beratung und detaillierte Planung Ihres Bodenprojekts',
    imageUrl: '/img/services/beratung.jpg',
    icon: Ruler,
    features: ['Vor-Ort-Beratung', 'Materialauswahl', 'Kostenplanung', 'Terminplanung', 'Individuelle Lösungen'],
    benefits: [
      {
        title: 'Fachkundige Beratung',
        description: 'Profitieren Sie von unserer langjährigen Erfahrung und unserem Fachwissen im Bereich Bodenbeläge.'
      },
      {
        title: 'Individuelle Planung',
        description: 'Wir entwickeln maßgeschneiderte Lösungen, die perfekt zu Ihren Anforderungen und Ihrem Budget passen.'
      },
      {
        title: 'Kostenklarheit',
        description: 'Transparente Kostenaufstellung und detaillierte Planung aller Arbeitsschritte.'
      }
    ],
    processSteps: [
      {
        title: 'Erstgespräch',
        description: 'Wir besprechen Ihre Wünsche und Vorstellungen in einem persönlichen Gespräch.'
      },
      {
        title: 'Vor-Ort-Beratung',
        description: 'Besichtigung der Räumlichkeiten und Aufnahme der technischen Details.'
      },
      {
        title: 'Angebotserstellung',
        description: 'Detaillierte Ausarbeitung eines Angebots mit allen Leistungen und Kosten.'
      },
      {
        title: 'Feinabstimmung',
        description: 'Besprechung des Angebots und Anpassung nach Ihren Wünschen.'
      }
    ],
    cta: {
      text: 'Mehr über Beratung',
      href: '/leistungen/beratung'
    }
  },
  {
    id: 'verlegen',
    title: 'Bodenverlegung',
    description: 'Fachgerechte Verlegung verschiedener Bodenbeläge mit Qualitätsgarantie',
    imageUrl: '/img/services/verlegung.jpg',
    icon: Hammer,
    features: [
      'Parkett (Massiv- und Mehrschichtparkett)',
      'Laminat und Vinyl',
      'Kork und Linoleum',
      'Teppichböden',
      'Fachkundige Beratung zur Materialauswahl',
      'Untergrundvorbereitung und -sanierung',
      'Professionelle Verlegung',
      'Nachbehandlung und Pflege'
    ],
    benefits: [
      {
        title: 'Hochwertige Materialien',
        description: 'Wir verwenden ausschließlich qualitativ hochwertige Materialien für langlebige Ergebnisse.'
      },
      {
        title: 'Präzise Verarbeitung',
        description: 'Unsere erfahrenen Handwerker garantieren eine fachgerechte und saubere Verlegung.'
      },
      {
        title: 'Termingerecht',
        description: 'Wir halten uns an vereinbarte Termine und arbeiten effizient.'
      },
      {
        title: 'Komplettservice',
        description: 'Von der Beratung bis zur Verlegung - alles aus einer Hand.'
      }
    ],
    processSteps: [
      {
        title: 'Untergrundvorbereitung',
        description: 'Sorgfältige Prüfung und Vorbereitung des Untergrunds.'
      },
      {
        title: 'Materiallieferung',
        description: 'Lieferung und Akklimatisierung der Materialien.'
      },
      {
        title: 'Verlegung',
        description: 'Fachgerechte Verlegung des Bodenbelags mit höchster Präzision.'
      },
      {
        title: 'Endkontrolle',
        description: 'Gründliche Qualitätskontrolle und Abnahme der fertigen Arbeit.'
      }
    ],
    cta: {
      text: 'Mehr über Bodenverlegung',
      href: '/leistungen/verlegen'
    }
  },
  {
    id: 'parkett-schleifen',
    title: 'Renovierung & Sanierung',
    description: 'Professionelle Aufarbeitung und Sanierung bestehender Bodenbeläge',
    imageUrl: '/img/services/parkett-schleifen.jpg',
    icon: Paintbrush,
    features: [
      'Staubfreies Schleifen mit modernster Absaugtechnik',
      'Beseitigung von Kratzern und Unebenheiten',
      'Professionelle Versiegelung und Ölung',
      'Farbliche Anpassung und Renovierung',
      'Oberflächenbehandlung',
      'Reparaturen',
      'Austausch beschädigter Bereiche',
      'Sanierung'
    ],
    benefits: [
      {
        title: 'Höchste Qualität',
        description: 'Mit unserer langjährigen Erfahrung und modernstem Equipment garantieren wir höchste Qualität und Langlebigkeit.'
      },
      {
        title: 'Minimale Belastung',
        description: 'Dank modernster Absaugtechnik arbeiten wir nahezu staubfrei und mit minimaler Belastung für Sie.'
      },
      {
        title: 'Kosteneinsparung',
        description: 'Eine professionelle Renovierung ist oft günstiger als ein kompletter Neubelag und schont Ressourcen.'
      },
      {
        title: 'Schnelle Ausführung',
        description: 'Wir arbeiten effizient und termingerecht, damit Sie Ihre renovierten Räume schnell wieder nutzen können.'
      }
    ],
    processSteps: [
      {
        title: 'Zustandsanalyse',
        description: 'Gründliche Prüfung des aktuellen Zustands und Ihrer Renovierungswünsche.'
      },
      {
        title: 'Konzepterstellung',
        description: 'Entwicklung eines passenden Renovierungskonzepts mit detaillierter Kostenaufstellung.'
      },
      {
        title: 'Durchführung',
        description: 'Sorgfältige Ausführung der Renovierungsarbeiten mit modernster Technik.'
      },
      {
        title: 'Nachbehandlung',
        description: 'Professionelle Versiegelung und Pflege für langanhaltende Schönheit.'
      }
    ],
    cta: {
      text: 'Mehr über Renovierung',
      href: '/leistungen/parkett-schleifen'
    }
  },
  {
    id: 'grundreinigung',
    title: 'Grundreinigung & Pflege',
    description: 'Materialschonende Reinigung und Pflege aller Arten von Bodenbelägen',
    imageUrl: '/img/services/grundreinigung.jpg',
    icon: Sparkles,
    features: [
      'Grundreinigung von Parkett und Holzböden',
      'Teppich- und Textilbodenreinigung',
      'Steinboden- und Fliesenreinigung',
      'Spezialreinigung für empfindliche Böden',
      'Schonende Reinigungsmittel',
      'Professionelle Reinigungsmaschinen',
      'Spezielle Pflegeprodukte',
      'Nachhaltige Versiegelung'
    ],
    benefits: [
      {
        title: 'Langlebigkeit',
        description: 'Regelmäßige Pflege verlängert die Lebensdauer Ihrer Böden.'
      },
      {
        title: 'Hygiene',
        description: 'Professionelle Reinigung entfernt auch hartnäckige Verschmutzungen und Bakterien.'
      },
      {
        title: 'Optik',
        description: 'Gepflegte Böden behalten ihre schöne Optik und Strahlkraft.'
      }
    ],
    processSteps: [
      {
        title: 'Analyse',
        description: 'Bestimmung der Bodenart und des Reinigungsbedarfs.'
      },
      {
        title: 'Grundreinigung',
        description: 'Gründliche Reinigung mit speziellen Maschinen und Mitteln.'
      },
      {
        title: 'Pflege',
        description: 'Aufbringen von Pflegemitteln und Beschichtungen.'
      },
      {
        title: 'Pflegeplan',
        description: 'Erstellung eines individuellen Pflegeplans.'
      }
    ],
    cta: {
      text: 'Mehr über Grundreinigung',
      href: '/leistungen/grundreinigung'
    }
  },
  {
    id: 'treppenrenovierung',
    title: 'Treppenrenovierung',
    description: 'Professionelle Renovierung und Aufwertung Ihrer Treppenstufen',
    imageUrl: '/img/services/treppenrenovierung.jpg',
    icon: ArrowUpSquare,
    features: [
      'Aufarbeitung bestehender Holztreppen',
      'Verlegung neuer Treppenbeläge',
      'Austausch beschädigter Treppenstufen',
      'Rutschfeste Beschichtungen',
      'Optische Aufwertung durch moderne Materialien',
      'Anpassung an vorhandene Bodenbeläge'
    ],
    benefits: [
      {
        title: 'Kostengünstig',
        description: 'Eine kostengünstige Alternative zum kompletten Treppenaustausch.'
      },
      {
        title: 'Schnelle Durchführung',
        description: 'Effiziente Renovierung mit minimaler Beeinträchtigung des Alltags.'
      },
      {
        title: 'Langlebigkeit',
        description: 'Hochwertige und langlebige Ergebnisse durch professionelle Verarbeitung.'
      },
      {
        title: 'Sicherheit',
        description: 'Erhöhung der Sicherheit durch rutschfeste Oberflächen.'
      }
    ],
    processSteps: [
      {
        title: 'Inspektion',
        description: 'Gründliche Begutachtung der Treppe und Feststellung des Renovierungsbedarfs.'
      },
      {
        title: 'Planung',
        description: 'Individuelle Beratung, Auswahl der Materialien und Festlegung des Designs.'
      },
      {
        title: 'Renovierung',
        description: 'Fachgerechte Durchführung der Renovierungsarbeiten mit höchster Präzision.'
      },
      {
        title: 'Endkontrolle',
        description: 'Sorgfältige Prüfung der Qualität, Sicherheit und optischen Erscheinung.'
      }
    ],
    cta: {
      text: 'Mehr über Treppenrenovierung',
      href: '/leistungen/treppenrenovierung'
    }
  },
  {
    id: 'aufmass-inspektion',
    title: 'Aufmaß & Inspektion',
    description: 'Präzise Vermessung und Inspektion von Räumlichkeiten für eine optimale Planung. Unsere professionelle Aufmaßnahme bildet die Grundlage für alle weiteren Arbeiten.',
    imageUrl: '/img/services/aufmass.jpg',
    icon: Square,
    features: [
      'Digitale Vermessung',
      'Detaillierte Bestandsaufnahme',
      'Professionelle Dokumentation',
      'Materialbedarfsermittlung',
      'Kostenoptimierte Planung',
      'Technische Analysen'
    ],
    benefits: [
      {
        title: 'Höchste Präzision',
        description: 'Exakte Vermessung mit modernster Technik für eine perfekte Materialberechnung.'
      },
      {
        title: 'Kostenersparnis',
        description: 'Vermeidung von Verschnitt und unnötigen Kosten durch präzise Planung.'
      },
      {
        title: 'Planungssicherheit',
        description: 'Detaillierte Dokumentation als zuverlässige Basis für alle weiteren Schritte.'
      },
      {
        title: 'Transparenz',
        description: 'Klare Übersicht über alle Maße und technischen Details.'
      }
    ],
    processSteps: [
      {
        title: 'Erstbegehung',
        description: 'Erste Besichtigung und Erfassung der örtlichen Gegebenheiten.'
      },
      {
        title: 'Vermessung',
        description: 'Präzise digitale Aufnahme aller relevanten Maße.'
      },
      {
        title: 'Dokumentation',
        description: 'Erstellung detaillierter Aufmaßpläne und technischer Zeichnungen.'
      },
      {
        title: 'Auswertung',
        description: 'Analyse der Daten und Erstellung einer umfassenden Dokumentation.'
      }
    ],
    cta: {
      text: 'Mehr über Aufmaß & Inspektion',
      href: '/leistungen/aufmass-inspektion'
    }
  },
  {
    id: 'altboden-entsorgung',
    title: 'Altboden-Entsorgung',
    description: 'Fachgerechte Demontage und umweltgerechte Entsorgung alter Bodenbeläge',
    imageUrl: '/img/services/entsorgung.jpg',
    icon: Trash2,
    features: [
      'Fachgerechte Demontage',
      'Sortenreine Trennung',
      'Umweltgerechter Transport',
      'Recycling wo möglich',
      'Dokumentierte Entsorgung',
      'Einhaltung aller Vorschriften'
    ],
    benefits: [
      {
        title: 'Umweltschutz',
        description: 'Nachhaltige und umweltgerechte Entsorgung aller Materialien.'
      },
      {
        title: 'Komplettservice',
        description: 'Von der Demontage bis zur Entsorgung - alles aus einer Hand.'
      },
      {
        title: 'Rechtssicherheit',
        description: 'Garantierte Einhaltung aller aktuellen Umwelt- und Entsorgungsvorschriften.'
      },
      {
        title: 'Sauberkeit',
        description: 'Professionelle und saubere Durchführung aller Arbeiten.'
      }
    ],
    processSteps: [
      {
        title: 'Bestandsaufnahme',
        description: 'Erfassung der zu entsorgenden Materialien und Mengen.'
      },
      {
        title: 'Demontage',
        description: 'Fachgerechter und schonender Ausbau der alten Bodenbeläge.'
      },
      {
        title: 'Sortierung',
        description: 'Sortenreine Trennung der Materialien für optimales Recycling.'
      },
      {
        title: 'Entsorgung',
        description: 'Umweltgerechte Entsorgung oder Recycling mit Dokumentation.'
      }
    ],
    cta: {
      text: 'Mehr über Altboden-Entsorgung',
      href: '/leistungen/altboden-entsorgung'
    }
  },
  {
    id: 'raumgestaltung',
    title: 'Raumgestaltung',
    description: 'Ganzheitliche Raumgestaltung und Farbberatung für harmonische Wohnräume. Wir helfen Ihnen, Ihre Räume optimal zu gestalten und eine angenehme Atmosphäre zu schaffen.',
    imageUrl: '/img/services/raumgestaltung.jpg',
    icon: Palette,
    features: [
      'Farbkonzepte und -beratung',
      'Materialauswahl und -kombination',
      'Lichtplanung und Beleuchtungskonzepte',
      'Möblierungsvorschläge',
      'Accessoires und Dekoration',
      'Raumakustik-Optimierung'
    ],
    benefits: [
      {
        title: 'Harmonie',
        description: 'Perfekte Abstimmung aller Gestaltungselemente für ein harmonisches Gesamtbild.'
      },
      {
        title: 'Wohlbefinden',
        description: 'Schaffung einer Atmosphäre, in der Sie sich rundum wohlfühlen.'
      },
      {
        title: 'Funktionalität',
        description: 'Optimale Raumnutzung durch durchdachte Gestaltungskonzepte.'
      },
      {
        title: 'Wertsteigerung',
        description: 'Professionelle Gestaltung steigert den Wert Ihrer Immobilie.'
      }
    ],
    processSteps: [
      {
        title: 'Bestandsaufnahme',
        description: 'Analyse der vorhandenen Raumsituation und Ihrer Wünsche.'
      },
      {
        title: 'Konzeptentwicklung',
        description: 'Erarbeitung eines individuellen Gestaltungskonzepts.'
      },
      {
        title: 'Visualisierung',
        description: 'Präsentation von Gestaltungsvorschlägen und Materialmustern.'
      },
      {
        title: 'Umsetzung',
        description: 'Professionelle Realisierung des ausgewählten Konzepts.'
      }
    ],
    cta: {
      text: 'Mehr über Raumgestaltung',
      href: '/leistungen/raumgestaltung'
    }
  },


  {
    id: 'reparaturen',
    title: 'Reparaturen',
    description: 'Beschädigte Bodenbeläge sind nicht nur optisch störend, sondern können auch zu Unfallgefahren führen. Wir bieten professionelle Reparaturlösungen für alle Arten von Bodenbelägen.',
    imageUrl: '/img/services/reparaturen.jpg',
    icon: Paintbrush,
    features: [
      'Behebung von Kratzern und Dellen',
      'Austausch beschädigter Bereiche',
      'Reparatur von losen Fugen',
      'Beseitigung von Wasserflecken',
      'Ausbesserung von Verfärbungen',
      'Behebung von Quietschgeräuschen'
    ],
    benefits: [
      {
        title: 'Kosteneinsparung',
        description: 'Reparaturen sind oft günstiger als ein kompletter Austausch.'
      },
      {
        title: 'Sicherheit',
        description: 'Behebung von Unfallgefahren durch beschädigte Bodenbeläge.'
      },
      {
        title: 'Vielseitigkeit',
        description: 'Reparaturlösungen für alle Bodenbeläge: Parkett, Laminat, Vinyl, Teppich, Linoleum und mehr.'
      }
    ],
    processSteps: [
      {
        title: 'Schadensanalyse',
        description: 'Genaue Untersuchung und Bewertung der Schäden.'
      },
      {
        title: 'Lösungsvorschlag',
        description: 'Entwicklung der optimalen Reparaturmethode.'
      },
      {
        title: 'Reparatur',
        description: 'Fachgerechte Ausführung der Reparaturarbeiten.'
      },
      {
        title: 'Qualitätskontrolle',
        description: 'Prüfung des Reparaturergebnisses.'
      }
    ],
    cta: {
      text: 'Mehr über Reparaturen',
      href: '/leistungen/reparaturen'
    }
  }
]
