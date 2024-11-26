import React from 'react';
import CourseItem from './CourseItem';

const courses = [
  {
    id: "00001",
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
