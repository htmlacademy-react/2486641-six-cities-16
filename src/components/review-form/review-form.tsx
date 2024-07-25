import { Fragment, useState } from 'react';
import { Stars } from '../../const';

function ReviewForm(): JSX.Element {
  const [review, setReview] = useState({rating: 0, text: ''});
  const onRatingChange = (evt: React.FormEvent<HTMLInputElement>): void => setReview({...review, rating: evt.target.value as number});
  const onTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>): void => setReview({...review, text: evt.target.value});
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={onRatingChange}>
        {Stars.map((star) => (
          <Fragment key={star}>
            <input className="form__rating-input visually-hidden" name="rating" value={star} id={`${star}-stars`} type="radio"></input>
            <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onTextChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
