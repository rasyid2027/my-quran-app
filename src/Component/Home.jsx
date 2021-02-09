import Alquran from '../alquran.png'

function Home() {
    return (
        <div className="home container">
            {/* <h5 className='center'>welcome to 'My Quran App'</h5> */}
            <div className="logo">
                <img src={ Alquran } alt="alquran logo" className="alquran"/>
            </div>
        </div>
    )
}

export default Home