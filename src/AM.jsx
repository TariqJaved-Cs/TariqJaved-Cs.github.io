import React from "react";

const AM = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-lg-12 mt-sm-5">
          <table class="table table-bordered table-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">AM Class content</th>
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
                    href="https://classroom.google.com/u/0/c/MTY4MzIxNzcyMTYz"
                    target="_blank"
                  >
                    Google CLassRoom Lab
                  </a>
                  <br />
                  <a
                    href="https://classroom.google.com/u/1/c/MTY4MjY3NDA0Mjg3"
                    target="_blank"
                  >
                    Google CLassRoom Theory
                  </a>
                </td>
                <td>For Assignments and recorded lectures</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Google Meet</td>
                <td>
                  <a
                    href="https://meet.google.com/ign-sccp-rht"
                    target="_blank"
                  >
                    googlemeet
                  </a>
                </td>
                <td>For online classes</td>
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
                <td colspan="1">Youtube </td>
                <td>
                  <a href="https://www.youtube.com" target="_blank">
                    Youtube
                  </a>
                </td>
                <td>Optional</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Whatsapp Group</td>
                <td>
                  <a
                    href="https://chat.whatsapp.com/F4SGhumYdqKEDudPA8Jtyz"
                    target="_blank"
                  >
                    Whatsapp group 
                  </a>
                </td>
                <td>For Announcements and queries</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td colspan="1">Books </td>
                <td>
                  <a
                    href="https://drive.google.com/file/d/1EdP3AYO3-gR6QVNVCcXkPXPoPspXAOOS/view?usp=sharing"
                    target="_blank"
                  >
                    Book
                  </a>
                </td>
                <td>For excerses and practicing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AM;
