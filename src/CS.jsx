import React from "react";

const CS = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-lg-12 mt-5">
          <table class="table table-bordered table-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">CS Class content</th>
                <th scope="col">Class links</th>
                <th scope="col">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Google CLassRoom</td>
                <td>
                  <a href="https://classroom.google.com/u/1/h" target="_blank">
                    Google CLassRoom
                  </a>
                </td>
                <td>For Assignments and recorded lectures</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="1">Ms Teams</td>
                <td>
                  <a href="https://www.office.com/?auth=2" target="_blank">
                    Ms_Teams
                  </a>
                </td>
                <td>For the sake of quizes and Papers and online classess</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Recorded Lectures</td>
                <td>
                  <a
                    href="https://drive.google.com/file/d/1H4syZoAj-r7x9KR5Ymyzpwv0MQdwVfMt/view?usp=drivesdk"
                    target="_blank"
                  >
                    drive_lectures 1
                  </a>
                  <br />

                  <a
                    href="https://drive.google.com/file/d/1dk5F0ZRKmFqLDIUEP3fYQM_gT5y43cto/view?usp=drivesdk"
                    target="_blank"
                  >
                    drive_lectures 2
                  </a>
                </td>
                <td>Lecture links of google drive</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Whatsapp Group</td>
                <td>
                  <a
                    href="https://chat.whatsapp.com/G2qiv8eMMqT9htjs2fuPfw"
                    target="_blank"
                  >
                    Whatsapp group
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
export default CS;
