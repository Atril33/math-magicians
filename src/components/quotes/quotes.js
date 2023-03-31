import { useState, useEffect } from 'react';
import myImage from './loading.gif';
import './quotes.css';

const MyQuotes = () => {
  const [myQuote, setMyQuote] = useState('');
  const [myAuthor, setMyAuthor] = useState('');
  const [myLoading, setMyLoading] = useState(true);
  const [myError, setMyError] = useState('');

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=computers',
          {
            headers: {
              'X-Api-Key': 'bIjYCDyNgX1RI/dP1mdaMQ==JiMou8R3AeWdO2LE',
            },
          },
        );
        const data = await response.json();
        setMyQuote(data[0].quote);
        setMyAuthor(data[0].author);
        setMyLoading(false);
      } catch (error) {
        setMyError('Something went wrong!');
      }
    };

    setTimeout(() => {
      fetchQuotes();
    }, 3000);
  }, []);

  return (
    <>
      <center>
        <div className="myQuote">
          <p className="my-quote">{myQuote}</p>
          <p className="my-author">{myAuthor}</p>
          {myLoading && <img src={myImage} alt="Loading..." className="my-image" />}
          {myError && <p className="my-error">{myError}</p>}
        </div>
      </center>
    </>
  );
};

export default MyQuotes;
