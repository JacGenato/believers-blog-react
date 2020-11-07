const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Sermon = require('../models/Sermon');

// @route      GET api/sermons
// @desc       Get all users sermons
// @access     Private
router.get('/',auth, async (req, res) => {
  try {
    const sermons = await Sermon.find().sort({
      date: -1,
    });
    res.json(sermons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route      POST api/sermons
// @desc       Add new contact
// @access     Private
router.post(
  '/',
  [auth, [check('title', 'title is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, content, sermonDate } = req.body;

    try {
      const newSermon = new Sermon({
        title,
        description,
        content,
        sermonDate,
      });

      const sermon = await newSermon.save();
      res.json(sermon);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route      PUT api/ sermons/:id
// @desc       Update contact
// @access     Private
router.put('/:id',auth, async (req, res) => {
    const { title, description, content, sermonDate } = req.body;

  //Build contact object
  const sermonFields = {};
  if (title) sermonFields.title = title;
  if (description) sermonFields.description = description;
  if (content) sermonFields.content = content;
  if (sermonDate) sermonFields.sermonDate = sermonDate;

  try {
    let sermon = await Sermon.findById(req.params.id);
    if (!sermon) return res.status(400).json({ msg: 'Sermon not found' });


    sermon = await Sermon.findByIdAndUpdate(
      req.params.id,
      { $set: sermonFields },
      { new: true }
    );

    res.json(sermon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route      DELETE api/sermons/:id
// @desc       Delete contact
// @access     Private
router.delete('/:id',auth, async (req, res) => {
  try {
    let sermon = await Sermon.findById(req.params.id);
    if (!sermon) return res.status(400).json({ msg: 'Sermon not found' });

    await Sermon.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Sermon Removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
