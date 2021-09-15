import { useHistory, useParams } from "react-router";
import { beach } from "../../state/state";
import "./_item.scss";
import user from "../../state/images/user.svg";
import BeachCommentItem from "./BeachCommentItem";
import { useContext, useState } from "react";
import { BeachCommentContext } from "../../Context";

// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Thumbs } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default function BeachItem() {
  const { id } = useParams();
  const filtered = beach.filter((item) => item.id === parseInt(id));
  const history = useHistory();
  const [addValue, setAddValue] = useState("");
  const { beachComment, setBeachComment } = useContext(BeachCommentContext)

  function addInput() {
    setBeachComment([{ id: Date.now(), comment: addValue, allowEdit: true }, ...beachComment]);
    setAddValue("");
  }

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>

      <div onClick={() => history.goBack()} className="pageBack">
        <i className="fas fa-chevron-left"></i>
        <span>geri</span>
      </div>
      {filtered.map((item) => (
        <div key={item.id} className="card__item__container">
          <figure className="photo-gallery">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src={item.img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img5} alt="" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={item.img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img5} alt="" />
              </SwiperSlide>
            </Swiper>
          </figure>
          <div className="card__desc">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div>
              <div className="card__contact">
                <i className="fas fa-file-invoice-dollar"></i>
                <span>{item.price}</span>
              </div>
              <div className="card__contact">
                <i className="fas fa-map-marker-alt"></i>
                <span>{item.map}</span>
              </div>
              <div className="card__contact">
                <i className="fas fa-phone-alt"></i>
                <span>{item.num}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="comments__section">
        <h2>Şərhlər({beachComment.length})</h2>
        <div className="add__form">
          <div className="comment">
            <figure>
              <img src={user} alt="profile" />
            </figure>
            <input
              className="add-input"
              type="text"
              placeholder="şərh yaz..."
              value={addValue}
              onChange={(e) => setAddValue(e.target.value)}
            />
          </div>
          <div className="button">
            <button onClick={addInput} className="share">
              paylaş
            </button>
          </div>
        </div>
      </div>
      {beachComment.map((item) => {
        return <BeachCommentItem key={item.id} item={item} />;
      })}
    </>
  );
}