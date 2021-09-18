const taskBoardData = {
  lanes: [
    {
      id: 'PLANNED',
      title: 'Planned Tasks',
      color: '#2096f3',
      label: '20/70',
      cards: [
        {
          id: 'Milk',
          title: 'Compile exercise',
          label: '15 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: '20 practice exercises',
          tags: [
            { title: 'Error', color: 'white', bgcolor: '#F44336' },
            { title: 'Warning', color: 'white', bgcolor: '#FF9800' },
          ]
        },
        {
          id: 'Plan2',
          title: 'Upload answers',
          label: '10 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Upload answers for exercises',
          tags: [
            { title: 'Info', color: 'white', bgcolor: '#0288D1' },
            { title: 'Success', color: 'white', bgcolor: '#388E3C' },
          ]
        },
        {
          id: 'Plan3',
          title: 'Write lecture',
          label: '60 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Chapter 8 lecture.',
          tags: [
            { title: 'Warning', color: 'white', bgcolor: '#FF9800' },
          ]
        },
        {
          id: 'Plan4',
          title: 'Check exercises',
          label: '15 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Check exercises for 8A.',
          tags: [
            { title: 'Error', color: 'white', bgcolor: '#F44336' },
            { title: 'Warning', color: 'white', bgcolor: '#FF9800' },
            { title: 'Success', color: 'white', bgcolor: '#388E3C' },
          ]
        }
      ]
    },
    {
      id: 'WIP',
      title: 'Work In Progress',
      color: '#AB47BC',
      label: '10/20',
      cards: [
        {
          id: 'Wip1',
          title: 'Record video',
          label: '30 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Video lecture for chapter 5.',
          tags: [
            { title: 'Error', color: 'white', bgcolor: '#F44336' },
            { title: 'Success', color: 'white', bgcolor: '#388E3C' },
          ]
        },
        {
          id: 'Archived1',
          title: 'Record video',
          label: '300 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Video lecture for chapter 6.',
          tags: [
            { title: 'Info', color: 'white', bgcolor: '#0288D1' },
            { title: 'Error', color: 'white', bgcolor: '#F44336' },
            { title: 'Warning', color: 'white', bgcolor: '#FF9800' },
            { title: 'Success', color: 'white', bgcolor: '#388E3C' },
            { title: 'Info', color: 'white', bgcolor: '#0288D1' },
            { title: 'Error', color: 'white', bgcolor: '#F44336' },
            { title: 'Warning', color: 'white', bgcolor: '#FF9800' },
            { title: 'Success', color: 'white', bgcolor: '#388E3C' },
          ]
        }
      ]
    },
    {
      id: 'BLOCKED',
      title: 'Blocked',
      color: '#EC407A',
      label: '0/0',
      cards: [
        {
          id: 'Repeat1',
          title: 'Sample presentation',
          label: '30 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Make sample presentation for 8F.',
          tags: [
            { title: 'Error', color: 'white', bgcolor: '#F44336' },
          ]
        }
      ]
    },
    {
      id: 'COMPLETED',
      title: 'Completed',
      color: '#43A047',
      label: '2/5',
      cards: [
        {
          id: 'Completed1',
          title: 'Bonus exercises',
          label: '15 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Bonus exercises of chapter 3 for 7A'
        },
        {
          id: 'Completed2',
          title: 'Practice exercises',
          label: '15 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: '10 practice exercises for 8A'
        },
        {
          id: 'Archived1',
          title: 'Record video lecture',
          label: '300 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Video lecture for chapter 3.',
          tags: [
            { title: 'Info', color: 'white', bgcolor: '#0288D1' },
            { title: 'Warning', color: 'white', bgcolor: '#FF9800' },
          ]
        }
      ]
    },
    {
      id: 'ARCHIVED',
      title: 'Archived2',
      color: '#FF5722',
      label: '1/1',
      cards: [
        {
          id: 'Archived1',
          title: 'Record video lecture',
          label: '300 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Video lecture for chapter 4.',
          tags: [
            { title: 'Info', color: 'white', bgcolor: '#0288D1' },
          ]
        }
      ]
    },
  ]
};

export default taskBoardData;
