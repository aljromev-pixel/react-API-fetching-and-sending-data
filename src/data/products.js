export const products = [
  { id: 1, title: "Logitech G PRO X Superlight 2", category: "Wireless Mouse", price: 8495, icon: "⌁", accent: "cyan", description: "A 60 g wireless esports mouse with a HERO 2 sensor and responsive LIGHTFORCE switches." },
  { id: 2, title: "Keychron Q1 Max", category: "Mechanical Keyboard", price: 13990, icon: "⌨", accent: "violet", description: "A premium 75% aluminum keyboard with tri-mode connectivity, hot-swappable switches, and customizable RGB." },
  { id: 3, title: "Razer BlackShark V2 Pro", category: "Wireless Headset", price: 10995, icon: "◖", accent: "blue", description: "A tournament-ready wireless headset with detailed positional audio and a clear detachable microphone." },
  { id: 4, title: "LG UltraGear 27GS60F-B", category: "Gaming Monitor", price: 12497, icon: "▣", accent: "pink", description: "A 27-inch Full HD IPS gaming monitor with a smooth 180 Hz refresh rate and 1 ms response time." },
  { id: 5, title: "SteelSeries QcK Prism Cloth XL", category: "RGB Mousepad", price: 3195, icon: "▱", accent: "cyan", description: "An extra-large micro-woven cloth mousepad with a stable rubber base and two-zone RGB illumination." },
  { id: 6, title: "Elgato Wave:3", category: "USB Microphone", price: 8999, icon: "◉", accent: "violet", description: "A broadcast-quality USB microphone with a crisp condenser capsule and built-in anti-clipping technology." },
];

export const formatPeso = (price) => new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 }).format(price);

export const findProduct = (id) => products.find((product) => product.id === Number(id));
