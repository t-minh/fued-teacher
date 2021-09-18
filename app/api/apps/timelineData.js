import imgApi from '../images/photos';
import avatarApi from '../images/avatars';
import time1 from '../../api/apps/time1.jpg';
import time2 from '../../api/apps/time2.jpg';
import time3 from '../../api/apps/time3.jpg';

const timelineData = [
  {
    id: '1',
    name: 'John Doe',
    date: 'September, 11 2021',
    time: '08:01',
    icon: 'add_circle',
    avatar: avatarApi[6],
    image: time1,
    content: 'How much homework should children do every day?',
    liked: true,
    comments: [
      {
        id: '1_1',
        from: 'Jane Doe',
        avatar: avatarApi[2],
        date: 'May, 29 2021',
        message: 'Personally, I think that maximum two hours because it is very important for kids to enjoy their time outdoors, to do activities in nature, play with friends and help family.'
      },
      {
        id: '1_2',
        from: 'Jim Doe',
        avatar: avatarApi[10],
        date: 'May, 29 2021',
        message: 'I think nowadays students had spend a lot of time inside the houses, playing video games and I think that is making them lose their connection with nature.'
      },
      {
        id: '1_3',
        from: 'Jihan Doe',
        avatar: avatarApi[4],
        date: 'Sep, 11 2021',
        message: 'Agreed with Jim. That\'s why we encourage children to go outside and play with nature.'
      }
    ]
  },
  {
    id: '2',
    name: 'John Doe',
    date: 'September, 10 2021',
    time: '03:20',
    icon: 'date_range',
    avatar: avatarApi[6],
    image: '',
    content: 'Let\'s talk about "Reading digitally".',
    liked: true,
    comments: [
      {
        id: '2_1',
        from: 'Jane Doe',
        avatar: avatarApi[2],
        date: 'Sep, 11 2021',
        message: 'So now that there\'s so much technology to be able to read things, do you still read things the old fashion way like newspapers, magazines, real books?'
      },
      {
        id: '2_2',
        from: 'Jihan Doe',
        avatar: avatarApi[4],
        date: 'Sep, 11 2021',
        message: ' Right, right. Oh, good question. I think it depends. I\'ve stopped buying magazines and newspapers, definitely. I always access that online because it\'s so easy and convenient and you can read different newspapers from different countries all over the world and it\'s really easy to access.'
      }
    ]
  },
  {
    id: '3',
    name: 'John Doe',
    date: 'Aug, 17 2021',
    time: '04:10',
    icon: 'description',
    avatar: avatarApi[6],
    image: time2,
    content: 'So what do you think about switching over to electronic textbooks in the classroom?',
    liked: false,
    comments: [
      {
        id: '3_1',
        from: 'Jack Doe',
        avatar: avatarApi[8],
        date: 'Sep, 11 2021',
        message: 'That’s a really good question, it’s one I\'ve been debating myself for quite some time. I think, I’m mostly for it because I think the textbooks tend to be quite heavy to carry around, students carry a lot, have to carry a lot of them around. And having it in a digital form is much easier for students to access, it’s very convenient. They can carry most of their textbooks in one kind of tablet or one on their phones and access it anywhere.'
      },
      {
        id: '3_2',
        from: 'Jim Doe',
        avatar: avatarApi[9],
        date: 'Sep, 11 2021',
        message: 'I see the advantages for it as well but I also see many disadvantages. First disadvantage I see is, students if it’s on an electronic device they\'ll be more tempted to do other things other than what they\'re supposed to be doing with their textbook.'
      },
      {
        id: '3_3',
        from: 'Jihan Doe',
        avatar: avatarApi[4],
        date: 'Sep, 11 2021',
        message: 'As well is I see as a problem for writing in the book as far as notes. Although you can write notes in there, it’s hard to reference back to them or hard to reference back certain pages, because I myself have used electronic textbook in the past and found that for regular books as far as reading, it’s great but textbooks it’s very difficult in the class if some people have regular textbooks and some people have electronic textbooks, trying to figure out what Calculation Quizveryone is on because if you have different text sizes then perhaps it\'ll be a different page numbers and it just makes it more difficult for trying to all be on the same page.'
      },
      {
        id: '3_4',
        from: 'Janet Doe',
        avatar: avatarApi[5],
        date: 'Sep, 11 2021',
        message: ' Yeah, I can kind of see your point. Although, what I do like about the electronic textbook so that they’ve got a lot of interactive material that you can directly link to the text that you\'re using like any animated materials, videos, other online material that you can access immediately whereas if you have a book you don’t have that more interactive component. '
      }
    ]
  },
  {
    id: '4',
    name: 'John Doe',
    date: 'Aug, 10 2021',
    time: '08:05',
    icon: 'favorite',
    avatar: avatarApi[6],
    image: '',
    content: 'Computers in Class.',
    liked: true,
    comments: [
      {
        id: '4_1',
        from: 'Jane Doe',
        avatar: avatarApi[2],
        date: 'Sep, 11 2021',
        message: 'I think my best teacher is my seminar\'s teacher because he has unconventional teaching method and which is makes you really into the, into the lecture. It\'s not just a boring lesson that he talks for hours and you\'ll stay there taking notes and listening. It\'s not like that, it\'s more interactive, it makes you think about what he\'s saying and your opinion is really important for him. He wants you to think carefully about what he\'s saying and ends out with a rational conclusion.'
      }
    ]
  },
  {
    id: '5',
    name: 'John Doe',
    date: 'Aug, 10 2021',
    time: '02:50',
    icon: 'lock',
    avatar: avatarApi[6],
    image: time3,
    content: 'Computers in Class.',
    liked: false,
    comments: [
      {
        id: '5_1',
        from: 'Jim Doe',
        avatar: avatarApi[9],
        date: 'Sep, 11 2021',
        message: 'I think it\'s good when there\'s certain activities that are related to using computers.'
      },
      {
        id: '5_2',
        from: 'Jihan Doe',
        avatar: avatarApi[4],
        date: 'Sep, 11 2021',
        message: 'But when you\'re trying to do an activity that\'s not on a computer in a classroom that has computers, it\'s very difficult to get your students\' attention because they\'re often distracted by doing something else on the internet, they shouldn\'t be doing.'
      }
    ]
  }
];

export default timelineData;
