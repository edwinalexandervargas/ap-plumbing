import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const q = query(collection(db, "reviews"), orderBy("date", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setReviews(data);
      setLoading(false);
    };
    fetchReviews();
  }, []);

  const filteredReviews =
    filter === 0 ? reviews : reviews.filter((r) => r.rating === filter);

  const submitReview = async (e) => {
    e.preventDefault();
    if (!name || !comment || rating === 0) return;
    const newReview = {
      name,
      rating,
      comment,
      date: new Date().toISOString().split("T")[0],
    };
    await addDoc(collection(db, "reviews"), newReview);
    setReviews([newReview, ...reviews]);
    setName("");
    setComment("");
    setRating(0);
  };

  return (
    <section id="testimonials">
      <div className="container">
        <div className="row">
          <h1 className="section__title">Reviews</h1>
          <p className="section__para">See what our customers say</p>

          {/* Filter */}
          <div className="reviews__filter">
            <button
              className={`filter__btn ${filter === 0 ? "filter--active" : ""}`}
              onClick={() => setFilter(0)}
            >
              All
            </button>
            {[5, 4, 3, 2, 1].map((star) => (
              <button
                key={star}
                className={`filter__btn ${filter === star ? "filter--active" : ""}`}
                onClick={() => setFilter(star)}
              >
                {star} ⭐
              </button>
            ))}
          </div>

          {/* Reviews */}
          {loading ? (
            <p className="reviews__empty">Loading reviews...</p>
          ) : (
            <div className="reviews__container">
              {filteredReviews.length === 0 ? (
                <p className="reviews__empty">
                  No reviews for this rating yet.
                </p>
              ) : (
                filteredReviews.map((review) => (
                  <div className="review__card" key={review.id}>
                    <div className="review__stars">
                      {new Array(5).fill(0).map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          className={
                            i < review.rating ? "star--filled" : "star--empty"
                          }
                        />
                      ))}
                    </div>
                    <p className="review__comment">"{review.comment}"</p>
                    <p className="review__name">— {review.name}</p>
                    <p className="review__date">{review.date}</p>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Add Review Form */}
          <div className="review__form--wrapper">
            <h2 className="review__form--title">Leave a Review</h2>
            <form onSubmit={submitReview} className="review__form">
              <div
                className="review__stars--select"
                onMouseLeave={() => setHover(0)}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <FontAwesomeIcon
                    key={star}
                    icon={faStar}
                    className={
                      star <= (hover || rating) ? "star--filled" : "star--empty"
                    }
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                  />
                ))}
              </div>
              <input
                type="text"
                placeholder="Your Name"
                className="contact__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <textarea
                placeholder="Your Review"
                className="contact__textarea"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
              <button type="submit" className="btn">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
