import React from "react";
import EventsUpdate from "./EventsUpdate";

const DonorsContent = () => {
  return (
    <div>
      <div>
        <div className="flash-message"> </div>
        <section className="banner inner_banner">
          <div className="container">
            <div className="innerbanner_text">
              <h2>Donors</h2>
            </div>
          </div>
        </section>
        <section className="banner_overlay_section">
          <div className="container">
            <section className="coumn_section">
              <div className="row">
                {/*                <div class="col-md-12">
                                    <img src="https://www.84kadvapatidar.com/img/front/coming_soon.png" />
                                </div>*/}
                <div className="col-md-8">
                  <form
                    action="donors.html"
                    method="POST"
                    name="family_list"
                    id="family_list"
                    role="search"
                  >
                    <div className="search_bar">
                      <div className="row">
                        <div className="col-md-12 no-padding">
                          <div className="col-md-6 col-sm-6">
                            <div className="select_bx">
                              <select
                                className="select"
                                name="event_id"
                                id="event_id"
                              >
                                <option value>Select Donation Type</option>
                                <option value={2}>
                                  Land Donors of 84 Sankul (11 Lakh)
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="my_input">
                              <input
                                name="search_text"
                                id="search_text"
                                type="text"
                                defaultValue
                                className="input"
                                placeholder="Search By Village Name, Donor Name"
                              />
                              <label className="fr_label no-padding" />
                            </div>
                          </div>
                        </div>
                        <div
                          className="clearfix"
                          style={{ margin: "10px 0px" }}
                        />
                        <div className="col-md-3 col-sm-3">
                          <a
                            href="/"
                            onclick="func_SearchGridData()"
                            id="search_donors"
                            className="search_btn"
                          >
                            Go
                          </a>
                          <a
                            href="/"
                            onclick="func_ResetGridData()"
                            className="search_btn"
                          >
                            Reset
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="member_list">
                      <div className="member_list">
                        <div className="member_box clearfix table-responsive">
                          <table className="table table-hover">
                            <colgroup>
                              <col width="10%" />
                              <col width="20%" />
                              <col width="50%" />
                              <col width="20%" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>Village Name</th>
                                <th>Donar Name</th>
                                <th>Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                id="event_detail"
                                className={11}
                                style={{ cursor: "pointer" }}
                              >
                                <th scope="row">1</th>
                                <td>Junagadh</td>
                                <td>ગીરીશભાઈ શિર</td>
                                <td>10000</td>
                              </tr>
                              <tr
                                id="event_detail"
                                className={10}
                                style={{ cursor: "pointer" }}
                              >
                                <th scope="row">2</th>
                                <td>Junagadh</td>
                                <td>રમેશભાઈ કોડાવલા</td>
                                <td>10000</td>
                              </tr>

                              <tr
                                id="event_detail"
                                className={3}
                                style={{ cursor: "pointer" }}
                              >
                                <th scope="row">3</th>
                                <td>Junagadh</td>
                                <td>ગીરીશભાઈ શિર</td>
                                <td>10000</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="pagination text-right"
                          style={{ float: "right", width: "100%" }}
                        ></div>
                      </div>
                      <div
                        className="pagination text-right"
                        style={{ float: "right", width: "100%" }}
                      ></div>
                    </div>
                    <input
                      type="hidden"
                      name="page"
                      id="page"
                      defaultValue={1}
                    />
                    <input
                      type="hidden"
                      name="limit"
                      id="limit"
                      defaultValue={20}
                    />
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="OrSaHJJEhrpZ1xWcS2R9zzPGFvWeljwPVe9cj8k0"
                    />
                  </form>
                </div>
                <div className="col-md-4">
                  <div className="side_bar">
                    <EventsUpdate />
                    {/* <div className="matrimonial_div">
                      <div className="title">Last Update  Matrimonial</div>
                      <div className="matrimonial_box">
                        <ul className="clearfix">
                          <li>
                            <img src="img/admin/family/1676565538_IMG_20230216_220317.jpg" alt="/"/>
                          </li>
                          <li>
                            <img src="img/admin/family/1634550868_avp.jpg" alt="/" />
                          </li>
                          <li>
                            <img src="img/admin/family/1648053719_IMG-20220323-WA0042.jpg" alt="/" />
                          </li>
                        </ul>
                    
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Javascript files */}
        {/* Main javascript file */}
      </div>
    </div>
  );
};

export default DonorsContent;
