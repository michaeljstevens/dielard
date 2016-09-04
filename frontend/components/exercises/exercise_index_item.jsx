import React from 'react';

const MuscleImages = {
  Legs: "http://res.cloudinary.com/dj6gqauyi/image/upload/v1473029909/18-512_kodu0u.png",
  Biceps: "http://res.cloudinary.com/dj6gqauyi/image/upload/v1473029911/31185_p2jbwm.png",
  Triceps: "http://res.cloudinary.com/dj6gqauyi/image/upload/v1473029911/31185_p2jbwm.png",
  Shoulders: "http://res.cloudinary.com/dj6gqauyi/image/upload/v1473029909/shoulders-icon-60889_qirfml.png",
  Glutes: "http://res.cloudinary.com/dj6gqauyi/image/upload/v1473029911/sport-285773_640_qyrqmd.png",
  Chest: "http://res.cloudinary.com/dj6gqauyi/image/upload/v1473029930/chest-_iztey2.png",
  Back: "http://res.cloudinary.com/dj6gqauyi/image/upload/v1473029908/back-icon-60778_wza0aa.png",
  Core: "http://res.cloudinary.com/dj6gqauyi/image/upload/v1473029908/l_089_ajixr2.png",
  Other: "http://res.cloudinary.com/dj6gqauyi/image/upload/v1473029911/exercise-icon-32_i3pwzz.png"
};

class ExerciseIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.destroyExercise = this.destroyExercise.bind(this);
  }

  destroyExercise() {
    this.props.destroyExercise(this.props.exercise.id);
  }


  render () {
    let exercise = this.props.exercise;
    return (
      <div className="exercise-index-item-container">
        <ul className="exercise-index-item-values">
          <li className="exercise-index-title">
            {exercise.title}
          </li>
          <div className="exercise-index-v-line"></div>
          <li className="exercise-index-description">
           {exercise.description}
          </li>
          <div className="exercise-index-v-line"></div>
          <li className="exercise-index-muscle-group">
            <img src={MuscleImages[exercise.muscle_group]} />
          </li>
        </ul>
        <button className="delete-exercise" onClick={this.destroyExercise}>Delete</button>
      </div>
    );
  }
}

export default ExerciseIndexItem;
