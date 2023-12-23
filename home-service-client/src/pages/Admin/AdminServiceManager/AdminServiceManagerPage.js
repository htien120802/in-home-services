import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionApproveOrUnapproveRegisterService } from 'store/actions';

function AdminServiceManagerPage() {
  const serviceRequests = useSelector((state) => state.serviceRequests);
  const dispatch = useDispatch();

  const approveRequest = (requestId) => {
    dispatch(actionApproveOrUnapproveRegisterService({ serviceId: requestId, approve: true }));
  };

  const declineRequest = (requestId) => {
    dispatch(actionApproveOrUnapproveRegisterService({ serviceId: requestId, approve: false }));
  };

  return (
    <div>
      <h2>Admin Service Manager</h2>

      <h3>Service Requests</h3>
      <ul>
        {serviceRequests.map((request) => (
          <li key={request.id}>
            {request.providerName}
            {' '}
            requests to create &quot;
            {request.serviceName}
            &quot;
            <button type="button" onClick={() => approveRequest(request.id)}>Approve</button>
            <button type="button" onClick={() => declineRequest(request.id)}>Decline</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminServiceManagerPage;
