export const products = [
  {
    id: 1,
    name: "R-SERIES V4",
    category: "SUPERSPORT",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop",
    description: "Born from MotoGP DNA. The ultimate track weapon.",
    longDescription: "The R-Series V4 is the culmination of decades of racing heritage. Engineered with precision to deliver unmatched power and agility, it features a crossplane crankshaft engine that provides linear torque and a thrilling exhaust note. Its aerodynamic fairing is designed to slice through the air, making it the ultimate machine for the track and the street.",
    specs: [
      { label: "Engine", value: "998cc Liquid-Cooled Inline 4" },
      { label: "Power", value: "200 HP @ 13,500 RPM" },
      { label: "Weight", value: "201 kg (Wet)" },
      { label: "Top Speed", value: "299 km/h" }
    ],
    advantages: [
      "Advanced 6-axis IMU with rider aids (TCS, SCS, LIF)",
      "Quick Shift System (QSS) for clutchless up/down shifts",
      "Fully adjustable KYB suspension",
      "Aerodynamic bodywork inspired by MotoGP"
    ]
  },
  {
    id: 2,
    name: "MT-10 SP",
    category: "HYPER NAKED",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2070&auto=format&fit=crop",
    description: "Master of Torque. Uncompromising street performance.",
    longDescription: "The MT-10 SP is the king of the Hyper Naked class. It combines the legendary CP4 engine from our supersport lineup with an upright, aggressive riding position. Equipped with semi-active electronic suspension, it adapts to the road in real-time, offering unparalleled comfort and handling whether you're carving canyons or cruising the city.",
    specs: [
      { label: "Engine", value: "998cc CP4 Crossplane" },
      { label: "Power", value: "165 HP @ 11,500 RPM" },
      { label: "Torque", value: "112 Nm @ 9,000 RPM" },
      { label: "Suspension", value: "Öhlins Electronic Racing" }
    ],
    advantages: [
      "Öhlins Electronic Racing Suspension (ERS)",
      "Acoustic amplifier grilles for enhanced intake roar",
      "Full-color 4.2-inch TFT display",
      "Cruise control and speed limiter standard"
    ]
  },
  {
    id: 3,
    name: "BMW 1250GS",
    category: "ADVENTURE",
    image: "https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?q=80&w=2070&auto=format&fit=crop",
    description: "The Next Horizon is Yours. Built for the extreme.",
    longDescription: "Conquer any terrain with the 1250GS. This adventure powerhouse is equipped with a legendary boxer engine featuring ShiftCam technology for superior power delivery across the entire rev range. From endless highways to rugged off-road trails, its robust chassis and advanced electronics ensure you're always in control.",
    specs: [
      { label: "Engine", value: "1254cc Air/Liquid-Cooled Boxer" },
      { label: "Power", value: "136 HP @ 7,750 RPM" },
      { label: "Fuel Capacity", value: "20 Liters" },
      { label: "Seat Height", value: "850 / 870 mm" }
    ],
    advantages: [
      "BMW ShiftCam variable camshaft control",
      "Dynamic ESA (Electronic Suspension Adjustment)",
      "Pro riding modes including Enduro and Enduro Pro",
      "Standard Hill Start Control"
    ]
  },
  {
    id: 4,
    name: "XSR900",
    category: "SPORT HERITAGE",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop",
    description: "Legendary design meets cutting-edge technology.",
    longDescription: "The XSR900 blends retro 80s racing aesthetics with modern hyper-naked performance. Underneath its classic Deltabox-style frame and sculpted fuel tank lies a potent 890cc CP3 engine. It's a motorcycle that respects the past while delivering a thrilling, technologically advanced ride for the modern motorcyclist.",
    specs: [
      { label: "Engine", value: "890cc Liquid-Cooled CP3" },
      { label: "Power", value: "119 HP @ 10,000 RPM" },
      { label: "Frame", value: "Lightweight CF Die-Cast Aluminum" },
      { label: "Brakes", value: "Brembo Radial Master Cylinder" }
    ],
    advantages: [
      "Authentic retro styling with modern LED lighting",
      "Lightweight Spinforged wheels for agile handling",
      "Advanced 6-axis IMU with lean-sensitive traction control",
      "Cruise control system for highway comfort"
    ]
  },
  {
    id: 5,
    name: "PANIGALE V4 R",
    category: "SUPERBIKE",
    image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?q=80&w=2070&auto=format&fit=crop",
    description: "The pure racing spirit. Aerodynamics and power combined.",
    longDescription: "The Panigale V4 R is the maximum expression of racing DNA. It is the closest production model to a competition bike ever created. Featuring carbon fiber wings, a dry clutch, and a Desmosedici Stradale R engine, it delivers an astonishing 237 HP with the racing exhaust. It's built to shatter lap records.",
    specs: [
      { label: "Engine", value: "998cc Desmosedici Stradale R" },
      { label: "Power", value: "237 HP @ 15,500 RPM" },
      { label: "Weight", value: "172 kg (Dry)" },
      { label: "Top Speed", value: "299+ km/h" }
    ],
    advantages: [
      "Carbon fiber aerodynamic wings",
      "STM EVO-SBK dry clutch",
      "Fully adjustable Öhlins NPX 25/30 pressurized fork",
      "GPS-based lap timer"
    ]
  },
  {
    id: 6,
    name: "SCOUT BOBBER",
    category: "CRUISER",
    image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
    description: "Stripped down and blacked out. The ultimate bobber.",
    longDescription: "The Scout Bobber is a minimalist masterpiece, stripped down to its bare essentials. With a slammed stance, chopped fenders, and a blacked-out liquid-cooled V-Twin engine, it delivers an aggressive ride and an unmistakable exhaust note. It's built for those who want to make a statement on the street.",
    specs: [
      { label: "Engine", value: "1133cc Liquid-Cooled V-Twin" },
      { label: "Power", value: "100 HP" },
      { label: "Torque", value: "97.7 Nm @ 5,900 RPM" },
      { label: "Seat Height", value: "649 mm" }
    ],
    advantages: [
      "Low-slung, aggressive bobber stance",
      "Premium blacked-out finishes",
      "Hidden USB charging port",
      "Sporty cartridge fork suspension"
    ]
  },
  {
    id: 7,
    name: "THRUXTON RS",
    category: "CAFE RACER",
    image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=2070&auto=format&fit=crop",
    description: "The original cafe racer, reborn with modern performance.",
    longDescription: "The Thruxton RS takes the cafe racer legend to the next level. It combines timeless, elegant styling with a high-power 1200cc Bonneville twin engine. Featuring top-spec Brembo brakes, fully adjustable Showa and Öhlins suspension, and high-grip Metzeler Racetec RR tires, it handles as beautifully as it looks.",
    specs: [
      { label: "Engine", value: "1200cc Liquid-Cooled Parallel Twin" },
      { label: "Power", value: "105 HP @ 7,500 RPM" },
      { label: "Torque", value: "112 Nm @ 4,250 RPM" },
      { label: "Brakes", value: "Brembo M50 Monobloc Calipers" }
    ],
    advantages: [
      "Fully adjustable Öhlins twin rear shocks",
      "Three riding modes (Sport, Road, Rain)",
      "Lightweight aluminum rims",
      "Signature cafe racer styling with clip-on bars"
    ]
  },
  {
    id: 8,
    name: "AFRICA TWIN",
    category: "ADVENTURE",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070&auto=format&fit=crop",
    description: "True adventure without limits. Go anywhere, anytime.",
    longDescription: "The Africa Twin is built to conquer the most challenging terrain on earth. With a compact, lightweight chassis and a torque-rich 1084cc parallel-twin engine, it offers incredible agility off-road and supreme comfort on the highway. The advanced electronics package ensures you have the right power delivery for any situation.",
    specs: [
      { label: "Engine", value: "1084cc Liquid-Cooled Parallel Twin" },
      { label: "Power", value: "101 HP @ 7,500 RPM" },
      { label: "Ground Clearance", value: "250 mm" },
      { label: "Transmission", value: "Optional Dual Clutch (DCT)" }
    ],
    advantages: [
      "6.5-inch TFT touch screen display",
      "Apple CarPlay and Android Auto integration",
      "Showa Electronically Equipped Ride Adjustment (EERA)",
      "6-axis IMU with cornering ABS and wheelie control"
    ]
  }
];
