import Table  from "react-bootstrap/Table";
import Button  from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { BsCheck, BsX} from "react-icons/bs";

// Official plan styles
import styled from "styled-components";
const OfficialPlanStyles = styled(Container)`
  margin-top: 2vh;
  margin-bottom: 4vh;
  padding: 68px !important;

  .firstHeader {
    padding-bottom: 14vh !important;
    & > h1 {
      font-weight: bold;
    }
  }
  .detail-flex {
    display: flex;
    flex-direction: column;
    & > .btn {
      align-self: center;
      width: 16vw;
      text-align: center;
      font-weight: 600;
      margin-bottom: 2vh;
    }
  }
  .detail-flex-text {
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 3vw;
    & > h5 {
      font-weight: 700;
    }
  }
  td {
    text-align: center;
    font-size: 18px;
  }
  tr td:first-child {
    text-align: left;
  }
  td.topic {
    text-align: left;
    padding-left: 2vw;
  }

  td > h4 {
    font-weight: 600;
  }
`;

const OfficialPlan = () => {
  return (
    <OfficialPlanStyles>
      <Table striped bordered>
        {/* Table header */}
        <thead>
          <tr>
            <th className="firstHeader">
              <h1>
                เรียน <br/>
                Official
              </h1>
            </th>
            <th>
              <div className="detail-flex">
                <div className="detail-flex-text">
                  <h5 style={{color: "#404040"}}>ธรรมดา</h5>
                  <h2>0 THB</h2>
                  <p>
                    คลิปวิดีโอสื่อการสอน <br/>
                    การเขียนโปรแกรมขั้นพื้นฐาน
                  </p>
                </div>
                <Button variant="outline-primary">สมัครเลยฟรี</Button>
              </div>
            </th>
            <th className="headContent">
              <div className="detail-flex">
                <div className="detail-flex-text">
                  <h5 style={{color: "#003DBE"}}>โปร</h5>
                  <h2>629.99 THB</h2>
                  <p>
                    เรียนรู้และฝึกทักษะการเขียน <br/>
                    โปรแกรมกับโจทย์ที่สมจริง
                  </p>
                </div>
                <Button variant="outline-primary">สมัครโปรเลยวันนี้</Button>
              </div>
            </th>
          </tr>
        </thead>

        {/* Learn table body */}
        <tbody>
          <tr>
            <td>
              <h4>การเรียน</h4>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="topic">
              คอร์สพื้นฐาน
            </td>
            <td><BsCheck /></td>
            <td><BsCheck /></td>
          </tr>
          <tr>
            <td class="topic">
              คอร์สระดับโปร
            </td>
            <td><BsX /></td>
            <td><BsCheck /></td>
          </tr>
        </tbody>

        {/* Practice table body */}
        <tbody>
          <tr>
            <td>
              <h4>การฝึกซ้อม</h4>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="topic">
              ควิสท้ายบท
            </td>
            <td><BsCheck /></td>
            <td><BsCheck /></td>
          </tr>
          <tr>
            <td class="topic">
              ปรึกษา Community
            </td>
            <td><BsCheck /></td>
            <td><BsCheck /></td>
          </tr>
          <tr>
            <td class="topic">
              ปรึกษาผู้สอน Official
            </td>
            <td><BsX /></td>
            <td><BsCheck /></td>
          </tr>
          <tr>
            <td class="topic">
              โปรเจคจริง
            </td>
            <td><BsX /></td>
            <td><BsCheck /></td>
          </tr>
        </tbody>
      </Table>
    </OfficialPlanStyles>
  );
}

export default OfficialPlan
