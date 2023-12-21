import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { actionDeleteCustomer, actionGetAllCustomers } from 'store/actions'
import { openModal } from 'features/common/modalSlice';
import { MODAL_BODY_TYPES } from 'utils/globalConstantUtil';

import ArrowPathIcon from '@heroicons/react/24/outline/ArrowPathIcon';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';

function InternalPage(){
    const dispatch = useDispatch()
    const customers = useSelector((state) => state.Admin.customers);

    const handleUpdateProduct = (couponId) => {
        const selectedProduct = customers.content.find((product) => product.id === couponId);

        dispatch(
            openModal({
                title: 'Update Customer Profile',
                bodyType: MODAL_BODY_TYPES.UPDATE_PRODUCT,
                extraObject: selectedProduct,
                size: 'lg',
            })
        );
    };

    const handleDeleteUser = (couponId) => {
        dispatch(actionDeleteCustomer({id: couponId}))
    };

    useEffect(() => {
        dispatch(setPageTitle({ title : "Customer"}))
        dispatch(actionGetAllCustomers())
    }, [dispatch])
    
    return(
        <div className="h-4/5 bg-base-200">
            <div className="text-accent">
                <div className="max-w-md">

                <table className="table w-full">
                        <thead>
                            <tr>
                            <th style={{ position: 'static', left: 'auto' }}>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Avatar</th>
                            <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers && customers.content ? (
                                customers.content.map((customer) => (
                                <tr key={customer.email}>
                                    <td>{customer.firstName}</td>
                                    <td>{customer.lastName}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td>
                                        {customer.avatar ? (
                                        <img src={customer.avatar} alt={`Avatar of ${customer.firstName}`} style={{ width: '50px', height: '50px' }} />
                                        ) : (
                                        'No Avatar'
                                        )}
                                    </td>
                                    <td>
                                        {customer.addresses.map((address) => (
                                        <div key={address.id}>
                                            {address.number}, {address.street}, {address.ward}, {address.district}, {address.city}
                                        </div>
                                        ))}
                                    </td>
                                    <td>
                                        <button className="icon-btn" onClick={() => handleUpdateProduct(customer.id)}>
                                            <ArrowPathIcon className="h-5 w-5" />
                                        </button>
                                        <button className="icon-btn" onClick={() => handleDeleteUser(customer.id)}>
                                        <TrashIcon className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                                ))
                            ) : (
                                <tr>
                                <td colSpan="2">No customers found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default InternalPage