import { FormEvent, Fragment, useState } from 'react';
import { AppSettings, Stars } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CommentData, Offer } from '../../types/types';
import { postComment } from '../../store/comments/thunks';
import { getPostingStatus } from '../../store/comments/selectors';

type ReviewFormProps = {
  offerId: Offer['id'];
}

function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const defaultReview = {rating: AppSettings.DefaultRating, comment: '', offerId: offerId};
  const [review, setReview] = useState<CommentData>(defaultReview);
  const onRatingChange = (evt: React.FormEvent): void => {
    if (evt.target instanceof HTMLInputElement) {
      setReview({...review, rating: Number(evt.target.value)});
    }
  };
  const onTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>): void => setReview({...review, comment: evt.target.value});
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (review.rating !== null && review.comment !== null) {
      dispatch(postComment(review))
        .unwrap()
        .then(() => {
          setReview({...review, ...defaultReview});
        });
    }
  };
  const isPosting = useAppSelector(getPostingStatus);
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Stars.map((star) => (
          <Fragment key={star.value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star.value}
              id={`${star.value}-stars`}
              type="radio"
              onChange={onRatingChange}
              required
              disabled={isPosting}
              checked={(star.value === review.rating)}
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
        minLength={50}
        maxLength={300}
        onChange={onTextChange}
        value={review.comment}
        disabled={isPosting}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!(review.rating > 0 && review.comment.length > 50 && review.comment.length <= 300 && !isPosting)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
