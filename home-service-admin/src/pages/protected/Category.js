import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import { actionGetAllCategory } from 'store/actions';
import { openModal } from 'features/common/modalSlice';
import { MODAL_BODY_TYPES } from 'utils/globalConstantUtil';

import ArrowPathIcon from '@heroicons/react/24/outline/ArrowPathIcon';
import Pagination from 'components/Pagination/Pagination';

function InternalPage() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.Category.categories);

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * 5;
    const indexOfFirstItem = indexOfLastItem - 5;
    const currentData = categories?.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleUpdateProduct = (couponId) => {
        const selectedProduct = categories.find((product) => product.id === couponId);

        dispatch(
            openModal({
                title: 'Update Category',
                bodyType: MODAL_BODY_TYPES.UPDATE_CATEGORY,
                extraObject: selectedProduct,
                size: 'lg',
            })
        );
    };

    useEffect(() => {
        dispatch(setPageTitle({ title: 'Category' }));
        dispatch(actionGetAllCategory());
    }, [dispatch]);

    const handleOpenModal = () => {
        dispatch(openModal({title : "Add Category", 
        bodyType : MODAL_BODY_TYPES.ADD_CATEGORY}))
    };

    return (
        <div className="h-4/5 bg-base-200">
        <div className="text-accent">
            <div className="max-w-md">
            <button className="btn" onClick={handleOpenModal}>
                Add Category
            </button>

            <table className="table w-full mt-4">
                <thead>
                <tr>
                    <th style={{ position: 'static', left: 'auto' }}>Name</th>
                    <th>Number of Services</th>
                    <th>Thumbnail</th>
                </tr>
                </thead>
                <tbody>
                {currentData ? (
                    currentData.map((category) => (
                    <tr key={category.id}>
                        <td>{category.categoryName}</td>
                        <td>{category.numberService}</td>
                        <td>
                            <img src={category.thumbnail} alt={`Category ${category.categoryName}`} style={{ width: '50px', height: '50px' }} />
                        </td>
                        <td>
                        <button className="icon-btn" onClick={() => handleUpdateProduct(category.id)}>
                            <ArrowPathIcon className="h-5 w-5" />
                        </button>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan="2">No categories found</td>
                    </tr>
                )}
                </tbody>
            </table>

            <Pagination
                totalItems={categories?.length}
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />
            </div>
        </div>
        </div>
    );
}

export default InternalPage;
