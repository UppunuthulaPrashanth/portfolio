import React from "react";
import "../assets/css/profile.css";
import profpic from "../assets/images/rounded.png"

export default function Profile() {
  return (
    <>
    <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active">profile</li>
        </ol>
      </nav>
    <div className="card">
      <div className="row mb-3">
        <div className="col-lg-4">
          <div className="profile-card-4 z-depth-3">
            <div className="card">
              <div className="card-body text-center bg-primary rounded-top">
                <div className="user-box">
                  <img
                    src={profpic}
                    alt="user avatar"
                  />
                </div>
                <h5 className="mb-1 text-white">Uppunuthula Prashanth</h5>
                <h6 className="text-light">Fullstack Developer</h6>
              </div>
              <div className="card-body">
                <ul className="list-group shadow-none">
                  <li className="list-group-item">
                    <div className="list-icon">
                      <i className="fa fa-phone-square"></i>
                    </div>
                    <div className="list-details">
                      <span>+91 957 334 6036</span>
                      {/* <small>Mobile Number</small> */}
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-icon">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <div className="list-details">
                      <span>hellopra58@gmail.com</span>
                      {/* <small>Email Address</small> */}
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-icon">
                      <i className="fa fa-globe"></i>
                    </div>
                    <div className="list-details">
                      <span>www.prashanthgoud.com</span>
                      {/* <small>Website Address</small> */}
                    </div>
                  </li>
                </ul>
                {/* <div className="row text-center mt-4">
                  <div className="col p-2">
                    <h4 className="mb-1 line-height-5">23</h4>
                    <small className="mb-0 font-weight-bold">Projects</small>
                  </div>
                  <div className="col p-2">
                    <h4 className="mb-1 line-height-5">1.2k</h4>
                    <small className="mb-0 font-weight-bold">Followers</small>
                  </div>
                  <div className="col p-2">
                    <h4 className="mb-1 line-height-5">9.1k</h4>
                    <small className="mb-0 font-weight-bold">Views</small>
                  </div>
                </div> */}
              </div>
              <div className="card-footer text-center">
                <a
                  href="javascript:void()"
                  className="btn-social btn-facebook waves-effect waves-light m-1"
                >
                  <i className="fa fa-github"></i>
                </a>
                <a
                  href="javascript:void()"
                  className="btn-social btn-google-plus waves-effect waves-light m-1"
                >
                  <i className="fa fa-google-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card z-depth-3">
            <div className="card-body">
              <ul className="nav nav-pills nav-pills-primary nav-justified">
                <li className="nav-item">
                  <a
                    href="javascript:void();"
                    data-target="#profile"
                    data-toggle="pill"
                    className="nav-link active show"
                  >
                    <i className="icon-user"></i>{" "}
                    <span className="hidden-xs">Profile</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void();"
                    data-target="#messages"
                    data-toggle="pill"
                    className="nav-link"
                  >
                    <i className="icon-envelope-open"></i>{" "}
                    <span className="hidden-xs">Workspace</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void();"
                    data-target="#edit"
                    data-toggle="pill"
                    className="nav-link"
                  >
                    <i className="icon-note"></i>{" "}
                    <span className="hidden-xs"></span>
                  </a>
                </li>
              </ul>
              <div className="tab-content p-3">
                <div className="tab-pane active show" id="profile">
                  <h5 className="mb-3">User Profile</h5>
                  <div className="row">
                    <div className="col-md-8 offset-2">
                      <h6>About</h6>
                      <p>Fullstack, MERN stack Developer</p>
                      <h6>Hobbies</h6>
                      <p>
                        Indie music, skiing and hiking. I love the great
                        outdoors.
                      </p>
                    </div>
                    <div className="col-md-10 offset-1 Tech">
                      <h5>Tech stack</h5>

                      <div className="row mb-2">
                      <div className="col-md-4">
                      <h6>Front end </h6>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                        &nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;
                      </a> <br/>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                       &nbsp;&nbsp;&nbsp;&nbsp; CSS &nbsp;&nbsp;&nbsp;&nbsp;
                      </a><br/>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                        Bootstrap
                      </a><br/>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                        Javascript&nbsp;
                      </a><br/>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                        &nbsp;React js&nbsp;&nbsp;&nbsp;
                      </a>
                      </div>
                      <div className="col-md-4">
                      <h6>Backend & DB</h6>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                        Node js & Express js
                      </a> <br/>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;PHP & Laravel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </a> <br/>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MongoDB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </a> <br/>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mysql&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </a> <br/>
                      </div>
                      <div className="col-md-4">
                      <h6>Cloud</h6>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                        AWS EC2 Instance
                      </a>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                        &nbsp;&nbsp;&nbsp;AWS Route 53&nbsp;&nbsp;&nbsp;
                      </a>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AWS S3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </a>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                       &nbsp;AWS Cloudfront&nbsp;
                      </a>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                        AWS Codecommit
                      </a>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                        Cpanel
                      </a>
                      <a
                        href="javascript:void();"
                        className="badge badge-dark badge-pill"
                      >
                        Git hub
                      </a>
                      </div>

                      </div>
                      
                      
                      
                      
                      {/* <hr />
                      <span className="badge badge-primary">
                        <i className="fa fa-user"></i> 900 Followers
                      </span>
                      <span className="badge badge-success">
                        <i className="fa fa-cog"></i> 43 Forks
                      </span>
                      <span className="badge badge-danger">
                        <i className="fa fa-eye"></i> 245 Views
                      </span> */}
                    </div>
                    <div className="col-md-12 mt-4">
                      <span className="mt-2 ">
                      </span>
                      
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="messages">
                  <div className="alert alert-info alert-dismissible" role="alert">
                    <button type="button" className="close" data-dismiss="alert">
                      ×
                    </button>
                    <div className="alert-icon">
                      <i className="icon-info"></i>
                    </div>
                    <div className="alert-message">
                      <span>
                        <strong>Info!</strong> Lorem Ipsum is simply dummy text.
                      </span>
                    </div>
                  </div>
                  <table className="table table-hover table-striped">
                    <tbody>
                      <tr>
                        <td>
                          <span className="float-right font-weight-bold">
                            3 hrs ago
                          </span>{" "}
                          Here is your a link to the latest summary report from
                          the..
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="float-right font-weight-bold">
                            Yesterday
                          </span>{" "}
                          There has been a request on your account since that
                          was..
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="float-right font-weight-bold">9/10</span>{" "}
                          Porttitor vitae ultrices quis, dapibus id dolor. Morbi
                          venenatis lacinia rhoncus.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="float-right font-weight-bold">9/4</span>{" "}
                          Vestibulum tincidunt ullamcorper eros eget luctus.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="float-right font-weight-bold">9/4</span>{" "}
                          Maxamillion ais the fix for tibulum tincidunt
                          ullamcorper eros.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane" id="edit">
                  <form>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        First name
                      </label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text" value="Mark" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Last name
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          value="Jhonsan"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Email
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="email"
                          value="mark@example.com"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Change profile
                      </label>
                      <div className="col-lg-9">
                        <input className="form-control" type="file" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Website
                      </label>
                      <div className="col-lg-9">
                        <input className="form-control" type="url" value="" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Address
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          value=""
                          placeholder="Street"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label"></label>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="text"
                          value=""
                          placeholder="City"
                        />
                      </div>
                      <div className="col-lg-3">
                        <input
                          className="form-control"
                          type="text"
                          value=""
                          placeholder="State"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Username
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          value="jhonsanmark"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Password
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="password"
                          value="11111122333"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Confirm password
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="password"
                          value="11111122333"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label"></label>
                      <div className="col-lg-9">
                        <input
                          type="reset"
                          className="btn btn-secondary"
                          value="Cancel"
                        />
                        <input
                          type="button"
                          className="btn btn-primary"
                          value="Save Changes"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
