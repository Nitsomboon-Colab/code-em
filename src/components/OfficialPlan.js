import Table  from "react-bootstrap/Table";
import Button  from "react-bootstrap/Button";

import { BsCheck, BsX} from "react-icons/bs";
import "./OfficialPlan.css";

const OfficialPlan = () => {
  return (
    <Table striped bordered>
      {/* Table header */}
      <thead>
        <tr>
          <th className="startHead">
            <h1>
              เรียน <br/>
              Official
            </h1>
          </th>
          <th className="headContent">
            <div className="detailFlexBox">
              <div className="detailContent">
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
            <div className="detailFlexBox">
              <div className="detailContent">
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
          <td id="topic">
            คอร์สพื้นฐาน
          </td>
          <td><BsCheck /></td>
          <td><BsCheck /></td>
        </tr>
        <tr>
          <td id="topic">
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
          <td id="topic">
            ควิสท้ายบท
          </td>
          <td><BsCheck /></td>
          <td><BsCheck /></td>
        </tr>
        <tr>
          <td id="topic">
            ปรึกษา Community
          </td>
          <td><BsCheck /></td>
          <td><BsCheck /></td>
        </tr>
        <tr>
          <td id="topic">
            ปรึกษาผู้สอน Official
          </td>
          <td><BsX /></td>
          <td><BsCheck /></td>
        </tr>
        <tr>
          <td id="topic">
            โปรเจคจริง
          </td>
          <td><BsX /></td>
          <td><BsCheck /></td>
        </tr>
      </tbody>
    </Table>
  )
}

export default OfficialPlan
