import React from "react";

const SE = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-lg-12 mt-sm-5">
          <table class="table table-bordered table-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"> SE Class content</th>
                <th scope="col">Class links</th>
                <th scope="col">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Google CLassRoom</td>
                <td>
                  <a
                    href="https://classroom.google.com/u/1/c/MTY0MTIxNjIzNzg4"
                    target="_blank"
                  >
                    Google CLassRoom
                  </a>
                </td>
                <td>For Assignments and recorded lectures</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Google Meet</td>
                <td>
                  <a
                    href="https://meet.google.com/wyt-mbjc-emx"
                    target="_blank"
                  >
                    googlemeet
                  </a>
                </td>
                <td>
                  Join always with official mail Id to avoid any inconvinence
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="1">Ms Teams</td>
                <td>
                  <a href="https://www.office.com/?auth=2" target="_blank">
                    Ms_Teams
                  </a>
                </td>
                <td>For the sake of quizes and Papers</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td colspan="1">SE website</td>
                <td>
                  <a
                    href="https://sites.google.com/a/cuilahore.edu.pk/se/home/lectures"
                    target="_blank"
                  >
                    SE website
                  </a>
                </td>
                <td>Assignments and recorded lecture is available here</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Whatsapp Group</td>
                <td>
                  <a
                    href="https://chat.whatsapp.com/CPnxiPd3pCkE2JbfSeTLyZ"
                    target="_blank"
                  >
                    WhatsappWeb
                  </a>
                </td>
                <td>For Announcements and queries</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default SE;
