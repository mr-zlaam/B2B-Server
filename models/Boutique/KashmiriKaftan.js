const mongoose = require('mongoose');

const KashmiriKaftan = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: [{
        type: String,
        required: true,
        enum: ['Wool', 'Silk', 'Cotton', 'Linen', 'Velvet', 'Chiffon']
    }],
    quality: [{
        type: String,
        required: true,
        enum: [
            'Pure Wool',
            'Pure Silk',
            'Cotton-Linen Blend',
            'Embroidered Velvet'
        ]
    }],
    productionProcess: {
        type: String,
        required: true,
        enum: [
            'Hand Spinning, Hand Weaving',
            'Machine Weaving',
            'Handcrafted',
            'Machine Stitching'
        ]
    },
    embroideryTypes: [{
        type: String,
        required: true,
        enum: [
            'Aari Work',
            'Sozni Embroidery',
            'Tilla Work (Gold/Silver Thread Embroidery)',
            'Chain Stitch Embroidery',
            'Zardozi Embroidery'
        ]
    }],
    designAndPatternTypes: [{
        type: String,
        required: true,
        enum: [
            'Floral Patterns',
            'Paisley',
            'Geometric Patterns',
            'Traditional Kashmiri Motifs',
            'Abstract Designs'
        ]
    }],
    dyeTypes: [{
        type: String,
        required: true,
        enum: ['Natural-Dyed', 'Vegetable-Dyed', 'Chemical-Dyed']
    }],
    otherDyeTypes: [{
        type: String,
        required: true,
        enum: ['Eco-Dyed', 'Azo-Free Dyed']
    }],
    productLineAndSize: [{
        type: String,
        required: true,
        enum: [
            'Long Kaftan - Length: 50-54 inches (127-137 cm)',
            'Short Kaftan - Length: 40-44 inches (102-112 cm)',
            'Kimono Style Kaftan - Length: 48-52 inches (122-132 cm)'
        ]
    }],
    sizesAvailable: [{
        type: String,
        required: true,
        enum: ['Small (S)', 'Medium (M)', 'Large (L)', 'Extra Large (XL)', 'Custom Fit']
    }],
    colorShades: [{
        type: String,
        required: true,
        enum: [
            'Black', 'Beige', 'Gray', 'Maroon', 'Saffron Yellow', 'Deep Green',
            'Ruby Red', 'Royal Blue', 'Coral', 'Blush Pink', 'Mint Green'
        ]
    }],
    embellishments: [{
        type: String,
        required: true,
        enum: [
            'Tilla Borders',
            'Embroidered Sleeves',
            'Mirror Work',
            'Beaded Detailing',
            'Sequins'
        ]
    }]
});

module.exports = mongoose.model('KashmiriKaftan', KashmiriKaftan);
