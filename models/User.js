'use strict';

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, uppercase: true, enum: ['LIFE-CHANGING', 'FAVORITE FIVE', 'RECOMMENDED TO ME'] },
    img: { type: String, required: true }
});

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    books: [bookSchema]
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;