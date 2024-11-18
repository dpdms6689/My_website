import { useState } from "react";

//이미지관리
const IMAGE_1_URL = require("image/image01.jpg")
const IMAGE_2_URL = require("image/image02.jpg")
const IMAGE_3_URL = require("image/image03.jpg")


export default function Carousel() {
    const [activeImage, setActiveImage] = useState(1);
    console.log(activeImage);

    return(
        <div>
            <div className="carousel">
                <ul className="carousel__slides">
                    <input
                    type="radio"
                    name="radio=buttons"
                    id="img-1"
                    checked={activeImage === 1}
                    readOnly
                />
                <li className="carousel__slide-container">
                    <div className="carousel__slide-img">
                        <img alt="scenery 1" src={IMAGE_1_URL} />
                    </div>
                    <div className="carousel__controls">
                        <label
                            onClick={() => setActiveImage(3)}
                            className="carousel__slide-prev"
                        >
                            <span>&lsaquo;</span>
                        </label>
                        <label
                            onClick={() => setActiveImage(2)}
                            className="carousel__slide-next"
                        >
                            <span>&rsaquo;</span>
                        </label>
                    </div>
                </li>
                <input
                    type="radio"
                    name="radio-buttons"
                    id="img-2"
                    checked={activeImage === 2}
                    readOnly
                />
                <li className="carousel__slide-container">
                    <div className="carousel__slide-img">
                        <img alt="scenery 2" src={IMAGE_2_URL} />
                    </div>
                    <div className="carousel__controls">
                        <label
                        onClick={() => setActiveImage(1)}
                        className="carousel__slide=prev"
                    >
                        <span>&lsaquo;</span>
                    </label>
                    <label
                        onClick={() => setActiveImage(3)}
                        className="carousel__slide-next"
                    >
                        <span>&rsaquo;</span>
                    </label>
                </div>
                </li>
                <input
                    type="radio"
                    name="radio-buttons"
                    id="image-3"
                    checked={activeImage === 3}
                    readOnly
                />
                <li className="carousel__slide-container">
                    <div className="carousel__slide-img">
                        <img alt="scenery 3" src={IMAGE_3_URL} />
                    </div>
                    <div className="carousel__controls">
                        <label
                            onClick={() =>setActiveImage(2)}
                            className="carousel__slide=prev"
                        >
                            <span>&lsaquo;</span>
                        </label>
                        <label
                            onClick={() => setActiveImage(1)}
                            className="carousel__slide-next"
                        >
                            <span>&rsaquo;</span>
                        </label>
                    </div>
                </li>
                <div className="carousel__dots">
                    <label
                        onClick={() => setActiveImage(1)}
                        className="carousel__dot"
                        id="img-dot-1"
                    ></label>
                    <label
                        onClick={() => setActiveImage(2)}
                        className="carousel__dot"
                        id="img-dot-2"
                    ></label>
                    <label
                        onClick={() => setActiveImage(3)}
                        className="carousel__dot"
                        id="img-dot-3"
                    ></label>
                </div>
            </ul>
        </div>
    </div>
    )
}
