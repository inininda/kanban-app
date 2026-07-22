import connectDB from "./db";
import { Board, Column } from "./models"

const DEFAULT_COLUMNS = [
    {
        name: "Wish List",
        order: 0
    },
    {
        name: "Applied",
        order: 1
    },
    {
        name: "Interviewing",
        order: 2
    },
    {
        name: "Offer",
        order: 3
    },
    {
        name: "Rejected",
        order: 4
    }
]

export async function initializeUserBoard(userId: string) {
    try {
        await connectDB()

        // check if the board already exists
        const existingDefaultBoard = await Board.findOne({
            userId, name: "Job Hunt"
        })

        if (existingDefaultBoard) {
            return existingDefaultBoard
        }

        // create default board
        const board = await Board.create({
            name: "Job Hunt",
            userId,
            columns: []
        })

        // create default columns
        const bulkOps = DEFAULT_COLUMNS.map(col => ({
            updateOne: {
                filter: { name: col.name, boardId: board._id }, // Unique identifier to check if it exists
                update: {
                    $set: {
                        ...col,
                        boardId: board._id,
                        jobApplications: []
                    }
                },
                upsert: true // Inserts if no document matches the filter
            }
        }));

        const result = await Column.bulkWrite(bulkOps);
        console.log('Bulk write results:', result);

        const upsertedIds = result.upsertedIds
        board.columns = Object.values(upsertedIds || {})
        await board.save()

        return board
    } catch (error) {
        // TODO: properly handle error
        throw error
    }
}