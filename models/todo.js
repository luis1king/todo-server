
const {Schema, model} = require('mongoose');

const TodoSchema = Schema(

    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        tags: {
            type: String,
        },
        date: {
            type: Date,
        },
        done:{
            type: Boolean,
        },
    },
);

module.exports = model('Todo', TodoSchema);
