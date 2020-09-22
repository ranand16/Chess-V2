import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GameSchema = Schema(
    {
        gameId: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        gameName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        players: {
            type: Array
        },
        spectators: {
            type: Array
        },
        gameChance: {
            type: String
        },
        boardData: {
            type: Array,
            required: true
        }
    },
    {
        timestamps: true,
        useNestedStrict: true
    }
)

export default mongoose.model("Games", GameSchema)