import { Comments } from '../../types/types';
import ReviewItem from '../review-item/review-item';

type ReviewsListProps = {
  comments: Comments;
}

function ReviewsList({comments}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => <ReviewItem key={comment.id} comment={comment}/>)}
    </ul>
  );
}

export default ReviewsList;
