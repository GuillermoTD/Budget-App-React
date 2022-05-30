import { Form, Modal, Button } from "react-bootstrap";
import {useRef} from "react"
const AddBudgetModal = ({ show, handleClose }) => {
  const { Header, Title, Body } = Modal;
  const { Group, Label, Control } = Form;
  const nameRef = useRef();
  const maxRef = useRef();

  const handleSubmit = (e)=>{
    // e.preventDefault()
    // const nameAndMax = {
    //     name:nameRef.current.value,
    //     max:maxRef.current.value
    // }
    // console.log(nameAndMax)
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Header closeButton>
            <Title>New Budget</Title>
          </Header>
        </Form>
        <Body>
          <Group className="mb-3" controledId="Max">
            <Label>Name</Label>
            <Control ref={nameRef}type="text" required />
          </Group>
          <Group className="mb-3" controledId="Maximum Spending">
            <Label>Maximum Spending</Label>
            <Control ref={maxRef}type="number" required min={0} step={0.01} />
          </Group>
          <div className="d-flex justify-content-end">
              <Button variant="primary">Add</Button>
          </div>
        </Body>
      </Modal>
    </>
  );
};

export default AddBudgetModal;
