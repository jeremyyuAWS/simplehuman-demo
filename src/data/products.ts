import { Product } from './types';

export const products: Record<string, Product> = {
  'sensor-can-58l': {
    id: 'sensor-can-58l',
    name: '58L Dual Compartment Sensor Can',
    description: 'Our largest sensor can with dual compartments for trash and recycling',
    category: 'Trash Cans',
    price: 250,
    features: [
      'Motion sensor technology',
      'Dual compartment design',
      'Fingerprint-resistant finish',
      'Built-in liner storage',
      'Battery life indicator'
    ],
    specifications: {
      'Capacity': '58L (34L main, 24L recycling)',
      'Dimensions': '15.75" x 12.5" x 25.5"',
      'Material': 'Stainless steel with nano-silver coating',
      'Power': '4 AA batteries (included)',
      'Liner Type': 'Code H'
    },
    warranty: {
      duration: '2 years',
      coverage: [
        'Mechanical parts',
        'Sensor technology',
        'Finish and coating',
        'Structural integrity'
      ]
    },
    images: {
      main: '/images/simplehuman-58L-rectangular-sensor-can.jpg',
      features: [
        '/images/simplehuman-58L-rectangular-sensor-can-open.jpg',
        '/images/simplehuman-sensor-technology.jpg'
      ],
      dimensions: '/images/simplehuman-58L-dimensions.jpg'
    }
  },
  'sensor-can-45l': {
    id: 'sensor-can-45l',
    name: '45L Rectangular Sensor Can',
    description: 'Our most popular sensor can with space-efficient design',
    category: 'Trash Cans',
    price: 200,
    features: [
      'Motion sensor technology',
      'Single compartment design',
      'Fingerprint-resistant finish',
      'Built-in liner storage',
      'Battery life indicator'
    ],
    specifications: {
      'Capacity': '45L',
      'Dimensions': '13.75" x 11.5" x 23.5"',
      'Material': 'Stainless steel with nano-silver coating',
      'Power': '4 AA batteries (included)',
      'Liner Type': 'Code R'
    },
    warranty: {
      duration: '2 years',
      coverage: [
        'Mechanical parts',
        'Sensor technology',
        'Finish and coating',
        'Structural integrity'
      ]
    },
    images: {
      main: '/images/simplehuman-45L-rectangular-sensor-can.jpg',
      features: [
        '/images/simplehuman-45L-rectangular-sensor-can-features.jpg',
        '/images/simplehuman-sensor-technology.jpg'
      ],
      dimensions: '/images/simplehuman-45L-dimensions.jpg'
    }
  },
  'sensor-pump-14oz': {
    id: 'sensor-pump-14oz',
    name: '14 oz Dual Sensor Pump',
    description: 'Smart dispenser with separate sensors for soap and sanitizer',
    category: 'Dispensers',
    price: 150,
    features: [
      'Dual sensor technology',
      'Variable dispensing speeds',
      'Smart timing technology',
      'Rechargeable battery',
      'Waterproof design'
    ],
    specifications: {
      'Capacity': '14 oz',
      'Dimensions': '4.5" x 4.5" x 9.5"',
      'Material': 'Stainless steel',
      'Power': 'Rechargeable battery',
      'Battery Life': 'Up to 3 months'
    },
    warranty: {
      duration: '2 years',
      coverage: [
        'Sensor mechanism',
        'Pump mechanism',
        'Battery system',
        'Finish and coating'
      ]
    },
    images: {
      main: '/images/simplehuman-14oz-dual-sensor-pump.jpg',
      features: [
        '/images/simplehuman-sensor-pump.jpg',
        '/images/simplehuman-sensor-pump-features.jpg'
      ],
      dimensions: '/images/simplehuman-14oz-dimensions.jpg'
    }
  }
}; 