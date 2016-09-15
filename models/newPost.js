"use strict"

const mongoose = require("mongoose")

const LINK_VALIDATION = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

module.exports = mongoose.model("New Post", {
  title: {
    type: String,
    required: [true, "We need a title!"]
  },
  link: {
    type: String,
    required: [true, "Please insert a link"],
    match: [LINK_VALIDATION, "Please enter valid link"]
  },
  image: {
    type: String,
    required: [true, "Please insert an image url"],
    match: [LINK_VALIDATION, "Please enter valid image url"]
  },
  // vote: Number,
  // score: Number,
})
