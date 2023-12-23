import React from 'react';

function AdminDashboard() {
  return (
    <section className="section">
      <div className="section-header">
        <h1>admin.Dashboard</h1>
      </div>

      <div className="section-body">
        <div className="row">
          <div className="col-12">
            <h4 className="dashboard_title">admin.Today</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.Total Booking</h4>
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
                  <h4>admin.Awaiting Booking</h4>
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
                  <h4>admin.Active Booking</h4>
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
                  <h4>admin.Complete Booking</h4>
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
                  <h4>admin.Total Earnings</h4>
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
                  <h4>admin.Withdraw Request</h4>
                </div>
                <div className="card-body">
                  đ
                  today_withdraw_request
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-success">
                <i className="fas fa-undo" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.Refund Request</h4>
                </div>
                <div className="card-body">
                  đ
                  today_total_refund
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-success">
                <i className="fas fa-users" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.New Client/Provider</h4>
                </div>
                <div className="card-body">
                  today_users
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <h4 className="dashboard_title">admin.This Month</h4>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.Total Booking</h4>
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
                  <h4>admin.Awaiting Booking</h4>
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
                  <h4>admin.Active Booking</h4>
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
                  <h4>admin.Complete Booking</h4>
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
                  <h4>admin.Total Earnings</h4>
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
                  <h4>admin.Withdraw Request</h4>
                </div>
                <div className="card-body">
                  đ
                  monthly_withdraw_request
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-warning">
                <i className="fas fa-undo" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.Refund Request</h4>
                </div>
                <div className="card-body">
                  đ
                  monthly_total_refund
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-warning">
                <i className="fas fa-users" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.New Client/Provider</h4>
                </div>
                <div className="card-body">
                  monthly_users
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <h4 className="dashboard_title">admin.This Year</h4>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.Total Booking</h4>
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
                  <h4>admin.Awaiting Booking</h4>
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
                  <h4>admin.Active Booking</h4>
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
                  <h4>admin.Complete Booking</h4>
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
                  <h4>admin.Total Earnings</h4>
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
                  <h4>admin.Withdraw Request</h4>
                </div>
                <div className="card-body">
                  đ
                  yearly_withdraw_request
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-danger">
                <i className="fas fa-undo" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.Refund Request</h4>
                </div>
                <div className="card-body">
                  đ
                  yearly_total_refund
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-danger">
                <i className="fas fa-users" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.New Client/Provider</h4>
                </div>
                <div className="card-body">
                  yearly_users
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <h4 className="dashboard_title">admin.Total</h4>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.Total Booking</h4>
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
                  <h4>admin.Awaiting Booking</h4>
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
                  <h4>admin.Active Booking</h4>
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
                  <h4>admin.Complete Booking</h4>
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
                  <h4>admin.Total Earnings</h4>
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
                  <h4>admin.Withdraw Request</h4>
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
                <i className="fas fa-undo" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.Refund Request</h4>
                </div>
                <div className="card-body">
                  đ
                  total_total_refund
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-success">
                <i className="fas fa-users" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.New Client/Provider</h4>
                </div>
                <div className="card-body">
                  total_users
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-warning">
                <i className="fas fa-th-large" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.Service</h4>
                </div>
                <div className="card-body">
                  total_service
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-warning">
                <i className="fas fa-users" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.Providers</h4>
                </div>
                <div className="card-body">
                  total_providers
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-warning">
                <i className="fas fa-users" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.Client</h4>
                </div>
                <div className="card-body">
                  total_clients
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-warning">
                <i className="fas fa-th-large" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>admin.Blog</h4>
                </div>
                <div className="card-body">
                  total_blog
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
