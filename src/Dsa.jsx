import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
const Dsa = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-lg-12 mt-sm-5">
          <table class="table table-bordered table-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">DSA Class content</th>
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
                    href="https://classroom.google.com/u/1/c/MTY3OTc3MTA3MTgw"
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
                    href="https://Meet.google.com/wtr-srse-wha"
                    target="_blank"
                  >
                    Theory Lecture
                  </a>
                  <br />
                  <a
                    href=" https://meet.google.com/mba-pipn-ewp"
                    target="_blank"
                  >
                    Lab Lecture
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
                <td colspan="1">
                  Youtube <YouTubeIcon />
                </td>
                <td>
                  <a href="https://youtu.be/iinOmcRxD3w" target="_blank">
                    Youtube
                  </a>
                </td>
                <td>For pre Recorded Lecture</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Whatsapp Group</td>
                <td>
                  <a
                    href="https://chat.whatsapp.com/L6ZMWeqIHj1HLm7XJnD8Dm"
                    target="_blank"
                  >
                    Whatsapp group Theory
                  </a>
                  <br />
                  <a
                    href="https://chat.whatsapp.com/ES4QRBuZ8SZ5WqdGMcFasF"
                    target="_blank"
                  >
                    Whatsapp group Lab
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
export default Dsa;
