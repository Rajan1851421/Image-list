import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './home.css';

function Home() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // State for loading indicator

    const galleryApi = async () => {
        try {
            const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos`);
            const imagesData = response.data.photos;
            setImages(imagesData);
            setIsLoading(false); // Set loading state to false when data is fetched
        } catch (error) {
            console.log(error);
            setIsLoading(false); // Set loading state to false even if there's an error
        }
    };
    useEffect(() => {
        galleryApi();
    }, []);

    return (
        <>
            <div className='search-box-container'>
                <input type="text" className='search-box' placeholder='Enter Name which you want to search' />
                <button className='search-btn'>Search</button>
            </div>
            <div className='Image-list-wrapper'>
                {isLoading ? (
                   <center> <p>Loading images...</p></center> // Display loading message while fetching data
                ) : (
                    images.map((image, index) => (
                        <Link to={`/detail/${image.id}`} key={image.id}>
                            <div className="image-list">
                                <img className='img' src={image.url} alt={image.title} />
                                <div className='img-title'><strong>Title:</strong>{image.title}</div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </>
    );
}

export default Home;
