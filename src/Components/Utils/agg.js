const agg = {};

agg.recruiterscreen = (mydata, store) => {
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < mydata.length; i++) {
    if (mydata[i].store === store && mydata[i].recruiterscreen_var != null) {
      counter = counter + 1;
      let agg = parseInt(mydata[i].recruiterscreen_var);
      sum += agg;
    }
  }
  let average = sum / counter;

  return Math.round(average);
};

agg.testing = (mydata, store) => {
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < mydata.length; i++) {
    if (mydata[i].store === store && mydata[i].testing_var != null) {
      counter = counter + 1;
      let agg = parseInt(mydata[i].testing_var);
      sum += agg;
    }
  }
  let average = sum / counter;

  return Math.round(average);
};

agg.interview = (mydata, store) => {
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < mydata.length; i++) {
    if (mydata[i].store === store && mydata[i].interview_var != null) {
      counter = counter + 1;
      let agg = parseInt(mydata[i].interview);
      sum += agg;
    }
  }
  let average = sum / counter;

  return Math.round(average);
};

agg.drugscreen = (mydata, store) => {
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < mydata.length; i++) {
    if (mydata[i].store === store && mydata[i].drugscreen_var != null) {
      counter = counter + 1;
      let agg = parseInt(mydata[i].drugscreen_var);
      sum += agg;
    }
  }
  let average = sum / counter;

  return Math.round(average);
};

agg.backgroundcheck = (mydata, store) => {
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < mydata.length; i++) {
    if (mydata[i].store === store && mydata[i].backgroundcheck_var != null) {
      counter = counter + 1;
      let agg = parseInt(mydata[i].backgroundcheck_var);
      sum += agg;
    }
  }
  let average = sum / counter;

  return Math.round(average);
};

agg.paperwork = (mydata, store) => {
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < mydata.length; i++) {
    if (mydata[i].store === store && mydata[i].paperwork_var != null) {
      counter = counter + 1;
      let agg = parseInt(mydata[i].paperwork_var);
      sum += agg;
    }
  }
  let average = sum / counter;

  return Math.round(average);
};

agg.completion = (mydata, store) => {
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < mydata.length; i++) {
    if (mydata[i].store === store && mydata[i].overall_completion_var != null) {
      counter = counter + 1;
      let agg = parseInt(mydata[i].overall_completion_var);
      sum += agg;
    }
  }
  let average = sum / counter;

  return Math.round(average);
};


module.exports = agg;
