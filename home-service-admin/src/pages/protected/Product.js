import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { actionDeleteService, actionGetAllServices } from 'store/actions';
import { openModal } from 'features/common/modalSlice';
import { MODAL_BODY_TYPES } from 'utils/globalConstantUtil';

import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import ArrowPathIcon from '@heroicons/react/24/outline/ArrowPathIcon';
import Pagination from 'components/Pagination/Pagination';

function InternalPage(){
    const dispatch = useDispatch();
    const products = useSelector((state) => state.Admin.services);

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedStatus, setSelectedStatus] = useState('');

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleUpdateProduct = (couponId) => {
        const selectedProduct = products.content.find((product) => product.id === couponId);

        dispatch(
            openModal({
                title: 'Update Service',
                bodyType: MODAL_BODY_TYPES.UPDATE_PRODUCT,
                extraObject: selectedProduct,
                size: 'lg',
            })
        );
    };

    const handleDeleteService = (couponId) => {
        dispatch(actionDeleteService({serviceId: couponId}))
    };

    const handleStatusChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedStatus(selectedValue);
        dispatch(actionGetAllServices({ status: selectedValue }));
    };

    useEffect(() => {
    dispatch(setPageTitle({ title: 'Services' }));
    dispatch(actionGetAllServices({pageNumber: currentPage - 1, size: 5}));
    }, [dispatch, currentPage]);

    return (
    <div className="h-4/5 bg-base-200">
        <div className="text-accent">
        <div className="max-w-md">
            <div >
                <label className="label">Filter by Status:</label>
                <select
                    className="select select-bordered mb-4"
                    value={selectedStatus}
                    onChange={handleStatusChange}
                >
                    <option value="">All</option>
                    <option value="APPROVED">Approved</option>
                    <option value="APPROVING">Approving</option>
                    <option value="UNAPPROVED">Unapproved</option>
                    <option value="DISABLE">Disable</option>
                </select>
            </div>

            <table className="table w-full mt-4">
            <thead>
                <tr>
                <th style={{ position: 'static', left: 'auto' }}>Name</th>
                <th>Thumbnail</th>
                <th>Open Time</th>
                <th>Close Time</th>
                <th>Works</th>
                <th>Category</th>
                <th>Avg Rating</th>
                </tr>
            </thead>
            <tbody>
                {products && products.content ? (
                products.content.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>
                        <img src={product.thumbnail} alt={`Product ${product.name}`} style={{ width: '50px', height: '50px' }} />
                        </td>
                        <td>{product.openTime}</td>
                        <td>{product.closeTime}</td>
                        <td>
                            <ul>
                                {product.works.map((work) => (
                                <li key={work.id}>
                                    {work.description} - {work.unit} - {work.pricePerUnit}
                                </li>
                                ))}
                            </ul>
                        </td>
                        <td>{product.category.categoryName}</td>
                        <td>{product.avgRating}</td>
                        <td>
                        <button className="icon-btn" onClick={() => handleUpdateProduct(product.id)}>
                            <ArrowPathIcon className="h-5 w-5" />
                        </button>
                        <button className="icon-btn" onClick={() => handleDeleteService(product.id)}>
                            <TrashIcon className="h-5 w-5" />
                        </button>
                        </td>
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan="4">No Service found</td>
                </tr>
                )}
            </tbody>
            </table>

            <Pagination
            totalItems={products.totalElements}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
        </div>
    </div>
    );
}

export default InternalPage