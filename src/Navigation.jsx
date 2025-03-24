import clsx from 'clsx';

const Navigation = ({ selectedTab, setSelectedTab }) => {
  return (
    
      
    <ul className="nav list-unstyled d-flex justify-content-between bg-light p-2">
      {/* Yeni Gelenler */}
      <li className="flex-grow-1">
        <button
          onClick={() => setSelectedTab('yeni')}
          className={clsx(
            'w-100 btn btn-light rounded-0 py-2', 
            { 'bg-secondary text-white': selectedTab === 'yeni' }
          )}
        >
          Yeni Gelenler
        </button>
      </li>
      
      {/* Tavsiye Edilenler */}
      <li className="flex-grow-1">
        <button
          onClick={() => setSelectedTab('tavsiye')}
          className={clsx(
            'w-100 btn btn-light rounded-0 py-2', 
            { 'bg-secondary text-white': selectedTab === 'tavsiye' }
          )}
        >
          Tavsiye Edilenler
        </button>
      </li>

      {/* Imdb +7 Filmler */}
      <li className="flex-grow-1">
        <button
          onClick={() => setSelectedTab('imdb')}
          className={clsx(
            'w-100 btn btn-light rounded-0 py-2', 
            { 'bg-secondary text-white': selectedTab === 'imdb' }
          )}
        >
          IMDb +7 Filmler
        </button>
      </li>
    </ul>
   
  );
};

export default Navigation;
