// schemas/product.js
const mongoose = require('mongoose');

function createProductSchema() {
  const productSchema = new mongoose.Schema(
    {
        client_id: { type: String },
        image_url: { type: String },
    
        image_list: [
          {
            url: { type: String },
            order: { type: Number },
          },
        ],
    
        title: {
          type: String,
          required: [true, 'title is a required field'],
          index: 'text',
        },
    
        sub_title: { type: String },
    
        description: {
          type: String,
          index: 'text',
        },
    
        brand: { type: String },
    
        manufacturer: {
          type: String,
          index: 'text',
        },
    
        sku: {
          type: String,
          required: [true, 'sku is a required field'],
          index: 'text',
        },
    
        pid: {
          type: String,
          required: [true, 'pid is a required field'],
          index: 'text',
        },
    
        quantity_type: { type: String },
    
        quantity: { type: String },
    
        cost_price: { type: String },
    
        price: { type: String, index: 'text' },
    
        recommended: { type: Boolean },
    
        on_promotion: { type: Boolean, default: false },
    
        vatable: {
          type: Boolean,
          default: true,
        },
    
        track_quantity: { type: Boolean },
    
        notify_when_stock_low: { type: Boolean },
    
        continue_selling_when_out_of_stock: { type: Boolean },
    
        promotion_price: { type: String },
    
        estimated_delivery_time: { type: String },
    
        estimated_collection_time: { type: String },
    
        actual_delivery_time: { type: String },
    
        actual_collection_time: { type: String },
    
        variations: {
          type: [],
          default: [],
        },
    
        category_id: { type: mongoose.Schema.Types.ObjectId },
        sub_category_id: { type: mongoose.Schema.Types.ObjectId },
    
        status: {
          type: String,
          enum: ['AVAILABLE', 'OUT-OF-STOCK', 'DRAFT', 'ARCHIVED'],
          default: 'AVAILABLE',
          index: 'text',
        },
    
        channels: [
          new mongoose.Schema(
            {
              channel_id: { type: mongoose.Schema.Types.ObjectId },
    
              channel: {
                type: String,
                enum: ['GOOGLE', 'SHOPIFY', 'FACEBOOK'],
              },
    
              name: { type: String },
            },
            { _id: false },
          ),
        ],
    
        type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductType' },
    
        barcode: { type: String },
    
        notes: { type: String },
    
        extra_fields: {
          type: [
            {
              name: {
                type: String,
                index: 'text',
              },
              value: {
                type: String,
                index: 'text',
              },
            },
          ],
          default: [],
        },
    
        add_ons: {
          type: [{}],
          default: [],
        },
    
        deletedAt: {
          type: Date,
        },
    
        deleted: {
          type: Boolean,
          default: false,
        },
    
        rating: {
          count: {
            type: String,
            default: 0,
          },
    
          value: {
            type: String,
            default: 0,
          },
    
          average: {
            type: String,
            default: 0,
          },
        },
    
        tags: {
          type: [{ type: String }],
          default: [],
        },
    
        ref: {
          type: String,
        }
      },
    
      { timestamps: true },
);

  return productSchema;
}

module.exports = createProductSchema;

