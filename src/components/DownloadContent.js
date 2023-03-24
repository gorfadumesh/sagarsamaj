import React from "react";

const DownloadContent = () => {
  return (
    <div>
      <div>
        <div className="flash-message"></div>
        <section className="banner inner_banner">
          <div className="container">
            <div className="innerbanner_text">
              <h2>Download Document</h2>
            </div>
          </div>
        </section>
        <section className="banner_overlay_section">
          <div className="container">
            <section className="coumn_section">
              <div className="row">
                <div className="col-md-8">
                  <form
                    action="download.html"
                    method="POST"
                    name="download_list"
                    id="download_list"
                    role="search"
                  >
                    <div className="member_list">
                      <div className="member_box clearfix table-responsive">
                        <center>No Document Found</center>
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
                      defaultValue={10}
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
                            <img src="img/admin/family/1676565538_IMG_20230216_220317.jpg" alt="#" />
                            {/*img src="https://www.84kadvapatidar.com/img/front/mt_img_1.jpg" alt=""*/}
                          </li>
                          <li>
                            <img src="img/admin/family/1634550868_avp.jpg" alt="#" />
                            {/*img src="https://www.84kadvapatidar.com/img/front/mt_img_1.jpg" alt=""*/}
                          </li>
                          <li>
                            <img src="img/admin/family/1648053719_IMG-20220323-WA0042.jpg" alt="#" />
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

export default DownloadContent;
