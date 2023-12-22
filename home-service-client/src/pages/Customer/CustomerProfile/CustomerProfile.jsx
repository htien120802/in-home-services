import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  actionGetCustomerProfile, actionGetCustomerBookings, actionLogout,
} from 'store/actions';

import BannerSlider from 'components/BannerSlider/BannerSlider';
import Dashboard from './Dashboard/Dashboard';
import Order from './Order/Order';
import ChangePassword from './ChangePassword/ChangePassword';
import LogoutModal from './LogoutModal/LogoutModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import UpdateAvatarModal from './Dashboard/UpdateAvatarModal/UpdateAvatarModal';

function CustomerProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookingState = useSelector((state) => state.Booking);
  const customerState = useSelector((state) => state.Customer);

  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [isEditAvatarModalOpen, setEditAvatarModalOpen] = useState(false);

  const closeAvatarModal = () => {
    setEditAvatarModalOpen(false);
  };

  const tabs = [
    {
      id: 'dashboard', icon: 'fas fa-user', label: 'Dashboard', content: <Dashboard customerState={customerState} bookingState={bookingState} />,
    },
    {
      id: 'order', icon: faShoppingBag, label: 'Order', content: <Order bookingState={bookingState} />,
    },
    {
      id: 'changePassword', icon: 'fas fa-user-lock', label: 'Change Password', content: <ChangePassword />,
    },
    {
      id: 'logout', icon: 'fas fa-sign-out-alt', label: 'Logout',
    },
  ];

  const handleTabClick = (tabId) => {
    if (tabId === 'logout') {
      setLogoutModalOpen(true);
    } else {
      setActiveTab(tabId);
    }
  };

  const closeModal = () => {
    setLogoutModalOpen(false);
  };

  const callbackLogoutSuccess = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleLogout = () => {
    dispatch(actionLogout({ callback: callbackLogoutSuccess }));

    setLogoutModalOpen(false);
  };

  useEffect(() => {
    dispatch(actionGetCustomerProfile());
    dispatch(actionGetCustomerBookings());
  }, []);

  return (
    <>
      <BannerSlider title="Profile" />

      <section className="wsus__dashboard mt_90 xs_mt_60 mb_100 xs_mb_70">
        <div className="container">
          <div className="wsus__dashboard_area">
            <div className="row">
              <div className="col-xl-3 col-lg-4">
                <div className="wsus__dashboard_menu">
                  <div className="dasboard_header d-flex flex-wrap align-items-center">
                    <a href="javascript:;" onClick={() => setEditAvatarModalOpen(true)}>
                      <img
                        src={customerState?.customer?.avatar || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=mp'}
                        alt="user"
                        className="img-fluid w-100 user_avatar"
                      />
                    </a>
                    <div className="text">
                      <h2>{customerState?.customer?.name}</h2>
                    </div>
                  </div>
                  <div
                    className="nav flex-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    {tabs.map((tab) => (
                      <button
                        type="button"
                        key={tab.id}
                        className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab.id)}
                      >
                        <span>{typeof tab.icon === 'string' ? <i className={tab.icon} /> : <FontAwesomeIcon icon={tab.icon} />}</span>
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="wsus__dashboard_content">
                  <div className="tab-content" id="v-pills-tabContent">
                    {tabs.map((tab) => (
                      <div
                        key={tab.id}
                        className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
                        id={`v-pills-${tab.id}`}
                        role="tabpanel"
                        aria-labelledby={`v-pills-${tab.id}-tab`}
                      >
                        {tab.content}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <LogoutModal
          isOpen={isLogoutModalOpen}
          onClose={closeModal}
          handleLogout={handleLogout}
          firstName={customerState?.customer?.firstName}
        />
        <UpdateAvatarModal
          isOpen={isEditAvatarModalOpen}
          onClose={closeAvatarModal}
          customerState={customerState}
        />
      </section>
    </>
  );
}

export default CustomerProfile;
