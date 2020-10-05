import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
const DB = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-lg-12 mt-sm-5">
          <table class="table table-bordered table-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">DB Class content</th>
                <th scope="col">Class links</th>
                <th scope="col">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  Youtube channel link <YouTubeIcon />
                </td>
                <td>
                  <a
                    href="https://www.youtube.com/user/joharlums/featured"
                    target="_blank"
                  >
                    Sir Abid sohail bhutta
                  </a>
                </td>
                <td>For recorded lectures</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td> DropBox </td>
                <td>
                  <a
                    href="https://www.dropbox.com/team/discover/suggest?register_cont=https%3A%2F%2Fwww.dropbox.com%2Fscl%2Ffo%2Fyzd5f0vnm8v5q85quxpwn%2FAAB1vUMb8bZgCMmt3HZqeATja%3Fdl%3D0%26new_user%3D1%26oref%3De%26r%3DABNlzh5OQLFEtcWgutEXs_DFB40Y4nqA-QCqwnKOkr0mq7uqcpTrUkmvN3yjLh6rzmpd1AP_F3CA7Mhf8YqZZgo2V5snLbGW0-IcZ0PcYvCnzED5FcCKgX60DVJ-NsqIgzpQuuBUo7SPxSy-S-rtLZreDwrYK-LKDACsYuyCSlwOoQkkU0H8gE9zPqLBt7-5V-LjJ12TB4gODJtEMc29CWq7%26sm%3D1"
                    target="_blank"
                  >
                    DropBox
                  </a>
                </td>
                <td>For recorded lectures</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>zoom</td>
                <td>
                  <a
                    href="https://zoom.us/j/96247315307?pwd=OTlkbzBmNkxlY0FhaWN4eE1tNlBtUT09"
                    target="_blank"
                  >
                    zoom class for theory
                  </a>
                  <br />
                  <a
                    href="https://zoom.us/j/96247315307?pwd=OTlkbzBmNkxlY0FhaWN4eE1tNlBtUT09"
                    target="_blank"
                  >
                    zoom lab
                  </a>
                </td>
                <td>For online classes</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Whatsapp</td>
                <td>
                  <a
                    href="https://chat.whatsapp.com/G2qiv8eMMqT9htjs2fuPfw"
                    target="_blank"
                  >
                    Whatsapp group theory
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
export default DB;
