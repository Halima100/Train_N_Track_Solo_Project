import React from "react";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>
          Train N Track is a workout application designed for personal trainers
          to effortlessly manage and track their clients' fitness journeys. This
          application will assist in providing a personalized fitness experience
          for each client. Personal trainers are able to keep their clients'
          workout plans updated and organized. The user can add, edit or remove
          workout entries easily. Personal trainers are able to measure client
          performance over time by recording their goals. Lastly trainers are
          able to provide insight and make each workout personal by adding notes
          and comments to each entry. This application is designed to take the
          hassle out of managing client information so one can focus on
          providing an exceptional fitness experience.{" "}
        </p>
        <p>
          Technologies
          <ul>- Node</ul>
          <ul>- Express</ul>
          <ul>- React w/ Hooks, Redux, Sagas</ul>
          <ul>- PostgreSql</ul>
          <ul>- Heroku</ul>
          <ul>- CSS</ul>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
