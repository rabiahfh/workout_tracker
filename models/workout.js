const mongoose = require("mongoose")
const Schema = mongoose.Schema
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate())
    },
    exercises: Array
}
, {
    toObject: {
    virtuals: true
    },
    toJSON: {
    virtuals: true 
    }
  })

 workoutSchema
.virtual('totalDuration')
.get(function () {
    let sum=0
    this.exercises.forEach(element => {
        sum=sum + element.duration
    });
    return sum
})
const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout