const gaPhysicsData = {
    ga_physics_quantities_units: {
        category: "General Science: Physics",
        title: "Physical Quantities & Units",
        subtitle: "The Foundation of Measurement",
        blocks: [
            {
                title: "Physical Quantities",
                text: "Those quantities which can describe the laws of physics and are possible to measure. Fundamental quantities do not depend on others (Mass, Length, Time, Temp, Current, Luminous Intensity, Amount of Substance). Derived quantities depend on fundamental ones (Speed, Acceleration, Force).",
                examples: ["Fundamental: Kilogram, Metre, Second, Kelvin, Ampere, Candela, Mole", "Derived: m/s (Speed), Newton (Force)"]
            },
            {
                title: "Units of Measurement",
                text: "Reference standards used to measure physical quantities. SI units are the international standard. CGS is an older metric system.",
                shortcut: "1 Newton = 10^5 dyne; 1 Joule = 10^7 erg."
            }
        ]
    },
    ga_physics_motion_kinematics: {
        category: "General Science: Physics",
        title: "Motion & Kinematics",
        subtitle: "Speed, Velocity & Acceleration",
        blocks: [
            {
                title: "Rest and Motion",
                text: "An object is at rest if it doesn't change position relative to surroundings. Motion types include Rectilinear (straight line), Angular (circular/projectile), and Rotational.",
                examples: ["Moving car: Rectilinear", "Spinning fan: Rotational"]
            },
            {
                title: "Velocity vs Speed",
                text: "Speed is distance/time (scalar). Velocity is displacement/time (vector). Average speed for equal distances = 2v1v2/(v1+v2).",
                shortcut: "For equal times, Average Speed = (v1 + v2) / 2."
            },
            {
                title: "Acceleration",
                text: "The rate of change of velocity. SI unit: m/s^2. Positive acceleration is speed increase; negative is deceleration/retardation.",
                shortcut: "Equations of Motion: v = u + at; s = ut + 1/2at^2; v^2 = u^2 + 2as."
            }
        ]
    },
    ga_physics_projectile_circular: {
        category: "General Science: Physics",
        title: "Projectile & Circular Motion",
        subtitle: "Motion in Two Dimensions",
        blocks: [
            {
                title: "Projectile Motion",
                text: "Motion under gravity in a curved parabolic path (trajectory). Examples: bullet shot from a gun, bomb dropped from a plane.",
                shortcut: "If two balls are dropped/thrown horizontally from the same height, they hit the ground simultaneously."
            },
            {
                title: "Circular Motion",
                text: "Motion along a circular path. Uniform circular motion has constant speed but changing velocity/acceleration (direction changes).",
                examples: ["Motion of electrons around nucleus", "Earth around the sun"]
            },
            {
                title: "Centripetal vs Centrifugal Force",
                text: "Centripetal force acts towards the center. Centrifugal force is a 'pseudo force' acting away from the center in a rotating frame.",
                examples: ["Roads are banked at turns for centripetal force", "Cream separation from milk uses centrifugal force"]
            }
        ]
    },
    ga_physics_newton_laws: {
        category: "General Science: Physics",
        title: "Newton's Laws & Friction",
        subtitle: "Force, Inertia & Resistance",
        blocks: [
            {
                title: "Newton's Three Laws",
                text: "1st: Law of Inertia (state remains unless force acts). 2nd: F = ma (rate of change of momentum). 3rd: Action & Reaction (equal and opposite).",
                examples: ["Rocket propulsion (3rd Law)", "Lowering hands while catching a ball (2nd Law - increases time, reduces force)"]
            },
            {
                title: "Linear Momentum",
                text: "Product of mass and velocity (p = mv). Conservation of momentum applies when external force is zero.",
                shortcut: "Jet engines and rockets work on Conservation of Linear Momentum."
            },
            {
                title: "Friction",
                text: "Force opposing relative motion. Caused by atomic/molecular attraction between surfaces. Types: Static, Limiting, Kinetic, Rolling.",
                examples: ["Ball bearings reduce friction", "Tyres have threads to increase friction/grip", "Walking is possible due to friction"]
            }
        ]
    },
    ga_physics_oscillations_waves: {
        category: "General Science: Physics",
        title: "Oscillations & Waves",
        subtitle: "SHM, Sound & EM Waves",
        blocks: [
            {
                title: "Simple Harmonic Motion (SHM)",
                text: "Back and forth motion where force is proportional to displacement. Pendulum: T = 2π√(l/g).",
                shortcut: "If a girl stands up on a swing, the time period decreases (effective length reduces)."
            },
            {
                title: "Mechanical vs Non-Mechanical Waves",
                text: "Mechanical waves need a medium (Sound, Water). Non-mechanical (EM) waves can travel through vacuum (Light, X-rays).",
                examples: ["Longitudinal: Sound", "Transverse: Light, String waves"]
            },
            {
                title: "Electromagnetic (EM) Waves",
                text: "Neutral waves traveling at light speed. Types: Gamma (Becquerel), X-rays (Rontgen), UV (Ritter), Visible (Newton), Infra-red (Hershel), Radio (Hertz/Marconi).",
                shortcut: "Gamma rays have the highest frequency/energy."
            }
        ]
    },
    ga_physics_sound_properties: {
        category: "General Science: Physics",
        title: "Sound & Acoustic Phenomena",
        subtitle: "Audibility, Echo & Doppler Effect",
        blocks: [
            {
                title: "Audibility Ranges",
                text: "Infrasonic (<20 Hz), Audible (20-20,000 Hz), Ultrasonic (>20,000 Hz). Frequency stays constant during propagation; speed/wavelength changes.",
                examples: ["Bats use ultrasonic waves", "Persistence of hearing: 1/10th second"]
            },
            {
                title: "Echo & Resonance",
                text: "Echo: Reflection of sound. Minimum distance for echo: 17 meters. Resonance occurs when external frequency matches natural frequency.",
                shortcut: "SONAR uses Ultrasonic waves to measure sea depth."
            },
            {
                title: "Doppler Effect",
                text: "Apparent change in frequency due to relative motion between source and observer.",
                examples: ["Police checking speed of vehicles", "Atports guiding aircraft"]
            }
        ]
    },
    ga_physics_heat_thermo: {
        category: "General Science: Physics",
        title: "Heat & Thermodynamics",
        subtitle: "Temp Scales, Expansion & Laws",
        blocks: [
            {
                title: "Temperature Scales",
                text: "Celsius (0-100), Fahrenheit (32-212), Kelvin (273-373). Triple point of water: 273.16 K.",
                shortcut: "Relation: C/100 = (F-32)/180 = R/80 = (K-273)/100. Note: -40°C = -40°F."
            },
            {
                title: "Thermal Expansion",
                text: "Linear (α), Superficial (β), Cubical (γ). Relation: α:β:γ = 1:2:3.",
                examples: ["Gaps left in railway tracks for summer expansion", "Anomalous expansion: Water density is max at 4°C"]
            },
            {
                title: "Specific & Latent Heat",
                text: "Specific heat (s): heat to raise 1g by 1°C. Latent heat (L): heat for phase change at constant temp.",
                shortcut: "Latent heat of fusion (ice): 80 cal/g; Latent heat of vaporization (steam): 536 cal/g."
            },
            {
                title: "Thermodynamics Laws",
                text: "Zeroth: Thermal equilibrium. 1st: Energy conservation (Q = ΔU + W). 2nd: Efficiency < 100% (Entropy measure).",
                examples: ["Refrigerator works on the 2nd Law (Clausius statement)"]
            }
        ]
    },
    ga_physics_heat_transmission: {
        category: "General Science: Physics",
        title: "Transmission of Heat",
        subtitle: "Conduction, Convection & Radiation",
        blocks: [
            {
                title: "Conduction & Convection",
                text: "Conduction: Heat flow in solids without particle movement. Convection: Heat flow in fluids (liquids/gases) via particle movement.",
                examples: ["Metals are good conductors", "Land and Sea breezes are due to convection"]
            },
            {
                title: "Radiation",
                text: "Heat transmission via EM waves; requires no medium. Black bodies absorb all incident radiation.",
                shortcut: "Kirchhoff’s Law: Good absorbers are good emitters. Why white clothes are better in summer."
            }
        ]
    },
    ga_physics_matter_fluids: {
        category: "General Science: Physics",
        title: "Matter & Fluid Mechanics",
        subtitle: "Elasticity, Pressure & Surface Tension",
        blocks: [
            {
                title: "Elasticity & Stress",
                text: "Elasticity: Regain shape after force removal. Plasticity: Permanent deformation. Hooke's Law: Stress is proportional to Strain within elastic limit.",
                examples: ["Steel is more elastic than copper", "Bridges are declared unsafe due to elastic fatigue"]
            },
            {
                title: "Fluid Pressure & Pascal's Law",
                text: "Pressure P = F/A. Pascal's Law: Pressure in confined fluid is transmitted equally in all directions.",
                examples: ["Hydraulic lifts, brakes, and presses"]
            },
            {
                title: "Archimedes' Principle & Buoyancy",
                text: "Upward force (buoyancy) equals the weight of displaced liquid. Archimedes' principle explains loss of weight in fluids.",
                shortcut: "Relative density measured by Hydrometer. Density of water is max at 4°C."
            },
            {
                title: "Surface Tension & Capillarity",
                text: "Surface tension: Liquid tries to minimize surface area (spherical drops). Capillarity: Rise/fall of liquid in fine tubes.",
                examples: ["Rain drops are spherical", "Kerosene oil on water kills mosquito larvae", "Wicks in lamps rise due to capillarity"]
            },
            {
                title: "Viscosity & Bernoulli's Theorem",
                text: "Viscosity: Internal friction in fluids. Bernoulli's Theorem: P + 1/2ρv^2 + ρgh = constant.",
                examples: ["Tinned roofs fly off in storms (Bernoulli Effect)", "Viscosity of liquids decreases with temp; gases increases"]
            }
        ]
    },
    ga_physics_light_optics: {
        category: "General Science: Physics",
        title: "Light & Geometrical Optics",
        subtitle: "Reflection, Refraction & Human Eye",
        blocks: [
            {
                title: "Reflection & Mirrors",
                text: "Concave (converging): Used in headlights, shaving mirrors, dentist tools. Convex (diverging): Used as rear-view mirrors (wider field of view).",
                shortcut: "Focal length f = R/2."
            },
            {
                title: "Refraction & Dispersion",
                text: "Refraction: Bending of light between media (Snell's Law). Dispersion: Splitting white light into VIBGYOR via prism.",
                examples: ["Lemon looks bigger in water", "Rainbow formation (Dispersion + Internal Reflection)"]
            },
            {
                title: "Atmospheric Phenomena",
                text: "Twinkling of stars (Refraction). Sky is blue (Scattering/Rayleigh). Redness of sunset (Scattering). Mirages (Total Internal Reflection).",
                shortcut: "Tyndall Effect: Scattering of light by colloidal particles (smoke/dust)."
            },
            {
                title: "Human Eye & Defects",
                text: "Myopia (Nearsighted): Corrected by Concave lens. Hypermetropia (Farsighted): Corrected by Convex lens. Astigmatism: Corrected by Cylindrical lens.",
                shortcut: "Normal eye range: 25 cm to Infinity."
            }
        ]
    },
    ga_physics_electricity_magnetism: {
        category: "General Science: Physics",
        title: "Electricity & Magnetism",
        subtitle: "Current, Resistance & Field",
        blocks: [
            {
                title: "Static & Current Electricity",
                text: "Coulomb's Law: F = k q1q2/r^2. Ohm's Law: V = IR. Current unit: Ampere. Resistance unit: Ohm.",
                shortcut: "Series: R = R1+R2. Parallel: 1/R = 1/R1+1/R2."
            },
            {
                title: "Heating & Chemical Effects",
                text: "Joule's Law: H = I^2Rt. Electrolysis: Decomposition of chemicals by current. Electroplating: Coating metals.",
                examples: ["Fuse wire: High resistance, Low melting point", "Electric bulbs use Tungsten (high melting point)"]
            },
            {
                title: "Magnetism Basics",
                text: "Poles exist in pairs (N-S). Magnetic field: Space where effect is felt. Earth is a giant magnet.",
                examples: ["Permanent magnets: Steel", "Electromagnets: Soft iron"]
            },
            {
                title: "Magnetic Substances",
                text: "Diamagnetic: Feebly repelled (Gold, Water). Paramagnetic: Feebly attracted (Aluminium, Oxygen). Ferromagnetic: Strongly attracted (Iron, Nickel, Cobalt).",
                shortcut: "Curie Temperature: Point where ferromagnetic becomes paramagnetic (Iron: 770°C)."
            }
        ]
    },
    ga_physics_induction_nuclear: {
        category: "General Science: Physics",
        title: "Induction & Nuclear Physics",
        subtitle: "Transformers, Dynamo & Reactor",
        blocks: [
            {
                title: "EMI & Transformers",
                text: "Electromagnetic Induction (Faraday): Moving magnet induces current. Transformers change AC voltage (Mutual Induction).",
                examples: ["Step-up transformer: Low to High voltage", "Dynamo: Mechanical to Electrical energy"]
            },
            {
                title: "Nuclear Reactor",
                text: "Controls sustained fission. Fuel: U-235, Pu-239. Moderators: Water, Graphite (slow neutrons). Control Rods: Cadmium, Boron (absorb neutrons).",
                shortcut: "Sun's energy is due to Nuclear Fusion; Reactor uses Nuclear Fission."
            },
            {
                title: "Gravitation & Satellites",
                text: "Newton's Law: F = G m1m2/r^2. g = 9.8 m/s^2 (max at poles, zero at center).",
                shortcut: "Escape velocity (Earth): 11.2 km/s. Geostationary satellite period: 24 hours."
            }
        ]
    }
};
