import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    slug: 'premium-wireless-headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
    price: 299.99,
    originalPrice: 399.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 142,
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Weight': '250g',
      'Color': 'Black'
    },
    tags: ['wireless', 'noise-cancelling', 'premium', 'electronics']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    slug: 'smart-fitness-watch',
    description: 'Advanced fitness tracking watch with heart rate monitoring, GPS, and smartphone integration.',
    price: 199.99,
    category: 'Wearables',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviewCount: 89,
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '5ATM',
      'GPS': 'Built-in'
    },
    tags: ['fitness', 'smartwatch', 'gps', 'health']
  },
  {
    id: '3',
    name: 'Professional Camera Lens',
    slug: 'professional-camera-lens',
    description: 'High-performance 50mm prime lens for professional photography with exceptional clarity and bokeh.',
    price: 899.99,
    category: 'Photography',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/191429/pexels-photo-191429.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    featured: false,
    rating: 4.9,
    reviewCount: 67,
    specifications: {
      'Focal Length': '50mm',
      'Aperture': 'f/1.4',
      'Mount': 'Canon EF',
      'Weight': '680g'
    },
    tags: ['photography', 'lens', 'professional', 'portrait']
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    slug: 'ergonomic-office-chair',
    description: 'Premium ergonomic office chair with lumbar support and adjustable features for all-day comfort.',
    price: 449.99,
    originalPrice: 599.99,
    category: 'Furniture',
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 203,
    specifications: {
      'Material': 'Mesh & Leather',
      'Max Weight': '120kg',
      'Warranty': '5 years',
      'Adjustability': 'Height, Tilt, Arms'
    },
    tags: ['office', 'ergonomic', 'furniture', 'comfort']
  },
  {
    id: '5',
    name: 'Mechanical Gaming Keyboard',
    slug: 'mechanical-gaming-keyboard',
    description: 'RGB mechanical gaming keyboard with customizable switches and programmable keys.',
    price: 159.99,
    category: 'Gaming',
    image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviewCount: 156,
    specifications: {
      'Switch Type': 'Cherry MX Blue',
      'Backlight': 'RGB',
      'Layout': 'Full Size',
      'Connection': 'USB-C'
    },
    tags: ['gaming', 'mechanical', 'rgb', 'keyboard']
  },
  {
    id: '6',
    name: 'Portable Bluetooth Speaker',
    slug: 'portable-bluetooth-speaker',
    description: 'Waterproof portable speaker with 360-degree sound and long battery life.',
    price: 79.99,
    category: 'Audio',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviewCount: 94,
    specifications: {
      'Battery Life': '12 hours',
      'Water Rating': 'IPX7',
      'Connectivity': 'Bluetooth 5.0',
      'Output': '20W'
    },
    tags: ['audio', 'portable', 'waterproof', 'bluetooth']
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getCategories(): string[] {
  return Array.from(new Set(products.map(product => product.category)));
}