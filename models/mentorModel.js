const mongoose = require('mongoose');
const slugify = require('slugify');

const mentorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A mentorship must have a name'],
      unique: true,
      trim: true,
      maxlength: [
        40,
        'A mentorship name must have less or equal then 40 characters',
      ],
      minlength: [
        10,
        'A mentorship name must have more or equal then 10 characters',
      ],
      // using built in from the validator library, commented because it doesn't allow spaces
      // validate: [validator.isAlpha, 'mentorship name must only contain characters']
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A mentorship must have a duration'],
    },
    difficulty: {
      type: String,
      required: [true, 'A mentorship must have a difficulty'],
      enum: {
        values: ['newbie', 'junior', 'mid'],
        message: 'Difficulty is either: newbie, junior, or mid',
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'A mentorship must have a price'],
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          // this only points to current doc on NEW document creation, not gonna work on update
          return val < this.price;
          // 100 < 200, if 250 its not < 200, therefore a erroe message is displayed
        },
        message: 'Discount price ({VALUE}) should be below regular price',
      },
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A mentorship must have a summary'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A mentorship must have a cover image'],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: [Date],
    user: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// mentorSchema.index({ price: 1 });
mentorSchema.index({ price: 1, ratingsAverage: -1 });
mentorSchema.index({ slug: 1 });

mentorSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

// this is virtual populate
mentorSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'mentorship',
  localField: '_id',
});

// Document middleware: runs before .save() and .create(), not for update
mentorSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// Query middleware
mentorSchema.pre(/^find/, function (next) {
  // /^find/ means all the strings that start with find
  this.find({ secretmentorship: { $ne: true } });

  this.start = Date.now();
  next();
});

mentorSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'guides',
    select: '-__v -passwordChangedAt',
  });
  next();
});

const mentorship = mongoose.model('mentorship', mentorSchema);

module.exports = mentorship;
