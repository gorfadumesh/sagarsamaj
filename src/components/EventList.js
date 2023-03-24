import React from "react";

const EventList = () => {
  return (
    <div>
      <div>
        <div className="flash-message"></div>
        <section className="banner inner_banner">
          <div className="container">
            <div className="innerbanner_text">
              <h2>Events</h2>
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
                    action="events.html"
                    method="POST"
                    name="family_list"
                    id="family_list"
                    role="search"
                  >
                    <div class="search_bar">
                      <div class="row">
                        <div class="col-md-12 no-padding">
                          <div class="col-md-3 col-sm-6">
                            <label class="fr_label">
                              <div class="cusch_bx">
                                <input
                                  name="upcoming_event"
                                  id="upcoming_event"
                                  type="checkbox"
                                  class="fr_check input"
                                  style={{
                                    width: `16px`,
                                    float: `left`,
                                    marginRight: `10px`,
                                  }}
                                  value="0"
                                />
                                <span class="custom_check"></span>
                              </div>
                              UpComing Event
                            </label>
                          </div>
                          <div class="col-md-3 col-sm-6">
                            <label class="fr_label">
                              <div class="cusch_bx">
                                <input
                                  name="past_event"
                                  id="past_event"
                                  type="checkbox"
                                  class="fr_check input"
                                  style={{
                                    width: `16px`,
                                    float: `left`,
                                    marginRight: `10px`,
                                  }}
                                  value="0"
                                />
                                <span class="custom_check"></span>
                              </div>
                              Past Event
                            </label>
                          </div>
                          <div class="col-md-3 col-sm-3">
                            <a
                              href="/"
                              onclick="func_SearchGridData()"
                              id="search_event"
                              class="search_btn"
                            >
                              Go
                            </a>
                            <a
                              href="/"
                              onclick="func_ResetGridData()"
                              class="search_btn"
                            >
                              Reset
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="member_list">
                      <div className="member_box clearfix table-responsive">
                        <table className="table table-hover">
                          <colgroup>
                            <col width="10%" />
                            <col width="90%" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Title</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              id="event_detail"
                              className={11}
                              style={{ cursor: "pointer" }}
                            >
                              <th scope="row">1</th>
                              <td>શિલાન્યાસ મહોત્સવ - 04-Apr-21</td>
                            </tr>
                            <tr
                              id="event_detail"
                              className={10}
                              style={{ cursor: "pointer" }}
                            >
                              <th scope="row">2</th>
                              <td>
                                મિટિંગ - કેળવણી કાર્યક્રમ, લગ્ન વિષયક અને
                                ડિરેક્ટરી ની ચર્ચા - 23-Jan-21
                              </td>
                            </tr>
                            <tr
                              id="event_detail"
                              className={8}
                              style={{ cursor: "pointer" }}
                            >
                              <th scope="row">3</th>
                              <td>ઉછામણી મહોત્સવ - 23-Dec-18</td>
                            </tr>
                            <tr
                              id="event_detail"
                              className={9}
                              style={{ cursor: "pointer" }}
                            >
                              <th scope="row">4</th>
                              <td>ઉછામણી મહોત્સવ - 23-Dec-18 to 31-Dec-18</td>
                            </tr>
                            <tr
                              id="event_detail"
                              className={7}
                              style={{ cursor: "pointer" }}
                            >
                              <th scope="row">5</th>
                              <td>જીવન સાથી પસંદગી મેળો - ૨૦૧૮ - 27-May-18</td>
                            </tr>
                            <tr
                              id="event_detail"
                              className={1}
                              style={{ cursor: "pointer" }}
                            >
                              <th scope="row">6</th>
                              <td>સાંસ્કૃતિક કાર્યક્રમ - 2018 - 24-Dec-17</td>
                            </tr>
                            <tr
                              id="event_detail"
                              className={6}
                              style={{ cursor: "pointer" }}
                            >
                              <th scope="row">7</th>
                              <td>Garba Function - 2017 - 07-Oct-17</td>
                            </tr>
                            <tr
                              id="event_detail"
                              className={5}
                              style={{ cursor: "pointer" }}
                            >
                              <th scope="row">8</th>
                              <td>એક દિવસીય મહિલા પ્રવાસ - 03-Sep-17</td>
                            </tr>
                            <tr
                              id="event_detail"
                              className={4}
                              style={{ cursor: "pointer" }}
                            >
                              <th scope="row">9</th>
                              <td>
                                Trustee Meeting and Tree Plant - 16-Jul-17
                              </td>
                            </tr>
                            <tr
                              id="event_detail"
                              className={3}
                              style={{ cursor: "pointer" }}
                            >
                              <th scope="row">10</th>
                              <td>સાંસ્કૃતિક કાર્યક્રમ - 2017 - 08-Jan-17</td>
                            </tr>
                          </tbody>
                        </table>
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
                    <div className="matrimonial_div">
                      <div className="title">Last Update Matrimonial</div>
                      <div className="matrimonial_box">
                        <ul className="clearfix">
                          <li>
                            <img
                              src="img/admin/family/1676565538_IMG_20230216_220317.jpg"
                              alt="#"
                            />
                            {/*img src="https://www.84kadvapatidar.com/img/front/mt_img_1.jpg" alt=""*/}
                          </li>
                          <li>
                            <img
                              src="img/admin/family/1634550868_avp.jpg"
                              alt="#"
                            />
                            {/*img src="https://www.84kadvapatidar.com/img/front/mt_img_1.jpg" alt=""*/}
                          </li>
                          <li>
                            <img
                              src="img/admin/family/1648053719_IMG-20220323-WA0042.jpg"
                              alt="#"
                            />
                            {/*img src="https://www.84kadvapatidar.com/img/front/mt_img_1.jpg" alt=""*/}
                          </li>
                        </ul>
                        {/* div class="btn">
                <a href="#">More</a>
            </div*/}
                      </div>
                    </div>
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

export default EventList;
