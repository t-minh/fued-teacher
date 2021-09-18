const eventData = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2021, 9, 0),
    end: new Date(2021, 9, 1),
    hexColor: 'EC407A'
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2021, 9, 7, 0, 0, 0),
    end: new Date(2021, 9, 10, 0, 1, 0),
    hexColor: 'EC407A'
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2021, 9, 5, 0, 0, 0),
    end: new Date(2021, 9, 1, 0, 0, 0),
    hexColor: 'EC407A'
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2021, 9, 6, 0, 0, 0),
    end: new Date(2021, 9, 11, 0, 0, 0),
    hexColor: 'AB47BC'
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2021, 9, 9, 0, 0, 0),
    end: new Date(2021, 9, 9, 0, 0, 0),
    hexColor: 'AB47BC'
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2021, 9, 1),
    end: new Date(2021, 9, 11),
    desc: 'Big conference for important people',
    hexColor: '2196F3'
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2021, 9, 1, 10, 30, 0, 0),
    end: new Date(2021, 9, 10, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
    hexColor: '2196F3'
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2021, 9, 10, 12, 0, 0, 0),
    end: new Date(2021, 9, 10, 13, 0, 0, 0),
    desc: 'Power lunch',
    hexColor: '2196F3'
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2021, 9, 4, 14, 0, 0, 0),
    end: new Date(2015, 9, 4, 15, 0, 0, 0),
    hexColor: '00ACC1'
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2021, 9, 5, 17, 0, 0, 0),
    end: new Date(2021, 9, 5, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
    hexColor: '00ACC1'
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2021, 9, 6, 20, 0, 0, 0),
    end: new Date(2021, 9, 6, 21, 0, 0, 0),
    hexColor: '00ACC1'
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2021, 9, 7, 7, 0, 0),
    end: new Date(2021, 9, 7, 10, 30, 0),
    hexColor: '43A047'
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2021, 9, 8, 19, 30, 0),
    end: new Date(2021, 9, 8, 2, 0, 0),
    hexColor: '43A047'
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2021, 9, 9, 19, 30, 0),
    end: new Date(2021, 9, 9, 2, 0, 0),
    hexColor: 'FF5722'
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    hexColor: 'FF5722'
  },
];

export default eventData;
