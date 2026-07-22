import mongoose, { Schema, Document } from "mongoose";

export interface IJobApplication extends Document {
    company: string;
    position: string;
    status: string;
    columnId: mongoose.Types.ObjectId;
    boardId: mongoose.Types.ObjectId;
    userId: string;
    order: number;
    location?: string;
    notes?: string;
    salary?: string;
    jobUrl?: string;
    appliedDate?: Date;
    tags?: string[];
    description?: string;
    createdAt: Date;
    updatedAt: Date
}

const JobApplicationSchema = new Schema<IJobApplication>({
    company: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    columnId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    boardId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        required: false
    },
    salary: {
        type: String,
        required: false
    },
    jobUrl: {
        type: String,
        required: false
    },
    appliedDate: {
        type: Date,
        required: false
    },
    tags: {
        type: [{
            type: String
        }],
        required: false
    },
    description: {
        type: String,
        required: false
    }

}, {
    timestamps: true
})

export default mongoose.models.Column || mongoose.model<IJobApplication>("Column", JobApplicationSchema)