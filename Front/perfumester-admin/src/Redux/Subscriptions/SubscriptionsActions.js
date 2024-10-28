import axios from 'axios';
import { SubscriptionsAction } from './SubscriptionsReducer';
import { subscriptions } from '../../Shared/Subscriptions';

export const getSubscriptions = (email, password) => async (dispatch) => {
  try {
    dispatch(SubscriptionsAction.GetSubscriptionsRequest());
    const response = subscriptions;
    dispatch(SubscriptionsAction.GetSubscriptionsSuccess(response));
  } catch (error) {
    dispatch(SubscriptionsAction.GetSubscriptionsFailure(error.message));
    alert(error.message);
  }
};
