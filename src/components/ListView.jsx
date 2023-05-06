import React, { useEffect, useState, useRef } from 'react';
import Shimmer from './Shimmer';
import Card from './Card';

function ListView() {
  const [data, setData] = useState();
  const [showAnotherList, setShowAnotherList] = useState(false);
  const ref = useRef();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://randomuser.me/api?results=20')
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setData(data.results);
        setIsLoading(false);
      });

    setTimeout(() => {
      window.addEventListener('scroll', () => {
        if (
          ref.current &&
          window.innerHeight > ref.current.getBoundingClientRect().top
        ) {
          console.log(true);
          setShowAnotherList(true);
        }
      });
    }, 1000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Shimmer ref={ref} />
      ) : (
        <div className='list'>
          {data.map((person) => {
            return <Card data={person} />;
          })}
          {!showAnotherList && <Shimmer ref={ref} />}
        </div>
      )}
      {showAnotherList && <ListView />}
    </div>
  );
}

export default ListView;
