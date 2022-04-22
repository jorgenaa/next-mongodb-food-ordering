export interface Product {
    _id: {
        type: string
        required: boolean
    },
    slug: {
        type: string
        required: boolean
    },
    title: {
        type: string
        required: boolean
        maxlength: number
    },
    description: {
        type: string
        required: boolean
        maxlength: number
    },
    img: {
        type: string 
        required: boolean
    },
    alt: {
        type: any
        required: boolean
    },
    price_id: {
        type: any,
    },
    price: {
        type: number
        required: boolean
    },
    extraInfo: {
        type: string
        required: boolean
    },
    icon: {
        type: boolean
        required: boolean
    },
    quantity: {
        type: number 
    },
    total: {
        type: number
    },
   
    timestamps: boolean
    } 