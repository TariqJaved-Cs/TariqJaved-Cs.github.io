import React from "react";

const DE = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-lg-12 mt-sm-5">
          <table class="table table-bordered table-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">DE Class content</th>
                <th scope="col">Class links</th>
                <th scope="col">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Google CLassRoom</td>
                <td>
                  <a href="#">No Google CLassRoom yet</a>
                </td>
                <td>For Assignments and recorded lectures</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Google Meet</td>
                <td>
                  <a href="https://meet.google.com/" target="_blank">
                    googlemeet
                  </a>
                </td>
                <td>For online classes</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="1">Ms Teams</td>
                <td>
                  <a href="#">NO Ms_Teams yet</a>
                </td>
                <td>For the sake of quizes and Papers</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Whatsapp Group</td>
                <td>
                  <a
                    href="https://chat.whatsapp.com/J8qbbCp0mAD0W1U4KBZtnD"
                    target="_blank"
                  >
                    WhatsappWeb
                  </a>
                </td>
                <td>For Announcements and queries</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Books</td>
                <td>
                  <a
                    href="https://drive.google.com/file/d/1JrnTn_aCcv4vVQv8dd_5FE7v0KSxvC8D/view?usp=sharing"
                    target="_blank"
                  >
                    Book link
                  </a>
                </td>
                <td>For exercises and practicing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default DE;
