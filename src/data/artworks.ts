export type Artwork = {
  id: number; title: string; category: string; image: string; orientation: 'portrait' | 'landscape'; featured: boolean; description: string; source: string;
};

export const artworks: Artwork[] = [
  {
    "id": 1,
    "title": "Krishna Festive Window Art",
    "category": "Wall Art",
    "image": "/artwork/krishna-festive-window-art.jpg",
    "orientation": "landscape",
    "featured": true,
    "description": "A playful painted glass composition with Krishna, florals and festive decorative details.",
    "source": "IMG_1057.jpeg"
  },
  {
    "id": 2,
    "title": "Krishna Window Art - Side View",
    "category": "Wall Art",
    "image": "/artwork/krishna-window-art-detail.jpg",
    "orientation": "landscape",
    "featured": false,
    "description": "An angled view highlighting the scale, placement and hand-painted details of the festive window artwork.",
    "source": "IMG_1058.jpeg"
  },
  {
    "id": 3,
    "title": "Peacock Feather Pillar",
    "category": "Wall Art",
    "image": "/artwork/peacock-feather-pillar.jpg",
    "orientation": "portrait",
    "featured": true,
    "description": "A tall decorative feather motif designed to turn an architectural pillar into a painted focal point.",
    "source": "IMG_1059.jpeg"
  },
  {
    "id": 4,
    "title": "Circular Peacock Composition",
    "category": "Decorative Art",
    "image": "/artwork/circular-peacock-composition.jpg",
    "orientation": "portrait",
    "featured": true,
    "description": "A circular decorative artwork combining a peacock motif with rhythmic dots and ornamental detailing.",
    "source": "IMG_1061.jpeg"
  },
  {
    "id": 5,
    "title": "Red Geometric Folk Panel",
    "category": "Decorative Art",
    "image": "/artwork/red-geometric-folk-panel.jpg",
    "orientation": "portrait",
    "featured": false,
    "description": "A textile-inspired geometric composition built from repeated borders, diamonds and folk-style patterning.",
    "source": "IMG_1066.jpeg"
  },
  {
    "id": 6,
    "title": "Warli-Inspired Corridor Mural",
    "category": "Wall Art",
    "image": "/artwork/warli-corridor-mural.jpg",
    "orientation": "portrait",
    "featured": true,
    "description": "A long wall treatment using white linear figures, trees and village-inspired motifs on a warm red surface.",
    "source": "IMG_1070.jpeg"
  },
  {
    "id": 7,
    "title": "Warli Mural - Entry Detail",
    "category": "Wall Art",
    "image": "/artwork/warli-mural-entry-detail.jpg",
    "orientation": "portrait",
    "featured": false,
    "description": "A detail view showing how the hand-painted visual language continues across the architectural entry.",
    "source": "IMG_1071.jpeg"
  },
  {
    "id": 8,
    "title": "Sparrow Mini Canvas",
    "category": "Canvas & Fine Art",
    "image": "/artwork/sparrow-mini-canvas.jpg",
    "orientation": "portrait",
    "featured": false,
    "description": "A small framed bird study with branches, warm leaves and a softly layered background.",
    "source": "IMG_1074.jpeg"
  },
  {
    "id": 9,
    "title": "Yellow Bird Study",
    "category": "Canvas & Fine Art",
    "image": "/artwork/yellow-bird-canvas.jpg",
    "orientation": "portrait",
    "featured": false,
    "description": "A compact bird painting exploring contrast between a bright subject and delicate branch forms.",
    "source": "IMG_1075.jpeg"
  },
  {
    "id": 10,
    "title": "Blue Bird Study",
    "category": "Canvas & Fine Art",
    "image": "/artwork/blue-bird-canvas.jpg",
    "orientation": "portrait",
    "featured": false,
    "description": "A small bird composition using cool blues, natural textures and an intimate framed format.",
    "source": "IMG_1077.jpeg"
  },
  {
    "id": 11,
    "title": "Woodpecker Study",
    "category": "Canvas & Fine Art",
    "image": "/artwork/woodpecker-canvas.jpg",
    "orientation": "portrait",
    "featured": false,
    "description": "A focused bird painting framed by layered neutral brushwork and a natural wood-like setting.",
    "source": "IMG_1078.jpeg"
  },
  {
    "id": 12,
    "title": "Folk Portrait in Colour",
    "category": "Illustration & Drawing",
    "image": "/artwork/folk-woman-color-study.jpg",
    "orientation": "portrait",
    "featured": true,
    "description": "A vivid portrait study combining expressive colour, bold outlines and traditional visual cues.",
    "source": "IMG_1081.jpeg"
  },
  {
    "id": 13,
    "title": "Expressive Eye Study",
    "category": "Illustration & Drawing",
    "image": "/artwork/expressive-eye-study.jpg",
    "orientation": "landscape",
    "featured": true,
    "description": "A detailed eye illustration using strong colour contrast, pencil texture and a graphic crop.",
    "source": "IMG_1082.jpeg"
  },
  {
    "id": 14,
    "title": "Ornamental Figure Study",
    "category": "Illustration & Drawing",
    "image": "/artwork/ornamental-figure-ink.jpg",
    "orientation": "portrait",
    "featured": false,
    "description": "A black-and-white figure study shaped through intricate pattern, line and decorative mark-making.",
    "source": "IMG_1084.jpeg"
  },
  {
    "id": 15,
    "title": "Mandala Ink Study",
    "category": "Illustration & Drawing",
    "image": "/artwork/mandala-ink-study.jpg",
    "orientation": "portrait",
    "featured": true,
    "description": "A dense radial mandala created through repeated motifs, symmetry and precise monochrome detailing.",
    "source": "IMG_1085.jpeg"
  },
  {
    "id": 16,
    "title": "Portrait Study - Turbaned Man",
    "category": "Illustration & Drawing",
    "image": "/artwork/turbaned-man-portrait.jpg",
    "orientation": "portrait",
    "featured": true,
    "description": "A monochrome portrait study focused on facial character, folds, texture and expressive pencil work.",
    "source": "IMG_1086.jpeg"
  },
  {
    "id": 17,
    "title": "Water & Glass Study",
    "category": "Illustration & Drawing",
    "image": "/artwork/water-splash-glass-study.jpg",
    "orientation": "portrait",
    "featured": false,
    "description": "A dynamic monochrome study capturing the movement of liquid and the transparent form of a glass.",
    "source": "IMG_1087.jpeg"
  },
  {
    "id": 18,
    "title": "Woman with Vessel",
    "category": "Illustration & Drawing",
    "image": "/artwork/woman-with-vessel-portrait.jpg",
    "orientation": "portrait",
    "featured": true,
    "description": "A detailed portrait study balancing soft shading, patterned fabric and a strong central silhouette.",
    "source": "IMG_1088.jpeg"
  },
  {
    "id": 19,
    "title": "Diwali Glass Mural",
    "category": "Wall Art",
    "image": "/artwork/diwali-glass-mural.jpg",
    "orientation": "portrait",
    "featured": true,
    "description": "A bright festive glass artwork combining diyas, decorative motifs, lettering and celebratory imagery.",
    "source": "IMG_1089.jpeg"
  },
  {
    "id": 20,
    "title": "Festive Window Decoration",
    "category": "Wall Art",
    "image": "/artwork/festive-window-decoration.jpg",
    "orientation": "portrait",
    "featured": false,
    "description": "A colorful decorative window composition using floral, diya and peacock-inspired festive elements.",
    "source": "IMG_1090.jpeg"
  },
  {
    "id": 21,
    "title": "Devotional Window Art",
    "category": "Wall Art",
    "image": "/artwork/devotional-window-art.jpg",
    "orientation": "portrait",
    "featured": true,
    "description": "A warm narrative window painting with stylized figures, expressive shapes and a softly layered palette.",
    "source": "IMG_1092.jpeg"
  },
  {
    "id": 22,
    "title": "Ganesha Canvas",
    "category": "Canvas & Fine Art",
    "image": "/artwork/ganesha-canvas.jpg",
    "orientation": "portrait",
    "featured": true,
    "description": "A compact devotional canvas with a dark ground, sculptural form and focused highlights.",
    "source": "IMG_1094.jpeg"
  },
  {
    "id": 23,
    "title": "Floral Garden Canvas",
    "category": "Canvas & Fine Art",
    "image": "/artwork/floral-garden-canvas.jpg",
    "orientation": "portrait",
    "featured": true,
    "description": "A decorative floral composition with pale blossoms, layered foliage and a rich dark-green field.",
    "source": "IMG_1095.jpeg"
  },
  {
    "id": 24,
    "title": "Geometric Abstract Canvas",
    "category": "Canvas & Fine Art",
    "image": "/artwork/geometric-abstract-canvas.jpg",
    "orientation": "portrait",
    "featured": true,
    "description": "A modern abstract composition using curved blocks of muted terracotta, olive, cream and charcoal.",
    "source": "IMG_1096.jpeg"
  },
  {
    "id": 25,
    "title": "Cow & Lotus Canvas",
    "category": "Canvas & Fine Art",
    "image": "/artwork/cow-lotus-canvas.jpg",
    "orientation": "portrait",
    "featured": true,
    "description": "A serene painted scene pairing a white cow with lotus forms against a deep blue background.",
    "source": "IMG_1097.jpeg"
  }
] as Artwork[];

export const categories = ['All', ...Array.from(new Set(artworks.map((art) => art.category)))];
