import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubscriptions } from '../../Redux/Subscriptions/SubscriptionsActions';
import SubscriptionsDataTable from './DataTable/subscriptionsDataTable';

const Subscriptions = () => {
  const dispatch = useDispatch();
  const { subscriptions } = useSelector((state) => state.subscriptionsReducer);

  useEffect(() => {
    dispatch(getSubscriptions());
  }, [dispatch]);

  return (
    <div className="w-full p-14">
      <div>
        <h1 className="text-4xl">Subscriptions</h1>
        <div className="bg-black mt-10 p-10 rounded-lg">
          <SubscriptionsDataTable dataEntered={subscriptions} />
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
