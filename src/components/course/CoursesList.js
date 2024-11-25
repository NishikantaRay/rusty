import React from 'react';
import CourseItem from './CourseItem';

const courses = [
  {
    image: 'assets/img/course/1/1.jpg',
    icon: 'assets/img/course/1/v1.png',
    university: 'University of London',
    title: 'The Complete JavaScript Course From Zero to Expert!',
    lessons: 23,
    enrolled: 50,
    oldPrice: '$130',
    newPrice: '$86.00',
    description: 'Lorem ipsum dolorous rises quiz varus qualm quisque id connecter adipescent commode impediment.',
    features: [
      'Eita quad ex, rhonchus vitae lectors in, digicam pharetra ipsum.',
      'Magmas dis parturient mantes',
      'Morbi critique lorem sit a met arco utricles tempus.'
    ]
  },
  {
    image: 'assets/img/course/1/2.jpg',
    icon: 'assets/img/course/1/v2.png',
    university: 'Yale University',
    title: 'Online Courses Can Also Provide Access High-Quality',
    lessons: 34,
    enrolled: 47,
    oldPrice: '$100',
    newPrice: '$67.00',
    description: 'Lorem ipsum dolorous rises quiz varus qualm quisque id connecter adipescent commode impediment.',
    features: [
      'Eita quad ex, rhonchus vitae lectors in, digicam pharetra ipsum.',
      'Magmas dis parturient mantes',
      'Morbi critique lorem sit a met arco utricles tempus.'
    ]
  },
  {
    image: 'assets/img/course/1/3.jpg',
    icon: 'assets/img/course/1/v3.png',
    university: 'University of London',
    title: 'Online Courses Can Also Provide Access High-Quality',
    lessons: 23,
    enrolled: 50,
    oldPrice: '$130',
    newPrice: '$86.00',
    description: 'Lorem ipsum dolorous rises quiz varus qualm quisque id connecter adipescent commode impediment.',
    features: [
      'Eita quad ex, rhonchus vitae lectors in, digicam pharetra ipsum.',
      'Magmas dis parturient mantes',
      'Morbi critique lorem sit a met arco utricles tempus.'
    ]
  },
  {
    image: 'assets/img/course/1/4.jpg',
    icon: 'assets/img/course/1/v4.png',
    university: 'University of London',
    title: 'Learn how to start an amazon FBA store & analysis',
    lessons: 54,
    enrolled: 26,
    oldPrice: '$240',
    newPrice: '$175',
    description: 'Lorem ipsum dolorous rises quiz varus qualm quisque id connecter adipescent commode impediment.',
    features: [
      'Eita quad ex, rhonchus vitae lectors in, digicam pharetra ipsum.',
      'Magmas dis parturient mantes',
      'Morbi critique lorem sit a met arco utricles tempus.'
    ]
  },
  {
    image: 'assets/img/course/1/5.jpg',
    icon: 'assets/img/course/1/v5.png',
    university: 'Yonsei University',
    title: 'Unity Medical Visualize Deployment and Usability',
    lessons: 23,
    enrolled: 50,
    oldPrice: '$364',
    newPrice: '$254',
    description: 'Lorem ipsum dolorous rises quiz varus qualm quisque id connecter adipescent commode impediment.',
    features: [
      'Eita quad ex, rhonchus vitae lectors in, digicam pharetra ipsum.',
      'Magmas dis parturient mantes',
      'Morbi critique lorem sit a met arco utricles tempus.'
    ]
  }
];

const CoursesList = () => {
  return (
    <div className="row">
      {courses.map((course, index) => (
        <CourseItem key={index} course={course} />
      ))}
    </div>
  );
};

export default CoursesList;
