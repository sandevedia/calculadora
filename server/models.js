const mongoose = require('mongoose')


//mongoose crea un id por nosotros
const resultSchema = new mongoose.Schema(
    {
        value: Number,
    },
    {
        timestamps: {
            createdAt: "create_at",
            updatedAt: "update_at"
        }
    }
)

//bajo el nombre "result" le vamos a mandar el Schema que acabamos de crear.
module.exports = mongoose.model("Result", resultSchema)