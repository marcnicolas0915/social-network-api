const { Thought, User } = require("../models");

module.exports = {
  // get all thoughts
  getThought(req, res) {
    // find all thoughts
    Thought.find({})
      .then((thought) => {
        // then send thoughts as json
        console.log(thought); 
        res.json(thought); 
      })
      .catch((err) => res.status(500).json(err)); 
  },

  // get single thought by id
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId }) // find thought by id in params object
      .select("-__v") // excludes __v
      .then(
        // then send thought as json
        (thought) =>
          !thought // if no thought is found
            ? res
                .status(404)
                .json({ message: "No thought found with this id!" }) // send 404 error
            : res.json(thought) // if thought, send thought
      );
  },

  // create thought
  createThought(req, res) {
    Thought.create(req.body)
      .then(({ _id }) => {
        // destructure _id from thought object and assign to _id
        return User.findOneAndUpdate(
          // find user by id and update thoughts array with new thought id
          { _id: req.body.userId }, 
          { $push: { thoughts: _id } }, 
          { new: true } 
        );
      })
      // then send thought as json, now with user data
      .then(
        (thought) =>
          !thought // if no thought is found
            ? res
                .status(404)
                .json({ message: "No thought found with this id!" }) // send 404 error
            : res.json(thought) // respond with thought data
      )
      .catch((err) => res.status(500).json(err));
  },

  // update thought
  updateThought(req, res) {
    // find thought by id in params object and update with data in body object
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId }, // find thought by id in params object
      { $set: req.body }, // set thought data to data in body object
      { runValidators: true, new: true } // run validators and return new document
    )
      .then(
        (thought) =>
          !thought // if no thought is found
            ? res
                .status(404)
                .json({ message: "No thought found with this id!" }) // send 404 error
            : res.json(thought) // respond with thought data
      )
      .catch((err) => res.status(500).json(err));
  },

  // delete thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId }) // find thought by id in params object
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found with this id!" })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId }, // find user by thought id in thoughts array
              { $pull: { thoughts: req.params.thoughtId } }, // pull thought id from thoughts array in user
              { new: true } 
            )
      )
      .then((user) => {
        !user
          ? res.status(404).json({
              message: "No user found associated with this thought id!",
            })
          : res.json(user); 
      })
      .catch((err) => res.status(500).json(err));
  },

  // create reaction
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId }, // find thought by id in params object
      { $addToSet: { reactions: req.body } }, // add new reaction to reactions array
      { runValidators: true, new: true } 
    )
      .then(
        (thought) =>
          !thought // if no thought is found
            ? res
                .status(404)
                .json({ message: "No thought found with this id!" }) 
            : res.json(thought) // respond with thought data
      )
      .catch((err) => res.status(500).json(err));
  },

 
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId }, // find thought by id in params object
      { $pull: { reactions: { reactionId: req.params.reactionId } } }, 
      { runValidators: true, new: true } 
    )
      .then(
        (thought) =>
          !thought 
            ? res
                .status(404)
                .json({ message: "No thought found with this id!" }) 
            : res.json(thought) 
      )
      .catch((err) => res.status(500).json(err));
  },
};