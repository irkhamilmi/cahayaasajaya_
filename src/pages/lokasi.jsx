import { Col, Container, Row} from "react-bootstrap";
import alokasi from "../constant/lokasi.json";
import Cardlok from "../components/lokasi/CardLokasi";
import TitleSection from "../components/title/TitleSection";

function Lokasi() {
  return (
    <>
    
    <section className="block blog-block">
      <Container>     
          <Row>  
          <Col>        
            {alokasi?.data?.map((v, i) => {
              return <Cardlok image={v.image} key={i + 1} />;
            })}
            </Col>   
          </Row>
      </Container>
    </section>
    </>
  )
}

export default Lokasi