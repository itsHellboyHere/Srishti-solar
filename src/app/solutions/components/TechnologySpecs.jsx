'use client'
import { useState } from 'react'
import styles from '../css/TechnologySpecs.module.css'
import {
  Zap,
  FlipHorizontal,
  ShieldCheck,
  Thermometer,
  Cloud,
  IndianRupee,
  ChevronUp,
  ChevronDown,
} from 'lucide-react'

/* ══════════════════════════════════════════════
   DATA — extracted from Srishti Solar spec PDFs
   To add real images later:
     1. Add `image: '/products/module-topcon.jpg'` to each product
     2. Replace <PanelSVG /> with <img src={product.image} ... />
══════════════════════════════════════════════ */

const TABS = [
  { id: 'module',  labelHi: 'सोलर मॉड्यूल', labelEn: 'PV Modules'     },
  { id: 'cell',    labelHi: 'सोलर सेल',     labelEn: 'Solar Cells'     },
  { id: 'wafer',   labelHi: 'सिलिकॉन वेफर', labelEn: 'Silicon Wafers'  },
]

const MODULES = [
  {
    id:      'topcon',
    name:    'TOPcon Bifacial',
    badge:   'Premium',
    badgeColor: '#F4A300',
    // image: '/products/module-topcon.jpg',
    features: [
      { Icon: Zap,            hi: 'उच्च आउटपुट पावर',     en: 'Higher output power'              },
      { Icon: FlipHorizontal, hi: 'बाइफेशियल सेल',         en: 'Bifacial cells — more sunlight'   },
      { Icon: ShieldCheck,    hi: 'PID प्रतिरोधी',          en: 'Excellent PID Resistance'         },
      { Icon: Thermometer,    hi: 'बेहतर तापमान गुणांक',   en: 'Better temperature coefficient'   },
      { Icon: Cloud,          hi: 'शेडिंग टॉलरेंस',         en: 'Better shading tolerance'         },
      { Icon: IndianRupee,    hi: 'कम LCOE',                en: 'Lower LCOE'                       },
    ],
    tech: [
      { label: 'Technology',    value: 'TOPcon, Glass to Glass'             },
      { label: 'Cell Type',     value: 'Bifacial MBB with Circular Ribbon'  },
      { label: 'Tolerance',     value: 'Positive tolerance offer'           },
    ],
    certs: ['IEC 61215', 'IEC 61730', 'UL 61730', 'CSA 61730'],
  },
]

const CELLS = [
  {
    id:    'n182',
    name:  'N-Type Mono 182MM',
    sub:   '10BB / 16BB',
    badge: 'N-Type',
    badgeColor: '#3b82f6',
    specs: [
      { label: 'Size',       value: '182.2 × 183.75 mm ±0.5mm' },
      { label: 'Diagonal',   value: '256mm ±0.5mm'              },
      { label: 'Thickness',  value: '130μm ±14μm'               },
      { label: 'Front (−)',  value: 'SiO₂ + blue SiN composite, PID Free, 16BB×0.03mm' },
      { label: 'Back (+)',   value: '0.03mm wide busbars, Al₂O₃, SiN antireflection'   },
    ],
  },
  {
    id:    'n210',
    name:  'N-Type Mono 210MM',
    sub:   '18BB',
    badge: 'N-Type',
    badgeColor: '#3b82f6',
    specs: [
      { label: 'Size',      value: '210 × 210mm ±0.5mm'                              },
      { label: 'Thickness', value: '130μm ±13μm'                                     },
      { label: 'Front (−)', value: '18 busbars, 14 pads, 168 fingers, width 0.021±0.02mm' },
      { label: 'Back (+)',  value: '18 busbars, 14 pads, 174 fingers, width 0.021±0.02mm' },
    ],
  },
  {
    id:    'hjt',
    name:  'HJT Mono 210MM×105MM',
    sub:   '20BB',
    badge: 'HJT',
    badgeColor: '#22c55e',
    specs: [
      { label: 'Size',      value: '210 × 105mm ±0.15mm'                           },
      { label: 'Thickness', value: '110μm ±15μm'                                   },
      { label: 'Front (−)', value: '20 silver busbars 0.04mm + padding, Blue TCO Film' },
      { label: 'Back (+)',  value: '20 silver busbars 0.04mm + padding, Blue TCO Film' },
    ],
  },
  {
    id:    'perc182',
    name:  'Mono PERC 182MM',
    sub:   '10BB',
    badge: 'PERC',
    badgeColor: '#a855f7',
    specs: [
      { label: 'Size',      value: '182 × 182mm ±0.25mm'                             },
      { label: 'Diagonal',  value: '247mm ±0.25mm'                                   },
      { label: 'Thickness', value: '170μm ±17μm'                                     },
      { label: 'Front (−)', value: 'SiO₂ + blue SiN, PID Free, 10BB×0.05mm'          },
      { label: 'Back (+)',  value: '1.4mm busbars, Al₂O₃ + SiN, local Al finger contact' },
    ],
  },
  {
    id:    'perc158',
    name:  'Mono PERC 158.75MM',
    sub:   '5BB Half-cell',
    badge: 'PERC',
    badgeColor: '#a855f7',
    specs: [
      { label: 'Size',      value: '158.75 × 158.75mm +0.25mm'                       },
      { label: 'Thickness', value: '160μm ±20μm'                                     },
      { label: 'Front (−)', value: 'SiO₂ + blue SiN, PID Free, 5BB×0.7mm half-cell'  },
      { label: 'Back (+)',  value: 'AlOx + SiNx dual layer, segmented 5×4, 1.7×17.5mm'},
    ],
  },
  {
    id:    'poly157',
    name:  'Poly 157MM',
    sub:   '5BB',
    badge: 'Poly',
    badgeColor: '#f97316',
    specs: [
      { label: 'Size',      value: '157 × 157mm ±0.25mm'                           },
      { label: 'Thickness', value: '170μm ±20μm'                                   },
      { label: 'Front (−)', value: 'Silicon Nitride 0.6mm coating, ±0.1mm silver busbar, 104 fingers' },
      { label: 'Back (+)',  value: '1.6mm ±0.1mm segmented silver pads, Al BSF'     },
    ],
  },
]

const WAFERS = [
  {
    id:    'w182n',
    name:  '182MM N-Type Mono',
    badge: 'N-Type',
    badgeColor: '#3b82f6',
    specs: [
      { label: 'Specification',         value: '182.2 × 183.75mm'  },
      { label: 'Length of Side',        value: '±0.25mm'           },
      { label: 'Diagonal',              value: '256 ±0.5mm'        },
      { label: 'Squareness',            value: '90° ±0.15°'        },
      { label: 'Thickness Variation',   value: '≤25μm'             },
      { label: 'Warp',                  value: '≤40μm'             },
      { label: 'Saw Mark',              value: '≤25μm'             },
    ],
  },
  {
    id:    'w182p',
    name:  '182MM P-Type Mono',
    badge: 'P-Type',
    badgeColor: '#f97316',
    specs: [
      { label: 'Specification',         value: '182 × 182mm'       },
      { label: 'Length of Side',        value: '182 ±0.25mm'       },
      { label: 'Diagonal',              value: '247 ±0.25mm'       },
      { label: 'Squareness',            value: '90° ±0.25°'        },
      { label: 'Thickness Variation',   value: '≤27μm'             },
      { label: 'Warp',                  value: '≤50μm'             },
      { label: 'Saw Mark',              value: '≤13μm'             },
    ],
  },
  {
    id:    'w210',
    name:  '210MM Monocrystalline',
    badge: 'Mono',
    badgeColor: '#22c55e',
    specs: [
      { label: 'Specification',         value: '210 × 210mm'       },
      { label: 'Length of Side',        value: '210 ±0.25mm'       },
      { label: 'Diagonal',              value: '295 ±0.25mm'       },
      { label: 'Squareness',            value: '90° ±0.25°'        },
      { label: 'Thickness Variation',   value: '≤27μm'             },
      { label: 'Warp',                  value: '≤50μm'             },
      { label: 'Saw Mark',              value: '≤13μm'             },
    ],
  },
]

/* ── SVG placeholder panel ── */
function PanelSVG({ color = '#F4A300' }) {
  return (
    <svg viewBox="0 0 160 200" className={styles.panelSvg} aria-hidden="true">
      <rect x="8" y="8" width="144" height="184" rx="4"
        fill="#111" stroke={color} strokeWidth="1" strokeOpacity="0.3"/>
      {[0,1,2,3].map(c => [0,1,2,3,4,5].map(r => (
        <rect key={`${c}${r}`}
          x={14 + c * 34} y={14 + r * 29}
          width="30" height="25" rx="2"
          fill="rgba(255,255,255,0.04)"
          stroke={color} strokeWidth="0.5" strokeOpacity="0.25"
        />
      )))}
      {[0,1,2,3].map(c => (
        <line key={c}
          x1={29 + c * 34} y1="14" x2={29 + c * 34} y2="186"
          stroke={color} strokeWidth="0.6" strokeOpacity="0.3"
        />
      ))}
      <circle cx="138" cy="22" r="18" fill={color} opacity="0.08"/>
      <circle cx="138" cy="22" r="10" fill={color} opacity="0.18"/>
    </svg>
  )
}

/* ── Spec table ── */
function SpecTable({ specs }) {
  return (
    <table className={styles.specTable}>
      <tbody>
        {specs.map((row, i) => (
          <tr key={i} className={styles.specRow}>
            <td className={styles.specLabel}>{row.label}</td>
            <td className={styles.specValue}>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function TechnologySpecs() {
  const [activeTab, setActiveTab] = useState('module')
  const [expanded, setExpanded]   = useState({})

  const toggle = (id) =>
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <section className={styles.section} id="tech">

      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot}/>
            हमारी तकनीक · Our Technology
          </span>
          <h2 className={styles.title}>
            प्रीमियम क्वालिटी,{' '}
            <span className={styles.gold}>प्रमाणित तकनीक</span>
          </h2>
          <p className={styles.sub}>
            IEC & UL certified components — sourced direct, installed right.
          </p>
        </div>

        {/* Tab bar */}
        <div className={styles.tabs}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className={styles.tabHi}>{tab.labelHi}</span>
              <span className={styles.tabEn}>{tab.labelEn}</span>
            </button>
          ))}
        </div>

        {/* ── MODULES TAB ── */}
        {activeTab === 'module' && (
          <div className={styles.moduleGrid}>
            {MODULES.map(mod => (
              <div key={mod.id} className={styles.moduleCard}>

                <div className={styles.moduleVisual}>
                  <PanelSVG color={mod.badgeColor}/>
                  <div className={styles.moduleBadge}
                    style={{ background: mod.badgeColor, color: '#1A0E04' }}>
                    {mod.badge}
                  </div>
                </div>

                <div className={styles.moduleInfo}>
                  <h3 className={styles.moduleName}>{mod.name}</h3>

                  <div className={styles.featureGrid}>
                    {mod.features.map((f, i) => (
                      <div key={i} className={styles.feature}>
                        <span className={styles.featIcon}>
                          <f.Icon size={18} strokeWidth={1.8} color="#F4A300"/>
                        </span>
                        <div>
                          <div className={styles.featHi}>{f.hi}</div>
                          <div className={styles.featEn}>{f.en}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className={styles.expandBtn}
                    onClick={() => toggle(mod.id)}
                  >
                    {expanded[mod.id]
                      ? <><ChevronUp size={13} strokeWidth={2.5}/> Hide Specs</>
                      : <><ChevronDown size={13} strokeWidth={2.5}/> View Full Specs</>
                    }
                  </button>

                  {expanded[mod.id] && (
                    <div className={styles.expandBody}>
                      <SpecTable specs={mod.tech}/>
                    </div>
                  )}

                  <div className={styles.certs}>
                    {mod.certs.map((c, i) => (
                      <span key={i} className={styles.cert}>{c}</span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* ── CELLS TAB ── */}
        {activeTab === 'cell' && (
          <div className={styles.cardGrid}>
            {CELLS.map(cell => (
              <div key={cell.id} className={styles.specCard}>

                <div className={styles.specVisual}>
                  <PanelSVG color={cell.badgeColor}/>
                  <span className={styles.specBadge}
                    style={{ background: cell.badgeColor, color: '#fff' }}>
                    {cell.badge}
                  </span>
                </div>

                <div className={styles.specInfo}>
                  <div className={styles.specHead}>
                    <h3 className={styles.specName}>{cell.name}</h3>
                    <p className={styles.specSub}>{cell.sub}</p>
                  </div>

                  <SpecTable specs={cell.specs.slice(0, 2)}/>

                  <button
                    className={styles.expandBtn}
                    onClick={() => toggle(cell.id)}
                  >
                    {expanded[cell.id]
                      ? <><ChevronUp size={13} strokeWidth={2.5}/> Hide</>
                      : <><ChevronDown size={13} strokeWidth={2.5}/> +{cell.specs.length - 2} more specs</>
                    }
                  </button>

                  {expanded[cell.id] && (
                    <div className={styles.expandBody}>
                      <SpecTable specs={cell.specs.slice(2)}/>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

        {/* ── WAFERS TAB ── */}
        {activeTab === 'wafer' && (
          <div className={styles.cardGrid}>
            {WAFERS.map(wafer => (
              <div key={wafer.id} className={styles.specCard}>

                <div className={styles.specVisual}>
                  <PanelSVG color={wafer.badgeColor}/>
                  <span className={styles.specBadge}
                    style={{ background: wafer.badgeColor, color: '#fff' }}>
                    {wafer.badge}
                  </span>
                </div>

                <div className={styles.specInfo}>
                  <div className={styles.specHead}>
                    <h3 className={styles.specName}>{wafer.name}</h3>
                  </div>

                  <SpecTable specs={wafer.specs.slice(0, 3)}/>

                  <button
                    className={styles.expandBtn}
                    onClick={() => toggle(wafer.id)}
                  >
                    {expanded[wafer.id]
                      ? <><ChevronUp size={13} strokeWidth={2.5}/> Hide</>
                      : <><ChevronDown size={13} strokeWidth={2.5}/> +{wafer.specs.length - 3} more specs</>
                    }
                  </button>

                  {expanded[wafer.id] && (
                    <div className={styles.expandBody}>
                      <SpecTable specs={wafer.specs.slice(3)}/>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Bottom curve — into SolutionsScroll (also dark #0E0904) */}
      <div className={styles.curveBottom}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 Q720,90 1440,0 L1440,90 L0,90 Z" fill="#0E0904"/>
        </svg>
      </div>

    </section>
  )
}