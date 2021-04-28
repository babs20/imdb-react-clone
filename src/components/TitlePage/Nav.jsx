import classNames from 'classnames';
import { useState } from 'react';

export default function Nav() {
  const [isFocused, updateIsFocused] = useState({
    info: true,
    episodes: false,
  });

  return (
    <nav className='px-8 pt-4 space-x-8 text-2xl bg-gray-800 border-b border-gray-400 text-gray-50'>
      <button
        className='relative pb-3 focus:outline-none'
        onClick={() => updateIsFocused({ info: true, episodes: false })}
      >
        <h2
          className={classNames('font-bold', { navUnderline: isFocused.info })}
        >
          Info
        </h2>
      </button>

      <button
        className='relative pb-3 focus:outline-none'
        onClick={() => updateIsFocused({ info: false, episodes: true })}
      >
        <h2
          className={classNames('font-bold', {
            navUnderline: isFocused.episodes,
          })}
        >
          Episodes
        </h2>
      </button>
    </nav>
  );
}
