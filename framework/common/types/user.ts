

export interface User {
    name: {
        type: string
        required: boolean
    },
    email: {
        type: string
        required: boolean
        unique: boolean
    },
    address: {
        type: string
    },
    postNumber: {
        type: number
    },
    postSted: {
        type: string
    },
    password: {
        type: string
        required: boolean
    },
    resetToken: {
        type: string
    },
    update: {
        type: string
    },
    validEmail: {
        type: string
        default: string
    },
    emailToken: {
        type: string
    }
    timestamps: boolean
}

