import dayjs from 'dayjs';
import { OFFER_COMMENTS_COUNT } from '../../const';
import { Comments } from '../../types/types';
import ReviewItem from '../review-item/review-item';

type ReviewsListProps = {
  comments: Comments;
}

function ReviewsList({comments}: ReviewsListProps): JSX.Element {
  const sortedComments = [...comments].sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));
  return (
    <ul className="reviews__list">
      {sortedComments.slice(0, OFFER_COMMENTS_COUNT).map((comment) => <ReviewItem key={comment.id} comment={comment}/>)}
    </ul>
  );
}

export default ReviewsList;
