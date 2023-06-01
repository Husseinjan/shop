import React, { useState } from 'react';
import Header from './Header';
import './rws.css';

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([
    {
      id: 1,
      name: 'Ali',
      text:
        'aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra ',
      bookName: 'Думай и Богатей',
      town: 'Moscow',
    },
    {
      id: 2,
      name: 'Ali',
      text:
        'aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra ',
      bookName: 'Думай и Богатей',
      town: 'Moscow',
    },
  ]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [bookName, setBookName] = useState('');
  const [town, setTown] = useState('');

  const addReview = () => {
    if (name.trim() === '' || text.trim() === '' || bookName.trim() === '' || town.trim() === '') {
      alert('Заполните все поля');
      return;
    }

    const newReview = {
      id: reviewsData.length + 1,
      name,
      text,
      bookName,
      town,
    };

    setReviewsData([...reviewsData, newReview]);
    setName('');
    setText('');
    setTown('');
    setBookName('');
  };

  return (
    <>
      <Header />
      <h1 className='rws_title'>Отзывы</h1>
      <div className='content_rws'>
        {reviewsData.map((review) => (
          <div key={review.id} className='main_rws'>
            <p className='name_rws'>{review.name}</p>
            <p className='book_name'>
              <i className="fa-solid fa-book fa-beat rws_i"></i>
              {review.bookName}
            </p>
            <p className='text_rws'>{review.text}</p>
            <p className='town_rws'>
              <i className="fa-sharp fa-solid fa-location-dot fa-bounce rws_i"></i>
              {review.town}
            </p>
            <p className='date_rws'>
              <i className="fa-solid fa-clock fa-fade rws_i"></i>08/04/2023
            </p>
          </div>
        ))}
        <div className='inputs'>
          <input type='text' placeholder='Ваше Имя' className='input_rws' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='text' placeholder='Имя книги' className='input_rws' value={bookName} onChange={(e) => setBookName(e.target.value)} />
          <input type='text' placeholder='Ваш отзыв' className='input_rws' value={text} onChange={(e) => setText(e.target.value)} />
          <input type='text' placeholder='Ваше Город' className='input_rws' value={town} onChange={(e) => setTown(e.target.value)} />
        </div>
        <button
          style={{
            color: 'white',
            background: 'black',
            padding: '5px 30px',
            border: 'none',
            fontWeight: '600',
            borderRadius: '20px',
            margin: '10px 580px',
          }}
          onClick={addReview}
        >
          Добавить
        </button>
      </div>
    </>
  );
};

export default Reviews;
