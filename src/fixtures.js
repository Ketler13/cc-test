export const events = [
  { "start": 0,   "duration": 15, "title": "Excercise" },
  { "start": 25,  "duration": 30, "title": "Travel to work" },
  { "start": 30,  "duration": 30, "title": "Plan day" },
  { "start": 60,  "duration": 15, "title": "Review yesterday commits" },
  { "start": 100, "duration": 15, "title": "Code review" },
  { "start": 180, "duration": 90, "title": "Have lunch with John" },
  { "start": 360, "duration": 30, "title": "Skype call" },
  { "start": 370, "duration": 45, "title": "Follow up designer" },
  { "start": 405, "duration": 30, "title": "Push up branch" }
]

export const addOffSet = events => {
  // let lastOffset = 0;
  // let lastFinishTime = 0;
  let offsets = Array(20).fill(0);
  let offset = 0;
  return events.map(event => {

    if (!offsets.length) {
      offsets[0] = event.start + event.duration;
      return {...event, offset};
    }


    for (let i = 0; i < offsets.length; i++) {
      const latestEvent = offsets[i];

      if (event.start >= latestEvent) {
        offsets[i] = event.start + event.duration;
        offset = i;
        break;
      } else {
        continue;
      }
    }
    return {...event, offset}

  });
}

export const gridData = [
  {value: '8:00', top: 0},
  {value: '8:30', top: 30},
  {value: '9:00', top: 60},
  {value: '9:30', top: 90},
  {value: '10:00', top: 120},
  {value: '10:30', top: 150},
  {value: '11:00', top: 180},
  {value: '11:30', top: 210},
  {value: '12:00', top: 240},
  {value: '12:30', top: 270},
  {value: '1:00', top: 300},
  {value: '1:30', top: 330},
  {value: '2:00', top: 360},
  {value: '2:30', top: 390},
  {value: '3:00', top: 420},
  {value: '3:30', top: 450},
  {value: '4:00', top: 480},
  {value: '4:30', top: 510},
  {value: '5:00', top: 540}
]
