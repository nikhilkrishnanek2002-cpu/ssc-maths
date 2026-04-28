const gaChemistryData = {
    ga_chem_matter_mixtures: {
        category: "General Science: Chemistry",
        title: "Nature of Matter",
        subtitle: "Elements, Compounds & Mixtures",
        blocks: [
            {
                title: "States of Matter",
                text: "Matter exists as Solid, Liquid, or Gas. Forces are max in solids and min in gases. States are inter-convertible via temperature/pressure changes.",
                shortcut: "Fusion: Solid to Liquid; Evaporation: Liquid to Vapour."
            },
            {
                title: "Pure Substances vs Mixtures",
                text: "Pure substances (Elements/Compounds) have uniform composition. Mixtures (Homogeneous/Heterogeneous) are physical combinations.",
                examples: ["Element: Gold, Oxygen", "Compound: Water (H2O)", "Homogeneous: Vinegar, Alloy", "Heterogeneous: Salt & Pepper"]
            },
            {
                title: "Separation Techniques",
                text: "Methods include Filtration (insoluble solids), Distillation (miscible liquids), Sublimation (sublime solids), and Chromatography.",
                shortcut: "Centrifugation is used for fine solids instead of filtration."
            }
        ]
    },
    ga_chem_solutions_colloids: {
        category: "General Science: Chemistry",
        title: "Solutions & Colloids",
        subtitle: "Solubility & Dispersion",
        blocks: [
            {
                title: "Types of Solutions",
                text: "Saturated: No more solute dissolves. Unsaturated: More solute can dissolve. Super-saturated: Contains more solute than saturated at given temp.",
                shortcut: "Solubility: Amount of solute in 100g solvent for saturation."
            },
            {
                title: "Colloids & Emulsions",
                text: "Colloids are intermediate between solutions and suspensions (1nm-100nm). Emulsions are liquid-liquid colloids.",
                examples: ["Colloids: Milk, Fog", "Emulsifiers: Substances that stabilize emulsions (paints, creams)"]
            }
        ]
    },
    ga_chem_acids_bases: {
        category: "General Science: Chemistry",
        title: "Acids, Bases & pH",
        subtitle: "Indicators & Strengths",
        blocks: [
            {
                title: "Acids and Bases",
                text: "Acids produce H+ ions (sour, corrosive). Bases produce OH- ions (bitter, soapy). Alkalis are water-soluble bases.",
                examples: ["Strong Acid: HCl, H2SO4", "Strong Base: NaOH, KOH", "Weak Acid: Acetic, Formic"]
            },
            {
                title: "Indicators",
                text: "Litmus: Red in acid, Blue in base. Turmeric, China Rose are natural indicators. Olfactory: Odour changes (Onion, Vanilla).",
                shortcut: "Litmus is extracted from Lichens (Thallophyta)."
            },
            {
                title: "The pH Scale",
                text: "Measures strength (0-14). 7 is neutral, <7 acidic, >7 basic. Stomach pH: 1.2. Blood pH: 7.35-7.45.",
                shortcut: "Acid Rain: pH < 5.6. Tooth decay starts at mouth pH < 5.5."
            }
        ]
    },
    ga_chem_atomic_structure: {
        category: "General Science: Chemistry",
        title: "Atomic Structure",
        subtitle: "Particles & Nucleus",
        blocks: [
            {
                title: "Fundamental Particles",
                text: "Proton (Goldstein): Positive charge. Electron (Thomson): Negative charge. Neutron (Chadwick): No charge. Nucleus (Rutherford): Center of atom.",
                shortcut: "Electron charge measured by Millikan (Oil drop experiment)."
            },
            {
                title: "Atomic Terminology",
                text: "Atomic Number (Z): No. of protons. Mass Number (A): Protons + Neutrons. Valency: Electrons shared/lost/gained for octet.",
                shortcut: "Isotopes: Same Z, different A. Isobars: Same A, different Z. Isotones: Same no. of Neutrons."
            },
            {
                title: "Radioactive Isotopes",
                text: "Used in medicine and industry. U-235 (fuel), Co-60 (cancer), I-131 (thyroid), As-74 (tumors).",
                examples: ["Uranium-235: Nuclear reactors", "Iodine-131: Goiter treatment"]
            }
        ]
    },
    ga_chem_common_elements: {
        category: "General Science: Chemistry",
        title: "Common Elements & Compounds",
        subtitle: "Carbon, Nitrogen & Oxygen",
        blocks: [
            {
                title: "Carbon & Allotropes",
                text: "Diamond (purest/hardest), Graphite (soft/slippery/conducts), Fullerene (soccer-ball shape), Graphene.",
                shortcut: "Dry Ice is solid CO2. CO (Carbon Monoxide) causes suffocation (Asphyxia)."
            },
            {
                title: "Nitrogen & Ammonia",
                text: "Nitrogen is 79% of air. Ammonia (Haber process) is used for fertilizers. Nitrogen fixation involves Rhizobia bacteria.",
                examples: ["Chile saltpetre: Sodium Nitrate", "Indian saltpetre: Potassium Nitrate"]
            },
            {
                title: "Oxygen & Ozone",
                text: "Oxygen is 21% of air. Ozone (O3) protects from UV rays. CFCs deplete the ozone layer.",
                shortcut: "Liquid Oxygen + Carbon = Explosive used in mining."
            }
        ]
    },
    ga_chem_industrial_salts: {
        category: "General Science: Chemistry",
        title: "Industrial Salts",
        subtitle: "Baking, Washing & Plaster",
        blocks: [
            {
                title: "Baking & Washing Soda",
                text: "Baking Soda: NaHCO3 (Solvay process). Washing Soda: Na2CO3.10H2O (Solvay process).",
                examples: ["Baking powder = NaHCO3 + Tartaric acid", "Washing soda: removes permanent water hardness"]
            },
            {
                title: "POP & Bleaching Powder",
                text: "Plaster of Paris: CaSO4.1/2H2O. Bleaching Powder: CaOCl2 (Hasen-Clever Method).",
                examples: ["POP used for fractured bones and statues", "Bleaching powder: disinfectant for water"]
            }
        ]
    },
    ga_chem_everyday_life: {
        category: "General Science: Chemistry",
        title: "Everyday Chemistry",
        subtitle: "Cement, Glass & Fertilizers",
        blocks: [
            {
                title: "Cement & Glass",
                text: "Portland Cement: Lime, Silica, Alumina, Gypsum. Glass: Supercooled liquid of silicates. Annealing is slow cooling of glass.",
                examples: ["Soft glass: windows", "Flint glass: optical instruments", "Pyrex: lab apparatus"]
            },
            {
                title: "Fertilizers & Pesticides",
                text: "Urea (46.6% N) is a common neutral fertilizer. NPK: Nitrogen, Phosphorus, Potassium mixture.",
                shortcut: "DDT was the first chlorinated organic insecticide."
            },
            {
                title: "Polymers",
                text: "Macromolecules like Nylon (stronger than steel), Terylene (polyester), Bakelite (switches), Teflon (non-stick).",
                examples: ["Natural rubber: Isoprene", "Vulcanization: Heating rubber with Sulphur"]
            }
        ]
    },
    ga_chem_periodic_reactions: {
        category: "General Science: Chemistry",
        title: "Periodic Table & Reactions",
        subtitle: "Laws & Trends",
        blocks: [
            {
                title: "Periodic Table",
                text: "Mendeleev (Atomic mass); Modern (Atomic number). Trends: Electronegativity increases across period; Metallic character increases down group.",
                shortcut: "Argon is the most abundant noble gas in the atmosphere."
            },
            {
                title: "Chemical Reactions",
                text: "Laws of Combination: Conservation of Mass, Constant Proportions. Exothermic (heat out), Endothermic (heat in).",
                examples: ["Redox: Oxidation + Reduction", "Catalysts: Alter rate without being consumed (Haber, Contact processes)"]
            },
            {
                title: "Corrosion & Rusting",
                text: "Rust: Hydrated iron (III) oxide. Prevention: Painting, Galvanizing (coating with Zinc), Chrome plating.",
                shortcut: "Stainless steel: Iron + Chromium + Nickel + Manganese."
            }
        ]
    },
    ga_chem_metals_ores: {
        category: "General Science: Chemistry",
        title: "Metals & Metallurgy",
        subtitle: "Properties & Extraction",
        blocks: [
            {
                title: "Key Metals",
                text: "Sodium (stored in kerosene), Potassium (caustic potash), Calcium (quick lime), Magnesium (Milk of Magnesia).",
                shortcut: "Mercury is liquid at room temp; Silver is the best heat conductor."
            },
            {
                title: "Alloys & Amalgams",
                text: "Alloys: Brass (Cu+Zn), Bronze (Cu+Sn), Solder (Pb+Sn), Gun Metal (Cu+Sn+Zn). Amalgam: Alloy of Mercury.",
                examples: ["Stainless Steel: Fe+Cr+Ni", "Duralumin: Al+Cu+Mn (aeroplanes)"]
            },
            {
                title: "Ores & Minerals",
                text: "Bauxite (Al), Haematite (Fe), Cinnabar (Hg), Galena (Pb), Cassiterite (Sn), Rock Salt (NaCl).",
                shortcut: "Fool's Gold: Iron Pyrites (FeS2)."
            }
        ]
    },
    ga_chem_gas_organic: {
        category: "General Science: Chemistry",
        title: "Gases & Organic Chemistry",
        subtitle: "Laws & Hydrocarbons",
        blocks: [
            {
                title: "Gas Laws",
                text: "Boyle's: PV = constant. Charles': V/T = constant. Ideal Gas Equation: PV = nRT.",
                shortcut: "Avogadro Number: 6.023 x 10^23."
            },
            {
                title: "Organic Chemistry",
                text: "Study of Hydrocarbons. Saturated: Alkanes (single bond). Unsaturated: Alkenes (=), Alkynes (≡).",
                examples: ["Methane: Marsh gas/Biogas", "LPG: Butane/Propane", "CNG: Compressed Natural Gas"]
            },
            {
                title: "Common Organic Compounds",
                text: "Methyl Alcohol (wood spirit - poisonous), Ethyl Alcohol (beverages), Chloroform (anesthetic), Glycerol (hygroscopic).",
                shortcut: "Bhopal Gas Tragedy: Methyl Isocyanate (MIC) leakage."
            },
            {
                title: "Fuels & Combustion",
                text: "Coal varieties: Anthracite (>90% C), Bituminous, Lignite, Peat. Rocket fuel: Liquid Hydrogen, Kerosene.",
                shortcut: "Octane number measures petrol quality; Cetane number for diesel."
            }
        ]
    },
    ga_chem_pollution: {
        category: "General Science: Chemistry",
        title: "Environmental Chemistry",
        subtitle: "Pollution & Smog",
        blocks: [
            {
                title: "Air Pollution",
                text: "SO2 and NO2 cause Acid Rain. Smog: Classical (cool/humid) vs Photochemical (warm/sunny).",
                shortcut: "PAN (Peroxyacetyl Nitrate) is a toxic secondary pollutant in smog."
            },
            {
                title: "Water Pollution",
                text: "Dissolved Oxygen (DO) optimum is 5-6 ppm. BOD (Biochemical Oxygen Demand) measures organic pollution.",
                shortcut: "Hardness: Temporary (Bicarbonates), Permanent (Sulphates/Chlorides)."
            },
            {
                title: "Health Hazards",
                text: "Silicosis (Silica dust), Black Lung (Coal dust), Byssinosis (Cotton dust), Asphyxia (CO poisoning).",
                examples: ["Minamata: Mercury poisoning", "Itai-Itai: Cadmium poisoning"]
            }
        ]
    }
};
