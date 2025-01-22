import React from 'react';
import Nav from '../Nav/Nav';
import './Home.css'

function Home({ data }) {
    return <>
        <main >
            <div className="container">
                <Nav />
                <div className="container px-5 pt-4">
                    <div className="row">
                        <h2>Explore</h2>
                        <p>What are you gonna watch today ?</p>
                    </div>
                    <div className="row">
                        <div className="col-12 main-image position-relative">
                            <img src={`https://image.tmdb.org/t/p/w500${data[0]?.backdrop_path}`} className='w-100' />
                            <div className="content position-absolute d-flex justify-content-center align-items-center">
                                <div>
                                    <h1 className='text-center py-5'>{data[0]?.title || data[0]?.name}</h1>
                                    <p>{data[0]?.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"><h2 className='mt-5 mb-3'>New Realease</h2></div>
                    </div>
                    <div className="row overflow-x-auto flex-nowrap text-center g-3">
                        {data.map((item, index) => (
                            (index > 0 && <div key={index} className="movie-item col-4 position-relative">
                                <div className="content position-absolute d-flex justify-content-center align-items-center">
                                    <p>{item.overview}</p>
                                </div>
                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className='w-100' />
                                <h2>{item.title || item.name}</h2>
                            </div>)
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-12"><h2 className='mt-5 mb-3'>Other</h2></div>
                    </div>
                    <div className="row text-center g-3 justify-content-center">
                        {data.map((item, index) => (
                            (index > 0 && <div key={index} className="movie-item col-4 position-relative">
                                <div className="content position-absolute d-flex justify-content-center align-items-center">
                                    <p>{item.overview}</p>
                                </div>
                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className='w-100' />
                                <h2>{item.title || item.name}</h2>
                            </div>)
                        ))}
                    </div>
                </div>
            </div>
        </main>
    </>
}
export default Home;
