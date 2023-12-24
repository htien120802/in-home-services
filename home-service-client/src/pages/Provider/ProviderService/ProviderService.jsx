import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BannerSlider from 'components/BannerSlider/BannerSlider';
import { actionDeleteProviderService, actionEnableOrDisableProviderService, actionGetAllProviderServices } from 'store/actions';
import AddServiceModal from '../ProviderProfile/AddServiceModal/AddServiceModal';
import EditServiceModal from '../ProviderProfile/EditServiceModal/EditServiceModal';

function ProviderDashboard() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.Services.providerServices);

  const [isAddServiceModalOpen, setAddServiceModalOpen] = useState(false);
  const [isEditServiceModalOpen, setEditServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({});

  const closeAddServiceModal = () => {
    setAddServiceModalOpen(false);
  };

  const closeEditServiceModal = () => {
    setEditServiceModalOpen(false);
    setSelectedService({});
  };

  const openEditServiceModal = (service) => {
    setSelectedService(service);
    setEditServiceModalOpen(true);
  };

  const deleteService = (id) => {
    dispatch(actionDeleteProviderService({ id }));
  };

  const disableService = (id) => {
    dispatch(actionEnableOrDisableProviderService({ serviceId: id, actionType: 'disable' }));
  };

  const enableService = (id) => {
    dispatch(actionEnableOrDisableProviderService({ serviceId: id, actionType: 'enable' }));
  };

  useEffect(() => {
    dispatch(actionGetAllProviderServices());
  }, []);

  return (
    <div className="main-content">
      <section className="section">
        <BannerSlider title="Services" />

        <div className="section-body p-5">
          <a
            href="javascript:;"
            onClick={() => setAddServiceModalOpen(true)}
            className="btn btn-primary"
          >
            <i className="fas fa-plus" />
            {' '}
            Add New
          </a>

          <div className="row mt-4">
            {services && services.length > 0 ? (
              services.map((service) => (
                <div key={service.id} className="col-12">
                  <div className="card service_card">
                    <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
                      <img
                        className="service_image"
                        src={service.thumbnail}
                        alt={service.name}
                        style={{ height: '300px', width: '300px' }}
                      />
                      <div className="service_detail">
                        <h4>{service.name}</h4>
                        <h6>
                          Price:
                          {' '}
                          {service.works.reduce((total, work) => total + work.pricePerUnit, 0)}
                        </h6>
                        <p>
                          Category:
                          {' '}
                          {service.category.categoryName}
                        </p>

                        <div>
                          <h5>Works:</h5>
                          <ul>
                            {service.works.map((work) => (
                              <li key={work.id}>
                                {work.description}
                                {' '}
                                -
                                {' '}
                                {work.pricePerUnit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <p>
                          Average Rating:
                          {' '}
                          {service.avgRating}
                        </p>

                        <a
                          href="javascript:;"
                          onClick={() => openEditServiceModal(service)}
                          className="btn btn-primary btn-sm"
                        >
                          <i className="fas fa-edit" />
                          {' '}
                          Edit
                        </a>

                        <a
                          href="javascript:;"
                          onClick={() => deleteService(service.id)}
                          className="btn btn-danger btn-sm ml-2"
                        >
                          <i className="fas fa-trash" />
                          {' '}
                          Remove
                        </a>

                        {service.status === 'APPROVING' && (
                        <a href="javascript:;" className="btn btn-warning btn-sm ml-2">
                          <i className="fas fa-clock" />
                          {' '}
                          Approving
                        </a>
                        )}

                        {service.status === 'APPROVED' && (
                        <a
                          href="javascript:;"
                          className="btn btn-success btn-sm ml-2"
                          onClick={() => disableService(service.id)}
                        >
                          <i className="fas fa-eye" />
                          {' '}
                          Disable
                        </a>
                        )}

                        {service.status === 'DISABLE' && (
                        <a
                          href="javascript:;"
                          className="btn btn-secondary btn-sm ml-2"
                          onClick={() => enableService(service.id)}
                        >
                          <i className="fas fa-eye-slash" />
                          {' '}
                          Enable
                        </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center text-danger">
                <h4>Service not found!</h4>
              </div>
            )}
          </div>
        </div>
      </section>

      <AddServiceModal isOpen={isAddServiceModalOpen} onClose={closeAddServiceModal} />
      <EditServiceModal isOpen={isEditServiceModalOpen} onClose={closeEditServiceModal} serviceDetails={selectedService} />
    </div>
  );
}

export default ProviderDashboard;
