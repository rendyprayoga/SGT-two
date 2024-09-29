<template>
  <div class="section-our">
    <h1 class="title">we are</h1>
    <p class="description">
      are very different in terms of priority, scale and complexity of <br />
      implementation
    </p>

    <div class="project-container">
      <div class="project emergency-aid">
        <a href="#" class="brutalist-button emergency-button">
          <strong>Emergency Aid. WAR 2022.</strong>
          <p>
            providing food and medicine to the shelters and animals which lost
            their homes and families due to the war<
          </p>
        </a>
      </div>

      <div class="project feed-line">
        <a href="#" class="brutalist-button feed-button">
          <strong>Non-commercial feed line</strong>

          <p>
            construction of industrial production base where food for shelters
            will be produced on a free basis
          </p>
        </a>
      </div>

      <div class="project education-control">
        <a href="#" class="brutalist-button education-button">
          <span>Education and Control</span>
          <p>
            lectures on communication, organisation and coordination of
            processes, control over the use of aid
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-our {
  width: 100vw;
  height: auto;
  background-color: #3e88ff;
  margin-top: 10rem;
  padding: 40px;
}

.title {
  color: #fff;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 4vw;
  font-weight: 700;
  line-height: 1.25em;
  padding-left: 183px;
}

.description {
  color: #fff;
  text-align: left;
  margin-top: 0.5em;
  margin-bottom: 1em;
  font-size: 2.5vw;
  line-height: 1.5em;
  padding-left: 183px;
}

.project-container {
  padding-left: 183px;
  padding-right: 183px;
  margin-top: 2rem;
}

.project {
  margin-bottom: 2rem;
}

.project p {
  color: #fff;
  font-size: 1.8vw;
  margin-top: 0.5em;
  line-height: 1.5em;
}

.brutalist-button {
  display: block;
  text-decoration: none;
  padding: 20px;
  font-size: 18px;
  /* font-weight: bold; */
  color: #fff;
  border: 2px solid #fff;
  transition: border 0.3s ease, transform 0.3s ease;
}

.emergency-button {
  background-color: black;
}

.emergency-button:hover {
  border-color: 2px solid #fff;
  color: #fff;
}
.feed-button {
  background-color: #00d100;
}

.feed-button:hover {
  border-color: #fff;
  color: #fff;
}

.education-button {
  background-color: #ff75d0;
}

.education-button:hover {
  border-color: #fff;
  color: #fff;
}
</style>
