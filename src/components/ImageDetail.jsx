import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './imagedetails.css'

function ImageDetail() {
    const [image, setImage] = useState({});
    const [isloading, setIsLoading] = useState(false)
    const { id } = useParams();

    const imageDetails = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
            const imageData = response.data.photo;
            setImage(imageData);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
    };

    useEffect(() => {
        imageDetails();
    }, []);

    return (
        <div className="image-detail-container">
            <center>
                <h1>Image Details</h1>
                <div className='Image-detail-list-wrapper'>
                    <div className="image-detail-list">{
                        isloading ? (<center><p>Loading Details</p></center>) : (
                            <>
                                <div className='image-detail'>
                                    <img className='img-detail' src={image.url} alt={image.title} />
                                </div>
                                <div className='detail-text'>
                                    <table>
                                        <tr>
                                            <td style={{ textAlign: 'center' }}><b>Title:</b></td>
                                            <td> <p style={{ textAlign: 'left', marginLeft: '20px' }}>{image.title}</p></td>
                                        </tr>
                                        <tr>
                                            <td style={{ textAlign: 'center' }}><b>Discription:</b></td>
                                            <td> <p style={{ textAlign: 'left', marginLeft: '20px' }}>{image.description}</p></td>
                                        </tr><tr>
                                            <td style={{ textAlign: 'center' }}><b>User:</b></td>
                                            <td> <p style={{ textAlign: 'left', marginLeft: '20px' }}>{image.user}</p></td>
                                        </tr>
                                    </table>
                                </div>
                            </>
                        )
                    }
                    </div>
                </div>
            </center>
        </div>
    );
}

export default ImageDetail;
