/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BannerSlider from 'components/BannerSlider/BannerSlider';

function StatisticPage() {
  const dispatch = useDispatch();
  const bookingState = useSelector((state) => state.Booking);

  return (
    <section className="section">
      <BannerSlider title="Profile" />

      <div className="section-body">
        <div className="row">
          <div className="col-12">
            <h4 className="dashboard_title">Today</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>Total Booking</h4>
                </div>
                <div className="card-body">
                  today_total_order
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Awaiting Booking</h4>
                </div>
                <div className="card-body">
                  today_total_awating_order
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Active Booking</h4>
                </div>
                <div className="card-body">
                  today_approved_order
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Complete Booking</h4>
                </div>
                <div className="card-body">
                  today_complete_order
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-success">
                <i className="fas fa-dollar-sign" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Total Earnings</h4>
                </div>
                <div className="card-body">
                  đ
                  today_total_earning
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-success">
                <i className="fas fa-dollar-sign" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Withdraw Request</h4>
                </div>
                <div className="card-body">
                  đ
                  today_withdraw_request
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <h4 className="dashboard_title">user.This Month</h4>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Total Booking</h4>
                </div>
                <div className="card-body">
                  monthly_total_order
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Awaiting Booking</h4>
                </div>
                <div className="card-body">
                  monthly_total_awating_order
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Active Booking</h4>
                </div>
                <div className="card-body">
                  monthly_approved_order
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Complete Booking</h4>
                </div>
                <div className="card-body">
                  monthly_complete_order
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-warning">
                <i className="fas fa-dollar-sign" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Total Earnings</h4>
                </div>
                <div className="card-body">
                  đ
                  monthly_total_earning
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-warning">
                <i className="fas fa-dollar-sign" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Withdraw Request</h4>
                </div>
                <div className="card-body">
                  đ
                  monthly_withdraw_request
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <h4 className="dashboard_title">user.This Year</h4>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Total Booking</h4>
                </div>
                <div className="card-body">
                  yearly_total_order
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Awaiting Booking</h4>
                </div>
                <div className="card-body">
                  yearly_total_awating_order
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Active Booking</h4>
                </div>
                <div className="card-body">
                  yearly_approved_order
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Complete Booking</h4>
                </div>
                <div className="card-body">
                  yearly_complete_order
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-danger">
                <i className="fas fa-dollar-sign" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Total Earnings</h4>
                </div>
                <div className="card-body">
                  đ
                  yearly_total_earning
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-danger">
                <i className="fas fa-dollar-sign" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Withdraw Request</h4>
                </div>
                <div className="card-body">
                  đ
                  yearly_withdraw_request
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <h4 className="dashboard_title">user.Total</h4>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Total Booking</h4>
                </div>
                <div className="card-body">
                  total_total_order
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Awaiting Booking</h4>
                </div>
                <div className="card-body">
                  total_total_awating_order
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Active Booking</h4>
                </div>
                <div className="card-body">
                  total_approved_order
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Complete Booking</h4>
                </div>
                <div className="card-body">
                  total_complete_order
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-success">
                <i className="fas fa-dollar-sign" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Total Earnings</h4>
                </div>
                <div className="card-body">
                  đ
                  total_total_earning
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-success">
                <i className="fas fa-dollar-sign" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Withdraw Request</h4>
                </div>
                <div className="card-body">
                  đ
                  total_withdraw_request
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-success">
                <i className="fas fa-th-large" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>user.Service</h4>
                </div>
                <div className="card-body">
                  total_service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default StatisticPage;
