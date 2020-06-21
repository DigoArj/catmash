import React, { useEffect, useState } from 'react';
import { Cat, Loader, PositionedCat } from 'Components';
import { css } from 'emotion';
import { useApp } from 'Stores';

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
    padding-bottom: 32px;

    > li {
      margin-top: 16px;
    }
  }
`;

const loaderStyles = css`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CatList: React.FC = () => {
  const { loadCats } = useApp();
  const [loading, setLoading] = useState(true);
  const [cats, setCats] = useState<Array<Cat>>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const onLoad = async () => {
      try {
        const cats = await loadCats();
        setCats(cats);
      } catch (e) {
        setError(true);
      }

      setTimeout(() => setLoading(false), 1500);
    };

    onLoad().then();
  }, [loadCats]);

  if (error) {
    return <span>An error occurred.</span>;
  }

  if (loading) {
    return (
      <div className={loaderStyles}>
        <Loader />
      </div>
    );
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
