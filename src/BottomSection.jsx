import {useState} from 'react'

import Tavsiye from './Tavsiye'
import Navigation from './Navigation'
import Yeni from './Yeni'
import Imdb from './Imdb'

const BottomSection = () => {
  const [selectedTab, setSelectedTab] = useState('imdb')

  //const {selectedPost} = usePost()

  //const {id} = useParams()



  return (
    <div style={{ width: '1200px',background:"grey" }}>

      <div style={{ width: '1200px',background:"grey" }} className='card mb-5 mb-xl-10'>
        <div  className='card-body pt-3 pb-0 '>
       
          <Navigation selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>
      </div>

      {selectedTab === 'yeni' && <Yeni />}
      {selectedTab === 'tavsiye' && <Tavsiye  />}
      {selectedTab === 'imdb' && <Imdb  />}
      {/* Modal */}
    </div>
  )
}

export default BottomSection
