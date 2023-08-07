.top-heading {
  position: absolute;
  top: 45px; /* Adjust the value to move it down as much as you want */
  left: 0;
  font-size: 15px;
  color: aliceblue;
}

.squares-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 10vh;
  margin-top: 0;
}

.square-container {
  margin-right: 65px;
  position: relative;
}

.text {
  position: absolute;
  top: 100px;
  left: 10%;
  font-size: 10px;
  color: rgb(234, 237, 240);
  transform: translateX(-50%);
}

.square {
  width: 100px;
  height: 100px;
  top: 130px;
  left: 30%;
  transform: translateX(-50%);
}

/* Define different colors for each square */
.square-red {
  background-color: red;
}

.square-blue {
  background-color: blue;
}

.square-green {
  background-color: green;
}

.square-orange {
  background-color: orange;
}

.square-purple {
  background-color: purple;
}
