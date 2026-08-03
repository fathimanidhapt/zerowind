import { Service, Feature } from "../types/service";

export const services: Service[] = [
  {
    id: "fit",
    name: "FIT",
    title: "FIT Fabric Technology",
    tagline: "Lightweight 2-Layer Breathability",
    excerpt: "FIT is ZeroWind's line of 2-layer fabrics, perfect for creating breathable, fully windproof and waterproof outdoor sportswear garments suitable for mid-seasons.",
    description: "FIT is ZeroWind's line of 2-layer fabrics, perfect for creating breathable, fully windproof and waterproof outdoor sportswear garments suitable for mid-seasons.",
    image: "/images/imgi_7_shutterstock-1022568799%401320x1020_r.jpeg.webp",
    specifications: [
      { iconName: "Droplets", title: "Waterproofness" },
      { iconName: "Wind", title: "Total Wind Protection" },
      { iconName: "Cpu", title: "High Breathability" },
      { iconName: "Thermometer", title: "Thermoregulation" }
    ],
    techDetails: [
      "2-Layer laminated structure",
      "Dynamic breathability response (increases as body heat rises)",
      "Highly packable and flexible construction",
      "PFAS-free ecological water repellency"
    ]
  },
  {
    id: "motion",
    name: "Motion",
    title: "Motion Softshell Technology",
    tagline: "Heavy-Duty 3-Layer Protection",
    excerpt: "Motion is ZeroWind's line of 3-layer softshell fabrics, perfect for making outdoor sportswear for cold weather and in-between seasons.",
    description: "Motion is ZeroWind's line of 3-layer softshell fabrics, perfect for making outdoor sportswear for cold weather and in-between seasons.",
    image: "/images/imgi_12_shutterstock-560580814%401320x1020_r.jpeg.webp",
    specifications: [
      { iconName: "Droplets", title: "Waterproofness" },
      { iconName: "Wind", title: "Total Wind Protection" },
      { iconName: "Cpu", title: "High Breathability" },
      { iconName: "Thermometer", title: "Thermoregulation" }
    ],
    techDetails: [
      "3-Layer thermal softshell barrier",
      "Fleece-brushed inner lining for insulation",
      "Extreme stretch capacity for aerodynamic slim-fit cuts",
      "Superior abrasion and pilling resistance"
    ]
  },
  {
    id: "power",
    name: "Power",
    title: "Power Muscle Compression",
    tagline: "Elastic Strength & Flexibility",
    excerpt: "Power represents ZeroWind's activewear fabrics, focusing on compression, muscle support, and extreme flexibility during intense physical stress.",
    description: "Wind protection is the goal behind ZeroWind's POWER fabric line, to which we have combined excellent breathability and comfortable fit.",
    image: "/images/imgi_13_istock-155467403%401320x1020_r.jpeg.webp",
    specifications: [
      { iconName: "Wind", title: "Total Wind Protection" },
      { iconName: "Cpu", title: "High Breathability" },
      { iconName: "Thermometer", title: "Thermoregulation" },
      { iconName: "Layers", title: "Excellent Fit" }
    ],
    techDetails: [
      "High-density warp-knit weave",
      "Exceptional shape retention and recovery memory",
      "Balanced compression gradients (class-leading support)",
      "Excellent moisture management and quick-dry capabilities"
    ]
  },
  {
    id: "brave",
    name: "Brave",
    title: "Brave Extreme Protection",
    tagline: "Unyielding Defense Against Elements",
    excerpt: "Brave is engineered for extreme weather conditions, providing maximum protection with an ultra-tough outer layer and windbreaker resistance.",
    description: "With the BRAVE fabric line, ZeroWind redefines the concept of windproof protective shell.",
    image: "/images/imgi_15_shutterstock-2411698327%401320x1020_r.jpeg.webp",
    specifications: [
      { iconName: "Wind", title: "Total Wind Protection" },
      { iconName: "Layers", title: "Minimum Bulk and Maximum Lightness" },
      { iconName: "Shield", title: "Strength and Durability" }
    ],
    techDetails: [
      "Ripstop structural composition",
      "Hydrophilic non-porous membrane system",
      "Seam-sealable architecture for absolute waterproofing",
      "Sub-zero temperature flexibility (retains soft hand feel)"
    ]
  },
  {
    id: "vapora",
    name: "Vapora",
    title: "Vapora Ultra Breathable",
    tagline: "Maximum Moisture Vapor Transfer",
    excerpt: "Vapora focuses on dynamic sweat evacuation. Highly breathable membranes that keep the athlete dry during peak output.",
    description: "Designed for those who live the outdoors without limits, Vapora is the new technical fabric in the ZeroWind range that meets the needs of every adventure—from trail running to trekking, from cycling to everyday exploration.",
    image: "/images/imgi_18_vaporapreview%401320x1020_r.jpeg.webp",
    specifications: [
      { iconName: "Cpu", title: "High Breathability" },
      { iconName: "Thermometer", title: "Thermoregulation" },
      { iconName: "Layers", title: "Minimum Bulk and Maximum Lightness" },
      { iconName: "Shield", title: "Insulation" }
    ],
    techDetails: [
      "Smart hydrophilic molecular membrane",
      "Perspiration-triggered vapor expansion channels",
      "Ultra-thin membrane layer (less than 10 microns)",
      "Windproof barrier remains unaffected by breathability rate"
    ]
  }
];

export const features: Feature[] = [
  {
    id: "zwr",
    name: "ZWR",
    title: "ZWR Water Repellent",
    tagline: "PFAS-Free Water Repellency",
    excerpt: "Eco-friendly, long-lasting surface protection that makes water droplets bead up and slide off without affecting fabric breathability.",
    description: "ZeroWind Water Repellent (ZWR) is an advanced fluorine-free finish applied to the outer fibers of our fabrics. Unlike traditional DWR coatings, ZWR does not contain harmful PFAS chemicals, aligning with strict environmental safety standards. The treatment prevents the outer face fabric from becoming saturated with water, keeping the garment lightweight and fully breathable.",
    videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1009788540/rendition/1080p/file.mp4?loc=external&signature=4911a3cb16a86727a8f8009027a7375a6cafbf62fa58c37d322a5ab08fc4096d",
    details: [
      "100% Fluorocarbon-free (PFAS/PFC free)",
      "Excellent spray rating even after 30+ washes",
      "Stain and mud repellent properties",
      "Maintains the original soft touch and breathability of the face fabric"
    ],
    image: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?q=80&w=800"
  },
  {
    id: "relife",
    name: "Relife",
    title: "Relife Green Solutions",
    tagline: "Recycled and Circular Economy Materials",
    excerpt: "ZeroWind's commitment to the environment: premium performance fabrics constructed from post-consumer recycled ocean plastics and organic yarns.",
    description: "Relife represents ZeroWind's dedicated research program for sustainable sportswear fabrics. By integrating recycled polyester sourced from ocean plastic waste and pre-consumer textile waste, Relife reduces carbon footprints and conserves clean energy resources. All Relife materials pass international Global Recycled Standard (GRS) audits.",
    videoUrl: "https://player.vimeo.com/progressive_redirect/playback/1009787666/rendition/1080p/file.mp4?loc=external&signature=d29b65059c12b5fb9d9d2d773c6f39003babe8f58d1d2f5f60463837f77505d5",
    details: [
      "Sourced from 100% GRS certified recycled yarns",
      "Reduced water consumption during dyeing processes",
      "Fully recyclable polymer cycles",
      "Zero compromise on stretch, windproofing, or durability"
    ],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800"
  }
];
