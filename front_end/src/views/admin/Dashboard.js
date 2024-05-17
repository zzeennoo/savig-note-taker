import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/admincharts.js";

import Header from "components/Headers/adminStaticsHeader.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Page visits</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Users</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      to="/admin/management"
                      tag={Link}
                      color="primary"
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Registration date</th>
                    <th scope="col">Most recent visit</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">nguyentriet2908</th>
                    <td>10/11/2023</td>
                    <td>15/01/2024</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 11,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">LongSolomon</th>
                    <td>25/10/2023</td>
                    <td>14/01/2024</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                      4,13%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">L0rd-0f-w33bs</th>
                    <td>15/06/2023</td>
                    <td>14/01/2024</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                      2,49%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">phamhuynh03</th>
                    <td>01/01/2023</td>
                    <td>15/01/2024</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 8,89%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">trannhatminh</th>
                    <td>01/01/2023</td>
                    <td>15/01/2024</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" />{" "}
                      12.66%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Admins</h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Start date</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">zzeennoo</th>
                    <td>01/10/2022</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">90%</span>
                        <div>
                          <Progress
                            max="100"
                            value="90"
                            barClassName="bg-gradient-success"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">khoa2807</th>
                    <td>01/10/2022</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">55%</span>
                        <div>
                          <Progress
                            max="100"
                            value="55"
                            barClassName="bg-gradient-info"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">nguyentran186</th>
                    <td>01/10/2022</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">75%</span>
                        <div>
                          <Progress max="100" value="75" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">minhhoangkhmtclc254</th>
                    <td>01/06/2022</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">50%</span>
                        <div>
                          <Progress
                            max="100"
                            value="50"
                            barClassName="bg-gradient-info"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Khoa280703</th>
                    <td>01/06/2022</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">25%</span>
                        <div>
                          <Progress
                            max="100"
                            value="25"
                            barClassName="bg-gradient-warning"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
