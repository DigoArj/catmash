import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { Cat, PositionedCat } from 'Components';
import { css } from 'emotion';

const styles = css`
  > ul {
    list-style: none;
    padding: 0;
  }

  > ul.podium {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 16px 16px;
    grid-template-areas: 'first first' 'second third';
    justify-items: center;

    > li:first-of-type {
      grid-area: first;
    }

    > li:nth-of-type(2) {
      grid-area: second;
    }

    > li:nth-of-type(3) {
      grid-area: third;
    }
  }

  > ul.others {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    > li {
      margin-top: 16px;
    }
  }
`;

export const CatList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(false);

  const loadCats = () => API.get('cats', '/cats', {});

  useEffect(() => {
    const onLoad = async () => {
      try {
        const cats = await loadCats();
        setCats(cats);
      } catch (e) {
        setError(true);
      }

      setLoading(false);
    };

    onLoad().then();
  }, []);

  if (error) {
    return <span>An error occurred.</span>;
  }

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className={styles}>
      <ul className="podium">
        {cats.slice(0, 3).map(({ catId, imageUrl }, i) => (
          <PositionedCat key={catId} id={catId} imgUrl={imageUrl} position={i + 1} />
        ))}
      </ul>
      <ul className="others">
        {cats.slice(3).map(({ catId, imageUrl }) => (
          <li key={catId}>
            <Cat srcUrl={imageUrl} alt={`cat ${catId}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};
