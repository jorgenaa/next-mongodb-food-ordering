
export interface Order {
    custommer: {
        type: string
        required: boolean
        maxlength: number
    },
    address: {
        type: string
        required: boolean
        maxlength: number
    },
    total: {
        type: number
        required: boolean
    },
    status: {
        type: number
        default: number
    },
    method: {
        type: number
        required: boolean
    },
    timestamps: boolean
}
