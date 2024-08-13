import { FormEvent, Fragment, useState } from 'react';
import { Stars } from '../../const';
import { useAppDispatch } from '../../hooks';
import { CommentData, Offer } from '../../types/types';
import { postComment } from '../../store/comments/thunks';

type ReviewFormProps = {
  offerId: Offer['id'];
}

function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [review, setReview] = useState<CommentData>({rating: 0, comment: '', offerId: offerId});
  const onRatingChange = (evt: React.FormEvent): void => {
    if (evt.target instanceof HTMLInputElement) {
      setReview({...review, rating: Number(evt.target.value)});
    }
  };
  const onTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>): void => setReview({...review, comment: evt.target.value});
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (review.rating !== null && review.comment !== null) {
      dispatch(postComment(review));
      setReview({...review, comment: '', rating: 0});
    }
  };
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Stars.map((star) => (
          <Fragment key={star.value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              // TODO: получать значение рейтинга из state
              value={star.value}
              id={`${star.value}-stars`}
              type="radio"
              onChange={onRatingChange}
            >
            </input>
            <label
              htmlFor={`${star.value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={star.title}
            >
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
        value={review.comment}
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
